import { en } from "./en";
import { cs } from "./cs";
import type { Lang, SiteContent } from "./types";

export const content: Record<Lang, SiteContent> = { en, cs };
export type { Lang, SiteContent } from "./types";
export * from "./types";
