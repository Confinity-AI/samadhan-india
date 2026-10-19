import { Column, Grid, Heading, Media, Row, SmartLink, Text } from "@once-ui-system/core";
import { DonateBand, EasyRead, Eyebrow, PaintHero, Section } from "@/components/blocks";
import { asset } from "@/content/assets";
import { programmes } from "@/content/programmes";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Our work",
  description:
    "Early intervention, therapy, special education, support for mothers and community outreach for children with intellectual disabilities in New Delhi.",
  path: "/our-work",
});

export default function OurWork() {
  return (
    <>
      <PaintHero art="art-strokes" eyebrow="Our work" title="Our five programmes" intro="From the first months of life to the teenage years, with support for mothers too." />
      <Section paddingY="64">
        <EasyRead>We help children from birth to age 16. We help their mothers too.</EasyRead>
        <Column gap="80">
          {programmes.map((p, i) => {
            const a = asset(p.hero);
            return (
              <Grid key={p.slug} columns="2" m={{ columns: "1" }} gap="48" style={{ alignItems: "center" }}>
                <SmartLink href={`/our-work/${p.slug}`} unstyled className="link-card" style={{ order: i % 2 ? 2 : 0 }}>
                  <div className="frame">
                    <Media src={a.src} alt={a.alt} aspectRatio="4 / 3" sizes="(max-width: 900px) 100vw, 50vw" />
                  </div>
                </SmartLink>
                <Column gap="16">
                  <Row gap="16" vertical="center">
                    <Text className="journey__num" style={{ fontSize: 56 }} aria-hidden>
                      {`0${i + 1}`}
                    </Text>
                    <Eyebrow>{p.kicker}</Eyebrow>
                  </Row>
                  <Heading as="h2" variant="display-strong-s">
                    {p.title}
                  </Heading>
                  <Text variant="body-default-xl" onBackground="neutral-weak">
                    {p.short}
                  </Text>
                  <SmartLink href={`/our-work/${p.slug}`} suffixIcon="arrowRight">
                    {`More about ${p.title.toLowerCase()}`}
                  </SmartLink>
                </Column>
              </Grid>
            );
          })}
        </Column>
      </Section>
      <DonateBand />
    </>
  );
}
