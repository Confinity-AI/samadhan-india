import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { Breadcrumb, EasyRead, PaintHero, Photo, Quote, Section, SectionTitle, TrustBar } from "@/components/blocks";
import { org, partners } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Partner with us: CSR and foundations",
  description:
    "Fund early intervention, therapy, special education or support for mothers at SAMADHAN, New Delhi. CSR and foundation partnerships.",
  path: "/get-involved/partner",
});

const projects = [
  { image: "girl-early-intervention", title: "Early intervention", body: "Assessment and home programmes for babies and pre-school children." },
  { image: "child-standing-frame", title: "Therapy and devices", body: "Therapist time, orthotic and prosthetic devices." },
  { image: "child-writing", title: "A classroom for a year", body: "A teacher and materials for five children, for one year." },
  { image: "mothers-kitchen", title: "Mothers' food and craft units", body: "Training, equipment and help with selling." },
  { image: "parents-workshop", title: "Community outreach", body: "Surveys, camps and rights workshops." },
  { image: "vocational-gardening", title: "Pre-vocational unit", body: "Skills for teenagers aged 12 to 16." },
];

const funderQuotes = [
  {
    text: "Your therapy approaches are matching with the therapies we are practising in Germany as well.",
    by: "Former board member, Software AG Stiftung, Darmstadt, Germany",
  },
  {
    text: "Your team is an embodiment of strength of character and personal commitment.",
    by: "Senior Director, Human Resources, Carlson Wagonlit Travel India, after a team visit in 2016",
  },
];

export default function Partner() {
  return (
    <>
      <PaintHero
        art="art-strokes"
        eyebrow="Partner with us"
        title="Fund one of our programmes"
        intro="For companies, foundations and trusts. You can visit either centre before you decide."
      />
      <Section paddingY="64">
        <Breadcrumb items={[{ label: "Get involved", href: "/get-involved" }, { label: "Partner with us" }]} />
        <EasyRead>Companies and foundations can pay for one of our programmes.</EasyRead>
        <SectionTitle eyebrow="Projects" title="Choose a project" />
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
            Talk to us about funding
          </Button>
          <Button href="/reports/samadhan-brochure.pdf" download size="l" variant="secondary" prefixIcon="download">
            Our brochure (PDF)
          </Button>
          <Button href="/accountability" size="l" variant="tertiary">
            Registrations and annual reports
          </Button>
        </Row>
      </Section>
      <Section tone="surface" label="What funders say">
        <SectionTitle title="What funders have told us" />
        <Grid columns="2" m={{ columns: "1" }} gap="48">
          {funderQuotes.map((q) => (
            <Quote key={q.by} text={q.text} by={q.by} />
          ))}
        </Grid>
      </Section>
      <Section label="Due diligence">
        <SectionTitle eyebrow="Due diligence" title="Registrations" intro="We are confirming our CSR-1 registration. Ask us for its status before you commit CSR funds." />
        <TrustBar />
      </Section>
      <Section tone="surface" label="Partners">
        <SectionTitle eyebrow="Past and present" title="Who has partnered with us" />
        <Grid columns="3" m={{ columns: "1" }} gap="40">
          {(
            [
              ["Foundations and trusts", partners.foundations],
              ["Companies", partners.companies],
              ["Government and networks", partners.public],
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
