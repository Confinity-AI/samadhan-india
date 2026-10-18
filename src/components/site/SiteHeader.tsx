"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Column,
  Flex,
  Icon,
  Row,
  Text,
  ThemeSwitcher,
} from "@once-ui-system/core";
import { SAMADHAN_ORG } from "../../resources/samadhan-data";

const NAV_LINKS = [
  { href: "/", label: "Overview" },
  { href: "/programmes", label: "Programmes & Care" },
  { href: "/centres", label: "Centres & Referral" },
  { href: "/impact-reports", label: "Impact & Financials" },
  { href: "/about", label: "44-Year Legacy" },
  { href: "/strategy", label: "2026 Strategy Deck" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <Column fillWidth style={{ position: "sticky", top: 0, zIndex: 100 }}>
      {/* Top Statutory & Helpline Strip */}
      <Row
        fillWidth
        paddingX="24"
        paddingY="8"
        horizontal="center"
        style={{
          background: "#14244b",
          color: "#ffffff",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <Row
          fillWidth
          maxWidth="xl"
          horizontal="between"
          vertical="center"
          gap="12"
          style={{ flexWrap: "wrap" }}
        >
          <Row vertical="center" gap="12" style={{ flexWrap: "wrap" }}>
            <span className="statutory-pill">
              Est. 1981 · Reg. No. {SAMADHAN_ORG.registrations.societiesAct}
            </span>
            <Text
              variant="code-default-xs"
              style={{ color: "rgba(255, 255, 255, 0.85)" }}
            >
              FCRA: {SAMADHAN_ORG.registrations.fcraNumber} · 80G & 12A Exempt ·
              US 501(c)(3) Equivalent ({SAMADHAN_ORG.registrations.ngosource})
            </Text>
          </Row>

          <Row vertical="center" gap="16">
            <a
              href={`tel:${SAMADHAN_ORG.centres[0].phone[0].replace(/[^+\d]/g, "")}`}
              style={{
                color: "#f5c28b",
                textDecoration: "none",
                fontSize: "0.75rem",
                fontFamily: "var(--font-code)",
                fontWeight: 600,
              }}
            >
              Parent Helpline: {SAMADHAN_ORG.centres[0].phone[0]}
            </a>
            <Link
              href="/contact"
              style={{
                color: "#ffffff",
                textDecoration: "underline",
                fontSize: "0.75rem",
              }}
            >
              Book Clinical Assessment
            </Link>
          </Row>
        </Row>
      </Row>

      {/* Main Institutional Header */}
      <Row
        fillWidth
        paddingX="24"
        paddingY="12"
        horizontal="center"
        className="samadhan-glass-nav"
      >
        <Row
          fillWidth
          maxWidth="xl"
          horizontal="between"
          vertical="center"
          gap="16"
          style={{ flexWrap: "wrap" }}
        >
          {/* Logo & Name */}
          <Link
            href="/"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Row vertical="center" gap="12">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #14244b 0%, #233a73 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.35rem",
                  border: "1px solid rgba(194, 98, 26, 0.55)",
                  boxShadow: "0 2px 8px rgba(20, 36, 75, 0.16)",
                }}
              >
                S
              </div>
              <Column gap="2">
                <Row vertical="center" gap="8">
                  <Text
                    variant="heading-strong-m"
                    style={{
                      letterSpacing: "0.02em",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    SAMADHAN
                  </Text>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      padding: "1px 6px",
                      borderRadius: "4px",
                      background: "rgba(194, 98, 26, 0.14)",
                      color: "#c2621a",
                      fontFamily: "var(--font-code)",
                      fontWeight: 600,
                    }}
                  >
                    NEW DELHI
                  </span>
                </Row>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  Early Intervention & Intellectual Disability · Since 1981
                </Text>
              </Column>
            </Row>
          </Link>

          {/* Navigation Links */}
          <Row
            vertical="center"
            gap="4"
            style={{ flexWrap: "wrap" }}
          >
            {NAV_LINKS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);
              const isStrategy = item.href === "/strategy";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    padding: "7px 12px",
                    borderRadius: "8px",
                    fontSize: "0.86rem",
                    fontWeight: isActive || isStrategy ? 600 : 500,
                    background: isActive
                      ? "var(--brand-alpha-weak)"
                      : isStrategy
                        ? "rgba(194, 98, 26, 0.1)"
                        : "transparent",
                    color: isActive
                      ? "var(--brand-on-background-strong)"
                      : isStrategy
                        ? "#c2621a"
                        : "var(--neutral-on-background-medium)",
                    border: isStrategy
                      ? "1px solid rgba(194, 98, 26, 0.3)"
                      : "1px solid transparent",
                    transition: "all 0.15s ease",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </Row>

          {/* Actions */}
          <Row vertical="center" gap="8">
            <ThemeSwitcher />
            <Button
              href="/donate"
              variant="primary"
              size="s"
              label="Fund a Child's Therapy"
              arrowIcon
            />
          </Row>
        </Row>
      </Row>
    </Column>
  );
}
