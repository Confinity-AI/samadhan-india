"use client";

import { Button, Column, Drawer, IconButton, Line, Row, SmartLink, Text } from "@once-ui-system/core";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, whatsapp, withBase } from "@/content/site";

export function Brand() {
  return (
    <a href={withBase("/")} className="brand-link" aria-label="SAMADHAN India, home">
      <Row gap="12" vertical="center">
        {/* biome-ignore lint/performance/noImgElement: static logo */}
        <img src={withBase("/logo-mark-dark.png")} alt="" width={40} height={37} />
        <Column gap="2">
          <Text variant="heading-strong-m" onBackground="brand-strong" style={{ letterSpacing: "0.04em" }}>
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

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Row as="header" className="header" fillWidth horizontal="center" borderBottom paddingX="24" paddingY="12">
      <Row maxWidth="xl" vertical="center" horizontal="between" gap="24">
        <Brand />
        <Row as="nav" aria-label="Main" gap="4" vertical="center" m={{ hide: true }}>
          {nav.map((item) => (
            <Button key={item.href} href={item.href} variant="tertiary" size="s" weight="default" aria-current={isActive(item.href) ? "page" : undefined}>
              {item.label}
            </Button>
          ))}
          <Button href="/families" variant="tertiary" size="s" weight="default">
            For families · <span lang="hi">परिवारों के लिए</span>
          </Button>
        </Row>
        <Row gap="8" vertical="center">
          <Row m={{ hide: true }}>
            <IconButton icon="whatsapp" variant="secondary" href={whatsapp.href} tooltip="WhatsApp us" ariaLabel="WhatsApp SAMADHAN" />
          </Row>
          <Button href="/donate" variant="primary" size="m">
            Donate
          </Button>
          <Row hide l={{ hide: true }} m={{ hide: false }}>
            <IconButton icon="menu" variant="secondary" onClick={() => setOpen(true)} ariaLabel="Open menu" />
          </Row>
        </Row>
      </Row>
      <Drawer open={open} onClose={() => setOpen(false)} title="Menu" side="right">
        <Column as="nav" aria-label="Mobile" gap="16" onClick={() => setOpen(false)}>
          <Button href="/families" variant="secondary" fillWidth size="l">
            For families · <span lang="hi">परिवारों के लिए</span>
          </Button>
          {nav.map((item) => (
            <Column key={item.href} gap="8">
              <SmartLink href={item.href}>
                <Text variant="heading-strong-m">{item.label}</Text>
              </SmartLink>
              {item.children?.map((c) => (
                <SmartLink key={c.href} href={c.href}>
                  <Text variant="body-default-l" onBackground="neutral-weak">
                    {c.label}
                  </Text>
                </SmartLink>
              ))}
            </Column>
          ))}
          <Line />
          <SmartLink href="/contact">
            <Text variant="heading-strong-m">Contact</Text>
          </SmartLink>
          <Row gap="8">
            <Button href={whatsapp.href} variant="secondary" prefixIcon="whatsapp" fillWidth>
              WhatsApp
            </Button>
            <Button href="/donate" fillWidth>
              Donate
            </Button>
          </Row>
        </Column>
      </Drawer>
    </Row>
  );
}
