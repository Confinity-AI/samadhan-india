"use client";

import React from "react";
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
  ANNUAL_REPORTS,
  CHILD_OUTCOME_STORIES,
  IMPACT_METRICS_2025,
  SAMADHAN_ORG,
} from "@/resources/samadhan-data";

export default function ImpactReportsPage() {
  return (
    <Column fillWidth>
      {/* Hero Banner */}
      <Column
        fillWidth
        paddingX="24"
        paddingY="56"
        horizontal="center"
        className="samadhan-hero-gradient"
      >
        <Column fillWidth maxWidth="xl" gap="20">
          <Row gap="8" vertical="center" style={{ flexWrap: "wrap" }}>
            <Badge title="12 Years of Unbroken Statutory Disclosure (2012–2025)" />
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
              FCRA Reg. {SAMADHAN_ORG.registrations.fcraNumber} · NGOsource ED
              Certified
            </span>
          </Row>
          <Heading
            as="h1"
            variant="display-strong-m"
            style={{ fontFamily: "var(--font-heading)", maxWidth: "840px" }}
          >
            Audited annual reports, child IEP outcomes, and statutory compliance
            vault.
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            style={{ maxWidth: "740px" }}
          >
            Corporate CSR committees, institutional foundations, and individual
            donors can inspect every annual report from FY 2012–13 through FY
            2024–25, along with our documented child developmental case audits.
          </Text>
        </Column>
      </Column>

      {/* Main Content */}
      <Column fillWidth paddingX="24" paddingY="64" horizontal="center">
        <Column fillWidth maxWidth="xl" gap="48">
          {/* Statutory Credentials Box */}
          <Column
            fillWidth
            padding="24"
            radius="l"
            background="surface"
            border="neutral-alpha-medium"
            gap="20"
          >
            <Heading
              as="h2"
              variant="heading-strong-l"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Statutory & Regulatory Registrations (India & International)
            </Heading>
            <Grid
              columns="3"
              m={{ columns: 2 }}
              s={{ columns: 1 }}
              gap="16"
              fillWidth
            >
              {[
                {
                  label: "Societies Registration Act XXI of 1860",
                  value: `Reg. No. ${SAMADHAN_ORG.registrations.societiesAct} (Dec 1981)`,
                },
                {
                  label: "Foreign Contribution (Regulation) Act (FCRA)",
                  value: `MHA Reg. No. ${SAMADHAN_ORG.registrations.fcraNumber}`,
                },
                {
                  label: "Rights of Persons with Disabilities (RPwD) Act 2016",
                  value: SAMADHAN_ORG.registrations.rpwdAct,
                },
                {
                  label: "Income Tax Act Exemptions",
                  value: SAMADHAN_ORG.registrations.incomeTax80G,
                },
                {
                  label: "National Trust (Ministry of Social Justice)",
                  value: SAMADHAN_ORG.registrations.nationalTrust,
                },
                {
                  label: "US 501(c)(3) Equivalency Determination",
                  value: SAMADHAN_ORG.registrations.ngosource,
                },
              ].map((reg) => (
                <Column
                  key={reg.label}
                  padding="16"
                  radius="m"
                  background="page"
                  border="neutral-alpha-weak"
                  gap="4"
                >
                  <Text variant="code-default-xs" onBackground="neutral-weak">
                    {reg.label}
                  </Text>
                  <Text variant="label-strong-s">{reg.value}</Text>
                </Column>
              ))}
            </Grid>
          </Column>

          {/* 12-Year Annual Report Archive */}
          <Column gap="20" fillWidth>
            <Column gap="8">
              <Text
                variant="code-default-xs"
                style={{ color: "#c2621a", textTransform: "uppercase" }}
              >
                Official PDF Repository
              </Text>
              <Heading
                as="h2"
                variant="heading-strong-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Annual Reports & Audited Reviews (2012–2025)
              </Heading>
            </Column>

            <Grid
              columns="3"
              m={{ columns: 2 }}
              s={{ columns: 1 }}
              gap="16"
              fillWidth
            >
              {ANNUAL_REPORTS.map((rep, idx) => (
                <Column
                  key={rep.year}
                  padding="20"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-medium"
                  gap="12"
                  style={{ justifyContent: "space-between" }}
                >
                  <Column gap="8">
                    <Row fillWidth horizontal="between" vertical="center">
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-code)",
                          padding: "3px 8px",
                          borderRadius: "6px",
                          background: idx === 0 ? "#c2621a" : "#14244b",
                          color: "#ffffff",
                          fontWeight: 700,
                        }}
                      >
                        FY {rep.year}
                      </span>
                      {idx === 0 && (
                        <Text
                          variant="code-default-xs"
                          style={{ color: "#c2621a", fontWeight: 600 }}
                        >
                          LATEST AUDIT
                        </Text>
                      )}
                    </Row>
                    <Text variant="heading-strong-s">{rep.title}</Text>
                    <Text
                      variant="body-default-xs"
                      onBackground="neutral-medium"
                    >
                      {rep.highlights}
                    </Text>
                  </Column>

                  <Button
                    href={rep.pdfUrl}
                    variant="secondary"
                    size="s"
                    fillWidth
                    label={`Download FY ${rep.year} PDF ↗`}
                  />
                </Column>
              ))}
            </Grid>
          </Column>

          {/* Complete 8 Longitudinal Child Case Studies */}
          <Column gap="20" fillWidth>
            <Column gap="8">
              <Text
                variant="code-default-xs"
                style={{ color: "#c2621a", textTransform: "uppercase" }}
              >
                Verified Clinical Case Ledger
              </Text>
              <Heading
                as="h2"
                variant="heading-strong-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Eight documented child & adolescent trajectories (FY 2024–25)
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">
                Extracted directly from SAMADHAN’s 2023–24 and 2024–25 clinical
                review dossiers. Each case reflects structured IEP goals across
                motor, sensory, speech, and classroom readiness domains.
              </Text>
            </Column>

            <Grid
              columns="2"
              m={{ columns: 1 }}
              s={{ columns: 1 }}
              gap="20"
              fillWidth
            >
              {CHILD_OUTCOME_STORIES.map((story) => (
                <Column
                  key={story.id}
                  padding="24"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-medium"
                  gap="12"
                >
                  <Row fillWidth horizontal="between" vertical="center">
                    <Text variant="heading-strong-m">
                      {story.childName} ({story.age})
                    </Text>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "var(--font-code)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        background: "var(--brand-alpha-weak)",
                        color: "var(--brand-on-background-strong)",
                        fontWeight: 600,
                      }}
                    >
                      {story.programme}
                    </span>
                  </Row>
                  <Text
                    variant="code-default-xs"
                    style={{ color: "#c2621a", fontWeight: 600 }}
                  >
                    Diagnosis / Profile: {story.diagnosisContext}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-medium">
                    <strong>Baseline:</strong> {story.baseline}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-medium">
                    <strong>Intervention:</strong> {story.intervention}
                  </Text>
                  <Row
                    padding="12"
                    radius="m"
                    style={{
                      background: "rgba(27, 67, 50, 0.08)",
                      borderLeft: "3px solid #2d6a4f",
                    }}
                  >
                    <Text variant="body-default-xs">
                      <strong>Measured Outcome ({story.reportYear}):</strong>{" "}
                      {story.outcome}
                    </Text>
                  </Row>
                </Column>
              ))}
            </Grid>
          </Column>
        </Column>
      </Column>
    </Column>
  );
}
