import { Column, Heading, Media, Row, SmartLink, Text } from "@once-ui-system/core";
import { DonateBand, EasyRead, Eyebrow, PaintHero, Section } from "@/components/blocks";
import { asset } from "@/content/assets";
import { stories } from "@/content/stories";
import { pageMeta } from "@/lib/meta";
import { storyImage } from "./story-art";

export const metadata = pageMeta({
  title: "Stories",
  description: "Mothers and families in their own words: early intervention, therapy through lockdown and the SAMADHAN mothers' group.",
  path: "/stories",
});

export default function Stories() {
  return (
    <>
      <PaintHero art="art-fish" focus="35% 45%" eyebrow="Stories" title="Mothers, in their own words">
        <EasyRead>Mothers say what changed for their family.</EasyRead>
      </PaintHero>
      <Section paddingY="64">
        <Column gap="64" s={{ gap: "48" }}>
          {stories.map((s, i) => {
            const a = asset(storyImage(s));
            return (
              <SmartLink key={s.slug} href={`/stories/${s.slug}`} unstyled className="link-card">
                <Row gap="48" vertical="center" direction={i % 2 ? "row-reverse" : "row"} m={{ direction: "column", horizontal: "start", gap: "20" }}>
                  <Column flex={1} fillWidth>
                    <div className={a.mono ? "frame frame--mono" : "frame"}>
                      <Media src={a.src} alt="" aspectRatio="3 / 2" sizes="(max-width: 1024px) 100vw, 50vw" />
                    </div>
                  </Column>
                  <Column flex={1} gap="16" fillWidth>
                    <Eyebrow>{s.programme.label}</Eyebrow>
                    <Text className="quote link-card__title" onBackground="brand-strong">
                      “{s.quote}”
                    </Text>
                    <Heading as="h2" variant="heading-strong-l">
                      {s.person}, {s.role}
                    </Heading>
                  </Column>
                </Row>
              </SmartLink>
            );
          })}
        </Column>
        <Text variant="body-default-s" onBackground="neutral-weak">
          Children are named by first name only, as published in our annual report.
        </Text>
      </Section>
      <DonateBand art="art-trees" />
    </>
  );
}
