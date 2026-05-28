import { execSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const changelogPath = join(root, "CHANGELOG.md");

function run(command) {
  return execSync(command, { cwd: root, stdio: ["ignore", "pipe", "pipe"] }).toString().trim();
}

function getStagedFiles() {
  const output = run("git diff --cached --name-only --diff-filter=ACMR");
  if (!output) return [];
  return output
    .split("\n")
    .map((x) => x.trim())
    .filter(Boolean)
    .filter((file) => file !== "CHANGELOG.md");
}

function getShortHash() {
  return run("git rev-parse --short HEAD");
}

function ensureUnreleasedSection(content) {
  if (content.includes("## Unreleased")) return content;
  const lines = content.split("\n");
  const insertAt = Math.max(4, 0);
  const toInsert = ["", "## Unreleased", ""];
  lines.splice(insertAt, 0, ...toInsert);
  return lines.join("\n");
}

function formatDate(date = new Date()) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const mi = String(date.getMinutes()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${mi}`;
}

function createEntry(files) {
  const timestamp = formatDate();
  const base = getShortHash();
  const header = `### ${timestamp} (pre-commit from ${base})`;
  const body = files.map((file) => `- Updated \`${file}\``);
  return [header, ...body, ""].join("\n");
}

function appendUnderUnreleased(content, entry) {
  const marker = "## Unreleased";
  const idx = content.indexOf(marker);
  if (idx === -1) return `${content.trimEnd()}\n\n${marker}\n\n${entry}\n`;

  const insertPos = idx + marker.length;
  const before = content.slice(0, insertPos);
  const after = content.slice(insertPos);
  return `${before}\n\n${entry}${after}`;
}

try {
  const files = getStagedFiles();
  if (files.length === 0) process.exit(0);

  const current = readFileSync(changelogPath, "utf8");
  const withUnreleased = ensureUnreleasedSection(current);
  const entry = createEntry(files);
  const next = appendUnderUnreleased(withUnreleased, entry);

  writeFileSync(changelogPath, next, "utf8");
  run("git add CHANGELOG.md");

  console.log("[changelog] Updated CHANGELOG.md");
} catch (error) {
  console.error("[changelog] Failed to update changelog");
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}
