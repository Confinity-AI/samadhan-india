import { Column, Grid, Heading, Icon, Row, SmartLink, Text } from "@once-ui-system/core";
import type { ReactNode } from "react";
import { DonateBand, EasyRead, PaintHero, Section, SectionTitle, TrustBar } from "@/components/blocks";
import { org, withBase } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Accountability: registrations and annual reports",
  description: "SAMADHAN's society, FCRA, 80G and RPwD registrations, our memberships, and our annual reports from 2014-15 to 2024-25 as PDFs.",
  path: "/accountability",
});

const reports = [
  { year: "2024-25", size: "3 MB" },
  { year: "2023-24", size: "1 MB" },
  { year: "2022-23", size: "552 KB" },
  { year: "2021-22", size: "536 KB" },
  { year: "2020-21", size: "5 MB" },
  { year: "2019-20", size: "3 MB" },
  { year: "2018-19", size: "6 MB" },
  { year: "2017-18", size: "4 MB" },
  { year: "2016-17", size: "7 MB" },
  { year: "2015-16", size: "6 MB" },
  { year: "2014-15", size: "2 MB" },
];

const documents = [
  { title: "Using ICT for inclusive education in India", detail: "National workshop report, February 2015", href: "/reports/samadhan-ict-workshop-report.pdf", size: "3 MB" },
  { title: "AFID 2013 India conference", detail: "Conference report, 2013", href: "/reports/samadhan-afid-2013-report.pdf", size: "1 MB" },
  { title: "SAMADHAN brochure", detail: "One-page overview", href: "/reports/samadhan-brochure.pdf", size: "496 KB" },
];

const memberships = [
  "The National Trust, Local Level Committee for guardianship",
  "Inclusion International, affiliate member since 1988",
  "Asian Federation on Intellectual Disabilities (AFID), full member",
  "ARC Tokyo",
  "IASSIDD",
];

const rowLink = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 16,
  paddingBlock: 16,
  color: "inherit",
  textDecoration: "none",
  borderBottom: "1px solid var(--neutral-alpha-medium)",
  minHeight: 44,
} as const;

function FileLink({ href, label, size, children }: { href: string; label: string; size: string; children: ReactNode }) {
  return (
    <a href={withBase(href)} download style={rowLink} aria-label={`${label}, PDF, ${size}`}>
      {children}
      <Row gap="8" vertical="center" style={{ flexShrink: 0, whiteSpace: "nowrap" }}>
        <Text variant="label-default-m" onBackground="neutral-weak">
          PDF · {size}
        </Text>
        <Icon name="download" size="s" onBackground="brand-strong" />
      </Row>
    </a>
  );
}

export default function Accountability() {
  return (
    <>
      <PaintHero
        art="art-flowers"
        focus="10% 70%"
        zoom={2.2}
        crumbs={[{ label: "About", href: "/about" }, { label: "Accountability" }]}
        eyebrow="Accountability"
        title="Our registrations and annual reports"
      >
        <EasyRead>Here you can check our government registrations and read our yearly reports.</EasyRead>
      </PaintHero>
      <Section paddingY="64">
        <SectionTitle eyebrow="Registrations" title="Our registrations" />
        <TrustBar />
        <Text variant="body-default-s" onBackground="neutral-weak">
          Legal name: {org.legalName}. The registered name dates from 1981; we use person-first language everywhere else.
        </Text>
        <SmartLink href="/about/people" suffixIcon="arrowRight">
          Who governs SAMADHAN
        </SmartLink>
      </Section>
      <Section tone="surface" label="Annual reports">
        <SectionTitle eyebrow="Annual reports" title="Our annual reports" intro="Every report from 2014-15 to 2024-25. Download any year as a PDF." />
        <Grid as="ul" columns="2" s={{ columns: "1" }} gap="0" style={{ columnGap: 48, listStyle: "none", margin: 0, padding: 0 }}>
          {reports.map((r) => (
            <li key={r.year}>
              <FileLink href={`/reports/samadhan-annual-report-${r.year}.pdf`} label={`Annual report ${r.year}`} size={r.size}>
                <Text className="tabular" onBackground="brand-strong" style={{ fontFamily: "var(--font-heading)", fontSize: 28, lineHeight: 1.1, whiteSpace: "nowrap" }}>
                  {r.year}
                </Text>
              </FileLink>
            </li>
          ))}
        </Grid>
        <Column gap="8" paddingTop="32">
          <Heading as="h3" variant="heading-strong-l">Programme reports and brochure</Heading>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {documents.map((d) => (
              <li key={d.href}>
                <FileLink href={d.href} label={d.title} size={d.size}>
                  <Column gap="4" style={{ minWidth: 0 }}>
                    <Text variant="body-strong-l">{d.title}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">{d.detail}</Text>
                  </Column>
                </FileLink>
              </li>
            ))}
          </ul>
        </Column>
      </Section>
      <Section label="Memberships">
        <Column gap="16" maxWidth="m">
          <Heading as="h2" variant="display-strong-xs">Memberships</Heading>
          <ul className="ruled-list">
            {memberships.map((m) => (
              <li key={m}>
                <Text as="p" variant="body-default-l" style={{ margin: 0, paddingBlock: 12 }}>{m}</Text>
              </li>
            ))}
          </ul>
        </Column>
      </Section>
      <DonateBand art="art-trees" />
    </>
  );
}
