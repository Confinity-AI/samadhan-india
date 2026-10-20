import type { MetadataRoute } from "next";
import { programmes } from "@/content/programmes";
import { baseURL, withBase } from "@/content/site";
import { stories } from "@/content/stories";

export const dynamic = "force-static";

const paths = [
  "/",
  "/families",
  "/hi/families",
  "/programmes",
  ...programmes.map((p) => `/programmes/${p.slug}`),
  "/stories",
  ...stories.map((s) => `/stories/${s.slug}`),
  "/moments",
  "/about",
  "/about/history",
  "/about/founder",
  "/about/people",
  "/accountability",
  "/get-involved",
  "/get-involved/volunteer",
  "/get-involved/internships",
  "/get-involved/partner",
  "/donate",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return paths.map((p) => ({
    url: baseURL + withBase(p),
    lastModified: now,
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : p === "/families" || p === "/donate" ? 0.9 : 0.6,
    alternates:
      p === "/families" || p === "/hi/families"
        ? { languages: { "en-IN": baseURL + withBase("/families"), hi: baseURL + withBase("/hi/families") } }
        : undefined,
  }));
}
