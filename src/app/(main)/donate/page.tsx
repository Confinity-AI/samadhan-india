"use client";

import React, { useState } from "react";
import {
  Badge,
  Button,
  Column,
  Grid,
  Heading,
  Row,
  Text,
} from "@once-ui-system/core";
import {
  BANK_ACCOUNTS,
  DONATION_TIERS,
  SAMADHAN_ORG,
} from "@/resources/samadhan-data";

export default function DonatePage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (label: string, value: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(value);
      setCopiedField(label);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  return (
    <Column fillWidth>
      {/* Hero */}
      <Column
        fillWidth
        paddingX="24"
        paddingY="56"
        horizontal="center"
        className="samadhan-hero-gradient"
      >
        <Column fillWidth maxWidth="xl" gap="20">
          <Row gap="8" vertical="center" style={{ flexWrap: "wrap" }}>
            <Badge title="100% Direct Clinical Remittance · Zero Platform Cut" />
            <span
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-code)",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "rgba(194, 98, 26, 0.14)",
                color: "#c2621a",
                fontWeight: 600,
              }}
            >
              Sec 80G Tax Exempt · FCRA Reg. {SAMADHAN_ORG.registrations.fcraNumber}
            </span>
          </Row>
          <Heading
            as="h1"
            variant="display-strong-m"
            style={{ fontFamily: "var(--font-heading)", maxWidth: "840px" }}
          >
            Fund clinical therapy, assistive technology, and special education
            for New Delhi’s children.
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            style={{ maxWidth: "740px" }}
          >
            SAMADHAN accepts Indian Rupee (INR) contributions via NEFT, RTGS,
            IMPS, and cheque (eligible for 50% Section 80G tax deduction), and
            international foreign currency grants via our Ministry of Home
            Affairs designated SBI FCRA Main Branch account.
          </Text>
        </Column>
      </Column>

      {/* Main Content */}
      <Column fillWidth paddingX="24" paddingY="64" horizontal="center">
        <Column fillWidth maxWidth="xl" gap="48">
          {/* Dual Banking Cards: Domestic INR vs International FCRA */}
          <Grid
            columns="2"
            m={{ columns: 1 }}
            s={{ columns: 1 }}
            gap="24"
            fillWidth
          >
            {/* Domestic INR Account */}
            <Column
              padding="32"
              radius="l"
              background="surface"
              border="neutral-alpha-medium"
              gap="16"
            >
              <Row fillWidth horizontal="between" vertical="center">
                <Badge title="Indian Citizens & Domestic CSR (INR Only)" />
                <Text
                  variant="code-default-xs"
                  style={{ color: "#2d6a4f", fontWeight: 700 }}
                >
                  80G & CSR Form 1 Eligible
                </Text>
              </Row>

              <Heading
                as="h2"
                variant="heading-strong-l"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {BANK_ACCOUNTS.domestic.label}
              </Heading>

              <Column
                gap="12"
                padding="16"
                radius="m"
                background="page"
                border="neutral-alpha-weak"
              >
                {[
                  {
                    k: "Beneficiary Name",
                    v: BANK_ACCOUNTS.domestic.accountName,
                  },
                  { k: "Bank & Branch", v: BANK_ACCOUNTS.domestic.bankName },
                  {
                    k: "Account Number",
                    v: BANK_ACCOUNTS.domestic.accountNumber,
                  },
                  { k: "IFSC Code", v: BANK_ACCOUNTS.domestic.ifsc },
                  { k: "Account Type", v: BANK_ACCOUNTS.domestic.accountType },
                ].map((row) => (
                  <Row
                    key={row.k}
                    fillWidth
                    horizontal="between"
                    vertical="center"
                    gap="12"
                  >
                    <Column gap="2">
                      <Text
                        variant="code-default-xs"
                        onBackground="neutral-weak"
                      >
                        {row.k}
                      </Text>
                      <Text variant="label-strong-s">{row.v}</Text>
                    </Column>
                    <button
                      onClick={() => handleCopy(row.k, row.v)}
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        border: "1px solid var(--neutral-alpha-medium)",
                        background: "var(--surface-background)",
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-code)",
                        cursor: "pointer",
                      }}
                    >
                      {copiedField === row.k ? "Copied ✓" : "Copy"}
                    </button>
                  </Row>
                ))}
              </Column>

              <Text variant="body-default-xs" onBackground="neutral-medium">
                {BANK_ACCOUNTS.domestic.eligibilityNote} After completing your
                transfer, email your PAN and transaction reference to{" "}
                <strong>{SAMADHAN_ORG.centres[0].email}</strong> to receive your
                Form 10BE / Section 80G tax receipt.
              </Text>
            </Column>

            {/* International FCRA Account */}
            <Column
              id="fcra"
              padding="32"
              radius="l"
              background="surface"
              border="neutral-alpha-medium"
              gap="16"
            >
              <Row fillWidth horizontal="between" vertical="center">
                <Badge title="Foreign Passport Holders & Global Foundations" />
                <Text
                  variant="code-default-xs"
                  style={{ color: "#c2621a", fontWeight: 700 }}
                >
                  MHA FCRA Reg. {BANK_ACCOUNTS.fcra.fcraReg}
                </Text>
              </Row>

              <Heading
                as="h2"
                variant="heading-strong-l"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {BANK_ACCOUNTS.fcra.label}
              </Heading>

              <Column
                gap="12"
                padding="16"
                radius="m"
                background="page"
                border="neutral-alpha-weak"
              >
                {[
                  { k: "Beneficiary Name", v: BANK_ACCOUNTS.fcra.accountName },
                  {
                    k: "Designated FCRA Bank",
                    v: `${BANK_ACCOUNTS.fcra.bankName} — ${BANK_ACCOUNTS.fcra.branch}`,
                  },
                  {
                    k: "FCRA Account Number",
                    v: BANK_ACCOUNTS.fcra.accountNumber,
                  },
                  {
                    k: "IFSC & Branch Code",
                    v: `${BANK_ACCOUNTS.fcra.ifsc} (Branch: ${BANK_ACCOUNTS.fcra.branchCode})`,
                  },
                  { k: "SWIFT / BIC Code", v: BANK_ACCOUNTS.fcra.swiftCode },
                ].map((row) => (
                  <Row
                    key={row.k}
                    fillWidth
                    horizontal="between"
                    vertical="center"
                    gap="12"
                  >
                    <Column gap="2">
                      <Text
                        variant="code-default-xs"
                        onBackground="neutral-weak"
                      >
                        {row.k}
                      </Text>
                      <Text variant="label-strong-s">{row.v}</Text>
                    </Column>
                    <button
                      onClick={() => handleCopy(`fcra-${row.k}`, row.v)}
                      style={{
                        padding: "4px 10px",
                        borderRadius: "6px",
                        border: "1px solid var(--neutral-alpha-medium)",
                        background: "var(--surface-background)",
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-code)",
                        cursor: "pointer",
                      }}
                    >
                      {copiedField === `fcra-${row.k}` ? "Copied ✓" : "Copy"}
                    </button>
                  </Row>
                ))}
              </Column>

              <Text variant="body-default-xs" onBackground="neutral-medium">
                {BANK_ACCOUNTS.fcra.eligibilityNote} US foundations can also
                verify SAMADHAN via the{" "}
                <strong>NGOsource 501(c)(3) Equivalency Determination</strong>{" "}
                repository.
              </Text>
            </Column>
          </Grid>

          {/* Unit Cost Sponsorship Matrix */}
          <Column gap="20" fillWidth>
            <Column gap="8">
              <Text
                variant="code-default-xs"
                style={{ color: "#c2621a", textTransform: "uppercase" }}
              >
                Clinical & Capital Sponsorship Menu
              </Text>
              <Heading
                as="h2"
                variant="heading-strong-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Six Audited Philanthropic & CSR Sponsorship Tiers
              </Heading>
            </Column>

            <Grid
              columns="3"
              m={{ columns: 2 }}
              s={{ columns: 1 }}
              gap="20"
              fillWidth
            >
              {DONATION_TIERS.map((tier) => (
                <Column
                  key={tier.id}
                  padding="24"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-medium"
                  gap="12"
                  style={{ justifyContent: "space-between" }}
                >
                  <Column gap="8">
                    <Row fillWidth horizontal="between" vertical="center">
                      <Text
                        variant="display-strong-xs"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--brand-on-background-strong)",
                        }}
                      >
                        {tier.amountINR}
                      </Text>
                      <Text
                        variant="code-default-xs"
                        onBackground="neutral-weak"
                      >
                        {tier.amountUSD}
                      </Text>
                    </Row>
                    <Text variant="heading-strong-s">{tier.title}</Text>
                    <Text
                      variant="body-default-xs"
                      onBackground="neutral-medium"
                    >
                      {tier.impact}
                    </Text>
                  </Column>

                  <Text
                    variant="code-default-xs"
                    style={{ color: "#2d6a4f", fontWeight: 600 }}
                  >
                    ✓ {tier.taxBenefit}
                  </Text>
                </Column>
              ))}
            </Grid>
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
