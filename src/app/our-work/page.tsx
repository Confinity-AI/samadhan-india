import { Column, Heading, Media, Row, SmartLink, Text } from "@once-ui-system/core";
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
      <PaintHero art="art-strokes" focus="30% 50%" eyebrow="Our work" title="Our five programmes" intro="From the first months of life to the teenage years, with support for mothers too.">
        <EasyRead>We help children from birth to age 16. We help their mothers too.</EasyRead>
      </PaintHero>
      <Section paddingY="64">
        <Column gap="80" s={{ gap: "56" }}>
          {programmes.map((p, i) => {
            const a = asset(p.hero);
            const width = Math.min(480, a.width, Math.round((a.height * 4) / 5));
            return (
              <Row
                key={p.slug}
                as="article"
                gap="56"
                vertical="center"
                direction={i % 2 ? "row-reverse" : "row"}
                m={{ direction: "column", horizontal: "start", gap: "24" }}
              >
                <SmartLink href={`/our-work/${p.slug}`} unstyled className="link-card" style={{ flex: "0 0 auto", maxWidth: width }} tabIndex={-1} aria-hidden>
                  <div className={a.mono ? "frame frame--mono" : "frame"}>
                    <Media src={a.src} alt={a.alt} aspectRatio="4 / 5" sizes={`(max-width: 1024px) 100vw, ${width}px`} />
                  </div>
                </SmartLink>
                <Column flex={1} gap="16" fillWidth>
                  <Eyebrow>{p.kicker}</Eyebrow>
                  <Heading as="h2" variant="display-strong-s">
                    {p.title}
                  </Heading>
                  <Text variant="body-default-xl" onBackground="neutral-weak">
                    {p.short}
                  </Text>
                  <Row as="dl" gap="32" wrap style={{ margin: 0 }}>
                    {p.ages && (
                      <Column gap="2">
                        <Text as="dt" variant="label-default-s" onBackground="neutral-weak">Ages</Text>
                        <Text as="dd" variant="heading-strong-s" style={{ margin: 0 }}>{p.ages}</Text>
                      </Column>
                    )}
                    <Column gap="2">
                      <Text as="dt" variant="label-default-s" onBackground="neutral-weak">Where</Text>
                      <Text as="dd" variant="heading-strong-s" style={{ margin: 0 }}>{p.where}</Text>
                    </Column>
                  </Row>
                  <ul className="ruled-list" style={{ maxWidth: 480 }}>
                    {p.steps.map((s) => (
                      <li key={s.title}>
                        <Text as="p" variant="body-default-m" style={{ margin: 0, paddingBlock: 10 }}>
                          {s.title}
                        </Text>
                      </li>
                    ))}
                  </ul>
                  <SmartLink href={`/our-work/${p.slug}`} suffixIcon="arrowRight">
                    {`More about ${p.title.toLowerCase()}`}
                  </SmartLink>
                </Column>
              </Row>
            );
          })}
        </Column>
      </Section>
      <DonateBand art="art-fish" />
    </>
  );
}
