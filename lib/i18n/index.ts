import { en, type WebsiteCopy, type WebsiteLocale } from "./en";
import { no } from "./no";

const dictionaries: Record<WebsiteLocale, WebsiteCopy> = { en, no };

export function getCopy(locale: WebsiteLocale): WebsiteCopy {
  return dictionaries[locale] ?? en;
}

export { en, no, type WebsiteCopy, type WebsiteLocale };
