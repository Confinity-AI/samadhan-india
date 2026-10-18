import { Button, Column, Grid, Heading, Media, Row, SmartLink, Tag, Text } from "@once-ui-system/core";
import type { ReactNode } from "react";
import { artworks, asset } from "@/content/assets";
import { centres, registrations, whatsapp } from "@/content/site";

type Tone = "page" | "surface" | "brand";

export function Section({
  children,
  tone = "page",
  id,
  width = "xl",
  paddingY = "104",
  label,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  width?: "l" | "xl" | "m";
  paddingY?: "40" | "64" | "80" | "104";
  label?: string;
}) {
  return (
    <Column
      as="section"
      id={id}
      aria-label={label}
      fillWidth
      horizontal="center"
      paddingX="24"
      paddingY={paddingY}
      background={tone === "brand" ? "brand-strong" : tone === "surface" ? "surface" : "page"}
      theme={tone === "brand" ? "dark" : undefined}
      borderTop={tone === "surface" ? true : undefined}
      borderBottom={tone === "surface" ? true : undefined}
    >
      <Column maxWidth={width} gap="40">
        {children}
      </Column>
    </Column>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <Text variant="label-strong-s" onBackground="accent-medium" style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>
      {children}
    </Text>
  );
}

export function SectionTitle({ eyebrow, title, intro, align = "start" }: { eyebrow?: string; title: string; intro?: ReactNode; align?: "start" | "center" }) {
  return (
    <Column gap="12" maxWidth="m" horizontal={align} align={align === "center" ? "center" : undefined} style={align === "center" ? { marginInline: "auto" } : undefined}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading as="h2" variant="display-strong-s">
        {title}
      </Heading>
      {intro && (
        <Text variant="body-default-l" onBackground="neutral-weak">
          {intro}
        </Text>
      )}
    </Column>
  );
}

export function EasyRead({ children, lang }: { children: ReactNode; lang?: "hi" }) {
  return (
    <Row gap="12" vertical="start" padding="16" radius="l" background="accent-alpha-weak" border="accent-alpha-medium" maxWidth={40}>
      <Tag scheme="accent" size="s" label={lang === "hi" ? "आसान भाषा" : "Easy Read"} />
      <Text variant="body-default-m" onBackground="neutral-strong" lang={lang}>
        {children}
      </Text>
    </Row>
  );
}

export function Photo({
  id,
  ratio,
  caption = true,
  priority,
  sizes = "(max-width: 900px) 100vw, 50vw",
}: {
  id: string;
  ratio?: string;
  caption?: boolean;
  priority?: boolean;
  sizes?: string;
}) {
  const a = asset(id);
  return (
    <Column as="figure" gap="8" margin="0" fillWidth>
      <div className="frame">
        <Media src={a.src} alt={a.alt} aspectRatio={ratio ?? a.ratio} sizes={sizes} priority={priority} />
      </div>
      {caption && (
        <Text as="figcaption" variant="label-default-s" onBackground="neutral-weak">
          {a.caption}
        </Text>
      )}
    </Column>
  );
}

