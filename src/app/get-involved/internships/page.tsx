import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { PhotoHero, Section, Stat } from "@/components/blocks";
import { org } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Internships",
  description:
    "Internships at SAMADHAN, New Delhi, for students of occupational therapy, speech therapy, psychology, special education and social work, including international universities.",
  path: "/get-involved/internships",
});

const fields = ["Occupational therapy", "Speech and language therapy", "Psychology", "Special education", "Social work", "Drama and art therapy"];

const steps = [
  { title: "Write to us", body: "Tell us your course, dates and what you hope to learn." },
  { title: "Plan together", body: "We agree your hours, centre and supervisor." },
  { title: "Rotate", body: "Spend time in therapy, the classroom, outreach and the mothers' group." },
  { title: "Sign-off", body: "We confirm your hours for your university." },
];

export default function Internships() {
  return (
    <>
      <PhotoHero
        crumbs={[{ label: "Get involved", href: "/get-involved" }, { label: "Internships" }]}
        eyebrow="Internships"
        title="Learn in a community clinic"
        intro="Students from India and abroad have trained with our therapists and teachers for years."
        easyRead="Students can come and learn with our therapists and teachers."
        image="therapy-one-to-one"
        actions={
          <Button href={`mailto:${org.email}?subject=${encodeURIComponent("Internship enquiry")}`} size="l" prefixIcon="mail">
            Apply by email
          </Button>
        }
      />
      <Section tone="surface" label="Who we take">
        <Grid columns="2" m={{ columns: "1" }} gap="56">
          <Column gap="16">
            <Heading as="h2" variant="display-strong-s">Who we take</Heading>
            {fields.map((f) => (
              <Row key={f} paddingY="12" borderBottom><Text variant="heading-default-l">{f}</Text></Row>
            ))}
          </Column>
          <Grid columns="2" gap="32" style={{ alignContent: "start" }}>
            <Stat value="4 weeks" label="a typical rotation" />
            <Stat value="120 hrs" label="the usual credit-bearing placement" />
          </Grid>
        </Grid>
      </Section>
      <Section label="How it works">
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
    </>
  );
}
