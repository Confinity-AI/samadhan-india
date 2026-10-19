import { Column, Grid, IconButton, Line, Row, SmartLink, Text } from "@once-ui-system/core";
import { centres, nav, org, registrations, whatsapp } from "@/content/site";
import { PaintRule } from "./blocks";
import { Brand } from "./Header";

const more = [
  { label: "Stories", href: "/stories" },
  { label: "Photos", href: "/moments" },
  { label: "For families", href: "/families" },
  { label: "हिंदी में जानकारी", href: "/hi/families", lang: "hi" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Column as="footer" fillWidth>
      <PaintRule art="art-strokes" position="center 40%" />
      <Column fillWidth horizontal="center" paddingX="24" paddingTop="64" paddingBottom="40" background="brand-strong" theme="dark">
        <Column maxWidth="xl" gap="48">
          <Grid columns="5" m={{ columns: "3" }} s={{ columns: "2" }} gap="32">
            <Column gap="16" className="footer-brand">
              <Brand light />
              <Text variant="body-default-s" onBackground="neutral-medium">
                Therapy and school for children with intellectual disabilities in Dakshinpuri and Dwarka, New Delhi.
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
                <Column key={n.href} gap="8">
                  <SmartLink href={n.href}>
                    <Text variant="label-strong-m" onBackground="neutral-strong">
                      {n.label}
                    </Text>
                  </SmartLink>
                  {n.children?.map((c) => (
                    <SmartLink key={c.href} href={c.href}>
                      <Text variant="body-default-s" onBackground="neutral-medium">
                        {c.label}
                      </Text>
                    </SmartLink>
                  ))}
                </Column>
              ))}
            <Column gap="8">
              <Text variant="label-strong-m" onBackground="neutral-strong">
                More
              </Text>
              {more.map((l) => (
                <SmartLink key={l.href} href={l.href}>
                  <Text variant="body-default-s" onBackground="neutral-medium" lang={l.lang} className={l.lang ? "hindi" : undefined}>
                    {l.label}
                  </Text>
                </SmartLink>
              ))}
              <SmartLink href={`mailto:${org.email}`}>
                <Text variant="body-default-s" onBackground="neutral-medium" style={{ overflowWrap: "anywhere" }}>
                  {org.email}
                </Text>
              </SmartLink>
            </Column>
          </Grid>
          <Grid columns="2" s={{ columns: "1" }} gap="32">
            {centres.map((c) => (
              <Column key={c.id} gap="4" paddingTop="16" borderTop>
                <Text variant="label-strong-m" onBackground="neutral-strong">
                  {c.name}
                </Text>
                {c.address.map((l) => (
                  <Text key={l} variant="body-default-s" onBackground="neutral-medium">
                    {l}
                  </Text>
                ))}
                <Row gap="16" wrap vertical="center">
                  {c.phones.map((p) => (
                    <SmartLink key={p.href} href={p.href}>
                      <Text variant="body-default-s" className="tabular">
                        {p.label}
                      </Text>
                    </SmartLink>
                  ))}
                  <SmartLink href={c.map} suffixIcon="arrowUpRight">
                    <Text variant="body-default-s">Directions</Text>
                  </SmartLink>
                </Row>
              </Column>
            ))}
          </Grid>
          <Line />
          <Row horizontal="between" gap="16" wrap s={{ direction: "column" }}>
            <Text variant="body-default-xs" onBackground="neutral-medium" style={{ maxWidth: 720 }}>
              © {year} SAMADHAN. Registered society {registrations[0].value}. FCRA&nbsp;{registrations[1].value}.
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
    </Column>
  );
}
