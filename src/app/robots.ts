import type { MetadataRoute } from "next";
import { baseURL, withBase } from "@/content/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "1";
  return {
    rules: indexable ? { userAgent: "*", allow: "/", disallow: "/deck" } : { userAgent: "*", disallow: "/" },
    sitemap: baseURL + withBase("/sitemap.xml"),
  };
}
