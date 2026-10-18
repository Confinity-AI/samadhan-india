import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import classNames from "classnames";
import { Column, Flex, ThemeInit } from "@once-ui-system/core";
import { Providers } from "@/components/Providers";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { fonts, style, dataStyle } from "@/resources/once-ui.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SAMADHAN India | Early Intervention, Special Education & Intellectual Disability Care in New Delhi (Est. 1981)",
  description:
    "Founded in 1981 in Dakshinpuri and Dwarka, New Delhi, SAMADHAN provides early intervention, ABA therapy, inclusive education, maternal mental health counseling, and vocational training for children and adults with intellectual and developmental disabilities.",
  keywords: [
    "SAMADHAN India",
    "early intervention centre Delhi",
    "intellectual disability NGO New Delhi",
    "ABA therapy Dwarka",
    "special education Dakshinpuri",
    "Disha early intervention National Trust Delhi",
    "autism therapy low income families Delhi",
    "CSR disability NGO India FCRA",
  ],
  openGraph: {
    title:
      "SAMADHAN India — 44 Years of Clinical Care for Children with Intellectual Disabilities",
    description:
      "Serving 120+ children daily and 50,000+ community families across Dakshinpuri, Dwarka, and Tigri in New Delhi. FCRA, 80G, and US 501(c)(3) Equivalency Certified.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      suppressHydrationWarning
      as="html"
      lang="en"
      fillWidth
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable
      )}
    >
      <head>
        <ThemeInit
          config={{
            theme: style.theme,
            brand: style.brand,
            accent: style.accent,
            neutral: style.neutral,
            solid: style.solid,
            "solid-style": style.solidStyle,
            border: style.border,
            surface: style.surface,
            transition: style.transition,
            scaling: style.scaling,
            "viz-style": dataStyle.variant,
          }}
        />
      </head>
      <Providers>
        <Column
          as="body"
          background="page"
          fillWidth
          margin="0"
          padding="0"
          style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
        >
          <SiteHeader />
          <Column as="main" fillWidth flex={1}>
            {children}
          </Column>
          <SiteFooter />
        </Column>
      </Providers>
    </Flex>
  );
}
