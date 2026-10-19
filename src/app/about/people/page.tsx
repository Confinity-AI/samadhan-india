import { Column, Grid, Text } from "@once-ui-system/core";
import { DonateBand, EasyRead, PaintHero, Photo, Section, SectionTitle } from "@/components/blocks";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Our board and team",
  description:
    "SAMADHAN's executive board and leadership, and the paediatrician, therapists, psychologist and special educators who work with children.",
  path: "/about/people",
});

const board = [
  { name: "Prabodh Bhambal", role: "President", work: "Freelance consultant" },
  { name: "Sumathi Morgan", role: "Secretary", work: "Executive Director of SAMADHAN" },
  { name: "Janak Kumar Gandhi", role: "Treasurer", work: "Technical Officer (retired), Council of Scientific and Industrial Research" },
  { name: "Prameela Balasundaram", role: "Founder member", work: "Founder of SAMADHAN" },
  { name: "Ratan Kumar Gurtoo", role: "Member", work: "Chartered accountant, partner at A.K. Kar & Company" },
  { name: "CDR Reena Magdalene", role: "Member", work: "Retired government official" },
  { name: "Dr Alex Joseph", role: "Member", work: "Social work consultant" },
];

const team = [
  "Paediatrician",
  "Occupational therapist",
  "Speech therapist",
  "Psychologist",
  "Special educators",
  "Drama, music and art therapists",
  "Community workers",
];

export default function People() {
  return (
    <>
      <PaintHero art="art-flowers" focus="60% 80%" zoom={1.5} flip crumbs={[{ label: "About", href: "/about" }, { label: "Our people" }]} eyebrow="Our people" title="Our board and team">
        <EasyRead>These people run SAMADHAN and work with the children.</EasyRead>
      </PaintHero>
      <Section paddingY="64">
        <SectionTitle eyebrow="Executive Board" title="Our board in 2026" />
        <ul className="ruled-list">
          {board.map((b) => (
            <li key={b.name}>
              <Grid columns="3" m={{ columns: "1" }} gap="8" paddingY="16">
                <Text variant="heading-strong-m">{b.name}</Text>
                <Text variant="label-strong-m" onBackground="accent-medium">{b.role}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">{b.work}</Text>
              </Grid>
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="surface" label="Our team">
        <Grid columns="2" m={{ columns: "1" }} gap="56" style={{ alignItems: "center" }}>
          <Column gap="24">
            <SectionTitle eyebrow="Our team" title="The people who work with children" />
            <ul className="ruled-list">
              {team.map((t) => (
                <li key={t}>
                  <Text as="p" variant="heading-default-m" style={{ margin: 0, paddingBlock: 12 }}>
                    {t}
                  </Text>
                </li>
              ))}
            </ul>
          </Column>
          <Photo id="diwali-rangoli" cap sizes="(max-width: 1024px) 100vw, 543px" />
        </Grid>
      </Section>
      <DonateBand art="art-trees" />
    </>
  );
}
