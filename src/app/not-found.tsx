import { Button, Heading, Row, Text } from "@once-ui-system/core";
import { PaintHero, Section } from "@/components/blocks";

export default function NotFound() {
  return (
    <>
      <PaintHero art="art-fish" eyebrow="Page not found" title="This page has moved" intro="Our website is new. The page you wanted may have a new address." />
      <Section paddingY="64">
        <Text variant="body-default-l" onBackground="neutral-weak">Try one of these:</Text>
        <Row gap="12" wrap>
          <Button href="/">Home</Button>
          <Button href="/families" variant="secondary">For families</Button>
          <Button href="/our-work" variant="secondary">Our work</Button>
          <Button href="/donate" variant="secondary">Donate</Button>
        </Row>
        <Heading as="h2" variant="heading-strong-m" lang="hi" className="hindi">पेज नहीं मिला। ऊपर दिए गए लिंक देखें।</Heading>
      </Section>
    </>
  );
}
