import { Button, Column, Grid, Heading, Media, Row, SmartLink, Text } from "@once-ui-system/core";
import type { ReactNode } from "react";
import { asset } from "@/content/assets";
export { PaintBand } from "./PaintBand";
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
      m={{ paddingY: paddingY === "104" ? "80" : paddingY }}
      s={{ paddingY: paddingY === "40" ? "40" : "48" }}
      background={tone === "brand" ? "brand-strong" : tone === "surface" ? "surface" : "page"}
      theme={tone === "brand" ? "dark" : undefined}
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
    <Column gap="4" className="easy-read">
      <Text variant="label-strong-xs" onBackground="accent-medium" style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}>
        {lang === "hi" ? "आसान भाषा" : "Easy Read"}
      </Text>
      <Text variant="body-default-l" onBackground="neutral-strong" lang={lang}>
        {children}
      </Text>
    </Column>
  );
}

export function Photo({
  id,
  ratio,
  caption = true,
  priority,
  cap,
  sizes = "(max-width: 900px) 100vw, 50vw",
}: {
  id: string;
  ratio?: string;
  caption?: boolean;
  priority?: boolean;
  cap?: boolean;
  sizes?: string;
}) {
  const a = asset(id);
  return (
    <Column as="figure" gap="8" margin="0" fillWidth style={cap ? { maxWidth: a.width } : undefined}>
      <div className={a.mono ? "frame frame--mono" : "frame"}>
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

export function PaintHero({
  art,
  eyebrow,
  title,
  intro,
  children,
  lang,
  focus,
  zoom,
  flip,
  crumbs,
}: {
  art: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
  lang?: "hi";
  /** CSS object-position for the painting, e.g. "20% 40%" */
  focus?: string;
  /** Scale the painting to show a detail, e.g. 1.6 */
  zoom?: number;
  flip?: boolean;
  crumbs?: { label: string; href?: string }[];
}) {
  const a = asset(art);
  const short = !intro && !children;
  const cls = ["paint-hero", short && "paint-hero--short", flip && "paint-hero--flip"].filter(Boolean).join(" ");
  return (
    <Column fillWidth horizontal="center" paddingX="24" paddingTop="24">
      <Column maxWidth="xl" gap="16">
        {crumbs && <Breadcrumb items={crumbs} />}
        <div className={cls} style={{ ["--focus" as string]: focus, ["--zoom" as string]: zoom }}>
          <Column theme="dark" padding="48" m={{ padding: "32" }} s={{ padding: "24" }} gap="16" vertical={short ? "center" : "end"}>
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
          <div className="paint-hero__art">
            {/* biome-ignore lint/performance/noImgElement: decorative painting */}
            <img src={a.src} alt="" width={a.width} height={a.height} />
          </div>
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
    <Grid as="dl" columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="0" style={{ columnGap: 32, margin: 0 }}>
      {registrations.map((r) => (
        <Column key={r.label} gap="4" paddingY="16" borderTop>
          <Text as="dt" variant="label-default-s" onBackground="neutral-weak">
            {r.label}
          </Text>
          <Text as="dd" variant="heading-strong-s" className="tabular" style={{ margin: 0 }}>
            {r.value}
          </Text>
        </Column>
      ))}
    </Grid>
  );
}

export function PaintRule({ art = "art-strokes", position = "center" }: { art?: string; position?: string }) {
  return <div className="paint-rule" aria-hidden style={{ backgroundImage: `url(${asset(art).src})`, backgroundPosition: position }} />;
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
          {hi ? `${c.nameHi} पर कॉल करें` : `Call ${c.name.replace(" centre", "")}`}
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
        <div className={a.mono ? "frame frame--mono" : "frame"}>
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
        <Row fillWidth horizontal="center">
          <Photo id={image} cap priority sizes="(max-width: 900px) 100vw, 640px" />
        </Row>
      </Grid>
    </Column>
  );
}

export function DonateBand({ art = "art-trees", focus }: { art?: string; focus?: string }) {
  const painting = asset(art);
  return (
    <Section tone="brand" label="Donate">
      <Grid columns="2" m={{ columns: "1" }} gap="48" style={{ alignItems: "center" }}>
        <Column gap="16">
          <Heading as="h2" variant="display-strong-m" onBackground="neutral-strong">
            Keep a child in therapy this year
          </Heading>
          <Text variant="body-default-xl" onBackground="neutral-medium">
            If you pay tax in India, you can claim a deduction under section 80G. Donors abroad can give through our FCRA account.
          </Text>
          <Row gap="12" wrap>
            <Button href="/donate" size="l" className="btn-accent" prefixIcon="heart">
              Donate
            </Button>
            <Button href="/get-involved/partner" size="l" variant="tertiary">
              Partner with us
            </Button>
          </Row>
        </Column>
        <div className="donate-art">
          {/* biome-ignore lint/performance/noImgElement: decorative painting, full bleed */}
          <img src={painting.src} alt={painting.alt} width={painting.width} height={painting.height} loading="lazy" style={focus ? { objectPosition: focus } : undefined} />
        </div>
      </Grid>
    </Section>
  );
}

export function StoryCard({ href, quote, by, background = "surface" }: { href: string; quote: string; by: string; background?: "surface" | "page" }) {
  return (
    <SmartLink href={href} unstyled className="story-card">
      <Column gap="20" padding="32" s={{ padding: "24" }} radius="l" background={background} fillWidth>
        <span className="story-card__mark" aria-hidden>
          “
        </span>
        <Text as="p" className="story-card__quote" onBackground="neutral-strong" style={{ margin: 0 }}>
          {quote}
        </Text>
        <Text variant="label-strong-m" onBackground="neutral-weak" style={{ marginTop: "auto" }}>
          {by}
        </Text>
      </Column>
    </SmartLink>
  );
}

export function PhotoStat({ image, value, label }: { image: string; value: string; label: string }) {
  const a = asset(image);
  return (
    <Column gap="16" className="photo-stat">
      <div className="frame">
        <Media src={a.src} alt={a.alt} aspectRatio="4 / 3" sizes="(max-width: 900px) 50vw, 420px" />
      </div>
      <Column gap="4">
        <Text className="stat-value" onBackground="brand-strong">
          {value}
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {label}
        </Text>
      </Column>
    </Column>
  );
}
