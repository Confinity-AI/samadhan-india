import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { asset } from "@/content/assets";

export const metadata: Metadata = {
  title: "Growth deck",
  description: "How SAMADHAN can outrank peers, raise more and be found: a five-slide plan.",
  robots: { index: false, follow: false },
};

function Slide({ n, children, dark, art }: { n: number; children: ReactNode; dark?: boolean; art?: string }) {
  const a = art ? asset(art) : null;
  return (
    <Column
      as="section"
      className="deck__slide"
      aria-label={`Slide ${n}`}
      background={dark ? "brand-strong" : "surface"}
      theme={dark ? "dark" : undefined}
      border
      padding="48"
      s={{ padding: "20" }}
      gap="24"
    >
      {a && (
        // biome-ignore lint/performance/noImgElement: decorative painting strip
        <img src={a.src} alt="" style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "34%", objectFit: "cover" }} />
      )}
      <Column fill gap="24" style={{ position: "relative", zIndex: 1, maxWidth: a ? "62%" : undefined }}>
        {children}
      </Column>
      <Text variant="label-default-s" onBackground="neutral-weak" style={{ position: "absolute", bottom: 20, right: 28, zIndex: 1 }}>
        SAMADHAN growth plan · {n}/5
      </Text>
    </Column>
  );
}

function Kicker({ children }: { children: ReactNode }) {
  return (
    <Text variant="label-strong-s" onBackground="accent-medium" style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}>
      {children}
    </Text>
  );
}

