const DEFAULT_APP_URL = "https://app.sirr.no";
const DEFAULT_APP_AUTH_URL = `${DEFAULT_APP_URL}/auth`;

const appBase = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") ?? DEFAULT_APP_URL;
const appAuth = process.env.NEXT_PUBLIC_APP_AUTH_URL?.replace(/\/$/, "") ?? DEFAULT_APP_AUTH_URL;

export function appUrl(path = "/"): string {
  if (!appBase) return path;
  return `${appBase}${path.startsWith("/") ? path : `/${path}`}`;
}

export function authUrl(): string {
  return appAuth;
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
