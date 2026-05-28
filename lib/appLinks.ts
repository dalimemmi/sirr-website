const base = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ?? "";

export function appUrl(path = "/auth"): string {
  if (!base) return path;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function appSiteUrl(): string | undefined {
  return base || undefined;
}
