import { Column, Grid, Heading, Text } from "@once-ui-system/core";
import { Breadcrumb, EasyRead, PaintHero, Photo, Quote, Section } from "@/components/blocks";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Our founder, Prameela Balasundaram",
  description: "Prameela Balasundaram founded SAMADHAN in 1981 and brought drama therapy and community-based rehabilitation to Delhi's low-income neighbourhoods.",
  path: "/about/founder",
});

const facts = [
  { year: "1981", text: "Founds SAMADHAN in New Delhi." },
  { year: "1992", text: "SAMADHAN holds its first national drama therapy workshop, drawing on her training with Dr Sue Jennings." },
  { year: "1993", text: "President of the YWCA of Delhi, 1993 to 1994." },
  { year: "1998", text: "Inclusion International award of recognition." },
  { year: "2005", text: "Publishes Sunny's Story." },
  { year: "2011", text: "Hind Prabha award." },
];

export default function Founder() {
  return (
    <>
      <PaintHero art="art-strokes" eyebrow="Our founder" title="Prameela Balasundaram" intro="Founder of SAMADHAN and author of Sunny's Story." />
      <Section paddingY="64">
        <Breadcrumb items={[{ label: "About", href: "/about" }, { label: "Our founder" }]} />
        <EasyRead>Prameela Balasundaram started SAMADHAN in 1981.</EasyRead>
        <Grid columns="2" m={{ columns: "1" }} gap="56" style={{ alignItems: "center" }}>
          <Quote text="The question we were most often asked was, ‘Is it my karma?’ The answer, of course, was that it was no one's karma." by="Prameela Balasundaram" />
          <Photo id="child-handprint-painting" ratio="4 / 5" />
        </Grid>
        <Column gap="24">
          <Heading as="h2" variant="display-strong-xs">A life in milestones</Heading>
          <ol className="timeline">
            {facts.map((f) => (
              <li key={f.year + f.text}>
                <Text variant="heading-strong-m" onBackground="brand-strong">{f.year}</Text>
                <Text as="p" variant="body-default-l" onBackground="neutral-medium" style={{ margin: 0 }}>{f.text}</Text>
              </li>
            ))}
          </ol>
        </Column>
      </Section>
    </>
  );
}
