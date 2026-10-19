import { Button, Column, Grid, Heading, Row, SmartLink, Text } from "@once-ui-system/core";
import { ContactButtons, EasyRead, PaintHero, Photo, Section } from "@/components/blocks";
import { asset } from "@/content/assets";
import { centres, org } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Contact",
  description: "Call, WhatsApp, email or visit SAMADHAN's centres in Dakshinpuri (110062) and Dwarka (110075), New Delhi.",
  path: "/contact",
});

const photoWidth = Math.min(...centres.map((c) => asset(c.photo).width));

export default function Contact() {
  return (
    <>
      <PaintHero art="art-trees" focus="85% 30%" zoom={2} flip eyebrow="Contact" title="Call, message or visit" intro="Two centres in South and South-West Delhi.">
        <EasyRead>Call us or send a WhatsApp message. You can also visit our centres.</EasyRead>
      </PaintHero>
      <Section paddingY="64">
        <ContactButtons />
        <Row gap="12" vertical="center" wrap>
          <Text variant="body-default-l" onBackground="neutral-weak">
            Or email us:
          </Text>
          <Button href={`mailto:${org.email}`} variant="tertiary" prefixIcon="mail">
            {org.email}
          </Button>
        </Row>
        <Grid columns="2" m={{ columns: "1" }} gap="40">
          {centres.map((c) => (
            <Column key={c.id} gap="16">
              <div style={{ width: "100%", maxWidth: photoWidth }}>
                <Photo id={c.photo} ratio="4 / 3" caption={false} sizes={`(max-width: 768px) 100vw, ${photoWidth}px`} />
              </div>
              <Heading as="h2" variant="display-strong-xs">{c.name}</Heading>
              <Text variant="label-default-m" onBackground="accent-medium">{c.role}</Text>
              <Column gap="4">
                {c.address.map((l) => (
                  <Text key={l} variant="body-default-l">{l}</Text>
                ))}
              </Column>
              <Row gap="8" wrap>
                {c.phones.map((p) => (
                  <Button key={p.href} href={p.href} variant="secondary" prefixIcon="phone">{p.label}</Button>
                ))}
                <Button href={c.map} variant="secondary" prefixIcon="mapPin">Directions</Button>
              </Row>
            </Column>
          ))}
        </Grid>
      </Section>
      <Section tone="surface" paddingY="40" label="Before you visit">
        <Row gap="24" vertical="center" wrap s={{ direction: "column", horizontal: "start", gap: "12" }}>
          <Heading as="h2" variant="heading-strong-l">Before you visit</Heading>
          <SmartLink href="/families" suffixIcon="arrowRight">What to bring and what it costs</SmartLink>
          <SmartLink href="/donate" suffixIcon="arrowRight">Donate</SmartLink>
          <SmartLink href="/get-involved/volunteer" suffixIcon="arrowRight">Volunteer with us</SmartLink>
        </Row>
      </Section>
    </>
  );
}
