import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { notFound } from "next/navigation";
import { ContactButtons, DonateBand, LinkCard, Photo, PhotoHero, Quote, Section, SectionTitle, Stat } from "@/components/blocks";
import { getProgramme, programmes } from "@/content/programmes";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProgramme((await params).slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.metaDescription, path: `/our-work/${p.slug}` });
}

export default async function ProgrammePage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getProgramme((await params).slug);
  if (!p) notFound();
  const others = programmes.filter((o) => o.slug !== p.slug);

  return (
    <>
      <PhotoHero
        crumbs={[{ label: "Our work", href: "/our-work" }, { label: p.title }]}
        eyebrow={p.kicker}
        title={p.title}
        intro={p.short}
        easyRead={p.easyRead}
        image={p.hero}
        actions={
          <Row gap="16" wrap>
            {p.ages && (
              <Column gap="2">
                <Text variant="label-default-s" onBackground="neutral-weak">Ages</Text>
                <Text variant="heading-strong-s">{p.ages}</Text>
              </Column>
            )}
            <Column gap="2">
              <Text variant="label-default-s" onBackground="neutral-weak">Where</Text>
              <Text variant="heading-strong-s">{p.where}</Text>
            </Column>
          </Row>
        }
      />

      <Section tone="surface" label="How it works">
        <SectionTitle eyebrow="How it works" title="What happens, step by step" />
        <Grid columns="4" m={{ columns: "2" }} s={{ columns: "1" }} gap="24">
          {p.steps.map((s, i) => (
            <Column key={s.title} gap="12" paddingTop="16" borderTop="accent-alpha-strong">
              <Text className="journey__num" style={{ fontSize: 44 }} aria-hidden>
                {`0${i + 1}`}
              </Text>
              <Heading as="h3" variant="heading-strong-l">
                {s.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {s.body}
              </Text>
            </Column>
          ))}
        </Grid>
      </Section>

      <Section label="Gallery">
        <div className="masonry">
          {p.gallery.map((id) => (
            <Photo key={id} id={id} sizes="(max-width: 900px) 50vw, 360px" />
          ))}
        </div>
      </Section>

      <Section tone="surface" label="In numbers and words">
        <Grid columns="2" m={{ columns: "1" }} gap="56" style={{ alignItems: "center" }}>
          <Grid columns="2" gap="32">
            {p.facts.map((f) => (
              <Stat key={f.label} value={f.value} label={f.label} />
            ))}
          </Grid>
          {p.quote ? <Quote text={p.quote.text} by={p.quote.by} /> : (
            <Column gap="16">
              <Heading as="h2" variant="display-strong-xs">Need help for your child?</Heading>
              <ContactButtons />
            </Column>
          )}
        </Grid>
      </Section>

      {p.quote && (
        <Section label="Get help">
          <Grid columns="2" m={{ columns: "1" }} gap="32" style={{ alignItems: "center" }}>
            <Heading as="h2" variant="display-strong-s">Need help for your child?</Heading>
            <Column gap="16">
              <Text variant="body-default-l" onBackground="neutral-weak">Call or WhatsApp either centre.</Text>
              <ContactButtons />
            </Column>
          </Grid>
        </Section>
      )}

      <Section tone="surface" label="More of our work">
        <Row horizontal="between" vertical="end" wrap gap="16">
          <SectionTitle title="More of our work" />
          <Button href="/our-work" variant="tertiary" suffixIcon="arrowRight">All programmes</Button>
        </Row>
        <Grid columns="4" m={{ columns: "2" }} s={{ columns: "1" }} gap="24">
          {others.map((o) => (
            <LinkCard key={o.slug} href={`/our-work/${o.slug}`} image={o.hero} title={o.title} body={o.short} />
          ))}
        </Grid>
      </Section>

      <DonateBand />
    </>
  );
}
