import { Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { Breadcrumb, EasyRead, PaintHero, Photo, Section, SectionTitle } from "@/components/blocks";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Our people",
  description: "SAMADHAN's executive board, leadership and multidisciplinary team of doctors, therapists, psychologists and special educators.",
  path: "/about/people",
});

const leaders = [
  { name: "Prameela Balasundaram", role: "Founder" },
  { name: "Sumathi Morgan", role: "Executive Director and Secretary" },
  { name: "Prabodh Bhambal", role: "President, Executive Board" },
];

const team = [
  "Paediatrician",
  "Occupational therapist",
  "Speech therapist",
  "Psychologist",
  "Special educators",
  "Drama, music and art therapists",
  "Community workers",
  "Mothers' group coordinators",
];

export default function People() {
  return (
    <>
      <PaintHero art="art-fish" eyebrow="Our people" title="The people behind the work" />
      <Section paddingY="64">
        <Breadcrumb items={[{ label: "About", href: "/about" }, { label: "Our people" }]} />
        <EasyRead>These people run SAMADHAN.</EasyRead>
        <Grid columns="3" m={{ columns: "1" }} gap="24">
          {leaders.map((l) => (
            <Column key={l.name} gap="8" padding="24" radius="l" border background="surface">
              <Text variant="label-default-s" onBackground="accent-medium">{l.role}</Text>
              <Heading as="h2" variant="heading-strong-xl">{l.name}</Heading>
            </Column>
          ))}
        </Grid>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Our Executive Board for 2026 has seven members, led by President Prabodh Bhambal.
        </Text>
      </Section>
      <Section tone="surface" label="Our team">
        <Grid columns="2" m={{ columns: "1" }} gap="56" style={{ alignItems: "center" }}>
          <Column gap="24">
            <SectionTitle eyebrow="Our team" title="The people who work with children" />
            <Grid columns="2" gap="12">
              {team.map((t) => (
                <Row key={t} paddingY="12" borderBottom>
                  <Text variant="heading-default-m">{t}</Text>
                </Row>
              ))}
            </Grid>
          </Column>
          <Photo id="therapy-one-to-one" />
        </Grid>
      </Section>
    </>
  );
}
