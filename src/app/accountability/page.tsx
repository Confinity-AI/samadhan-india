import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { EasyRead, PaintHero, Section, SectionTitle, TrustBar } from "@/components/blocks";
import { org } from "@/content/site";
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
  { title: "SAMADHAN brochure", detail: "Who we are and what we do", href: "/reports/samadhan-brochure.pdf", size: "496 KB" },
];

const memberships = [
  "The National Trust, Local Level Committee for guardianship",
  "Inclusion International, affiliate member since 1988",
  "Asian Federation on Intellectual Disabilities (AFID), full member",
  "ARC Tokyo",
  "IASSIDD",
];

export default function Accountability() {
  return (
    <>
      <PaintHero art="art-flowers" eyebrow="Accountability" title="Our registrations and annual reports" />
      <Section paddingY="64">
        <EasyRead>Here you can check our government registrations and read our yearly reports.</EasyRead>
        <SectionTitle eyebrow="Registrations" title="Our registrations" />
        <TrustBar />
        <Text variant="body-default-s" onBackground="neutral-weak">
          Legal name: {org.legalName}. The registered name dates from 1981; we use person-first language everywhere else.
        </Text>
      </Section>
      <Section tone="surface" label="Annual reports">
        <SectionTitle eyebrow="Annual reports" title="Our annual reports" intro="Every report from 2014-15 to 2024-25. Download any year as a PDF." />
        <Grid columns="4" m={{ columns: "3" }} s={{ columns: "2" }} gap="12">
          {reports.map((r) => (
            <Row key={r.year} padding="16" radius="l" border background="page" horizontal="between" vertical="center" gap="8">
              <Text variant="heading-strong-m" className="tabular">{r.year}</Text>
              <Button
                href={`/reports/samadhan-annual-report-${r.year}.pdf`}
                download
                size="s"
                variant="secondary"
                prefixIcon="download"
                aria-label={`Annual report ${r.year}, PDF, ${r.size}`}
              >
                PDF, {r.size}
              </Button>
            </Row>
          ))}
        </Grid>
        <Column gap="16" paddingTop="32">
          <Heading as="h3" variant="heading-strong-l">Programme reports and brochure</Heading>
          {documents.map((d) => (
            <Row key={d.href} paddingY="12" borderBottom horizontal="between" vertical="center" gap="16" s={{ direction: "column", horizontal: "start" }}>
              <Column gap="4">
                <Text variant="body-strong-l">{d.title}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">{d.detail}</Text>
              </Column>
              <Button href={d.href} download size="s" variant="secondary" prefixIcon="download" aria-label={`${d.title}, PDF, ${d.size}`}>
                PDF, {d.size}
              </Button>
            </Row>
          ))}
        </Column>
      </Section>
      <Section label="Memberships">
        <Column gap="16" maxWidth="m">
          <Heading as="h2" variant="display-strong-xs">Memberships</Heading>
          {memberships.map((m) => (
            <Row key={m} paddingY="12" borderBottom><Text variant="body-default-l">{m}</Text></Row>
          ))}
        </Column>
      </Section>
    </>
  );
}
