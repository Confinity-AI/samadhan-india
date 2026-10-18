import type { Metadata } from "next";
import { baseURL, org, withBase } from "@/content/site";

const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "1";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  languages?: Record<string, string>;
};

export function pageMeta({ title, description, path, languages }: PageMetaInput): Metadata {
  const url = withBase(path);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: languages
        ? Object.fromEntries(Object.entries(languages).map(([k, v]) => [k, withBase(v)]))
        : undefined,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: org.publicName,
      locale: "en_IN",
      type: "website",
      images: [{ url: withBase("/og.png"), width: 1200, height: 630, alt: org.publicName }],
    },
    twitter: { card: "summary_large_image", title, description, images: [withBase("/og.png")] },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: { default: `${org.publicName}: therapy and school for children with intellectual disabilities`, template: `%s | ${org.publicName}` },
  description: org.description,
  icons: { icon: withBase("/icon.png"), apple: withBase("/icon.png") },
  robots: indexable ? { index: true, follow: true } : { index: false, follow: false },
};
