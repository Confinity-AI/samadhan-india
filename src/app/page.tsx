import { Button, Column, Grid, Heading, Media, Row, SmartLink, Text } from "@once-ui-system/core";
import { ChildJourney } from "@/components/ChildJourney";
import {
  ContactButtons,
  DonateBand,
  EasyRead,
  Eyebrow,
  PaintBand,
  Photo,
  PhotoStat,
  Section,
  SectionTitle,
  Stat,
  StoryCard,
} from "@/components/blocks";
import { asset } from "@/content/assets";
import { awards, partners, registrations, yearInNumbers } from "@/content/site";
import { stories } from "@/content/stories";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "SAMADHAN India: therapy and school for children with intellectual disabilities in Delhi",
  description:
    "Since 1981, SAMADHAN has given early intervention, therapy and special education to children with intellectual disabilities in Dakshinpuri and Dwarka, New Delhi, and support to their mothers.",
  path: "/",
});

const heroImages = ["children-play-garden", "vocational-diyas", "vocational-pot-painting"];
const yearTiles = [
  { image: "girl-early-intervention", index: 0 },
  { image: "child-drawing-umbrella", index: 1 },
  { image: "volunteer-writing", index: 2 },
];
const momentsPreview = ["diwali-rangoli", "centre-dakshinpuri", "art-flowers", "parents-workshop", "friends-gifts", "centre-dwarka"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Column fillWidth horizontal="center" paddingX="24" paddingTop="48" paddingBottom="64" s={{ paddingTop: "32", paddingBottom: "48" }}>
        <Grid maxWidth="xl" columns="2" m={{ columns: "1" }} gap="56" s={{ gap: "24" }} className="home-hero" style={{ alignItems: "center" }}>
          <Column gap="24">
            <Eyebrow>Dakshinpuri and Dwarka, New Delhi</Eyebrow>
            <Heading as="h1" variant="display-strong-xl">
              Therapy and school for children with intellectual disabilities
            </Heading>
            <Text variant="body-default-xl" onBackground="neutral-medium" style={{ maxWidth: 560 }}>
              Early help for babies, small classes for older children, and support for their mothers.
            </Text>
            <Row gap="12" wrap className="hero-actions">
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
                  <Media
                    src={a.src}
                    alt={a.alt}
                    fillWidth
                    aspectRatio="auto"
                    sizes={i === 0 ? "(max-width: 900px) 100vw, 680px" : "(max-width: 900px) 50vw, 340px"}
                    priority={i === 0}
                    style={{ height: "100%", ...(i === 0 ? { "--pos": "40% 60%" } : {}) } as React.CSSProperties}
                  />
                </div>
              );
            })}
          </div>
        </Grid>
      </Column>

      {/* Proof strip */}
      <Column fillWidth horizontal="center" paddingX="24" paddingBottom="64">
        <Grid maxWidth="xl" columns="4" m={{ columns: "2" }} gap="32">
          <Stat value="45" label="years in Delhi" />
          <Stat value="50,000+" label="families reached since 1981, by our founder's count" />
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

      {/* Help for families */}
      <Section tone="surface" label="Help for families">
        <Grid columns="2" m={{ columns: "1" }} gap="48" style={{ alignItems: "center" }}>
          <Column gap="20">
            <Eyebrow>For families</Eyebrow>
            <Heading as="h2" variant="display-strong-m">
              Worried your child is learning slowly?
            </Heading>
            <Text variant="body-default-xl" onBackground="neutral-medium">
              Call or WhatsApp us. We will meet you and your child and talk about what can help.
            </Text>
            <ContactButtons />
            <Row gap="16" wrap vertical="center">
              <SmartLink href="/families" suffixIcon="arrowRight">
                What happens when you contact us
              </SmartLink>
              <Button href="/hi/families" variant="tertiary" size="m" hrefLang="hi">
                <span lang="hi" className="hindi">
                  हिंदी में पढ़ें
                </span>
              </Button>
            </Row>
          </Column>
          <Row horizontal="center">
            <Photo id="mothers-counselling" ratio="4 / 3" cap sizes="(max-width: 900px) 100vw, 660px" />
          </Row>
        </Grid>
      </Section>

      {/* Mothers */}
      <Section label="Mothers">
        <Grid columns="2" m={{ columns: "1" }} gap="56" style={{ alignItems: "start" }}>
          <Column gap="24" className="sticky-col">
            <SectionTitle
              eyebrow="Mothers"
              title="Support and income for mothers"
              intro="Mothers meet for support. They make laddoos, spices, Nutri-mix and papier-mâché birds to sell."
            />
            <SmartLink href="/our-work/mothers" suffixIcon="arrowRight">
              More about support for mothers
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
      <Section tone="surface" label="A year in numbers">
        <SectionTitle eyebrow="A year in numbers" title={`What we did in ${yearInNumbers.year}`} />
        <Grid columns="3" gap="24" className="rail">
          {yearTiles.map((t) => {
            const item = yearInNumbers.items[t.index];
            return <PhotoStat key={item.label} image={t.image} value={item.value} label={item.label} />;
          })}
        </Grid>
        <Text variant="body-default-m" onBackground="neutral-weak" style={{ maxWidth: "68ch" }}>
          Also that year, 35 children joined Niramaya health cover, 15 received orthotic or prosthetic devices, and the mothers' group made 50 kg of Nutri-mix. Figures from our {yearInNumbers.year} annual report.
        </Text>
      </Section>

      {/* Stories */}
      <Section label="Stories">
        <Row horizontal="between" vertical="end" gap="24" wrap>
          <SectionTitle eyebrow="Stories" title="What mothers tell us" />
          <SmartLink href="/stories" suffixIcon="arrowRight">
            All stories
          </SmartLink>
        </Row>
        <Grid columns="3" m={{ columns: "1" }} gap="24" className="rail">
          {stories.map((s) => (
            <StoryCard key={s.slug} href={`/stories/${s.slug}`} quote={s.quote} by={`${s.person}, ${s.role}`} />
          ))}
        </Grid>
      </Section>

      {/* Photos */}
      <Section tone="surface" label="Photos">
        <Row horizontal="between" vertical="end" gap="24" wrap>
          <SectionTitle eyebrow="Photos" title="Children, mothers and our centres" />
          <SmartLink href="/moments" suffixIcon="arrowRight">
            See every photo
          </SmartLink>
        </Row>
        <Grid columns="3" m={{ columns: "2" }} gap="16">
          {momentsPreview.map((id) => (
            <Photo key={id} id={id} ratio="4 / 3" sizes="(max-width: 900px) 50vw, 460px" />
          ))}
        </Grid>
      </Section>

      <DonateBand />

      {/* Trust */}
      <Section label="Awards and partners">
        <SectionTitle eyebrow="Recognition" title="Awards and partners" />
        <Grid columns="4" m={{ columns: "2" }} gap="24">
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
        <Column gap="16" paddingTop="16">
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
        <Row gap="16" wrap vertical="center" paddingTop="16" borderTop>
          <Text variant="body-default-m" onBackground="neutral-weak" className="tabular">
            Society reg. {registrations[0].value} · FCRA {registrations[1].value} · 80G
          </Text>
          <SmartLink href="/accountability" suffixIcon="arrowRight">
            Registrations and annual reports
          </SmartLink>
        </Row>
      </Section>
    </>
  );
}
