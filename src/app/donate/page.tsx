import { Button, Column, Grid, Heading, Row, SmartLink, Text } from "@once-ui-system/core";
import { EasyRead, Eyebrow, PaintHero, Photo, Section, SectionTitle } from "@/components/blocks";
import { CopyValue } from "@/components/CopyValue";
import { org } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Donate",
  description:
    "Donate to SAMADHAN by bank transfer from India (80G) or from abroad through our FCRA account. Your gift pays for therapy and school for children with intellectual disabilities.",
  path: "/donate",
});

type DetailRow = { k: string; v: string; copy?: boolean; note?: string };

const india: DetailRow[] = [
  { k: "Account name", v: "SAMADHAN", copy: true },
  { k: "Account number", v: "113210011004448", copy: true },
  { k: "IFSC", v: "UBIN0811327", copy: true },
  { k: "Bank", v: "Union Bank of India, Dwarka Sector 10 branch, New Delhi 110075" },
];

const abroad: DetailRow[] = [
  { k: "Account name", v: "SOCIETY FOR THE AID OF MENTALLY AND DEVE", copy: true, note: "Exactly as the bank records it." },
  { k: "FCRA account number", v: "40052266279", copy: true },
  { k: "SWIFT", v: "SBININBB104", copy: true },
  { k: "IFSC", v: "SBIN0000691", copy: true },
  { k: "Purpose code", v: "P1303", copy: true },
  { k: "Bank", v: "State Bank of India, FCRA Cell, 4th Floor, New Delhi Main Branch (00691), 11 Sansad Marg, New Delhi 110001" },
];

function Details({ rows }: { rows: DetailRow[] }) {
  return (
    <Column as="dl" gap="0" margin="0">
      {rows.map((r) => (
        <Row key={r.k} paddingY="12" borderBottom gap="16" horizontal="between" vertical="center">
          <Column gap="2" style={{ minWidth: 0 }}>
            <Text as="dt" variant="label-default-s" onBackground="neutral-weak">
              {r.k}
            </Text>
            <Text as="dd" variant={r.copy ? "heading-strong-s" : "body-default-s"} className="tabular" style={{ margin: 0, overflowWrap: "anywhere" }}>
              {r.v}
            </Text>
            {r.note && (
              <Text variant="body-default-xs" onBackground="neutral-weak">
                {r.note}
              </Text>
            )}
          </Column>
          {r.copy && <CopyValue value={r.v} label={r.k} />}
        </Row>
      ))}
    </Column>
  );
}

const uses = [
  { image: "children-play-garden", title: "Therapy", body: "Speech, occupational and creative therapies." },
  { image: "child-standing-frame", title: "Devices", body: "Standing frames and orthotic devices." },
  { image: "child-writing", title: "School", body: "Teachers and materials for small classes." },
  { image: "mothers-counselling", title: "Mothers", body: "Counselling and training for mothers." },
];

export default function Donate() {
  return (
    <>
      <PaintHero
        art="art-trees"
        focus="20% 60%"
        zoom={1.4}
        crumbs={[{ label: "Get involved", href: "/get-involved" }, { label: "Donate" }]}
        eyebrow="Donate"
        title="Donate from India or abroad"
        intro="Your gift pays for therapy and school for children from low-income families."
      />

      <Section paddingY="64" label="Bank details">
        <Row horizontal="between" vertical="center" wrap gap="16">
          <EasyRead>You can give money to SAMADHAN. It pays for therapy and school for children.</EasyRead>
          <Column gap="4">
            <Text variant="label-default-m" onBackground="neutral-weak" className="tabular">
              Society reg. No. 12183 (1981) · FCRA 231650031 · 80G
            </Text>
            <SmartLink href="/accountability" suffixIcon="arrowRight">
              Registrations and annual reports
            </SmartLink>
          </Column>
        </Row>
        <Grid columns="2" m={{ columns: "1" }} gap="24">
          <Column gap="16" padding="32" s={{ padding: "20" }} radius="l" background="surface">
            <Eyebrow>From India</Eyebrow>
            <Heading as="h2" variant="heading-strong-xl">
              Bank transfer, with 80G tax deduction
            </Heading>
            <Details rows={india} />
            <Text variant="body-default-s" onBackground="neutral-weak">
              After you give, email us your name, PAN, address and the transfer reference. We will send your 80G receipt. You can also post a cheque made out to SAMADHAN to our Dwarka centre.
            </Text>
            <Button href={`mailto:${org.email}?subject=${encodeURIComponent("80G receipt for my donation")}`} variant="secondary" prefixIcon="mail">
              Email for your 80G receipt
            </Button>
          </Column>
          <Column gap="16" padding="32" s={{ padding: "20" }} radius="l" background="surface">
            <Eyebrow>From abroad</Eyebrow>
            <Heading as="h2" variant="heading-strong-xl">
              SWIFT transfer to our FCRA account
            </Heading>
            <Details rows={abroad} />
            <Text variant="body-default-s" onBackground="neutral-weak">
              By law, gifts from abroad can only go to this FCRA account. Send the money by SWIFT in your own currency and let the bank in India convert it. Email us after you give so we can find your gift and thank you.
            </Text>
            <Button href={`mailto:${org.email}?subject=${encodeURIComponent("International donation")}`} variant="secondary" prefixIcon="mail">
              Tell us about your gift
            </Button>
          </Column>
        </Grid>
      </Section>

      <Section tone="surface" label="What your gift pays for">
        <SectionTitle eyebrow="Where it goes" title="What your gift pays for" />
        <Grid columns="4" m={{ columns: "2" }} gap="24">
          {uses.map((u) => (
            <Column key={u.title} gap="12">
              <Photo id={u.image} ratio="1 / 1" caption={false} sizes="(max-width: 900px) 50vw, 300px" />
              <Text variant="heading-strong-l">{u.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {u.body}
              </Text>
            </Column>
          ))}
        </Grid>
      </Section>

      <Section label="Other ways to give">
        <SectionTitle title="Other ways to give" />
        <Grid columns="3" m={{ columns: "1" }} gap="16">
          <Column gap="8" padding="24" radius="l" background="surface">
            <Text variant="heading-strong-l">Give every month</Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Ask your bank to set up a monthly transfer to one of the accounts above. Then email us so we can thank you.
            </Text>
          </Column>
          <Column gap="8" padding="24" radius="l" background="surface">
            <Text variant="heading-strong-l">Buy from the mothers</Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Laddoos, spices and Nutri-mix made by the mothers' group, for Diwali or office gifts.
            </Text>
            <Button href="/programmes/mothers#shop" variant="tertiary" suffixIcon="arrowRight" size="s">
              See what they make
            </Button>
          </Column>
          <Column gap="8" padding="24" radius="l" background="surface">
            <Text variant="heading-strong-l">Companies and foundations</Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              Programme funding, employee giving and volunteering.
            </Text>
            <Button href="/get-involved/partner" variant="tertiary" suffixIcon="arrowRight" size="s">
              Partner with us
            </Button>
          </Column>
        </Grid>
      </Section>
    </>
  );
}
