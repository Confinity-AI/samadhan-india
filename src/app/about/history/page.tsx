import { Column, Grid, Media, Text } from "@once-ui-system/core";
import { DonateBand, EasyRead, PaintHero, Section } from "@/components/blocks";
import { asset } from "@/content/assets";
import { milestones } from "@/content/history";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Our history, 1981 to today",
  description: "SAMADHAN's milestones from its registration in 1981 to 45 years of work in Dakshinpuri and Dwarka, New Delhi.",
  path: "/about/history",
});

const photos = ["centre-dakshinpuri", "centre-dwarka", "boy-drawing-floor"];

export default function History() {
  return (
    <>
      <PaintHero art="art-flowers" focus="25% 40%" zoom={1.8} flip crumbs={[{ label: "About", href: "/about" }, { label: "Our history" }]} eyebrow="Our history" title="45 years in Delhi, 1981 to 2026">
        <EasyRead>This is what happened at SAMADHAN, year by year.</EasyRead>
      </PaintHero>
      <Section paddingY="64">
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
          <Column as="figure" gap="12" margin="0" m={{ hide: true }} style={{ position: "sticky", top: 96, alignSelf: "start" }}>
            <div className="mosaic">
              {photos.map((id, i) => {
                const a = asset(id);
                return (
                  <div key={id} className="frame">
                    <Media src={a.src} alt={a.alt} fillWidth aspectRatio="auto" sizes={i === 0 ? "580px" : "290px"} style={{ height: "100%" }} />
                  </div>
                );
              })}
            </div>
            <Text as="figcaption" variant="label-default-s" onBackground="neutral-weak">
              The Dakshinpuri centre, opened in 1994. The Dwarka centre, completed in 2003. A child at home during the 2020 lockdown.
            </Text>
          </Column>
        </Grid>
      </Section>
      <DonateBand art="art-trees" />
    </>
  );
}
