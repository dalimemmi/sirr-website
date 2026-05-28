import { chmodSync, copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const sourceHook = join(process.cwd(), ".githooks", "pre-commit");
const gitHooksDir = join(process.cwd(), ".git", "hooks");
const targetHook = join(gitHooksDir, "pre-commit");

if (!existsSync(sourceHook)) {
  console.warn("[hooks] Skipped: .githooks/pre-commit not found.");
  process.exit(0);
}

if (!existsSync(gitHooksDir)) {
  console.warn("[hooks] Skipped: .git/hooks directory not found.");
  process.exit(0);
}

mkdirSync(gitHooksDir, { recursive: true });
copyFileSync(sourceHook, targetHook);
chmodSync(targetHook, 0o755);

console.log("[hooks] Installed .git/hooks/pre-commit");
