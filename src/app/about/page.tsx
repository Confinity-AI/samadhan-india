import { Column, Grid, Heading, Text } from "@once-ui-system/core";
import { DonateBand, EasyRead, LinkCard, PaintHero, Photo, Quote, Section, SectionTitle, Stat } from "@/components/blocks";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "About us",
  description:
    "SAMADHAN was founded in 1981 in Dakshinpuri, New Delhi, to bring therapy and school to children with intellectual disabilities in low-income neighbourhoods.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <PaintHero art="art-flowers" eyebrow="About us" title="Started in one Delhi neighbourhood in 1981. Still there." intro="Our name, समाधान, means “solution”." />
      <Section paddingY="64">
        <EasyRead>SAMADHAN started in 1981. We work in Dakshinpuri and Dwarka in Delhi.</EasyRead>
        <Grid columns="2" m={{ columns: "1" }} gap="56" style={{ alignItems: "center" }}>
          <Column gap="24">
            <SectionTitle eyebrow="Our mission" title="Help close to home" />
            <Text variant="body-default-xl" onBackground="neutral-medium">
              Accessible services for children with intellectual disabilities in low-income areas, starting with babies and pre-school children. As far as possible, run by people from the same community.
            </Text>
          </Column>
          <Grid columns="2" gap="12">
            <Photo id="centre-dakshinpuri" ratio="3 / 4" sizes="300px" />
            <Photo id="centre-dwarka" ratio="3 / 4" sizes="300px" />
          </Grid>
        </Grid>
        <Grid columns="4" m={{ columns: "2" }} gap="32">
          <Stat value="1981" label="registered in New Delhi" />
          <Stat value="1988" label="first Indian member of Inclusion International" />
          <Stat value="1992" label="first national drama therapy workshop in India" />
          <Stat value="2001" label="World Bank award" />
        </Grid>
      </Section>
      <Section tone="surface" label="Founder's words">
        <Grid columns="2" m={{ columns: "1" }} gap="48" style={{ alignItems: "center" }}>
          <Quote text="The question we were most often asked was, ‘Is it my karma?’ The answer, of course, was that it was no one's karma." by="Prameela Balasundaram, founder" />
          <Photo id="art-strokes" ratio="4 / 3" />
        </Grid>
      </Section>
      <Section label="More about us">
        <Heading as="h2" variant="display-strong-s">More about us</Heading>
        <Grid columns="4" m={{ columns: "2" }} s={{ columns: "1" }} gap="24">
          <LinkCard href="/about/history" image="art-trees" title="Our history" body="45 years, 1981 to today." />
          <LinkCard href="/about/founder" image="child-handprint-painting" title="Our founder" body="Prameela Balasundaram." />
          <LinkCard href="/about/people" image="mothers-counselling" title="Our people" body="Board, team and therapists." />
          <LinkCard href="/accountability" image="legal-awareness" title="Accountability" body="Registrations and reports." />
        </Grid>
      </Section>
      <DonateBand />
    </>
  );
}
