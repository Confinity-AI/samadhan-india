import { Column, Heading, Text } from "@once-ui-system/core";
import { Section } from "@/components/blocks";
import { org } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Privacy",
  description: "How SAMADHAN handles personal information from donors, families, volunteers and visitors to this website.",
  path: "/privacy",
});

const sections = [
  { title: "What we collect", body: "This site has no forms and sets no advertising cookies. If you email, call or WhatsApp us, we keep your message and contact details to reply." },
  { title: "Donations", body: "For 80G receipts we need your name, address, PAN and transfer reference. We use these only for the receipt and our legal filings." },
  { title: "Children and families", body: "We publish a child's photo or story only with the family's consent, using first names only. Families can ask us to remove anything at any time." },
  { title: "Analytics", body: "We count page visits with privacy-friendly analytics that do not identify you or use cookies." },
  { title: "Your rights", body: "Under India's Digital Personal Data Protection Act, you can ask what we hold about you, ask us to correct it, or ask us to delete it." },
];

export default function Privacy() {
  return (
    <Section paddingY="80" width="m">
      <Heading as="h1" variant="display-strong-m">Privacy</Heading>
      <Column gap="32">
        {sections.map((s) => (
          <Column key={s.title} gap="8">
            <Heading as="h2" variant="heading-strong-l">{s.title}</Heading>
            <Text variant="body-default-l" onBackground="neutral-medium">{s.body}</Text>
          </Column>
        ))}
        <Text variant="body-default-m" onBackground="neutral-weak">Questions: {org.email}</Text>
      </Column>
    </Section>
  );
}
