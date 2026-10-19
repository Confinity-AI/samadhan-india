import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { notFound } from "next/navigation";
import { ContactButtons, DonateBand, LinkCard, Photo, PhotoHero, Quote, Section, SectionTitle, Stat } from "@/components/blocks";
import { getProgramme, programmes } from "@/content/programmes";
import { whatsapp } from "@/content/site";
import { pageMeta } from "@/lib/meta";

const orderLink = `${whatsapp.href}?text=${encodeURIComponent("Hello, I would like to order from the SAMADHAN mothers' group.")}`;

const products = [
  { image: "laddoo-boxes", title: "Laddoos", body: "Nutritious laddoos, evaluated by the Nutrition Foundation of India. Boxed for Diwali and office gifts." },
  { image: "mothers-kitchen", title: "Spices and Nutri-mix", body: "Samadhan Spices and Nutri-mix, made by the mothers at our Dwarka centre." },
  { image: "papier-mache-birds", title: "Papier-mâché", body: "Painted birds and decorations, made by hand." },
];

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
        <SectionTitle eyebrow="How it works" title="What we do" />
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

      {p.slug === "mothers" && (
        <Section id="shop" label="What the mothers make">
          <Row horizontal="between" vertical="end" wrap gap="24">
            <SectionTitle eyebrow="Buy from the mothers" title="What the mothers make" intro="Message us to ask what is available and what it costs." />
            <Button href={orderLink} prefixIcon="whatsapp" size="l">
              Order on WhatsApp
            </Button>
          </Row>
          <Grid columns="3" m={{ columns: "1" }} gap="24">
            {products.map((pr) => (
              <Column key={pr.title} gap="12">
                <Photo id={pr.image} ratio="4 / 3" caption={false} sizes="(max-width: 900px) 100vw, 420px" />
                <Heading as="h3" variant="heading-strong-l">
                  {pr.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {pr.body}
                </Text>
              </Column>
            ))}
          </Grid>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Companies can order in bulk. For Diwali 2016, one company ordered 250 boxes of laddoos.
          </Text>
        </Section>
      )}

      <Section label="Gallery">
        <div className="masonry">
          {p.gallery.filter((id) => id !== p.hero && !(p.slug === "mothers" && products.some((pr) => pr.image === id))).map((id) => (
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
              <Text variant="body-default-l" onBackground="neutral-weak">Call either centre, or send us a WhatsApp message.</Text>
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
