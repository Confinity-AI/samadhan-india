import { Button, Column, Grid, Heading, Row, SmartLink, Text } from "@once-ui-system/core";
import { ContactButtons, EasyRead, Eyebrow, Photo, Section, StoryCard } from "@/components/blocks";
import type { FamiliesCopy } from "@/content/families";
import { centres } from "@/content/site";
import { getStory } from "@/content/stories";

export function FamiliesPage({ copy }: { copy: FamiliesCopy }) {
  const hi = copy.lang === "hi";
  const lang = hi ? "hi" : undefined;
  const cls = hi ? "hindi" : undefined;
  const story = hi ? undefined : getStory("navya");
  const jumps = [
    { href: "#cost", label: copy.jump.cost },
    { href: "#centres", label: copy.jump.centres },
    { href: "#bring", label: copy.jump.bring },
  ];

  return (
    <Column fillWidth lang={copy.lang === "hi" ? "hi" : "en-IN"} className={cls}>
      <Column fillWidth horizontal="center" paddingX="24" paddingTop="40" paddingBottom="64">
        <Grid maxWidth="xl" columns="2" m={{ columns: "1" }} gap="48" style={{ alignItems: "center" }}>
          <Column gap="20">
            <Row>
              <Button href={copy.switchHref} variant="secondary" size="s" hrefLang={hi ? "en" : "hi"}>
                <span lang={hi ? "en" : "hi"} className={hi ? undefined : "hindi"}>
                  {copy.switchLabel}
                </span>
              </Button>
            </Row>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <Heading as="h1" variant="display-strong-l" className={cls}>
              {copy.title}
            </Heading>
            <Text variant="body-default-xl" onBackground="neutral-weak" className={cls}>
              {copy.intro}
            </Text>
            <ContactButtons lang={lang} />
            <Row as="nav" gap="24" wrap aria-label={copy.jump.label}>
              {jumps.map((j) => (
                <SmartLink key={j.href} href={j.href} suffixIcon="chevronDown">
                  <span className={cls}>{j.label}</span>
                </SmartLink>
              ))}
            </Row>
            <EasyRead lang={lang}>{copy.easyRead}</EasyRead>
          </Column>
          <Row lang="en-IN" horizontal="center">
            <Photo id="girl-early-intervention" caption={false} cap priority sizes="(max-width: 900px) 100vw, 420px" />
          </Row>
        </Grid>
      </Column>

      <Section tone="surface" label={copy.signsTitle}>
        <Grid columns="2" m={{ columns: "1" }} gap="56">
          <Column gap="16">
            <Heading as="h2" variant="display-strong-s" className={cls}>{copy.signsTitle}</Heading>
            <ul className="ruled-list">
              {copy.signs.map((s) => (
                <li key={s}>
                  <Text as="p" variant="body-default-l" className={cls} style={{ margin: 0, paddingBlock: 12 }}>{s}</Text>
                </li>
              ))}
            </ul>
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
            {story && (
              <Column gap="12" paddingTop="16">
                <Heading as="h3" variant="heading-strong-m" className={cls}>{copy.storyTitle}</Heading>
                <StoryCard href={`/stories/${story.slug}`} quote={story.quote} by={`${story.person}, ${story.role}`} background="page" />
              </Column>
            )}
          </Column>
        </Grid>
      </Section>

      <Section id="centres" label={copy.centresTitle}>
        <Heading as="h2" variant="display-strong-s" className={cls}>{copy.centresTitle}</Heading>
        <Grid columns="2" m={{ columns: "1" }} gap="32">
          {centres.map((c) => (
            <Grid key={c.id} columns="2" s={{ columns: "1" }} gap="20" style={{ alignItems: "center" }}>
              <div lang="en-IN">
                <Photo id={c.photo} ratio="1 / 1" caption={false} sizes="(max-width: 768px) 100vw, 300px" />
              </div>
              <Column gap="8">
                <Text variant="heading-strong-xl" className={cls}>{hi ? c.nameHi : c.name}</Text>
                {c.address.map((l) => (
                  <Text key={l} variant="body-default-m" onBackground="neutral-weak" lang="en-IN">{l}</Text>
                ))}
                {c.phones.map((p) => (
                  <Button key={p.href} href={p.href} variant="secondary" prefixIcon="phone" size="s" style={{ alignSelf: "start" }}>
                    <span lang="en-IN">{p.label}</span>
                  </Button>
                ))}
                <Button href={c.map} variant="tertiary" prefixIcon="mapPin" size="s" style={{ alignSelf: "start" }}>
                  {hi ? "रास्ता देखें" : "Directions"}
                </Button>
              </Column>
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section tone="surface" label={copy.costTitle}>
        <Grid columns="3" m={{ columns: "1" }} gap="16">
          <Column id="cost" gap="12" padding="24" radius="l" background="page">
            <Heading as="h2" variant="heading-strong-xl" className={cls}>{copy.costTitle}</Heading>
            <Text variant="body-default-l" className={cls}>{copy.cost}</Text>
          </Column>
          <Column id="bring" gap="12" padding="24" radius="l" background="page">
            <Heading as="h2" variant="heading-strong-xl" className={cls}>{copy.bringTitle}</Heading>
            <ul className="ruled-list">
              {copy.bring.map((b) => (
                <li key={b}>
                  <Text as="p" variant="body-default-l" className={cls} style={{ margin: 0, paddingBlock: 8 }}>{b}</Text>
                </li>
              ))}
            </ul>
          </Column>
          <Column gap="12" padding="24" radius="l" background="page">
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
    </Column>
  );
}
