import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { Breadcrumb, EasyRead, PaintHero, Photo, Section, SectionTitle, TrustBar } from "@/components/blocks";
import { org, partners } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Partner with us: CSR and foundations",
  description:
    "Fund early intervention, therapy, special education or mothers' livelihoods at SAMADHAN, New Delhi. CSR, foundation and employee-giving partnerships.",
  path: "/get-involved/partner",
});

const projects = [
  { image: "girl-early-intervention", title: "Early intervention", body: "Assessment and home programmes for children under six." },
  { image: "child-standing-frame", title: "Therapy and devices", body: "Therapist time, orthotics and mobility aids." },
  { image: "child-writing", title: "A classroom for a year", body: "Teachers and materials for a class of five." },
  { image: "mothers-kitchen", title: "Mothers' enterprise", body: "Training, equipment and market access." },
  { image: "parents-workshop", title: "Community outreach", body: "Surveys, camps and rights workshops." },
  { image: "vocational-gardening", title: "Pre-vocational unit", body: "Skills for teenagers aged 12 to 16." },
];

export default function Partner() {
  return (
    <>
      <PaintHero art="art-strokes" eyebrow="Partner with us" title="Fund work you can visit" intro="Our centres are a short drive from Gurugram and central Delhi." />
      <Section paddingY="64">
        <Breadcrumb items={[{ label: "Get involved", href: "/get-involved" }, { label: "Partner with us" }]} />
        <EasyRead>Companies and foundations can pay for one of our programmes.</EasyRead>
        <SectionTitle eyebrow="Fundable projects" title="Choose a project" />
        <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="24">
          {projects.map((p) => (
            <Column key={p.title} gap="12">
              <Photo id={p.image} ratio="4 / 3" caption={false} sizes="(max-width: 900px) 100vw, 400px" />
              <Text variant="heading-strong-l">{p.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">{p.body}</Text>
            </Column>
          ))}
        </Grid>
        <Row gap="12" wrap>
          <Button href={`mailto:${org.email}?subject=${encodeURIComponent("CSR partnership")}`} size="l" prefixIcon="mail">
            Talk to us about CSR
          </Button>
          <Button href="/accountability" size="l" variant="secondary">
            Registrations and reports
          </Button>
        </Row>
      </Section>
      <Section tone="surface" label="Due diligence">
        <SectionTitle eyebrow="Due diligence" title="Registrations" intro="CSR-1, 12A and NGO Darpan numbers will be added here shortly." />
        <TrustBar />
      </Section>
      <Section label="Partners">
        <SectionTitle eyebrow="Past and present" title="Who has partnered with us" />
        <Grid columns="3" m={{ columns: "1" }} gap="40">
          {(
            [
              ["Foundations and trusts", partners.foundations],
              ["Companies", partners.companies],
              ["Public bodies and networks", partners.public],
            ] as const
          ).map(([label, list]) => (
            <Column key={label} gap="12">
              <Heading as="h3" variant="label-strong-s" onBackground="accent-medium" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>
                {label}
              </Heading>
              {list.map((p) => (
                <Row key={p} paddingY="8" borderBottom>
                  <Text variant="heading-default-l" style={{ fontFamily: "var(--font-heading)" }}>{p}</Text>
                </Row>
              ))}
            </Column>
          ))}
        </Grid>
      </Section>
    </>
  );
}
