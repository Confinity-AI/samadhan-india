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
import { SAMADHAN_ORG } from "@/resources/samadhan-data";

export default function CentresPage() {
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
          <Badge title="Three Clinical & Outreach Hubs Across New Delhi" />
          <Heading
            as="h1"
            variant="display-strong-m"
            style={{ fontFamily: "var(--font-heading)", maxWidth: "820px" }}
          >
            Centres, parent referral walk-in hours, and clinical intake
            protocol.
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            style={{ maxWidth: "740px" }}
          >
            SAMADHAN operates two permanent clinical centres in Dakshinpuri
            (South Delhi) and Dwarka Sector 13 (West Delhi), alongside community
            resettlement outreach in Tigri and Sangam Vihar. Walk-in assessments
            are available Monday through Saturday.
          </Text>
        </Column>
      </Column>

      {/* 3 Centres Detail Cards */}
      <Column fillWidth paddingX="24" paddingY="64" horizontal="center">
        <Column fillWidth maxWidth="xl" gap="32">
          <Grid
            columns="3"
            m={{ columns: 1 }}
            s={{ columns: 1 }}
            gap="24"
            fillWidth
          >
            {SAMADHAN_ORG.centres.map((centre, idx) => (
              <Column
                key={centre.id}
                padding="24"
                radius="l"
                background="surface"
                border="neutral-alpha-medium"
                gap="16"
                style={{ justifyContent: "space-between" }}
              >
                <Column gap="12">
                  <Row fillWidth horizontal="between" vertical="center">
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontFamily: "var(--font-code)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        background: "#14244b",
                        color: "#ffffff",
                        fontWeight: 600,
                      }}
                    >
                      CENTRE 0{idx + 1}
                    </span>
                    <Text
                      variant="code-default-xs"
                      style={{ color: "#c2621a", fontWeight: 600 }}
                    >
                      {centre.role}
                    </Text>
                  </Row>

                  <Heading
                    as="h2"
                    variant="heading-strong-l"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {centre.name}
                  </Heading>

                  <Column
                    gap="8"
                    padding="12"
                    radius="m"
                    background="page"
                    border="neutral-alpha-weak"
                  >
                    <Text variant="code-default-xs" onBackground="neutral-weak">
                      STREET ADDRESS
                    </Text>
                    <Text variant="body-default-s">{centre.address}</Text>
                    <Text variant="code-default-xs" onBackground="neutral-weak">
                      DIRECT TELEPHONE
                    </Text>
                    <Text variant="label-strong-s">
                      {centre.phone.join(" · ")}
                    </Text>
                    <Text variant="code-default-xs" onBackground="neutral-weak">
                      CENTRE LEAD & EMAIL
                    </Text>
                    <Text variant="body-default-xs">
                      {centre.contactPerson} ({centre.email})
                    </Text>
                  </Column>

                  <Column gap="8" paddingTop="8">
                    <Text
                      variant="code-default-xs"
                      style={{
                        textTransform: "uppercase",
                        fontWeight: 600,
                        color: "var(--brand-on-background-strong)",
                      }}
                    >
                      Clinical Services Offered Here
                    </Text>
                    {centre.services.map((srv, sIdx) => (
                      <Row key={sIdx} gap="8" vertical="start">
                        <Text
                          variant="code-default-xs"
                          style={{ color: "#2d6a4f", fontWeight: 700 }}
                        >
                          ✓
                        </Text>
                        <Text
                          variant="body-default-xs"
                          onBackground="neutral-medium"
                        >
                          {srv}
                        </Text>
                      </Row>
                    ))}
                  </Column>
                </Column>

                <Column gap="8" paddingTop="16">
                  <Button
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      centre.mapQuery
                    )}`}
                    variant="secondary"
                    size="s"
                    fillWidth
                    label="Open in Google Maps ↗"
                  />
                  <Button
                    href="/contact"
                    variant="primary"
                    size="s"
                    fillWidth
                    label="Book Assessment at This Centre"
                  />
                </Column>
              </Column>
            ))}
          </Grid>

          {/* 4-Step Parent Clinical Intake Protocol */}
          <Column
            fillWidth
            padding="32"
            radius="l"
            background="surface"
            border="neutral-alpha-medium"
            gap="24"
          >
            <Column gap="8">
              <Text
                variant="code-default-xs"
                style={{ color: "#c2621a", textTransform: "uppercase" }}
              >
                Zero-Barrier Clinical Referral Workflow
              </Text>
              <Heading
                as="h2"
                variant="heading-strong-xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                What happens when a parent brings a child to SAMADHAN?
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-medium">
                Many parents arrive anxious after referrals from Safdarjung
                Hospital, AIIMS, Kalawati Saran, or local Anganwadi workers. Our
                intake process is designed to give clarity within 48 hours.
              </Text>
            </Column>

            <Grid
              columns="4"
              m={{ columns: 2 }}
              s={{ columns: 1 }}
              gap="16"
              fillWidth
            >
              {[
                {
                  step: "STEP 01",
                  title: "Walk-In & Developmental Screening",
                  desc: "A clinical social worker and special educator record birth history, developmental milestones, and sensory or motor concerns.",
                },
                {
                  step: "STEP 02",
                  title: "Psychological & Therapy Evaluation",
                  desc: "Standardized assessment by our clinical psychologist, occupational therapist, and speech educator to establish baseline functioning.",
                },
                {
                  step: "STEP 03",
                  title: "Individualized Education Plan (IEP)",
                  desc: "A customized 90-day clinical and home-training plan is co-created with the child's mother, plus UDID / Niramaya insurance assistance.",
                },
                {
                  step: "STEP 04",
                  title: "Daily Therapy & Maternal Support",
                  desc: "The child enters the Early Intervention (0–6) or Disha Special Education (6–18) cohort while the mother joins peer mental health counseling.",
                },
              ].map((item) => (
                <Column
                  key={item.step}
                  padding="20"
                  radius="m"
                  background="page"
                  border="neutral-alpha-weak"
                  gap="8"
                >
                  <Text
                    variant="code-default-xs"
                    style={{ color: "#c2621a", fontWeight: 700 }}
                  >
                    {item.step}
                  </Text>
                  <Text variant="heading-strong-s">{item.title}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-medium">
                    {item.desc}
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
