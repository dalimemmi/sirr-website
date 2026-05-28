const appBase = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ?? "";
const appAuth = process.env.NEXT_PUBLIC_APP_AUTH_URL?.replace(/\/$/, "") ?? "";

export function appUrl(path = "/"): string {
  if (!appBase) return path;
  return `${appBase}${path.startsWith("/") ? path : `/${path}`}`;
}

export function authUrl(): string {
  if (appAuth) return appAuth;
  return appUrl("/auth");
}

export function appSiteUrl(): string | undefined {
  if (appBase) return appBase;
  if (appAuth) {
    try {
      const parsed = new URL(appAuth);
      return `${parsed.protocol}//${parsed.host}`;
    } catch {
      return undefined;
    }
  }
  return undefined;
}
