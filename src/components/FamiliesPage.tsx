import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { ContactButtons, EasyRead, Eyebrow, Photo, Section } from "@/components/blocks";
import type { FamiliesCopy } from "@/content/families";
import { centres } from "@/content/site";

export function FamiliesPage({ copy }: { copy: FamiliesCopy }) {
  const hi = copy.lang === "hi";
  const lang = hi ? "hi" : undefined;
  const cls = hi ? "hindi" : undefined;

  return (
    <Column fillWidth lang={copy.lang === "hi" ? "hi" : "en-IN"} className={cls}>
      <Column fillWidth horizontal="center" paddingX="24" paddingTop="40" paddingBottom="64">
        <Grid maxWidth="xl" columns="2" m={{ columns: "1" }} gap="48" style={{ alignItems: "center" }}>
          <Column gap="20">
            <Row horizontal="between" vertical="center" gap="16" wrap>
              <Eyebrow>{copy.eyebrow}</Eyebrow>
              <Button href={copy.switchHref} variant="secondary" size="s" hrefLang={hi ? "en" : "hi"}>
                <span lang={hi ? "en" : "hi"}>{copy.switchLabel}</span>
              </Button>
            </Row>
            <Heading as="h1" variant="display-strong-l" className={cls}>
              {copy.title}
            </Heading>
            <Text variant="body-default-xl" onBackground="neutral-weak" className={cls}>
              {copy.intro}
            </Text>
            <ContactButtons lang={lang} />
            <EasyRead lang={lang}>{copy.easyRead}</EasyRead>
          </Column>
          <Photo id="girl-early-intervention" ratio="4 / 5" caption={false} priority sizes="(max-width: 900px) 100vw, 560px" />
        </Grid>
      </Column>

      <Section tone="surface" label={copy.signsTitle}>
        <Grid columns="2" m={{ columns: "1" }} gap="56">
          <Column gap="16">
            <Heading as="h2" variant="display-strong-s" className={cls}>{copy.signsTitle}</Heading>
            {copy.signs.map((s) => (
              <Row key={s} paddingY="12" borderBottom><Text variant="body-default-l" className={cls}>{s}</Text></Row>
            ))}
          </Column>
          <Column gap="24">
            <Heading as="h2" variant="display-strong-s" className={cls}>{copy.stepsTitle}</Heading>
            {copy.steps.map((s, i) => (
              <Row key={s.title} gap="20" vertical="start">
                <Text className="journey__num" style={{ fontSize: 48 }} aria-hidden>{i + 1}</Text>
                <Column gap="4">
                  <Text variant="heading-strong-l" className={cls}>{s.title}</Text>
                  <Text variant="body-default-l" onBackground="neutral-weak" className={cls}>{s.body}</Text>
                </Column>
              </Row>
            ))}
          </Column>
        </Grid>
      </Section>

      <Section label={copy.costTitle}>
        <Grid columns="3" m={{ columns: "1" }} gap="32">
          <Column gap="12" padding="24" radius="l" background="accent-alpha-weak" border="accent-alpha-medium">
            <Heading as="h2" variant="heading-strong-xl" className={cls}>{copy.costTitle}</Heading>
            <Text variant="body-default-l" className={cls}>{copy.cost}</Text>
          </Column>
          <Column gap="12" padding="24" radius="l" background="surface" border>
            <Heading as="h2" variant="heading-strong-xl" className={cls}>{copy.bringTitle}</Heading>
            {copy.bring.map((b) => (
              <Text key={b} variant="body-default-l" className={cls}>· {b}</Text>
            ))}
          </Column>
          <Column gap="12" padding="24" radius="l" background="surface" border>
            <Heading as="h2" variant="heading-strong-xl" className={cls}>{copy.schemesTitle}</Heading>
            {copy.schemes.map((s) => (
              <Column key={s.title} gap="2">
                <Text variant="heading-strong-s" className={cls}>{s.title}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak" className={cls}>{s.body}</Text>
              </Column>
            ))}
          </Column>
        </Grid>
      </Section>

      <Section tone="surface" label={copy.centresTitle}>
        <Heading as="h2" variant="display-strong-s" className={cls}>{copy.centresTitle}</Heading>
        <Grid columns="2" m={{ columns: "1" }} gap="32">
          {centres.map((c) => (
            <Grid key={c.id} columns="2" s={{ columns: "1" }} gap="20" style={{ alignItems: "center" }}>
              <Photo id={c.photo} ratio="1 / 1" caption={false} sizes="300px" />
              <Column gap="8">
                <Text variant="heading-strong-xl" className={cls}>{hi ? c.nameHi : c.name}</Text>
                {c.address.map((l) => (
                  <Text key={l} variant="body-default-m" onBackground="neutral-weak">{l}</Text>
                ))}
                {c.phones.map((p) => (
                  <Button key={p.href} href={p.href} variant="secondary" prefixIcon="phone" size="s" style={{ alignSelf: "start" }}>{p.label}</Button>
                ))}
                <Button href={c.map} variant="tertiary" prefixIcon="mapPin" size="s" style={{ alignSelf: "start" }}>
                  {hi ? "रास्ता देखें" : "Directions"}
                </Button>
              </Column>
            </Grid>
          ))}
        </Grid>
      </Section>
    </Column>
  );
}
