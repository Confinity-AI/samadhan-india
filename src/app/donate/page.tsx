import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { EasyRead, Eyebrow, PaintHero, Photo, Section, SectionTitle } from "@/components/blocks";
import { org } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Donate",
  description:
    "Donate to SAMADHAN by bank transfer from India (80G) or from abroad through our FCRA account. Support therapy and school for children with intellectual disabilities.",
  path: "/donate",
});

const india = [
  { k: "Bank", v: "Union Bank of India" },
  { k: "Account number", v: "113210011004448" },
  { k: "IFSC", v: "UBIN0811327" },
];

const abroad = [
  { k: "Bank", v: "State Bank of India, New Delhi Main Branch" },
  { k: "FCRA account number", v: "40052266279" },
  { k: "SWIFT", v: "SBININBB104" },
  { k: "IFSC", v: "SBIN0000691" },
  { k: "Purpose code", v: "P1303" },
  { k: "FCRA registration", v: "231650031" },
];

function Details({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <Column as="dl" gap="0" margin="0">
      {rows.map((r) => (
        <Row key={r.k} paddingY="12" borderBottom gap="16" horizontal="between" s={{ direction: "column" }} style={{ alignItems: "baseline" }}>
          <Text as="dt" variant="label-default-m" onBackground="neutral-weak">{r.k}</Text>
          <Text as="dd" variant="heading-strong-s" className="tabular" style={{ margin: 0, textAlign: "right", overflowWrap: "anywhere" }}>{r.v}</Text>
        </Row>
      ))}
    </Column>
  );
}

const uses = [
  { image: "therapy-one-to-one", title: "Therapy sessions", body: "Speech, movement and play therapy." },
  { image: "child-standing-frame", title: "Devices", body: "Standing frames, orthotic and prosthetic devices." },
  { image: "child-writing", title: "School", body: "Teachers and materials for small classes." },
  { image: "mothers-counselling", title: "Mothers", body: "Counselling, training and income." },
];

export default function Donate() {
  return (
    <>
      <PaintHero art="art-fish" eyebrow="Donate" title="Help a child start early" intro="Your gift pays for therapy and school for children whose families have low incomes." />
      <Section paddingY="64">
        <EasyRead>You can give money to SAMADHAN. It pays for therapy and school for children.</EasyRead>
        <Grid columns="4" m={{ columns: "2" }} s={{ columns: "1" }} gap="24">
          {uses.map((u) => (
            <Column key={u.title} gap="12">
              <Photo id={u.image} ratio="1 / 1" caption={false} sizes="(max-width: 900px) 50vw, 300px" />
              <Text variant="heading-strong-l">{u.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">{u.body}</Text>
            </Column>
          ))}
        </Grid>
      </Section>
      <Section tone="surface" label="How to give">
        <SectionTitle eyebrow="How to give" title="Bank transfer, from India or abroad" intro="A bank transfer reaches us directly." />
        <Grid columns="2" m={{ columns: "1" }} gap="24">
          <Column gap="16" padding="32" s={{ padding: "20" }} radius="l" background="page" border>
            <Eyebrow>From India</Eyebrow>
            <Heading as="h3" variant="heading-strong-xl">Indian donors · 80G</Heading>
            <Details rows={india} />
            <Text variant="body-default-s" onBackground="neutral-weak">
              After you give, email us your name, PAN, address and the transfer reference. We will send your 80G receipt.
            </Text>
            <Button href={`mailto:${org.email}?subject=${encodeURIComponent("80G receipt for my donation")}`} variant="secondary" prefixIcon="mail">
              Email for your 80G receipt
            </Button>
          </Column>
          <Column gap="16" padding="32" s={{ padding: "20" }} radius="l" background="page" border>
            <Eyebrow>From abroad</Eyebrow>
            <Heading as="h3" variant="heading-strong-xl">International donors · FCRA</Heading>
            <Details rows={abroad} />
            <Text variant="body-default-s" onBackground="neutral-weak">
              Foreign contributions must go to this FCRA account only. Please email us so we can match and acknowledge your gift.
            </Text>
            <Button href={`mailto:${org.email}?subject=${encodeURIComponent("International donation")}`} variant="secondary" prefixIcon="mail">
              Tell us about your gift
            </Button>
          </Column>
        </Grid>
      </Section>
      <Section label="Other ways">
        <Grid columns="3" m={{ columns: "1" }} gap="32">
          <Column gap="8" paddingTop="16" borderTop="accent-alpha-strong">
            <Text variant="heading-strong-l">Give every month</Text>
            <Text variant="body-default-m" onBackground="neutral-weak">Set up a monthly standing instruction with your bank to the account above, and tell us so we can thank you.</Text>
          </Column>
          <Column gap="8" paddingTop="16" borderTop="accent-alpha-strong">
            <Text variant="heading-strong-l">Buy from the mothers</Text>
            <Text variant="body-default-m" onBackground="neutral-weak">Laddoo and spice boxes for Diwali and office gifting. Email us to order.</Text>
          </Column>
          <Column gap="8" paddingTop="16" borderTop="accent-alpha-strong">
            <Text variant="heading-strong-l">Companies</Text>
            <Text variant="body-default-m" onBackground="neutral-weak">Employee giving and company partnerships.</Text>
            <Button href="/get-involved/partner" variant="tertiary" suffixIcon="arrowRight" size="s">Partner with us</Button>
          </Column>
        </Grid>
      </Section>
    </>
  );
}