export function PaintBand() {
  const loop = [...artworks, ...artworks];
  return (
    <div className="paint-band" role="img" aria-label="A strip of children's paintings made at SAMADHAN: fish, flowers, brushstrokes and trees">
      <div className="paint-band__track">
        {loop.map((a, i) => (
          // biome-ignore lint/performance/noImgElement: decorative strip, natural width
          <img key={`${a.id}-${i}`} src={a.src} alt="" width={a.width} height={a.height} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

export function PaintHero({
  art,
  eyebrow,
  title,
  intro,
  children,
  lang,
}: {
  art: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
  lang?: "hi";
}) {
  const a = asset(art);
  return (
    <Column fillWidth horizontal="center" paddingX="24" paddingTop="24">
      <Column maxWidth="xl">
        <div className="paint-hero">
          {/* biome-ignore lint/performance/noImgElement: background painting */}
          <img src={a.src} alt="" width={a.width} height={a.height} />
          <Column className="paint-hero__content" theme="dark" padding="48" s={{ padding: "24" }} gap="16" maxWidth={44} fillHeight vertical="end" style={{ minHeight: "inherit" }}>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <Heading as="h1" variant="display-strong-l" onBackground="neutral-strong" lang={lang}>
              {title}
            </Heading>
            {intro && (
              <Text variant="body-default-xl" onBackground="neutral-medium" lang={lang}>
                {intro}
              </Text>
            )}
            {children}
          </Column>
        </div>
      </Column>
    </Column>
  );
}

export function Quote({ text, by, lang }: { text: string; by: string; lang?: "hi" }) {
  return (
    <Column as="figure" gap="16" margin="0" maxWidth="m">
      <Text as="blockquote" className="quote" onBackground="brand-strong" lang={lang} style={{ margin: 0 }}>
        “{text}”
      </Text>
      <Text as="figcaption" variant="label-strong-m" onBackground="neutral-weak">
        {by}
      </Text>
    </Column>
  );
}

export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <Column gap="8" borderTop="accent-alpha-strong" paddingTop="16">
      <Text className="stat-value" onBackground="brand-strong">
        {value}
      </Text>
      <Text variant="body-default-m" onBackground="neutral-weak">
        {label}
      </Text>
    </Column>
  );
}

export function TrustBar() {
  return (
    <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="16">
      {registrations.map((r) => (
        <Column key={r.label} gap="4" padding="20" radius="l" border background="surface">
          <Text variant="label-default-s" onBackground="neutral-weak">
            {r.label}
          </Text>
          <Text variant="heading-strong-s" className="tabular">
            {r.value}
          </Text>
        </Column>
      ))}
    </Grid>
  );
}

export function ContactButtons({ lang }: { lang?: "hi" }) {
  const hi = lang === "hi";
  return (
    <Row gap="12" wrap>
      <Button href={hi ? whatsapp.hrefHi : whatsapp.href} prefixIcon="whatsapp" size="l">
        {hi ? "व्हाट्सऐप करें" : "WhatsApp us"}
      </Button>
      {centres.map((c) => (
        <Button key={c.id} href={c.phones[0].href} prefixIcon="phone" variant="secondary" size="l">
          {hi ? `कॉल: ${c.nameHi}` : `Call ${c.name.replace(" centre", "")}`}
        </Button>
      ))}
    </Row>
  );
}

export function LinkCard({ href, title, body, image, ratio = "4 / 3" }: { href: string; title: string; body?: string; image: string; ratio?: string }) {
  const a = asset(image);
  return (
    <SmartLink href={href} unstyled className="link-card">
      <Column gap="12">
        <div className="frame">
          <Media src={a.src} alt="" aspectRatio={ratio} sizes="(max-width: 900px) 100vw, 33vw" />
        </div>
        <Column gap="4">
          <Text variant="heading-strong-l" className="link-card__title" onBackground="neutral-strong">
            {title}
          </Text>
          {body && (
            <Text variant="body-default-m" onBackground="neutral-weak">
              {body}
            </Text>
          )}
        </Column>
      </Column>
    </SmartLink>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <Row as="nav" aria-label="Breadcrumb" gap="8" wrap>
      {items.map((it, i) => (
        <Row key={it.label} gap="8" vertical="center">
          {it.href ? (
            <SmartLink href={it.href}>
              <Text variant="label-default-s">{it.label}</Text>
            </SmartLink>
          ) : (
            <Text variant="label-default-s" onBackground="neutral-weak" aria-current="page">
              {it.label}
            </Text>
          )}
          {i < items.length - 1 && (
            <Text variant="label-default-s" onBackground="neutral-weak" aria-hidden>
              /
            </Text>
          )}
        </Row>
      ))}
    </Row>
  );
}

export function PhotoHero({
  eyebrow,
  title,
  intro,
  easyRead,
  image,
  actions,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  easyRead?: string;
  image: string;
  actions?: ReactNode;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <Column fillWidth horizontal="center" paddingX="24" paddingTop="40" paddingBottom="64">
      <Grid maxWidth="xl" columns="2" m={{ columns: "1" }} gap="48" style={{ alignItems: "center" }}>
        <Column gap="20">
          {crumbs && <Breadcrumb items={crumbs} />}
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading as="h1" variant="display-strong-l">
            {title}
          </Heading>
          {intro && (
            <Text variant="body-default-xl" onBackground="neutral-weak">
              {intro}
            </Text>
          )}
          {easyRead && <EasyRead>{easyRead}</EasyRead>}
          {actions}
        </Column>
        <Photo id={image} ratio="5 / 4" priority sizes="(max-width: 900px) 100vw, 640px" />
      </Grid>
    </Column>
  );
}

export function DonateBand() {
  return (
    <Section tone="brand" label="Donate">
      <Grid columns="2" m={{ columns: "1" }} gap="40" style={{ alignItems: "center" }}>
        <Column gap="16">
          <Heading as="h2" variant="display-strong-m" onBackground="neutral-strong">
            Keep a child in therapy this year
          </Heading>
          <Text variant="body-default-xl" onBackground="neutral-medium">
            Indian donors get 80G tax relief. We accept international gifts through our FCRA account.
          </Text>
          <Row gap="12" wrap>
            <Button href="/donate" size="l" className="btn-accent" prefixIcon="heart">
              Donate
            </Button>
            <Button href="/get-involved/partner" size="l" variant="tertiary">
              CSR and foundations
            </Button>
          </Row>
        </Column>
        <div className="frame">
          <Media src={asset("art-trees").src} alt={asset("art-trees").alt} aspectRatio="16 / 9" sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
      </Grid>
    </Section>
  );
}
