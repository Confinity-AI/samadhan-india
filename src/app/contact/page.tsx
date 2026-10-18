import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { ContactButtons, EasyRead, PaintHero, Photo, Section } from "@/components/blocks";
import { centres, org } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Contact",
  description: "Call, WhatsApp, email or visit SAMADHAN's centres in Dakshinpuri (110062) and Dwarka (110075), New Delhi.",
  path: "/contact",
});

export default function Contact() {
  return (
    <>
      <PaintHero art="art-flowers" eyebrow="Contact" title="Call, message or visit" intro="Two centres in South and South-West Delhi." />
      <Section paddingY="64">
        <EasyRead>Call us or send a WhatsApp message. You can also visit our centres.</EasyRead>
        <ContactButtons />
        <Grid columns="2" m={{ columns: "1" }} gap="32">
          {centres.map((c) => (
            <Column key={c.id} gap="16">
              <Photo id={c.photo} ratio="4 / 3" caption={false} sizes="(max-width: 900px) 100vw, 600px" />
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
                <Button href={c.map} variant="tertiary" prefixIcon="mapPin">Directions</Button>
              </Row>
            </Column>
          ))}
        </Grid>
        <Column gap="8" padding="24" radius="l" background="surface" border>
          <Text variant="label-default-s" onBackground="neutral-weak">Email</Text>
          <Button href={`mailto:${org.email}`} variant="tertiary" prefixIcon="mail" style={{ alignSelf: "start" }}>{org.email}</Button>
        </Column>
      </Section>
    </>
  );
}
