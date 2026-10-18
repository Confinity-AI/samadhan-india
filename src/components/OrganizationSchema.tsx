import { awards, baseURL, centres, org, withBase } from "@/content/site";

export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: org.publicName,
    alternateName: ["SAMADHAN", "Samadhan New Delhi"],
    legalName: org.legalName,
    url: baseURL + withBase("/"),
    logo: baseURL + withBase("/icon.png"),
    description: org.description,
    foundingDate: org.founded,
    email: org.email,
    award: awards.map((a) => `${a.title}, ${a.by} (${a.year})`),
    sameAs: Object.values(org.social),
    areaServed: "New Delhi, India",
    location: centres.map((c) => ({
      "@type": "Place",
      name: `SAMADHAN ${c.name}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: c.postal.street,
        addressLocality: c.postal.locality,
        postalCode: c.postal.code,
        addressCountry: "IN",
      },
      telephone: c.phones[0].label,
    })),
  };
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
