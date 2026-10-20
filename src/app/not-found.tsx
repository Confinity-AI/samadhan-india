import { Button, Heading, Row, Text } from "@once-ui-system/core";
import type { Metadata } from "next";
import { PaintHero, Section } from "@/components/blocks";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <>
      <PaintHero art="art-fish" focus="20% 30%" zoom={1.4} eyebrow="Page not found" title="We can't find this page" intro="Our website is new. The page you wanted may have a new address." />
      <Section paddingY="64">
        <Text variant="body-default-l" onBackground="neutral-weak">Try one of these:</Text>
        <Row gap="12" wrap>
          <Button href="/">Home</Button>
          <Button href="/families" variant="secondary">For families</Button>
          <Button href="/programmes" variant="secondary">Programmes</Button>
          <Button href="/donate" variant="secondary">Donate</Button>
        </Row>
        <Heading as="h2" variant="heading-strong-m" lang="hi" className="hindi">यह पेज नहीं मिला।</Heading>
        <Row>
          <Button href="/hi/families" variant="secondary">
            <span lang="hi">परिवारों के लिए जानकारी</span>
          </Button>
        </Row>
      </Section>
    </>
  );
}
