import { Column, Grid, IconButton, Line, Row, SmartLink, Text } from "@once-ui-system/core";
import { centres, nav, org, registrations, whatsapp } from "@/content/site";
import { Brand } from "./Header";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Column as="footer" fillWidth horizontal="center" paddingX="24" paddingTop="80" paddingBottom="40" background="surface" borderTop>
      <Column maxWidth="xl" gap="48">
        <Grid columns="5" m={{ columns: "3" }} s={{ columns: "1" }} gap="32">
          <Column gap="16">
            <Brand />
            <Text variant="body-default-s" onBackground="neutral-weak">
              Therapy and school for children with intellectual disabilities, in the neighbourhoods where they live.
            </Text>
            <Row gap="8">
              <IconButton icon="whatsapp" variant="secondary" href={whatsapp.href} ariaLabel="WhatsApp" />
              <IconButton icon="facebook" variant="secondary" href={org.social.facebook} ariaLabel="Facebook" />
              <IconButton icon="instagram" variant="secondary" href={org.social.instagram} ariaLabel="Instagram" />
              <IconButton icon="linkedin" variant="secondary" href={org.social.linkedin} ariaLabel="LinkedIn" />
            </Row>
          </Column>
          {nav
            .filter((n) => n.children)
            .map((n) => (
              <Column key={n.href} gap="12">
                <SmartLink href={n.href}>
                  <Text variant="label-strong-m">{n.label}</Text>
                </SmartLink>
                {n.children?.map((c) => (
                  <SmartLink key={c.href} href={c.href}>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {c.label}
                    </Text>
                  </SmartLink>
                ))}
              </Column>
            ))}
          <Column gap="12">
            <Text variant="label-strong-m">More</Text>
            {[
              { label: "Stories", href: "/stories" },
              { label: "Moments", href: "/moments" },
              { label: "For families", href: "/families" },
              { label: "परिवारों के लिए", href: "/hi/families", lang: "hi" },
              { label: "Donate", href: "/donate" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <SmartLink key={l.href} href={l.href}>
                <Text variant="body-default-s" onBackground="neutral-weak" lang={l.lang}>
                  {l.label}
                </Text>
              </SmartLink>
            ))}
          </Column>
        </Grid>
        <Grid columns="2" s={{ columns: "1" }} gap="16">
          {centres.map((c) => (
            <Row key={c.id} gap="12" padding="20" radius="l" border background="page" vertical="start">
              <IconButton icon="mapPin" variant="tertiary" href={c.map} ariaLabel={`Map to the ${c.name}`} />
              <Column gap="4">
                <Text variant="label-strong-m">{c.name}</Text>
                {c.address.map((l) => (
                  <Text key={l} variant="body-default-s" onBackground="neutral-weak">
                    {l}
                  </Text>
                ))}
                <Row gap="12" wrap>
                  {c.phones.map((p) => (
                    <SmartLink key={p.href} href={p.href}>
                      <Text variant="body-default-s">{p.label}</Text>
                    </SmartLink>
                  ))}
                </Row>
              </Column>
            </Row>
          ))}
        </Grid>
        <Line />
        <Row horizontal="between" gap="16" wrap s={{ direction: "column" }}>
          <Text variant="body-default-xs" onBackground="neutral-weak" style={{ maxWidth: 720 }}>
            © {year} {org.legalName}. Society reg. {registrations[0].value}. FCRA {registrations[1].value}.
          </Text>
          <Row gap="16">
            <SmartLink href="/accountability">
              <Text variant="body-default-xs">Accountability</Text>
            </SmartLink>
            <SmartLink href="/privacy">
              <Text variant="body-default-xs">Privacy</Text>
            </SmartLink>
          </Row>
        </Row>
      </Column>
    </Column>
  );
}
