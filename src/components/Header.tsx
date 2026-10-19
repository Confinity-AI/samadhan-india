"use client";

import { Button, Column, Drawer, IconButton, Line, Row, SmartLink, Text } from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { centres, nav, org, whatsapp, withBase } from "@/content/site";

export function Brand({ light }: { light?: boolean }) {
  return (
    <a href={withBase("/")} className="brand-link" aria-label="SAMADHAN India, home">
      <Row gap="12" vertical="center">
        {/* biome-ignore lint/performance/noImgElement: static logo */}
        <img src={withBase(light ? "/logo-pictogram-light.png" : "/logo-pictogram-dark.png")} alt="" width={36} height={36} />
        <Column gap="2">
          <Text variant="heading-strong-m" onBackground={light ? "neutral-strong" : "brand-strong"} style={{ letterSpacing: "0.04em" }}>
            SAMADHAN
          </Text>
          <Text variant="label-default-xs" onBackground="neutral-weak">
            New Delhi, since 1981
          </Text>
        </Column>
      </Row>
    </a>
  );
}

const mobileCall = centres.flatMap((c) => c.phones).find((p) => p.href.includes("74284")) ?? centres[0].phones[0];

function LanguageSwitch({ hindi, size = "m" }: { hindi: boolean; size?: "s" | "m" | "l" }) {
  return hindi ? (
    <Button href="/families" variant="secondary" size={size} hrefLang="en" aria-label="Read in English">
      <span lang="en">English</span>
    </Button>
  ) : (
    <Button href="/hi/families" variant="secondary" size={size} hrefLang="hi" aria-label="हिंदी में परिवारों के लिए जानकारी (Hindi information for families)">
      <span lang="hi" className="hindi">
        हिंदी
      </span>
    </Button>
  );
}

function DrawerLink({ href, children, sub }: { href: string; children: React.ReactNode; sub?: boolean }) {
  return (
    <SmartLink href={href} style={{ minHeight: 44, display: "flex", alignItems: "center" }}>
      <Text variant={sub ? "body-default-l" : "heading-strong-m"} onBackground={sub ? "neutral-weak" : undefined}>
        {children}
      </Text>
    </SmartLink>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const hindi = pathname.startsWith("/hi");
  const onDonate = pathname === "/donate";
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const wa = hindi ? whatsapp.hrefHi : whatsapp.href;

  // biome-ignore lint/correctness/useExhaustiveDependencies: close the menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <Row as="header" className="header" fillWidth horizontal="center" borderBottom paddingX="24" paddingY="12">
        <Row maxWidth="xl" vertical="center" horizontal="between" gap="24">
          <Brand />
          <Row as="nav" aria-label="Main" gap="4" vertical="center" m={{ hide: true }}>
            <Button href="/families" variant="tertiary" size="m" weight="default" aria-current={isActive("/families") ? "page" : undefined}>
              For families
            </Button>
            {nav.map((item) => (
              <Button key={item.href} href={item.href} variant="tertiary" size="m" weight="default" aria-current={isActive(item.href) ? "page" : undefined}>
                {item.label}
              </Button>
            ))}
          </Row>
          <Row gap="8" vertical="center">
            <LanguageSwitch hindi={hindi} />
            <Row m={{ hide: true }}>
              <IconButton icon="whatsapp" variant="secondary" size="l" href={wa} tooltip="WhatsApp us" ariaLabel="WhatsApp SAMADHAN" />
            </Row>
            <Row m={{ hide: true }}>
              <Button href="/donate" variant="primary" size="m" prefixIcon="heart">
                Donate
              </Button>
            </Row>
            <Row hide l={{ hide: true }} m={{ hide: false }}>
              <IconButton icon="menu" variant="secondary" size="l" onClick={() => setOpen(true)} ariaLabel={hindi ? "मेन्यू खोलें" : "Open menu"} />
            </Row>
          </Row>
        </Row>
        <Drawer open={open} onClose={() => setOpen(false)} title={hindi ? "मेन्यू" : "Menu"} side="right">
          {hindi ? (
            <Column as="nav" aria-label="मेन्यू" gap="12" lang="hi" className="hindi">
              <DrawerLink href="/hi/families">परिवारों के लिए जानकारी</DrawerLink>
              <DrawerLink href="/contact">संपर्क और पता</DrawerLink>
              <DrawerLink href="/donate">दान करें</DrawerLink>
              <Line />
              <LanguageSwitch hindi size="l" />
            </Column>
          ) : (
            <Column as="nav" aria-label="Mobile" gap="12">
              <Row gap="8">
                <Button href="/donate" variant="primary" size="l" prefixIcon="heart" fillWidth>
                  Donate
                </Button>
                <Button href="/families" variant="secondary" size="l" fillWidth>
                  For families
                </Button>
              </Row>
              {nav.map((item) => (
                <Column key={item.href} gap="0">
                  <DrawerLink href={item.href}>{item.label}</DrawerLink>
                  {item.children
                    ?.filter((c) => c.href !== "/donate")
                    .map((c) => (
                      <DrawerLink key={c.href} href={c.href} sub>
                        {c.label}
                      </DrawerLink>
                    ))}
                </Column>
              ))}
              <DrawerLink href="/moments">Photos</DrawerLink>
              <Line />
              <LanguageSwitch hindi={false} size="l" />
            </Column>
          )}
        </Drawer>
      </Row>
      <nav className="action-bar" aria-label={hindi ? "संपर्क" : "Quick contact"}>
        <Button href={wa} prefixIcon="whatsapp" size="l" fillWidth>
          <span lang={hindi ? "hi" : undefined}>{hindi ? "व्हाट्सऐप" : "WhatsApp"}</span>
        </Button>
        <Button href={mobileCall.href} prefixIcon="phone" variant="secondary" size="l" fillWidth>
          <span lang={hindi ? "hi" : undefined}>{hindi ? "कॉल करें" : "Call"}</span>
        </Button>
        {onDonate ? (
          <Button href={`mailto:${org.email}?subject=${encodeURIComponent("80G receipt for my donation")}`} prefixIcon="mail" variant="secondary" size="l" fillWidth>
            Receipt
          </Button>
        ) : (
          <Button href="/donate" prefixIcon="heart" variant="secondary" size="l" fillWidth>
            {hindi ? <span lang="hi">दान करें</span> : "Donate"}
          </Button>
        )}
      </nav>
    </>
  );
}
