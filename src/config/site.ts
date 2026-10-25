export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Something is Wrong With My Dog Wiki",
  shortName: "Something is Wrong With My Dog",
  logoText: "S",
  tagline: "Jerry, Survival, Endings & Secrets",
  description: "Fan-made Something is Wrong With My Dog wiki with Jerry taming, survival tips, story clues, endings, secrets, and Roblox gameplay guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://somethingiswrongwithmydog.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://somethingiswrongwithmydog.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/133409496563091/Something-is-Wrong-With-My-Dog",
  heroVideoId: "4APP_18ZQac", // Full gameplay walkthrough for Something is Wrong With My Dog
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
