import "@once-ui-system/core/css/styles.css";
import "@once-ui-system/core/css/tokens.css";
import "@/resources/custom.css";

import { Column, ThemeInit } from "@once-ui-system/core";
import { Analytics } from "@vercel/analytics/next";
import classNames from "classnames";
import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { Providers } from "@/components/Providers";
import { basePath } from "@/content/site";
import { rootMetadata } from "@/lib/meta";
import { fonts, style } from "@/resources/once-ui.config";

export const metadata: Metadata = rootMetadata;

export const viewport: Viewport = {
  themeColor: "#233A73",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
        fonts.hindi.variable,
      )}
    >
      <head>
        <ThemeInit config={style} />
      </head>
      <Providers>
        <Column as="body" background="page" fillWidth margin="0" padding="0" style={{ minHeight: "100vh" }}>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <OrganizationSchema />
          <Header />
          <Column as="main" id="main" fillWidth horizontal="center" flex={1}>
            {children}
          </Column>
          <Footer />
          {!basePath && <Analytics />}
        </Column>
      </Providers>
    </html>
  );
}
