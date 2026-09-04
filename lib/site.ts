/** Canonical site origin for SEO (sitemap, OG, robots). */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://abubakar-s-portfolio.vercel.app";
}

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";
