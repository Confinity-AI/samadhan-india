"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Badge,
  Button,
  Column,
  Flex,
  Grid,
  Heading,
  Line,
  Row,
  Text,
} from "@once-ui-system/core";
import {
  SAMADHAN_ORG,
  IMPACT_METRICS_2025,
  PROGRAMMES,
  CHILD_OUTCOME_STORIES,
  INSTITUTIONAL_PARTNERS,
  DONATION_TIERS,
} from "@/resources/samadhan-data";
import { ClinicalVisualFrame } from "@/components/site/ClinicalVisualFrame";

export default function HomePage() {
  const [activePersona, setActivePersona] = useState<
    "parent" | "csr" | "diaspora" | "volunteer"
  >("parent");

  return (
    <Column fillWidth>
      {/* SECTION 1: INSTITUTIONAL HERO */}
      <Column
        fillWidth
        paddingX="24"
        paddingY="64"
        horizontal="center"
        className="samadhan-hero-gradient"
      >
        <Column fillWidth maxWidth="xl" gap="40">
          <Grid
            columns="12"
            m={{ columns: 1 }}
            s={{ columns: 1 }}
            gap="32"
          >
            {/* Left 7 columns: Editorial Mission & Dual-Path CTAs */}
            <Column style={{ gridColumn: "span 7" }} gap="24">
              <Row gap="8" vertical="center" style={{ flexWrap: "wrap" }}>
                <Badge
                  title="Founded December 1981 · New Delhi"
                  effect={false}
                />
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
                  National Trust Disha Centre · US 501(c)(3) ED Certified
                </span>
              </Row>

              <Heading
                as="h1"
                variant="display-strong-l"
                style={{
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                }}
              >
                Forty-four years of clinical care for children with intellectual
                disabilities in New Delhi.
              </Heading>

              <Text
                variant="body-default-l"
                onBackground="neutral-medium"
                style={{ maxWidth: "640px", lineHeight: 1.6 }}
              >
                SAMADHAN operates multidisciplinary early intervention, ABA
                behavioral therapy, inclusive school bridges, and maternal mental
                health clinics in Dakshinpuri and Dwarka. Over 90% of the
                families we serve earn between ₹7,000 and ₹15,000 a month and
                cannot afford ₹1,500-per-hour private clinics.
              </Text>

              <Row gap="12" style={{ flexWrap: "wrap", marginTop: "4px" }}>
                <Button
                  href="/donate"
                  variant="primary"
                  size="l"
                  label="Sponsor a Child's Therapy (80G / FCRA)"
                  arrowIcon
                />
                <Button
                  href="/centres"
                  variant="secondary"
                  size="l"
                  label="Book a Child Developmental Assessment"
                />
                <Button
                  href="/strategy"
                  variant="tertiary"
                  size="l"
                  label="View 2026 Growth & SEO Deck →"
                />
              </Row>

              {/* Quick Trust Ledger */}
              <Row
                gap="24"
                paddingTop="16"
                style={{
                  borderTop: "1px solid var(--neutral-alpha-medium)",
                  flexWrap: "wrap",
                }}
              >
                <Column gap="2">
                  <Text variant="code-default-xs" onBackground="neutral-weak">
                    DOMESTIC TAX EXEMPTION
                  </Text>
                  <Text variant="label-strong-s">
                    Income Tax Act Sec 80G & 12A
                  </Text>
                </Column>
                <Column gap="2">
                  <Text variant="code-default-xs" onBackground="neutral-weak">
                    FOREIGN GRANTS (MHA)
                  </Text>
                  <Text variant="label-strong-s">
                    FCRA Reg. No. {SAMADHAN_ORG.registrations.fcraNumber}
                  </Text>
                </Column>
                <Column gap="2">
                  <Text variant="code-default-xs" onBackground="neutral-weak">
                    US DIASPORA & FOUNDATIONS
                  </Text>
                  <Text variant="label-strong-s">
                    NGOsource 501(c)(3) Equivalency
                  </Text>
                </Column>
              </Row>
            </Column>

            {/* Right 5 columns: Visual Plate + Live Operational Ledger */}
            <Column style={{ gridColumn: "span 5" }} gap="16">
              <ClinicalVisualFrame
                imageUrl={SAMADHAN_ORG.mediaAssets.earlyInterventionHero}
                alt="Early Intervention & Sensory Integration Unit — Dwarka Sector 13 & Dakshinpuri"
                category="Clinical Operations · FY 2024–25"
                centreTag="Dakshinpuri (South Delhi) & Dwarka Sector 13"
                metricBadge="180+ Children Daily"
                variant="brand"
                caption="Occupational therapists, special educators, and clinical psychologists deliver individualized IEP care across 3 urban resettlement and residential zones."
              />

              <Row
                fillWidth
                padding="16"
                radius="l"
                background="surface"
                border="neutral-alpha-medium"
                horizontal="between"
                vertical="center"
                gap="12"
              >
                <Column gap="2">
                  <Text
                    variant="code-default-xs"
                    style={{ color: "#c2621a", fontWeight: 600 }}
                  >
                    NEW IN FY 2024–25 · SMAS & JCB PARTNERSHIPS
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-medium">
                    Dedicated ABA Therapy Room launched at Dwarka; 3-floor
                    accessibility lift installed; Sugamya Quissa Pitara library
                    reaching 101 children.
                  </Text>
                </Column>
                <Button
                  href="/impact-reports"
                  variant="secondary"
                  size="s"
                  label="Audit Report"
                />
              </Row>
            </Column>
          </Grid>

          {/* SECTION 2: AUDITED FY 2024-25 METRIC STRIP */}
          <Grid
            columns="4"
            m={{ columns: 2 }}
            s={{ columns: 1 }}
            gap="16"
            fillWidth
          >
            {IMPACT_METRICS_2025.slice(0, 8).map((m) => (
              <Column
                key={m.id}
                padding="20"
                radius="l"
                background="surface"
                border="neutral-alpha-medium"
                gap="8"
                className="samadhan-metric-card"
              >
                <Row horizontal="between" vertical="center">
                  <Text
                    variant="display-strong-s"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--brand-on-background-strong)",
                    }}
                  >
                    {m.figure}
                  </Text>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontFamily: "var(--font-code)",
                      padding: "2px 8px",
                      borderRadius: "999px",
                      background: "var(--neutral-alpha-weak)",
                      color: "var(--neutral-on-background-weak)",
                    }}
                  >
                    AUDITED
                  </span>
                </Row>
                <Text variant="label-strong-m">{m.label}</Text>
                <Text variant="body-default-xs" onBackground="neutral-medium">
                  {m.context}
                </Text>
                <Text
                  variant="code-default-xs"
                  onBackground="neutral-weak"
                  style={{ marginTop: "4px", fontSize: "0.68rem" }}
                >
                  Source: {m.source}
                </Text>
              </Column>
            ))}
          </Grid>
        </Column>
      </Column>

      {/* SECTION 3: FOUR-PERSONA ROUTING GATEWAY (Replaces confusing 36-page nav) */}
      <Column
        fillWidth
        paddingX="24"
        paddingY="64"
        horizontal="center"
        background="surface"
        borderTop="neutral-alpha-weak"
        borderBottom="neutral-alpha-weak"
      >
        <Column fillWidth maxWidth="xl" gap="32">
          <Row
            fillWidth
            horizontal="between"
            vertical="end"
            gap="16"
            style={{ flexWrap: "wrap" }}
          >
            <Column gap="8" style={{ maxWidth: "680px" }}>
              <Text
                variant="code-default-xs"
                style={{ color: "#c2621a", textTransform: "uppercase" }}
              >
                Direct Pathway Architecture
              </Text>
              <Heading
                as="h2"
                variant="heading-strong-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                How can SAMADHAN serve you today?
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">
                Select your role below to jump directly to clinical intake, CSR
                Schedule VII documentation, FCRA international wire credentials,
                or RCI clinical placements.
              </Text>
            </Column>

            <Row gap="8" style={{ flexWrap: "wrap" }}>
              {[
                { id: "parent", label: "Parent or Guardian" },
                { id: "csr", label: "Corporate CSR / Foundation" },
                { id: "diaspora", label: "International / NRI Donor" },
                { id: "volunteer", label: "Clinician / Volunteer" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActivePersona(tab.id as any)}
                  style={{
                    padding: "10px 16px",
                    borderRadius: "8px",
                    border:
                      activePersona === tab.id
                        ? "1px solid #233a73"
                        : "1px solid var(--neutral-alpha-medium)",
                    background:
                      activePersona === tab.id
                        ? "#14244b"
                        : "var(--surface-background)",
                    color:
                      activePersona === tab.id
                        ? "#ffffff"
                        : "var(--neutral-on-background-strong)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </Row>
          </Row>

          {/* Persona Specific Action Card */}
          {activePersona === "parent" && (
            <Grid
              columns="12"
              m={{ columns: 1 }}
              s={{ columns: 1 }}
              gap="24"
              padding="32"
              radius="l"
              border="neutral-alpha-medium"
              style={{ background: "rgba(35, 58, 115, 0.04)" }}
            >
              <Column style={{ gridColumn: "span 8" }} gap="16">
                <Badge title="For Parents, Families & Pediatric Referrals" />
                <Heading
                  as="h3"
                  variant="heading-strong-l"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Early developmental screening, speech therapy, ABA, and
                  special education in South & West Delhi.
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  If your child (0 to 18 years) shows delays in sitting, walking,
                  speech, eye contact, sensory processing, or school learning,
                  our clinical psychologists and occupational therapists provide
                  structured assessments. Means-tested subsidies ensure no family
                  in Dakshinpuri, Tigri, or Dwarka is turned away for inability
                  to pay.
                </Text>
                <Row gap="16" style={{ flexWrap: "wrap" }}>
                  <Column gap="4">
                    <Text variant="code-default-xs" onBackground="neutral-weak">
                      SOUTH DELHI (DAKSHINPURI)
                    </Text>
                    <Text variant="label-strong-m">
                      +91-11-41022446 · J-39, Block J, Dakshinpuri-110062
                    </Text>
                  </Column>
                  <Column gap="4">
                    <Text variant="code-default-xs" onBackground="neutral-weak">
                      WEST DELHI (DWARKA SECTOR 13)
                    </Text>
                    <Text variant="label-strong-m">
                      +91-11-45725033 · Pocket 1, Phase 1, Sector 13, Dwarka-110078
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column
                style={{ gridColumn: "span 4" }}
                gap="12"
                vertical="center"
              >
                <Button
                  href="/centres"
                  variant="primary"
                  size="l"
                  fillWidth
                  label="View Centres & Intake Checklist"
                  arrowIcon
                />
                <Button
                  href="/contact"
                  variant="secondary"
                  size="m"
                  fillWidth
                  label="Request Callback from Psychologist"
                />
              </Column>
            </Grid>
          )}

          {activePersona === "csr" && (
            <Grid
              columns="12"
              m={{ columns: 1 }}
              s={{ columns: 1 }}
              gap="24"
              padding="32"
              radius="l"
              border="neutral-alpha-medium"
              style={{ background: "rgba(194, 98, 26, 0.05)" }}
            >
              <Column style={{ gridColumn: "span 8" }} gap="16">
                <Badge title="For Corporate CSR Heads & Institutional Grantmakers" />
                <Heading
                  as="h3"
                  variant="heading-strong-l"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Turnkey Companies Act Schedule VII (ii) compliance with 12
                  years of audited financials.
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  SAMADHAN has executed multi-year capital and programmatic
                  grants with JCB India, SMAS Auto Leasing, DLF Foundation, and
                  Souter Charitable Trust. Every CSR tranche includes quarterly
                  IEP progress dashboards, geotagged asset verification, and
                  statutory utilization certificates.
                </Text>
                <Row gap="20" style={{ flexWrap: "wrap" }}>
                  <Text variant="code-default-xs">
                    ✓ Schedule VII (i) & (ii) Eligible
                  </Text>
                  <Text variant="code-default-xs">
                    ✓ 80G & 12A Permanent Registration
                  </Text>
                  <Text variant="code-default-xs">
                    ✓ RPwD Act Sec 51(2) Certified
                  </Text>
                </Row>
              </Column>
              <Column
                style={{ gridColumn: "span 4" }}
                gap="12"
                vertical="center"
              >
                <Button
                  href="/impact-reports"
                  variant="primary"
                  size="l"
                  fillWidth
                  label="Inspect 12-Year Audited Reports"
                  arrowIcon
                />
                <Button
                  href="/donate"
                  variant="secondary"
                  size="m"
                  fillWidth
                  label="View CSR Unit Cost Matrix"
                />
              </Column>
            </Grid>
          )}

          {activePersona === "diaspora" && (
            <Grid
              columns="12"
              m={{ columns: 1 }}
              s={{ columns: 1 }}
              gap="24"
              padding="32"
              radius="l"
              border="neutral-alpha-medium"
              style={{ background: "rgba(35, 58, 115, 0.04)" }}
            >
              <Column style={{ gridColumn: "span 8" }} gap="16">
                <Badge title="For US/UK Foundations & Global Diaspora Donors" />
                <Heading
                  as="h3"
                  variant="heading-strong-l"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  NGOsource US 501(c)(3) Equivalency Certified + Active MHA FCRA
                  Account at SBI New Delhi Main Branch.
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  International grantmakers and non-resident donors can remit
                  foreign currency directly to our Ministry of Home Affairs
                  mandated State Bank of India FCRA account (Reg. No.{" "}
                  {SAMADHAN_ORG.registrations.fcraNumber}, SWIFT: SBININBB104).
                  US private and community foundations can pull our verified
                  Equivalency Determination certificate directly from the
                  NGOsource repository.
                </Text>
              </Column>
              <Column
                style={{ gridColumn: "span 4" }}
                gap="12"
                vertical="center"
              >
                <Button
                  href="/donate#fcra"
                  variant="primary"
                  size="l"
                  fillWidth
                  label="FCRA Wire & SWIFT Details"
                  arrowIcon
                />
                <Button
                  href="/impact-reports"
                  variant="secondary"
                  size="m"
                  fillWidth
                  label="Download FY 2024–25 Report"
                />
              </Column>
            </Grid>
          )}

          {activePersona === "volunteer" && (
            <Grid
              columns="12"
              m={{ columns: 1 }}
              s={{ columns: 1 }}
              gap="24"
              padding="32"
              radius="l"
              border="neutral-alpha-medium"
              style={{ background: "rgba(27, 67, 50, 0.05)" }}
            >
              <Column style={{ gridColumn: "span 8" }} gap="16">
                <Badge title="For Clinical Interns, Researchers & Special Educators" />
                <Heading
                  as="h3"
                  variant="heading-strong-l"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Supervised clinical practicums in ABA, occupational therapy,
                  speech pathology, and community mental health.
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-medium">
                  Each year SAMADHAN hosts clinical psychology, social work, and
                  special education trainees from Delhi University, Jamia Millia
                  Islamia, Ambedkar University, and international volunteer
                  fellowships. In FY 2024–25, our training division certified 72
                  community frontline workers across Delhi resettlement colonies.
                </Text>
              </Column>
              <Column
                style={{ gridColumn: "span 4" }}
                gap="12"
                vertical="center"
              >
                <Button
                  href="/contact"
                  variant="primary"
                  size="l"
                  fillWidth
                  label="Apply for Clinical Placement"
                  arrowIcon
                />
                <Button
                  href="/programmes"
                  variant="secondary"
                  size="m"
                  fillWidth
                  label="Explore 7 Clinical Units"
                />
              </Column>
            </Grid>
          )}
        </Column>
      </Column>

      {/* SECTION 4: CRADLE-TO-LIVELIHOOD CLINICAL CONTINUUM (7 PROGRAMMES) */}
      <Column fillWidth paddingX="24" paddingY="64" horizontal="center">
        <Column fillWidth maxWidth="xl" gap="32">
          <Row
            fillWidth
            horizontal="between"
            vertical="end"
            gap="16"
            style={{ flexWrap: "wrap" }}
          >
            <Column gap="8" style={{ maxWidth: "700px" }}>
              <Text
                variant="code-default-xs"
                style={{ color: "#c2621a", textTransform: "uppercase" }}
              >
                Cradle-to-Livelihood Intervention Model
              </Text>
              <Heading
                as="h2"
                variant="heading-strong-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Seven integrated clinical and community programmes.
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">
                Instead of treating intellectual disability in isolation,
                SAMADHAN combines infant neurological stimulation, school
                readiness, maternal psychiatry, and sheltered adult enterprise
                under one clinical roof.
              </Text>
            </Column>
            <Button
              href="/programmes"
              variant="secondary"
              size="m"
              label="Full Clinical Specifications →"
            />
          </Row>

          <Grid
            columns="3"
            m={{ columns: 2 }}
            s={{ columns: 1 }}
            gap="20"
            fillWidth
          >
            {PROGRAMMES.slice(0, 6).map((prog) => (
              <Column
                key={prog.id}
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-medium"
                gap="16"
                horizontal="start"
                style={{ justifyContent: "space-between" }}
              >
                <Column gap="12" fillWidth>
                  <Row fillWidth horizontal="between" vertical="center">
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-code)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        background: "var(--brand-alpha-weak)",
                        color: "var(--brand-on-background-strong)",
                        fontWeight: 600,
                      }}
                    >
                      Ages {prog.ageGroup}
                    </span>
                    <Text variant="code-default-xs" onBackground="neutral-weak">
                      {prog.annualBeneficiaries}
                    </Text>
                  </Row>

                  <Heading
                    as="h3"
                    variant="heading-strong-m"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {prog.title}
                  </Heading>

                  <Text variant="body-default-s" onBackground="neutral-medium">
                    {prog.summary}
                  </Text>
                </Column>

                <Column
                  fillWidth
                  gap="12"
                  paddingTop="12"
                  style={{ borderTop: "1px solid var(--neutral-alpha-weak)" }}
                >
                  <Text
                    variant="body-default-xs"
                    style={{ color: "#c2621a", fontWeight: 600 }}
                  >
                    FY 2024–25: {prog.fy25Highlight}
                  </Text>
                  <Row fillWidth horizontal="between" vertical="center">
                    <Text variant="code-default-xs" onBackground="neutral-weak">
                      {prog.centre}
                    </Text>
                    <Link
                      href={`/programmes#${prog.slug}`}
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "var(--brand-on-background-strong)",
                        textDecoration: "none",
                      }}
                    >
                      Clinical Protocol →
                    </Link>
                  </Row>
                </Column>
              </Column>
            ))}
          </Grid>
        </Column>
      </Column>

      {/* SECTION 5: VERIFIED CHILD OUTCOMES (Dignified, Specific, Zero Exploitation) */}
      <Column
        fillWidth
        paddingX="24"
        paddingY="64"
        horizontal="center"
        background="surface"
        borderTop="neutral-alpha-weak"
        borderBottom="neutral-alpha-weak"
      >
        <Column fillWidth maxWidth="xl" gap="32">
          <Row
            fillWidth
            horizontal="between"
            vertical="end"
            gap="16"
            style={{ flexWrap: "wrap" }}
          >
            <Column gap="8" style={{ maxWidth: "700px" }}>
              <Text
                variant="code-default-xs"
                style={{ color: "#c2621a", textTransform: "uppercase" }}
              >
                Longitudinal IEP Case Outcomes · FY 2024–25
              </Text>
              <Heading
                as="h2"
                variant="heading-strong-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Measured clinical progress, child by child.
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">
                Every child enrolled at SAMADHAN receives a quarterly
                Individualized Education Plan (IEP) review. Below are four
                documented trajectories from our 2024–2025 clinical audit.
              </Text>
            </Column>
            <Button
              href="/impact-reports"
              variant="secondary"
              size="m"
              label="Read All 8 Case Audits →"
            />
          </Row>

          <Grid
            columns="2"
            m={{ columns: 1 }}
            s={{ columns: 1 }}
            gap="20"
            fillWidth
          >
            {CHILD_OUTCOME_STORIES.slice(0, 4).map((story) => (
              <Column
                key={story.id}
                padding="24"
                radius="l"
                background="page"
                border="neutral-alpha-medium"
                gap="16"
              >
                <Row fillWidth horizontal="between" vertical="center">
                  <Row gap="12" vertical="center">
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "999px",
                        background: "#14244b",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                      }}
                    >
                      {story.childName[0]}
                    </div>
                    <Column gap="2">
                      <Text variant="heading-strong-s">
                        {story.childName} · {story.age}
                      </Text>
                      <Text
                        variant="code-default-xs"
                        onBackground="neutral-weak"
                      >
                        {story.programme}
                      </Text>
                    </Column>
                  </Row>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontFamily: "var(--font-code)",
                      padding: "4px 8px",
                      borderRadius: "6px",
                      background: "rgba(194, 98, 26, 0.14)",
                      color: "#c2621a",
                      fontWeight: 600,
                    }}
                  >
                    {story.diagnosisContext}
                  </span>
                </Row>

                <Column gap="8">
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    <strong>Baseline at Intake:</strong> {story.baseline}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-medium">
                    <strong>Clinical Intervention:</strong> {story.intervention}
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
                      <strong>Documented Outcome ({story.reportYear}):</strong>{" "}
                      {story.outcome}
                    </Text>
                  </Row>
                </Column>
              </Column>
            ))}
          </Grid>
        </Column>
      </Column>

      {/* SECTION 6: TRANSPARENT UNIT ECONOMICS & DONATION TIERS */}
      <Column fillWidth paddingX="24" paddingY="64" horizontal="center">
        <Column fillWidth maxWidth="xl" gap="32">
          <Column gap="8" style={{ maxWidth: "720px" }}>
            <Text
              variant="code-default-xs"
              style={{ color: "#c2621a", textTransform: "uppercase" }}
            >
              Transparent Philanthropic Unit Costs
            </Text>
            <Heading
              as="h2"
              variant="heading-strong-xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Know exactly what your contribution funds.
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-medium">
              Whether you are an individual donor claiming a 50% deduction under
              Section 80G or a CSR committee funding a clinical unit, our cost
              structure is tied to verifiable therapy hours and assistive kits.
            </Text>
          </Column>

          <Grid
            columns="3"
            m={{ columns: 2 }}
            s={{ columns: 1 }}
            gap="20"
            fillWidth
          >
            {DONATION_TIERS.slice(0, 6).map((tier) => (
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
                    <Text variant="code-default-xs" onBackground="neutral-weak">
                      {tier.amountUSD} equivalent
                    </Text>
                  </Row>
                  <Text variant="heading-strong-s">{tier.title}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-medium">
                    {tier.impact}
                  </Text>
                </Column>

                <Column gap="8" paddingTop="12">
                  <Text
                    variant="code-default-xs"
                    style={{ color: "#2d6a4f", fontWeight: 600 }}
                  >
                    ✓ {tier.taxBenefit}
                  </Text>
                  <Button
                    href="/donate"
                    variant="secondary"
                    size="s"
                    fillWidth
                    label="Fund This Unit →"
                  />
                </Column>
              </Column>
            ))}
          </Grid>
        </Column>
      </Column>

      {/* SECTION 7: INSTITUTIONAL FUNDERS & STATUTORY AFFILIATIONS */}
      <Column
        fillWidth
        paddingX="24"
        paddingY="56"
        horizontal="center"
        background="surface"
        borderTop="neutral-alpha-weak"
      >
        <Column fillWidth maxWidth="xl" gap="24">
          <Row
            fillWidth
            horizontal="between"
            vertical="end"
            gap="16"
            style={{ flexWrap: "wrap" }}
          >
            <Column gap="8">
              <Text
                variant="code-default-xs"
                style={{ color: "#c2621a", textTransform: "uppercase" }}
              >
                Audited CSR, Global Grants & Statutory Recognition
              </Text>
              <Heading
                as="h2"
                variant="heading-strong-l"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Trusted by corporate CSR boards, international trusts, and
                Government of India ministries.
              </Heading>
            </Column>
            <Button
              href="/strategy"
              variant="primary"
              size="s"
              label="Open 5-Slide Competitor & SEO Strategy Deck →"
            />
          </Row>

          <Grid
            columns="3"
            m={{ columns: 2 }}
            s={{ columns: 1 }}
            gap="16"
            fillWidth
          >
            {INSTITUTIONAL_PARTNERS.map((partner) => (
              <Column
                key={partner.name}
                padding="16"
                radius="m"
                background="page"
                border="neutral-alpha-weak"
                gap="8"
              >
                <Row fillWidth horizontal="between" vertical="center">
                  <Text variant="label-strong-m">{partner.name}</Text>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontFamily: "var(--font-code)",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      background: "var(--neutral-alpha-weak)",
                    }}
                  >
                    {partner.category}
                  </span>
                </Row>
                <Text variant="body-default-xs" onBackground="neutral-medium">
                  {partner.project}
                </Text>
              </Column>
            ))}
          </Grid>
        </Column>
      </Column>
    </Column>
  );
}
