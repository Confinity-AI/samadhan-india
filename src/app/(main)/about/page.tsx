"use client";

import React from "react";
import {
  Badge,
  Column,
  Grid,
  Heading,
  Row,
  Text,
} from "@once-ui-system/core";
import {
  GOVERNANCE_TEAM,
  HISTORICAL_TIMELINE,
  SAMADHAN_ORG,
} from "@/resources/samadhan-data";
import { ClinicalVisualFrame } from "@/components/site/ClinicalVisualFrame";

export default function AboutPage() {
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
        <Column fillWidth maxWidth="xl" gap="24">
          <Badge title="Founded December 1981 · Dakshinpuri Resettlement Colony, New Delhi" />
          <Heading
            as="h1"
            variant="display-strong-m"
            style={{ fontFamily: "var(--font-heading)", maxWidth: "860px" }}
          >
            Started under a canvas tent in 1981 so low-income mothers would
            never face intellectual disability alone.
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            style={{ maxWidth: "760px" }}
          >
            When clinical psychologist Pramila Balasundaram founded SAMADHAN in
            December 1981, children with intellectual disabilities in Delhi’s
            urban resettlement colonies had zero access to developmental pediatrics,
            occupational therapy, or inclusive schools.
          </Text>
        </Column>
      </Column>

      {/* Founding Story & Philosophy */}
      <Column fillWidth paddingX="24" paddingY="64" horizontal="center">
        <Column fillWidth maxWidth="xl" gap="48">
          <Grid
            columns="12"
            m={{ columns: 1 }}
            s={{ columns: 1 }}
            gap="32"
          >
            <Column style={{ gridColumn: "span 7" }} gap="16">
              <Text
                variant="code-default-xs"
                style={{ color: "#c2621a", textTransform: "uppercase" }}
              >
                The Mother-Child Clinical Thesis
              </Text>
              <Heading
                as="h2"
                variant="heading-strong-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Why SAMADHAN treats the mother’s mental health alongside the
                child’s neurology.
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">
                In households earning ₹7,000 to ₹15,000 per month, the birth of
                a child with cerebral palsy, autism, or Down syndrome frequently
                triggers severe maternal blame, domestic isolation, and clinical
                depression. If the mother is exhausted or ostracized, a
                45-minute weekly therapy session cannot succeed.
              </Text>
              <Text variant="body-default-m" onBackground="neutral-medium">
                From its first clinic in Dakshinpuri Block J, SAMADHAN trained
                mothers as primary co-therapists, launched Matrika maternal
                counseling and micro-enterprise fellowships, and built community
                disability-rights vigilance groups across South and West Delhi.
              </Text>
            </Column>

            <Column style={{ gridColumn: "span 5" }}>
              <ClinicalVisualFrame
                imageUrl={SAMADHAN_ORG.mediaAssets.founderPortrait}
                alt="Pramila Balasundaram — Founder & Executive Director (Est. 1981)"
                category="44-Year Institutional Heritage"
                centreTag="Dakshinpuri (1981) & Dwarka Sector 13 (2004)"
                metricBadge="Reg. No. 12183"
                variant="terracotta"
                caption="Pramila Balasundaram established SAMADHAN in December 1981 under the Societies Registration Act XXI of 1860."
              />
            </Column>
          </Grid>

          {/* 44-Year Chronological Timeline (1981–2025) */}
          <Column gap="24" fillWidth>
            <Column gap="8">
              <Text
                variant="code-default-xs"
                style={{ color: "#c2621a", textTransform: "uppercase" }}
              >
                Verified Institutional Chronology
              </Text>
              <Heading
                as="h2"
                variant="heading-strong-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                18 Defining Milestones (1981 – 2025)
              </Heading>
            </Column>

            <Grid
              columns="3"
              m={{ columns: 2 }}
              s={{ columns: 1 }}
              gap="16"
              fillWidth
            >
              {HISTORICAL_TIMELINE.map((item) => (
                <Column
                  key={item.year + item.title}
                  padding="20"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-medium"
                  gap="8"
                >
                  <Row fillWidth horizontal="between" vertical="center">
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontFamily: "var(--font-code)",
                        padding: "3px 10px",
                        borderRadius: "6px",
                        background: "#14244b",
                        color: "#ffffff",
                        fontWeight: 700,
                      }}
                    >
                      {item.year}
                    </span>
                    <Text variant="code-default-xs" onBackground="neutral-weak">
                      MILESTONE
                    </Text>
                  </Row>
                  <Text variant="heading-strong-s">{item.title}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-medium">
                    {item.detail}
                  </Text>
                </Column>
              ))}
            </Grid>
          </Column>

          {/* Leadership & Clinical Governance */}
          <Column gap="20" fillWidth>
            <Column gap="8">
              <Text
                variant="code-default-xs"
                style={{ color: "#c2621a", textTransform: "uppercase" }}
              >
                Executive & Clinical Leadership
              </Text>
              <Heading
                as="h2"
                variant="heading-strong-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Clinical directors and centre heads
              </Heading>
            </Column>

            <Grid
              columns="2"
              m={{ columns: 1 }}
              s={{ columns: 1 }}
              gap="20"
              fillWidth
            >
              {GOVERNANCE_TEAM.map((person) => (
                <Column
                  key={person.name}
                  padding="24"
                  radius="l"
                  background="surface"
                  border="neutral-alpha-medium"
                  gap="8"
                >
                  <Text
                    variant="code-default-xs"
                    style={{ color: "#c2621a", fontWeight: 600 }}
                  >
                    {person.role}
                  </Text>
                  <Text variant="heading-strong-m">{person.name}</Text>
                  <Text variant="body-default-s" onBackground="neutral-medium">
                    {person.bio}
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
