import { Column, Grid, Media, Text } from "@once-ui-system/core";
import { notFound } from "next/navigation";
import { Breadcrumb, DonateBand, Eyebrow, LinkCard, Quote, Section, SectionTitle } from "@/components/blocks";
import { asset } from "@/content/assets";
import { getStory, stories } from "@/content/stories";
import { pageMeta } from "@/lib/meta";

export const dynamicParams = false;

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const s = getStory((await params).slug);
  if (!s) return {};
  return pageMeta({ title: `${s.title}: ${s.person}`, description: s.quote, path: `/stories/${s.slug}` });
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getStory((await params).slug);
  if (!s) notFound();
  const a = asset(s.image);
  const others = stories.filter((o) => o.slug !== s.slug);

  return (
    <>
      <Section paddingY="40" width="l">
        <Breadcrumb items={[{ label: "Stories", href: "/stories" }, { label: s.person }]} />
        <Column gap="16">
          <Eyebrow>{s.programme.label}</Eyebrow>
          <Text as="h1" variant="display-strong-l">
            {s.title}
          </Text>
        </Column>
        <Column as="figure" gap="8" margin="0">
          <div className="frame">
            <Media src={a.src} alt={a.alt} aspectRatio="21 / 9" priority sizes="(max-width: 1200px) 100vw, 1200px" />
          </div>
          <Text as="figcaption" variant="label-default-s" onBackground="neutral-weak">
            {s.imageNote}
          </Text>
        </Column>
        <Grid columns="2" m={{ columns: "1" }} gap="48">
          <Quote text={s.quote} by={`${s.person}, ${s.role}`} />
          <Column gap="16">
            {s.body.map((p) => (
              <Text key={p} variant="body-default-l" onBackground="neutral-medium">
                {p}
              </Text>
            ))}
          </Column>
        </Grid>
      </Section>
      <Section tone="surface" label="More stories">
        <SectionTitle title="More stories" />
        <Grid columns="3" m={{ columns: "1" }} gap="32">
          {others.map((o) => (
            <LinkCard key={o.slug} href={`/stories/${o.slug}`} image={o.image} title={o.title} body={`${o.person}, ${o.role}`} />
          ))}
          <LinkCard href={s.programme.href} image="children-play-garden" title={s.programme.label} body="How this programme works" />
        </Grid>
      </Section>
      <DonateBand />
    </>
  );
}