function Dots({ n }: { n: number }) {
  return (
    <Row gap="4" role="img" aria-label={`${n} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} style={{ width: 12, height: 12, borderRadius: 6, background: i <= n ? "var(--accent-solid-strong)" : "var(--neutral-alpha-medium)" }} />
      ))}
    </Row>
  );
}

const players = ["SAMADHAN", "Tamana", "Manovikas", "Action for Autism"];
const matrix: { row: string; scores: number[] }[] = [
  { row: "Shows up in search", scores: [2, 5, 4, 3] },
  { row: "Online giving", scores: [1, 3, 4, 2] },
  { row: "Trust signals on site", scores: [2, 4, 5, 3] },
  { row: "Easy Read / Hindi", scores: [1, 3, 5, 1] },
  { row: "Stories and proof", scores: [3, 4, 4, 3] },
];

const disha = [
  { label: "FY22-23", value: 2.39 },
  { label: "FY23-24", value: 1.76 },
  { label: "FY24-25", value: 3.6 },
  { label: "FY25-26", value: 4.05 },
  { label: "Peers", value: 12.5, peer: true },
];

export default function Deck() {
  return (
    <Column fillWidth horizontal="center" paddingX="24" paddingY="40" className="deck-wrap">
      <Column maxWidth="xl" gap="40" className="deck">
        <Row horizontal="between" vertical="center" className="no-print" wrap gap="16">
          <Heading as="h1" variant="display-strong-xs">SAMADHAN: growth plan, October 2026</Heading>
          <Button href="/samadhan-growth-deck.pdf" variant="secondary" prefixIcon="download">Download PDF</Button>
        </Row>

        {/* 1 */}
        <Slide n={1} dark art="art-strokes">
          <Kicker>Where SAMADHAN stands</Kicker>
          <Heading as="h2" variant="display-strong-l" onBackground="neutral-strong">
            45 years of work, and hard to find online.
          </Heading>
          <Grid columns="2" gap="16" fillWidth>
            {[
              ["3 other", "organisations come up for “samadhan ngo”. Ours does not."],
              ["404", "on /donate. No way for an Indian donor to give online."],
              ["9", "dead or empty pages in the main menu."],
              ["3 of 108", "images have alt text. The footer still says “Mentally Handicapped”."],
            ].map(([v, l]) => (
              <Column key={v} gap="4" padding="16" radius="l" border="neutral-alpha-medium">
                <Text className="stat-value" onBackground="accent-strong" style={{ fontSize: 44 }}>{v}</Text>
                <Text variant="body-default-m" onBackground="neutral-medium">{l}</Text>
              </Column>
            ))}
          </Grid>
          <Text variant="body-default-l" onBackground="neutral-medium">
            The upside: it already appears first for “intellectual disability NGO Delhi”.
          </Text>
        </Slide>

        {/* 2 */}
        <Slide n={2}>
          <Kicker>Who is winning, and why</Kicker>
          <Heading as="h2" variant="display-strong-m">Three peers own most parent and donor searches outside our core term</Heading>
          <Column gap="0" fillWidth>
            <Grid columns="5" gap="16" paddingY="8" borderBottom>
              <span />
              {players.map((p) => (
                <Text key={p} variant="label-strong-m" onBackground={p === "SAMADHAN" ? "brand-strong" : "neutral-strong"}>{p}</Text>
              ))}
            </Grid>
            {matrix.map((m) => (
              <Grid key={m.row} columns="5" gap="16" paddingY="12" borderBottom style={{ alignItems: "center" }}>
                <Text variant="body-default-m">{m.row}</Text>
                {m.scores.map((s, i) => (
                  <Dots key={players[i]} n={s} />
                ))}
              </Grid>
            ))}
          </Column>
          <Grid columns="3" gap="16" fillWidth>
            <Text variant="body-default-s" onBackground="neutral-weak"><b>Tamana:</b> a deep page per centre; 4 of the top 5 results for “autism NGO Delhi”.</Text>
            <Text variant="body-default-s" onBackground="neutral-weak"><b>Manovikas:</b> closest twin. Easy Read, trust bar, instant 80G receipts.</Text>
            <Text variant="body-default-s" onBackground="neutral-weak"><b>Also watch:</b> Ashish Foundation in Dwarka. Rankings from a general web search, not Google India.</Text>
          </Grid>
          <Text variant="label-default-xs" onBackground="neutral-weak">Scores are our assessment from public sites and search results, October 2026.</Text>
        </Slide>

        {/* 3 */}
        <Slide n={3} art="art-fish">
          <Kicker>How we outrank them</Kicker>
          <Heading as="h2" variant="display-strong-m">Win the South Delhi niche Manovikas does not reach</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">Intellectual disability, low-income families and mothers, in South and West Delhi.</Text>
          <Grid columns="2" gap="16" fillWidth>
            {[
              ["01", "Fix brand search", "One name, NGO schema, claimed listings."],
              ["02", "Google Business Profiles", "Both centres, with a parents’ review drive."],
              ["03", "Hindi pages for parents", "Only Tamana has Hindi, and it does not target parent searches."],
              ["04", "Neighbourhood pages", "Early intervention in Dakshinpuri and Dwarka."],
              ["05", "Parent guides", "UDID, Niramaya, Disha, guardianship. These earn links."],
              ["06", "Google Ad Grants", "Up to $10k a month of free search ads."],
            ].map(([n, t, b]) => (
              <Row key={n} gap="12" vertical="start">
                <Text className="journey__num" style={{ fontSize: 36 }}>{n}</Text>
                <Column gap="2">
                  <Text variant="heading-strong-m">{t}</Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">{b}</Text>
                </Column>
              </Row>
            ))}
          </Grid>
        </Slide>

        {/* 4 */}
        <Slide n={4}>
          <Kicker>Where to list, who to partner with</Kicker>
          <Heading as="h2" variant="display-strong-m">Be where donors and parents already look</Heading>
          <Grid columns="3" gap="16" fillWidth>
            {[
              { t: "This month", items: ["Google for Nonprofits (FCRA held)", "Give.do listing", "Microsoft for Nonprofits", "Fix Nayi Disha and JustDial", "Google Business Profiles"] },
              { t: "In 3 months", items: ["CSR-1 registration", "Credibility Alliance", "GuideStar India", "CAF America validation", "GlobalGiving re-entry", "Delhi Half Marathon via United Way"] },
              { t: "This year", items: ["DEPwD DDRS grant", "Scale Disha to 30 children", "Return of past partners: Ford, S&P Global, J&J", "Friends of SAMADHAN, Australia"] },
            ].map((c, i) => (
              <Column key={c.t} gap="12" padding="20" radius="l" background={i === 0 ? "accent-alpha-weak" : "page"} border>
                <Text variant="heading-strong-l">{c.t}</Text>
                {c.items.map((it) => (
                  <Text key={it} variant="body-default-m" onBackground="neutral-medium">· {it}</Text>
                ))}
              </Column>
            ))}
          </Grid>
        </Slide>

        {/* 5 */}
        <Slide n={5} dark>
          <Kicker>90 days, and the money on the table</Kicker>
          <Grid columns="2" gap="40" fillWidth fill>
            <Column gap="16">
              <Heading as="h2" variant="display-strong-s" onBackground="neutral-strong">Disha funding, ₹ lakh a year</Heading>
              <Column gap="12">
                {disha.map((d) => (
                  <Row key={d.label} gap="12" vertical="center">
                    <Text variant="label-default-s" onBackground="neutral-medium" style={{ width: 64 }}>{d.label}</Text>
                    <div className={`deck__bar ${d.peer ? "deck__bar--muted" : "deck__bar--accent"}`} style={{ width: `${(d.value / 13) * 70}%` }} />
                    <Text variant="label-strong-s">{d.value}</Text>
                  </Row>
                ))}
              </Column>
              <Text variant="body-default-m" onBackground="neutral-medium">Claiming for the scheme’s maximum of 30 children could add roughly ₹8 lakh a year (our estimate). Ad Grants add up to $120k a year in free ads.</Text>
            </Column>
            <Column gap="12">
              {[
                ["Days 1–30", "Launch the new site. Claim Google, Give.do and directory listings."],
                ["Days 31–60", "Online 80G giving and a monthly circle. Hindi parent guides. Ad Grants live."],
                ["Days 61–90", "CSR-1 and accreditation filed. Disha enrolment drive. First CSR pitch."],
              ].map(([t, b]) => (
                <Column key={t} gap="4" paddingY="12" borderBottom="neutral-alpha-medium">
                  <Text variant="heading-strong-m" onBackground="accent-strong">{t}</Text>
                  <Text variant="body-default-m" onBackground="neutral-medium">{b}</Text>
                </Column>
              ))}
              <Text variant="label-default-s" onBackground="neutral-weak">
                We need from SAMADHAN: 2024-25 numbers, 80G/12A/CSR-1 details, photo consent, a payment gateway link, and DNS access.
              </Text>
            </Column>
          </Grid>
        </Slide>
      </Column>
    </Column>
  );
}
