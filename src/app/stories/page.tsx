import { Column, Grid, Heading, Media, SmartLink, Text } from "@once-ui-system/core";
import { DonateBand, EasyRead, Eyebrow, PaintHero, Section } from "@/components/blocks";
import { asset } from "@/content/assets";
import { stories } from "@/content/stories";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Stories",
  description: "Mothers and families in their own words: early intervention, therapy through lockdown and the SAMADHAN mothers' group.",
  path: "/stories",
});

export default function Stories() {
  return (
    <>
      <PaintHero art="art-fish" eyebrow="Stories" title="In their own words" intro="Families tell it better than we can." />
      <Section paddingY="64">
        <EasyRead>Here, mothers tell us what changed for their family.</EasyRead>
        <Column gap="64">
          {stories.map((s, i) => {
            const a = asset(s.image);
            return (
              <SmartLink key={s.slug} href={`/stories/${s.slug}`} unstyled className="link-card">
                <Grid columns="2" m={{ columns: "1" }} gap="48" style={{ alignItems: "center" }}>
                  <div className="frame" style={{ order: i % 2 ? 2 : 0 }}>
                    <Media src={a.src} alt="" aspectRatio="3 / 2" sizes="(max-width: 900px) 100vw, 50vw" />
                  </div>
                  <Column gap="16">
                    <Eyebrow>{s.programme.label}</Eyebrow>
                    <Text className="quote link-card__title" onBackground="brand-strong">
                      “{s.quote}”
                    </Text>
                    <Heading as="h2" variant="heading-strong-l">
                      {s.person}, {s.role}
                    </Heading>
                  </Column>
                </Grid>
              </SmartLink>
            );
          })}
        </Column>
        <Text variant="body-default-s" onBackground="neutral-weak">
          First names only, as published in our annual report. We never show a child without their family's consent.
        </Text>
      </Section>
      <DonateBand />
    </>
  );
}
