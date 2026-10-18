import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { EasyRead, PaintHero, Section, SectionTitle, TrustBar } from "@/components/blocks";
import { org } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Accountability: registrations and annual reports",
  description: "SAMADHAN's society registration, FCRA, 80G and RPwD registrations, memberships and annual reports from 2014-15 to 2024-25.",
  path: "/accountability",
});

const reports = [
  { year: "2024-25", href: null },
  { year: "2023-24", href: null },
  { year: "2022-23", href: null },
  { year: "2021-22", href: null },
  { year: "2020-21", href: "https://thenationaltrust.in/upload/ntreg/DSAM16512618745attach_annual_report12022.pdf" },
  { year: "2019-20", href: null },
  { year: "2018-19", href: null },
  { year: "2017-18", href: null },
  { year: "2016-17", href: null },
  { year: "2015-16", href: null },
  { year: "2014-15", href: null },
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
      <PaintHero art="art-flowers" eyebrow="Accountability" title="Registered, reported, open to questions" />
      <Section paddingY="64">
        <EasyRead>Here you can check our government registrations and read our yearly reports.</EasyRead>
        <SectionTitle eyebrow="Registrations" title="Our registrations" />
        <TrustBar />
        <Text variant="body-default-s" onBackground="neutral-weak">
          Legal name: {org.legalName}. The registered name dates from 1981; we use person-first language everywhere else.
        </Text>
      </Section>
      <Section tone="surface" label="Annual reports">
        <SectionTitle eyebrow="Annual reports" title="Eleven years of reports" intro="Email us for any report not linked here. We are moving them all onto this site." />
        <Grid columns="4" m={{ columns: "3" }} s={{ columns: "2" }} gap="12">
          {reports.map((r) => (
            <Row key={r.year} padding="16" radius="l" border background="page" horizontal="between" vertical="center" gap="8">
              <Text variant="heading-strong-m" className="tabular">{r.year}</Text>
              {r.href ? (
                <Button href={r.href} size="s" variant="secondary" prefixIcon="download">PDF</Button>
              ) : (
                <Button href={`mailto:${org.email}?subject=${encodeURIComponent(`Annual report ${r.year}`)}`} size="s" variant="tertiary" prefixIcon="mail">Ask</Button>
              )}
            </Row>
          ))}
        </Grid>
      </Section>
      <Section label="Memberships and money">
        <Grid columns="2" m={{ columns: "1" }} gap="56">
          <Column gap="16">
            <Heading as="h2" variant="display-strong-xs">Memberships</Heading>
            {memberships.map((m) => (
              <Row key={m} paddingY="12" borderBottom><Text variant="body-default-l">{m}</Text></Row>
            ))}
          </Column>
          <Column gap="16" padding="32" radius="l" background="surface" border>
            <Heading as="h2" variant="display-strong-xs">Where ₹100 goes</Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              We are preparing a clear breakdown from our audited accounts. It will appear here with the 2024-25 report.
            </Text>
          </Column>
        </Grid>
      </Section>
    </>
  );
}
