import { Column, Heading, Media, Row, Text } from "@once-ui-system/core";
import { Breadcrumb, EasyRead, PaintHero, Quote, Section } from "@/components/blocks";
import { asset } from "@/content/assets";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Our founder, Prameela Balasundaram",
  description:
    "Prameela Balasundaram founded SAMADHAN in New Delhi in 1981 to help children with intellectual disabilities in low-income neighbourhoods.",
  path: "/about/founder",
});

const training = [
  "MA in English Literature and Semantics, Bangalore University",
  "Trained in drama therapy with Dr Sue Jennings, a founder of dramatherapy in the UK",
  "Hands-on training in Germany, sponsored by Lebenshilfe, before she started SAMADHAN",
  "Has presented papers at more than 20 international conferences",
  "Member of the National Trust's Local Level Committee for guardianship in Delhi",
];

const facts = [
  { year: "1981", text: "Founds SAMADHAN in New Delhi." },
  { year: "1993", text: "President of the YWCA of Delhi, 1993 to 1994." },
  { year: "1998", text: "Inclusion International gives SAMADHAN its Award of Recognition at its World Congress in The Hague." },
  { year: "2005", text: "Dr Kiran Bedi releases Sunny's Story, her novel based on a true story. She wrote it to raise money for SAMADHAN." },
  { year: "2011", text: "Receives the Hind Prabha award from the Uttar Pradeshiya Mahila Manch." },
];

export default function Founder() {
  return (
    <>
      <PaintHero art="art-strokes" eyebrow="Our founder" title="Prameela Balasundaram" intro="Founder of SAMADHAN and author of Sunny's Story.">
        <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", boxShadow: "0 0 0 3px var(--accent-solid-strong)" }}>
          <Media src={asset("founder-portrait").src} alt={asset("founder-portrait").alt} aspectRatio="1 / 1" sizes="120px" priority />
        </div>
      </PaintHero>
      <Section paddingY="64">
        <Breadcrumb items={[{ label: "About", href: "/about" }, { label: "Our founder" }]} />
        <EasyRead>Prameela Balasundaram started SAMADHAN in 1981.</EasyRead>
        <Column gap="40">
            <Quote text="Listening skills, Humility. Patience. Three qualities I learnt the hard way on my long journey." by="Prameela Balasundaram" />
            <Quote text="The question we were most often asked was, ‘Is it my karma?’ The answer, of course, was that it was no one's karma." by="Prameela Balasundaram" />
        </Column>
        <Column gap="16">
          <Heading as="h2" variant="display-strong-xs">Training and work</Heading>
          {training.map((t) => (
            <Row key={t} paddingY="12" borderBottom>
              <Text variant="body-default-l">{t}</Text>
            </Row>
          ))}
        </Column>
        <Column gap="24">
          <Heading as="h2" variant="display-strong-xs">Key dates</Heading>
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
