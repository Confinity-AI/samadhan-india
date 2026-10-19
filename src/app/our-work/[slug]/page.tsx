import { Button, Column, Grid, Heading, Media, Row, SmartLink, Text } from "@once-ui-system/core";
import { notFound } from "next/navigation";
import { ContactButtons, DonateBand, LinkCard, Photo, PhotoHero, Quote, Section, SectionTitle, Stat } from "@/components/blocks";
import { asset } from "@/content/assets";
import { getProgramme, programmes } from "@/content/programmes";
import { whatsapp } from "@/content/site";
import { pageMeta } from "@/lib/meta";

const orderLink = `${whatsapp.base}?text=${encodeURIComponent("Hello, I would like to order from the SAMADHAN mothers' group.")}`;

const products = [
  { image: "laddoo-boxes", title: "Laddoos", body: "Laddoos made and packed by the mothers' group." },
  { image: "mothers-kitchen", title: "Spices and Nutri-mix", body: "SAMADHAN Spices from the mothers at our Dwarka centre, and Nutri-mix made by the group." },
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
  const shop = p.slug === "mothers";
  const gallery = p.gallery.filter((id) => id !== p.hero && !(shop && products.some((pr) => pr.image === id)));

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

      {shop && (
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
            Companies can order in bulk. Message us early for Diwali.
          </Text>
        </Section>
      )}

      {gallery.length > 0 && (
        <Section label="In pictures" tone={shop ? "surface" : "page"}>
          {gallery.length === 3 ? (
            <Grid columns="2" m={{ columns: "1" }} gap="48" style={{ alignItems: "center" }}>
              <SectionTitle title="In pictures" intro={`${gallery.map((id) => asset(id).caption).join(". ")}.`} />
              <div className="mosaic">
                {gallery.map((id, i) => {
                  const a = asset(id);
                  return (
                    <div key={id} className={a.mono ? "frame frame--mono" : "frame"}>
                      <Media
                        src={a.src}
                        alt={a.alt}
                        fillWidth
                        aspectRatio="auto"
                        sizes={i === 0 ? "(max-width: 1024px) 100vw, 580px" : "(max-width: 1024px) 50vw, 290px"}
                        style={{ height: "100%" }}
                      />
                    </div>
                  );
                })}
              </div>
            </Grid>
          ) : gallery.length === 2 ? (
            <Grid columns="2" m={{ columns: "1" }} gap="48" style={{ alignItems: "center" }}>
              <SectionTitle title="In pictures" intro={`${gallery.map((id) => asset(id).caption).join(". ")}.`} />
              <Grid columns="2" gap="12">
                {gallery.map((id) => (
                  <Photo key={id} id={id} ratio="3 / 4" caption={false} sizes="(max-width: 1024px) 50vw, 290px" />
                ))}
              </Grid>
            </Grid>
          ) : (
            <>
              <SectionTitle title="In pictures" />
              <div className="masonry" style={{ columns: "3 160px" }}>
                {gallery.map((id) => (
                  <Photo key={id} id={id} sizes="(max-width: 600px) 50vw, 400px" />
                ))}
              </div>
            </>
          )}
        </Section>
      )}

      <Section tone={shop ? "page" : "surface"} label="In numbers and words">
        {p.quote ? (
          <Grid columns="2" m={{ columns: "1" }} gap="56" style={{ alignItems: "center" }}>
            <Grid columns="2" gap="32">
              {p.facts.map((f) => (
                <Stat key={f.label} value={f.value} label={f.label} />
              ))}
            </Grid>
            <Quote text={p.quote.text} by={p.quote.by} />
          </Grid>
        ) : (
          <Grid columns="2" gap="32" style={{ maxWidth: 640 }}>
            {p.facts.map((f) => (
              <Stat key={f.label} value={f.value} label={f.label} />
            ))}
          </Grid>
        )}
        <Grid columns="2" m={{ columns: "1" }} gap="32" padding="40" s={{ padding: "24" }} radius="l" background={shop ? "surface" : "page"} style={{ alignItems: "center" }}>
          <Column gap="8">
            <Heading as="h2" variant="display-strong-xs">Need help for your child?</Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">Call either centre, or send us a WhatsApp message.</Text>
          </Column>
          <Column gap="16">
            <ContactButtons />
            <SmartLink href="/families" suffixIcon="arrowRight">
              What to bring and what it costs
            </SmartLink>
          </Column>
        </Grid>
      </Section>

      <Section tone={shop ? "surface" : "page"} label="More of our work">
        <Row horizontal="between" vertical="end" wrap gap="16">
          <SectionTitle title="More of our work" />
          <Button href="/our-work" variant="tertiary" suffixIcon="arrowRight">All programmes</Button>
        </Row>
        <Grid columns="4" m={{ columns: "2" }} s={{ columns: "1" }} gap="24" className="rail">
          {others.map((o) => (
            <LinkCard key={o.slug} href={`/our-work/${o.slug}`} image={o.thumb ?? o.hero} title={o.title} body={o.short} />
          ))}
        </Grid>
      </Section>

      <DonateBand art={p.slug === "community" ? "art-flowers" : "art-trees"} />
    </>
  );
}
