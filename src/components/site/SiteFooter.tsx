"use client";

import React from "react";
import Link from "next/link";
import { Button, Column, Grid, Line, Row, Text } from "@once-ui-system/core";
import { SAMADHAN_ORG, BANK_ACCOUNTS } from "../../resources/samadhan-data";

export function SiteFooter() {
  return (
    <Column
      as="footer"
      fillWidth
      paddingX="24"
      paddingY="64"
      horizontal="center"
      style={{
        background: "#0d1627",
        color: "#f4f6fa",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Column fillWidth maxWidth="xl" gap="48">
        {/* Top Row: Institutional Identity & Direct CTA */}
        <Row
          fillWidth
          horizontal="between"
          vertical="start"
          gap="32"
          style={{ flexWrap: "wrap" }}
        >
          <Column gap="12" style={{ maxWidth: "540px" }}>
            <Row vertical="center" gap="12">
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  background: "#233a73",
                  border: "1px solid #e48f45",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                S
              </div>
              <Text
                variant="heading-strong-l"
                style={{ color: "#ffffff", fontFamily: "var(--font-heading)" }}
              >
                SAMADHAN India
              </Text>
            </Row>
            <Text
              variant="body-default-s"
              style={{ color: "rgba(255, 255, 255, 0.78)" }}
            >
              {SAMADHAN_ORG.legalName}. Founded in December 1981 by clinical
              psychologist Pramila Balasundaram in Dakshinpuri resettlement
              colony, New Delhi. Providing early intervention, ABA therapy,
              special education, maternal mental health counseling, and
              vocational pathways for children with intellectual and
              developmental disabilities.
            </Text>
            <Row gap="8" style={{ flexWrap: "wrap", marginTop: "4px" }}>
              <span className="statutory-pill">
                Societies Act: {SAMADHAN_ORG.registrations.societiesAct}
              </span>
              <span className="statutory-pill">
                FCRA: {SAMADHAN_ORG.registrations.fcraNumber}
              </span>
              <span className="statutory-pill">
                NGOsource US 501(c)(3) ED Certified
              </span>
              <span className="statutory-pill">80G & 12A Tax Exempt</span>
            </Row>
          </Column>

          <Column
            gap="12"
            padding="24"
            radius="l"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              maxWidth: "420px",
            }}
          >
            <Text variant="label-strong-m" style={{ color: "#f5c28b" }}>
              Direct CSR & Philanthropic Remittance
            </Text>
            <Text
              variant="body-default-xs"
              style={{ color: "rgba(255, 255, 255, 0.76)" }}
            >
              100% of domestic donations qualify for Section 80G tax deductions.
              International grants are accepted via our Ministry of Home Affairs
              designated SBI FCRA Main Branch account in New Delhi.
            </Text>
            <Row gap="12" style={{ marginTop: "4px", flexWrap: "wrap" }}>
              <Button
                href="/donate"
                variant="primary"
                size="s"
                label="Donate / CSR Schedule VII"
              />
              <Button
                href="/impact-reports"
                variant="secondary"
                size="s"
                label="12-Year Audited Reports"
              />
            </Row>
          </Column>
        </Row>

        <Line background="neutral-alpha-weak" />

        {/* 3 Clinical Centres & Navigation Grid */}
        <Grid
          columns="4"
          m={{ columns: 2 }}
          s={{ columns: 1 }}
          gap="24"
          fillWidth
        >
          {SAMADHAN_ORG.centres.map((c) => (
            <Column key={c.id} gap="8">
              <Text
                variant="code-default-xs"
                style={{ color: "#e48f45", textTransform: "uppercase" }}
              >
                {c.role}
              </Text>
              <Text variant="heading-strong-s" style={{ color: "#ffffff" }}>
                {c.name}
              </Text>
              <Text
                variant="body-default-xs"
                style={{ color: "rgba(255, 255, 255, 0.72)" }}
              >
                {c.address}
              </Text>
              <Text
                variant="code-default-xs"
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                Tel: {c.phone.join(" / ")}
              </Text>
              <Text
                variant="body-default-xs"
                style={{ color: "rgba(255, 255, 255, 0.65)" }}
              >
                Lead: {c.contactPerson}
              </Text>
            </Column>
          ))}

          <Column gap="8">
            <Text
              variant="code-default-xs"
              style={{ color: "#e48f45", textTransform: "uppercase" }}
            >
              Institutional Sitemap
            </Text>
            <Column gap="8">
              {[
                { href: "/programmes", label: "Clinical & Community Programmes" },
                { href: "/centres", label: "Centres, Map & Parent Intake" },
                { href: "/impact-reports", label: "Audited Reports (2012–2025)" },
                { href: "/about", label: "Founding Story & Board" },
                { href: "/donate", label: "Domestic 80G & FCRA Wire Details" },
                { href: "/strategy", label: "5-Slide Growth & SEO Strategy" },
                { href: "/contact", label: "Refer a Child / CSR Inquiry" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "rgba(255, 255, 255, 0.8)",
                    textDecoration: "none",
                    fontSize: "0.82rem",
                  }}
                >
                  → {link.label}
                </Link>
              ))}
            </Column>
          </Column>
        </Grid>

        <Line background="neutral-alpha-weak" />

        {/* Bottom Legal & Banking Verification Bar */}
        <Row
          fillWidth
          horizontal="between"
          vertical="center"
          gap="16"
          style={{ flexWrap: "wrap" }}
        >
          <Text
            variant="body-default-xs"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            © {new Date().getFullYear()} {SAMADHAN_ORG.legalName}. Registered
            under Societies Registration Act XXI of 1860 (No.{" "}
            {SAMADHAN_ORG.registrations.societiesAct}) and RPwD Act 2016 Sec
            51(2).
          </Text>
          <Text
            variant="code-default-xs"
            style={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            Domestic IFSC: {BANK_ACCOUNTS.domestic.ifsc} · FCRA IFSC:{" "}
            {BANK_ACCOUNTS.fcra.ifsc} (SWIFT: {BANK_ACCOUNTS.fcra.swiftCode})
          </Text>
        </Row>
      </Column>
    </Column>
  );
}
