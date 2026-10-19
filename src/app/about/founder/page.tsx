import { Column, Heading, Media, Row, Text } from "@once-ui-system/core";
import { DonateBand, EasyRead, PaintHero, Quote, Section } from "@/components/blocks";
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
  "Trained in drama therapy with Dr Sue Jennings, a founder of drama therapy in the UK",
  "Hands-on training in Germany, sponsored by Lebenshilfe, before she started SAMADHAN",
  "Has presented papers at more than 20 international conferences",
  "Member of the National Trust's Local Level Committee for guardianship in Delhi",
];

const facts = [
  { year: "1981", text: "Founds SAMADHAN in New Delhi." },
  { year: "1993", text: "President of the YWCA of Delhi, 1993 to 1994." },
  { year: "1998", text: "Inclusion International gives SAMADHAN its Award of Recognition in The Hague." },
  { year: "2005", text: "Dr Kiran Bedi releases Sunny's Story." },
  { year: "2011", text: "Receives the Hind Prabha award from the Uttar Pradeshiya Mahila Manch." },
];

export default function Founder() {
  const portrait = asset("founder-portrait");
  return (
    <>
      <PaintHero
        art="art-flowers"
        focus="80% 30%"
        zoom={1.3}
        crumbs={[{ label: "About", href: "/about" }, { label: "Our founder" }]}
        eyebrow="Our founder"
        title="Prameela Balasundaram"
        intro="Founder of SAMADHAN and author of Sunny's Story."
      >
        <EasyRead>Prameela Balasundaram started SAMADHAN in 1981.</EasyRead>
      </PaintHero>
      <Section paddingY="64">
        <Row gap="64" m={{ direction: "column-reverse", gap: "40" }}>
          <Column flex={7} gap="56">
            <Column gap="40">
              <Quote text="Listening skills, Humility. Patience. Three qualities I learnt the hard way on my long journey." by="Prameela Balasundaram" />
              <Quote text="The question we were most often asked was, ‘Is it my karma?’ The answer, of course, was that it was no one's karma." by="Prameela Balasundaram" />
            </Column>
            <Column gap="16">
              <Heading as="h2" variant="display-strong-xs">Training and work</Heading>
              <ul className="ruled-list">
                {training.map((t) => (
                  <li key={t}>
                    <Text as="p" variant="body-default-l" style={{ margin: 0, paddingBlock: 12 }}>
                      {t}
                    </Text>
                  </li>
                ))}
              </ul>
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
          </Column>
          <Column flex={5} fillWidth position="sticky" m={{ position: "static" }} style={{ top: 96, alignSelf: "flex-start" }}>
            <Column as="figure" gap="16" margin="0" padding="32" s={{ padding: "24" }} radius="l" background="surface" horizontal="center">
              <div style={{ width: portrait.width, maxWidth: "100%" }}>
                <Media src={portrait.src} alt={portrait.alt} aspectRatio="1 / 1" sizes={`${portrait.width}px`} radius="l" priority />
              </div>
              <Text as="figcaption" variant="label-default-s" onBackground="neutral-weak" align="center">
                {portrait.caption}
              </Text>
            </Column>
            <Column gap="8" paddingTop="24" paddingX="8">
              <Heading as="h2" variant="heading-strong-l">Sunny's Story</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                A novel based on a true story. Prameela wrote it to raise money for SAMADHAN's services, and Dr Kiran Bedi released it in April 2005.
              </Text>
            </Column>
          </Column>
        </Row>
      </Section>
      <DonateBand art="art-trees" />
    </>
  );
}
