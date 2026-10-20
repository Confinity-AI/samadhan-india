import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { EasyRead, LinkCard, PaintHero, Quote, Section, SectionTitle, TrustBar } from "@/components/blocks";
import { org, partners } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Partner with us: CSR and foundations",
  description:
    "Fund early intervention, therapy, special education or support for mothers at SAMADHAN, New Delhi. CSR and foundation partnerships.",
  path: "/get-involved/partner",
});

const projects = [
  { href: "/programmes/early-intervention", image: "boy-drawing-floor", title: "Early intervention", body: "Assessment and home programmes for babies and pre-school children." },
  { href: "/programmes/therapy", image: "child-standing-frame", title: "Therapy and devices", body: "Therapist time, orthotic and prosthetic devices." },
  { href: "/programmes/special-education", image: "child-writing", title: "A classroom for a year", body: "A teacher and materials for five children, for one year." },
  { href: "/programmes/mothers", image: "mothers-kitchen", title: "Mothers' food and craft units", body: "Training for the spice, Nutri-mix and papier-mâché units." },
  { href: "/programmes/community", image: "parents-workshop", title: "Community outreach", body: "Surveys, camps and rights workshops." },
  { href: "/programmes/special-education", image: "vocational-gardening", title: "Pre-vocational unit", body: "Skills for teenagers aged 12 to 16." },
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

function FundingActions() {
  return (
    <Row gap="12" wrap>
      <Button href={`mailto:${org.email}?subject=${encodeURIComponent("CSR partnership")}`} size="l" prefixIcon="mail">
        Talk to us about funding
      </Button>
      <Button href="/reports/samadhan-brochure.pdf" download size="l" variant="secondary" prefixIcon="download">
        Our brochure (PDF)
      </Button>
    </Row>
  );
}

export default function Partner() {
  return (
    <>
      <PaintHero
        art="art-trees"
        focus="70% 40%"
        zoom={1.6}
        flip
        crumbs={[{ label: "Get involved", href: "/get-involved" }, { label: "Partner with us" }]}
        eyebrow="Partner with us"
        title="Fund one of our programmes"
        intro="For companies, foundations and trusts. You can visit either centre before you decide."
      >
        <FundingActions />
        <EasyRead>Companies and foundations can pay for one of our programmes.</EasyRead>
      </PaintHero>
      <Section paddingY="64" label="Projects">
        <SectionTitle eyebrow="Projects" title="Choose a project" />
        <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="24" className="rail">
          {projects.map((p) => (
            <LinkCard key={p.title} href={p.href} image={p.image} title={p.title} body={p.body} />
          ))}
        </Grid>
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
        <Row gap="12" wrap>
          <Button href="/accountability" variant="secondary" suffixIcon="arrowRight">
            Registrations and annual reports
          </Button>
          <Button href="/about/people" variant="secondary" suffixIcon="arrowRight">
            Board and team
          </Button>
        </Row>
      </Section>
      <Section tone="surface" label="Partners">
        <SectionTitle eyebrow="Past and present" title="Who has partnered with us" />
        <Grid columns="3" m={{ columns: "1" }} gap="40">
          {(
            [
              ["Foundations, trusts and groups", partners.foundations],
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
      <Section label="Talk to us">
        <SectionTitle align="center" title="Tell us what you would like to fund" intro="We can send our annual reports and arrange a visit to either centre." />
        <Row horizontal="center">
          <FundingActions />
        </Row>
      </Section>
    </>
  );
}
