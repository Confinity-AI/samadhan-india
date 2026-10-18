import { Button, Column, Grid, Heading, Media, Row, SmartLink, Text } from "@once-ui-system/core";
import { ChildJourney } from "@/components/ChildJourney";
import {
  ContactButtons,
  DonateBand,
  EasyRead,
  Eyebrow,
  LinkCard,
  PaintBand,
  Photo,
  Quote,
  Section,
  SectionTitle,
  Stat,
  TrustBar,
} from "@/components/blocks";
import { asset } from "@/content/assets";
import { awards, partners, yearInNumbers } from "@/content/site";
import { stories } from "@/content/stories";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "SAMADHAN India: therapy and school for children with intellectual disabilities in Delhi",
  description:
    "SAMADHAN gives early intervention, therapy and special education to children with intellectual disabilities in Dakshinpuri and Dwarka, New Delhi, and supports their mothers. Since 1981.",
  path: "/",
});

const heroImages = ["children-play-garden", "therapy-one-to-one", "child-handprint-painting"];
const momentsPreview = ["child-swing", "vocational-diyas", "mothers-garden-harvest", "diwali-rangoli", "boy-drawing-floor", "papier-mache-birds", "legal-awareness", "child-drawing-umbrella"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Column fillWidth horizontal="center" paddingX="24" paddingTop="48" paddingBottom="64">
        <Grid maxWidth="xl" columns="2" m={{ columns: "1" }} gap="56" style={{ alignItems: "center" }}>
          <Column gap="24">
            <Eyebrow>Dakshinpuri and Dwarka, New Delhi · since 1981</Eyebrow>
            <Heading as="h1" variant="display-strong-xl">
              Every child can learn. We help them start early.
            </Heading>
            <Text variant="body-default-xl" onBackground="neutral-weak" style={{ maxWidth: 560 }}>
              Therapy, early intervention and school for children with intellectual disabilities, in the neighbourhoods where they live.
            </Text>
            <Row gap="12" wrap>
              <Button href="/families" size="l" prefixIcon="person">
                Get help for your child
              </Button>
              <Button href="/donate" size="l" variant="secondary" prefixIcon="heart">
                Donate
              </Button>
            </Row>
            <EasyRead>We help children who learn slowly. We help their families too.</EasyRead>
          </Column>
          <div className="mosaic">
            {heroImages.map((id, i) => {
              const a = asset(id);
              return (
                <div key={id} className="frame">
                  <Media src={a.src} alt={a.alt} fillWidth aspectRatio="auto" sizes="(max-width: 900px) 60vw, 380px" priority={i === 0} style={{ height: "100%" }} />
                </div>
              );
            })}
          </div>
        </Grid>
      </Column>

      {/* Proof strip */}
      <Column fillWidth horizontal="center" paddingX="24" paddingBottom="64">
        <Grid maxWidth="xl" columns="4" m={{ columns: "2" }} gap="32">
          <Stat value="1981" label="registered in New Delhi" />
          <Stat value="50,000+" label="families reached, by our founder's count" />
          <Stat value="2" label="centres, in Dakshinpuri and Dwarka" />
          <Stat value="0–16" label="the ages we work with" />
        </Grid>
      </Column>

      <PaintBand />

      {/* The child's path */}
      <Section id="path" label="A child's path">
        <SectionTitle eyebrow="A child's path" title="From a knock on the door to a classroom" />
        <ChildJourney />
      </Section>

      {/* Mothers */}
      <Section tone="surface" label="Mothers">
        <Grid columns="2" m={{ columns: "1" }} gap="56" style={{ alignItems: "center" }}>
          <Column gap="32">
            <SectionTitle eyebrow="Mothers" title="Support and income for mothers" intro="Mothers meet for support, train together and run food and craft units." />
            <Quote text="When I joined SAMADHAN 10 years ago, I was not very confident about myself. Today, I have made sure that both my daughters are well educated and I feel more in control of my life." by="Renu Gupta, mothers' group" />
            <SmartLink href="/our-work/mothers" suffixIcon="arrowRight">
              Mothers and livelihoods
            </SmartLink>
          </Column>
          <Grid columns="2" gap="12" className="made-grid">
            <Photo id="mothers-kitchen" ratio="1 / 1" sizes="(max-width: 900px) 50vw, 300px" />
            <Photo id="laddoo-boxes" ratio="1 / 1" sizes="(max-width: 900px) 50vw, 300px" />
            <Photo id="mothers-garden-harvest" ratio="1 / 1" sizes="(max-width: 900px) 50vw, 300px" />
            <Photo id="papier-mache-birds" ratio="1 / 1" sizes="(max-width: 900px) 50vw, 300px" />
          </Grid>
        </Grid>
      </Section>

      {/* Year in numbers */}
      <Section label="A year in numbers">
        <SectionTitle eyebrow={`A year in numbers, ${yearInNumbers.year}`} title="What we did in 2020-21" intro="Figures from our 2020-21 annual report." />
        <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="32">
          {yearInNumbers.items.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </Grid>
      </Section>

      {/* Stories */}
      <Section tone="surface" label="Stories">
        <Row horizontal="between" vertical="end" gap="24" wrap>
          <SectionTitle eyebrow="Stories" title="In their own words" />
          <Button href="/stories" variant="tertiary" suffixIcon="arrowRight">
            All stories
          </Button>
        </Row>
        <Grid columns="3" m={{ columns: "1" }} gap="32">
          {stories.map((s) => (
            <LinkCard key={s.slug} href={`/stories/${s.slug}`} image={s.image} title={s.title} body={`${s.person}, ${s.role}`} ratio="5 / 4" />
          ))}
        </Grid>
      </Section>

      {/* Moments */}
      <Section label="Moments">
        <Row horizontal="between" vertical="end" gap="24" wrap>
          <SectionTitle eyebrow="Moments" title="A day at SAMADHAN" />
          <Button href="/moments" variant="tertiary" suffixIcon="arrowRight">
            See every photo
          </Button>
        </Row>
        <div className="masonry">
          {momentsPreview.map((id) => (
            <Photo key={id} id={id} sizes="(max-width: 900px) 50vw, 300px" />
          ))}
        </div>
      </Section>

      <DonateBand />

      {/* Trust */}
      <Section label="Recognition and partners">
        <SectionTitle eyebrow="Recognition" title="Awards and partners" />
        <Grid columns="5" m={{ columns: "3" }} s={{ columns: "1" }} gap="24">
          {awards.map((a) => (
            <Column key={a.year} gap="8" borderTop="brand-alpha-strong" paddingTop="16">
              <Text className="stat-value" onBackground="accent-strong" style={{ fontSize: 36 }}>
                {a.year}
              </Text>
              <Text variant="heading-strong-s">{a.title}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {a.by}
              </Text>
            </Column>
          ))}
        </Grid>
        <Column gap="16" paddingTop="32">
          <Text variant="label-strong-s" onBackground="neutral-weak" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>
            Partners over the years
          </Text>
          <Row wrap gap="12" style={{ rowGap: 8 }}>
            {[...partners.foundations, ...partners.companies, ...partners.public].map((p, i, arr) => (
              <Text key={p} variant="heading-default-l" onBackground="neutral-medium" style={{ fontFamily: "var(--font-heading)" }}>
                {p}
                {i < arr.length - 1 && (
                  <Text as="span" onBackground="accent-strong" aria-hidden>
                    {" "}·
                  </Text>
                )}
              </Text>
            ))}
          </Row>
        </Column>
        <TrustBar />
      </Section>

      {/* Hindi families */}
      <Section tone="surface" label="For families, in Hindi">
        <Grid columns="2" m={{ columns: "1" }} gap="48" style={{ alignItems: "center" }}>
          <Column gap="20" lang="hi">
            <Heading as="h2" variant="display-strong-s" className="hindi">
              क्या आपका बच्चा धीरे सीख रहा है?
            </Heading>
            <Text variant="body-default-xl" onBackground="neutral-weak" className="hindi">
              हमें कॉल या व्हाट्सऐप करें। हम आपके बच्चे से मिलेंगे और आगे का रास्ता बताएंगे।
            </Text>
            <ContactButtons lang="hi" />
            <SmartLink href="/hi/families" suffixIcon="arrowRight">
              <span className="hindi">परिवारों के लिए पूरी जानकारी</span>
            </SmartLink>
          </Column>
          <Photo id="girl-early-intervention" ratio="4 / 3" />
        </Grid>
      </Section>
    </>
  );
}
