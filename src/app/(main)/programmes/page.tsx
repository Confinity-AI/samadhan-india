"use client";

import React from "react";
import {
  Badge,
  Button,
  Column,
  Grid,
  Heading,
  Line,
  Row,
  Text,
} from "@once-ui-system/core";
import { PROGRAMMES, SAMADHAN_ORG } from "@/resources/samadhan-data";
import { ClinicalVisualFrame } from "@/components/site/ClinicalVisualFrame";

export default function ProgrammesPage() {
  return (
    <Column fillWidth>
      {/* Header Banner */}
      <Column
        fillWidth
        paddingX="24"
        paddingY="56"
        horizontal="center"
        className="samadhan-hero-gradient"
      >
        <Column fillWidth maxWidth="xl" gap="20">
          <Row gap="8" vertical="center">
            <Badge title="Cradle-to-Livelihood Clinical Architecture" />
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
              7 Integrated Programmes · FY 2024–25 Clinical Protocols
            </span>
          </Row>

          <Heading
            as="h1"
            variant="display-strong-m"
            style={{ fontFamily: "var(--font-heading)", maxWidth: "820px" }}
          >
            Multidisciplinary therapy, inclusive education, and maternal mental
            health under one roof.
          </Heading>

          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            style={{ maxWidth: "760px" }}
          >
            SAMADHAN’s clinical pipeline follows the child and mother from
            neonatal developmental screening (0–6 years) through special
            education and mainstream school transition (6–18 years) into adult
            sheltered vocational production (18+ years).
          </Text>
        </Column>
      </Column>

      {/* Programme Deep Dives */}
      <Column fillWidth paddingX="24" paddingY="64" horizontal="center">
        <Column fillWidth maxWidth="xl" gap="48">
          {PROGRAMMES.map((prog, index) => (
            <Column
              key={prog.id}
              id={prog.slug}
              padding="32"
              radius="l"
              background="surface"
              border="neutral-alpha-medium"
              gap="24"
            >
              <Grid
                columns="12"
                m={{ columns: 1 }}
                s={{ columns: 1 }}
                gap="32"
              >
                <Column style={{ gridColumn: "span 7" }} gap="16">
                  <Row gap="12" vertical="center" style={{ flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-code)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "#14244b",
                        color: "#ffffff",
                        fontWeight: 600,
                      }}
                    >
                      0{index + 1} · {prog.shortTitle}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontFamily: "var(--font-code)",
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "rgba(194, 98, 26, 0.14)",
                        color: "#c2621a",
                        fontWeight: 600,
                      }}
                    >
                      Cohort: {prog.ageGroup}
                    </span>
                    <Text variant="code-default-xs" onBackground="neutral-weak">
                      Location: {prog.centre}
                    </Text>
                  </Row>

                  <Heading
                    as="h2"
                    variant="heading-strong-xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {prog.title}
                  </Heading>

                  <Text variant="body-default-m" onBackground="neutral-medium">
                    {prog.summary}
                  </Text>

                  <Column gap="8" paddingTop="8">
                    <Text
                      variant="code-default-xs"
                      style={{
                        textTransform: "uppercase",
                        color: "var(--brand-on-background-strong)",
                        fontWeight: 600,
                      }}
                    >
                      Clinical Modalities & Protocols
                    </Text>
                    <Column gap="8">
                      {prog.clinicalModalities.map((mod, i) => (
                        <Row key={i} gap="8" vertical="start">
                          <Text
                            variant="code-default-xs"
                            style={{ color: "#c2621a", fontWeight: 700 }}
                          >
                            [{i + 1}]
                          </Text>
                          <Text
                            variant="body-default-s"
                            onBackground="neutral-strong"
                          >
                            {mod}
                          </Text>
                        </Row>
                      ))}
                    </Column>
                  </Column>

                  <Row
                    padding="16"
                    radius="m"
                    style={{
                      background: "rgba(35, 58, 115, 0.05)",
                      borderLeft: "3px solid #233a73",
                    }}
                  >
                    <Column gap="4">
                      <Text
                        variant="code-default-xs"
                        style={{ color: "#233a73", fontWeight: 600 }}
                      >
                        AUDITED FY 2024–25 MILESTONE · {prog.funderHighlight}
                      </Text>
                      <Text variant="body-default-xs">
                        {prog.fy25Highlight}
                      </Text>
                    </Column>
                  </Row>
                </Column>

                <Column style={{ gridColumn: "span 5" }} gap="16">
                  <ClinicalVisualFrame
                    imageUrl={prog.imageUrl}
                    alt={prog.title}
                    category={prog.shortTitle}
                    centreTag={prog.centre}
                    metricBadge={prog.annualBeneficiaries}
                    variant={
                      index % 3 === 0
                        ? "brand"
                        : index % 3 === 1
                          ? "terracotta"
                          : "forest"
                    }
                    caption={`Active in ${prog.centre}. Supported by ${prog.funderHighlight}.`}
                  />

                  <Row gap="12" fillWidth>
                    <Button
                      href="/centres"
                      variant="primary"
                      size="s"
                      fillWidth
                      label="Enroll / Refer a Child"
                    />
                    <Button
                      href="/donate"
                      variant="secondary"
                      size="s"
                      fillWidth
                      label="Fund This Unit"
                    />
                  </Row>
                </Column>
              </Grid>
            </Column>
          ))}
        </Column>
      </Column>
    </Column>
  );
}
