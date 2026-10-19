import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { PhotoHero, Quote, Section, SectionTitle, Stat } from "@/components/blocks";
import { org } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Internships",
  description:
    "Unpaid four-week internships at SAMADHAN, New Delhi: early intervention, therapy, special education, counselling and community outreach. Dates arranged with you.",
  path: "/get-involved/internships",
});

const areas = [
  "Early intervention: therapy and assessments",
  "Special education",
  "Counselling for parents",
  "Training for the mothers' income units",
  "House-to-house surveys and health camps",
  "Awareness programmes on disability",
];

const details = [
  { label: "Hours", body: "30 hours a week: 6 hours a day, Monday to Friday." },
  { label: "Practice and theory", body: "90% practical work, 10% theory." },
  { label: "Where", body: "Practical work is at our Dakshinpuri centre." },
  { label: "Lectures", body: "Group lectures on disability services in India." },
  { label: "Visits", body: "We can arrange visits to other agencies." },
  { label: "Accommodation", body: "We can help you find an apartment or hotel near the centre." },
  { label: "What to wear", body: "A kurta with pyjama or salwar for community visits." },
  { label: "Visa and health", body: "International interns need a visa. Check immunisation advice before you travel." },
];

const steps = [
  { title: "Write to us", body: "Tell us your course, dates and what you hope to learn. We will send the application form." },
  { title: "Plan together", body: "We plan your placement around your interests and our needs." },
  { title: "Rotate", body: "Spend time in therapy, the classroom, outreach and the mothers' group." },
  { title: "Sign-off", body: "We confirm your hours for your university." },
];

function Actions() {
  return (
    <Row gap="12" wrap>
      <Button href={`mailto:${org.email}?subject=${encodeURIComponent("Internship application")}`} size="l" prefixIcon="mail">
        Apply by email
      </Button>
      <Button href="/reports/samadhan-internship-application-form.docx" download size="l" variant="secondary" prefixIcon="download">
        Application form (Word)
      </Button>
    </Row>
  );
}

export default function Internships() {
  return (
    <>
      <PhotoHero
        crumbs={[{ label: "Get involved", href: "/get-involved" }, { label: "Internships" }]}
        eyebrow="Internships"
        title="Train with our therapists and teachers"
        intro="For students and working professionals. Internships are unpaid and dates are flexible."
        easyRead="Students can come and learn with our therapists and teachers."
        image="parents-workshop"
        actions={<Actions />}
      />
      <Section tone="surface" label="What you will work on">
        <Grid columns="2" m={{ columns: "1" }} gap="56">
          <Column gap="16">
            <Heading as="h2" variant="display-strong-s">What you will work on</Heading>
            {areas.map((a) => (
              <Row key={a} paddingY="12" borderBottom><Text variant="heading-default-l">{a}</Text></Row>
            ))}
          </Column>
          <Column gap="40">
            <Grid columns="2" gap="32">
              <Stat value="4 weeks" label="a typical placement" />
              <Stat value="120 hours" label="the usual placement for university credit" />
            </Grid>
            <Quote text="I had the opportunity to work in all of the departments." by="Simran, psychology intern" />
          </Column>
        </Grid>
      </Section>
      <Section label="Practical details">
        <Heading as="h2" variant="display-strong-s">Practical details</Heading>
        <Grid columns="2" m={{ columns: "1" }} gap="24">
          {details.map((d) => (
            <Column key={d.label} gap="4" paddingY="12" borderBottom>
              <Text variant="label-strong-m" onBackground="accent-medium">{d.label}</Text>
              <Text variant="body-default-l">{d.body}</Text>
            </Column>
          ))}
        </Grid>
      </Section>
      <Section tone="surface" label="How it works">
        <Heading as="h2" variant="display-strong-s">How it works</Heading>
        <Grid columns="4" m={{ columns: "2" }} s={{ columns: "1" }} gap="24">
          {steps.map((s, i) => (
            <Column key={s.title} gap="8" paddingTop="16" borderTop="accent-alpha-strong">
              <Text className="journey__num" style={{ fontSize: 44 }} aria-hidden>{`0${i + 1}`}</Text>
              <Text variant="heading-strong-l">{s.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">{s.body}</Text>
            </Column>
          ))}
        </Grid>
      </Section>
      <Section label="Apply">
        <Grid columns="2" m={{ columns: "1" }} gap="32" style={{ alignItems: "center" }}>
          <SectionTitle title="Apply for an internship" intro="Email us your course, your dates and what you hope to learn. You can send the application form with it." />
          <Actions />
        </Grid>
      </Section>
    </>
  );
}
