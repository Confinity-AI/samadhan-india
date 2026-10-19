import { Column, Grid, Text } from "@once-ui-system/core";
import { notFound } from "next/navigation";
import { DonateBand, LinkCard, PaintHero, Quote, Section, SectionTitle } from "@/components/blocks";
import { getStory, stories } from "@/content/stories";
import { pageMeta } from "@/lib/meta";
import { storyImage } from "../story-art";

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
  const image = storyImage(s);
  const others = stories.filter((o) => o.slug !== s.slug);

  return (
    <>
      <PaintHero
        art={image}
        focus="50% 50%"
        flip={stories.indexOf(s) % 2 === 1}
        crumbs={[{ label: "Stories", href: "/stories" }, { label: s.title }]}
        eyebrow={s.programme.label}
        title={s.title}
      />
      <Section paddingY="64" width="l">
        <Grid columns="2" m={{ columns: "1" }} gap="48">
          <Quote text={s.quote} by={`${s.person}, ${s.role}`} />
          <Column gap="16">
            {s.body.map((p) => (
              <Text key={p} variant="body-default-l" onBackground="neutral-medium">
                {p}
              </Text>
            ))}
            <Text variant="label-default-s" onBackground="neutral-weak">
              {s.imageNote}
            </Text>
          </Column>
        </Grid>
      </Section>
      <Section tone="surface" label="More stories">
        <SectionTitle title="More stories" />
        <Grid columns="3" s={{ columns: "1" }} gap="32" className="rail">
          {others.map((o) => (
            <LinkCard key={o.slug} href={`/stories/${o.slug}`} image={storyImage(o)} title={o.title} body={`${o.person}, ${o.role}`} />
          ))}
          <LinkCard href={s.programme.href} image="children-play-garden" title={s.programme.label} body="How this programme works" />
        </Grid>
      </Section>
      <DonateBand art={image === "art-trees" ? "art-flowers" : "art-trees"} />
    </>
  );
}
