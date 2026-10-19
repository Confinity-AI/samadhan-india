import { Column, Grid, Text } from "@once-ui-system/core";
import { Breadcrumb, EasyRead, PaintHero, Photo, Section } from "@/components/blocks";
import { milestones } from "@/content/history";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Our history, 1981 to today",
  description: "SAMADHAN's milestones from its registration in 1981 to 45 years of work in Dakshinpuri and Dwarka, New Delhi.",
  path: "/about/history",
});

const photos = ["centre-dakshinpuri", "child-handprint-painting", "mothers-kitchen", "centre-dwarka", "boy-drawing-floor"];

export default function History() {
  return (
    <>
      <PaintHero art="art-trees" eyebrow="Our history" title="45 years in Delhi, 1981 to 2026" />
      <Section paddingY="64">
        <Breadcrumb items={[{ label: "About", href: "/about" }, { label: "Our history" }]} />
        <EasyRead>This is what happened at SAMADHAN, year by year.</EasyRead>
        <Grid columns="2" m={{ columns: "1" }} gap="56">
          <ol className="timeline">
            {milestones.map((m) => (
              <li key={m.year}>
                <Column gap="4">
                  <Text className="stat-value" onBackground="brand-strong" style={{ fontSize: 32 }}>
                    {m.year}
                  </Text>
                  <Text variant="body-default-l" onBackground="neutral-medium">
                    {m.text}
                  </Text>
                </Column>
              </li>
            ))}
          </ol>
          <Column gap="16" m={{ hide: true }}>
            {photos.map((id) => (
              <Photo key={id} id={id} sizes="560px" />
            ))}
          </Column>
        </Grid>
      </Section>
    </>
  );
}
