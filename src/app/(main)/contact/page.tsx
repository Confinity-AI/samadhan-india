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
import { SAMADHAN_ORG } from "@/resources/samadhan-data";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [pathway, setPathway] = useState<
    "parent" | "csr" | "volunteer" | "media"
  >("parent");

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
          <Badge title="Direct Clinical & Institutional Desk · New Delhi" />
          <Heading
            as="h1"
            variant="display-strong-m"
            style={{ fontFamily: "var(--font-heading)", maxWidth: "820px" }}
          >
            Book a child developmental assessment or initiate a CSR partnership.
          </Heading>
          <Text
            variant="body-default-l"
            onBackground="neutral-medium"
            style={{ maxWidth: "740px" }}
          >
            Our clinical coordinators at Dakshinpuri and Dwarka Sector 13
            respond to parent referrals within one working day. Corporate CSR
            and foundation inquiries are routed directly to the Executive
            Director’s office.
          </Text>
        </Column>
      </Column>

      {/* Main Content */}
      <Column fillWidth paddingX="24" paddingY="64" horizontal="center">
        <Column fillWidth maxWidth="xl" gap="48">
          <Grid
            columns="12"
            m={{ columns: 1 }}
            s={{ columns: 1 }}
            gap="32"
            fillWidth
          >
            {/* Left 7 columns: Interactive Routing Form */}
            <Column
              style={{ gridColumn: "span 7" }}
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
                  Select Inquiry Category
                </Text>
                <Row gap="8" style={{ flexWrap: "wrap" }}>
                  {[
                    { id: "parent", label: "Child Assessment / Therapy" },
                    { id: "csr", label: "CSR / Foundation Grant" },
                    { id: "volunteer", label: "Clinical Internship / RCI" },
                    { id: "media", label: "Hospital Referral / Partner" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        setPathway(tab.id as any);
                        setSubmitted(false);
                      }}
                      style={{
                        padding: "8px 14px",
                        borderRadius: "8px",
                        border:
                          pathway === tab.id
                            ? "1px solid #14244b"
                            : "1px solid var(--neutral-alpha-medium)",
                        background:
                          pathway === tab.id
                            ? "#14244b"
                            : "var(--surface-background)",
                        color:
                          pathway === tab.id
                            ? "#ffffff"
                            : "var(--neutral-on-background-strong)",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </Row>
              </Column>

              {submitted ? (
                <Column
                  padding="24"
                  radius="m"
                  gap="12"
                  style={{
                    background: "rgba(27, 67, 50, 0.08)",
                    border: "1px solid #2d6a4f",
                  }}
                >
                  <Heading as="h3" variant="heading-strong-m">
                    Inquiry logged for SAMADHAN New Delhi Desk
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-medium">
                    For immediate telephone scheduling, please call Dakshinpuri
                    HQ at <strong>+91-11-41022446</strong> or Dwarka Sector 13
                    at <strong>+91-11-45725033</strong>, or email{" "}
                    <strong>{SAMADHAN_ORG.centres[0].email}</strong>.
                  </Text>
                </Column>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <Grid columns="2" s={{ columns: 1 }} gap="16">
                    <Column gap="8">
                      <Text variant="label-strong-xs">Full Name *</Text>
                      <input
                        required
                        type="text"
                        placeholder="Parent, CSR Lead, or Clinician Name"
                        style={{
                          padding: "12px 14px",
                          borderRadius: "8px",
                          border: "1px solid var(--neutral-alpha-medium)",
                          background: "var(--page-background)",
                          color: "var(--neutral-on-background-strong)",
                          fontSize: "0.9rem",
                        }}
                      />
                    </Column>
                    <Column gap="8">
                      <Text variant="label-strong-xs">
                        Phone / WhatsApp Number *
                      </Text>
                      <input
                        required
                        type="tel"
                        placeholder="+91 98XXX XXXXX"
                        style={{
                          padding: "12px 14px",
                          borderRadius: "8px",
                          border: "1px solid var(--neutral-alpha-medium)",
                          background: "var(--page-background)",
                          color: "var(--neutral-on-background-strong)",
                          fontSize: "0.9rem",
                        }}
                      />
                    </Column>
                  </Grid>

                  <Grid columns="2" s={{ columns: 1 }} gap="16">
                    <Column gap="8">
                      <Text variant="label-strong-xs">Email Address *</Text>
                      <input
                        required
                        type="email"
                        placeholder="name@organization.org"
                        style={{
                          padding: "12px 14px",
                          borderRadius: "8px",
                          border: "1px solid var(--neutral-alpha-medium)",
                          background: "var(--page-background)",
                          color: "var(--neutral-on-background-strong)",
                          fontSize: "0.9rem",
                        }}
                      />
                    </Column>
                    <Column gap="8">
                      <Text variant="label-strong-xs">Preferred Centre</Text>
                      <select
                        style={{
                          padding: "12px 14px",
                          borderRadius: "8px",
                          border: "1px solid var(--neutral-alpha-medium)",
                          background: "var(--page-background)",
                          color: "var(--neutral-on-background-strong)",
                          fontSize: "0.9rem",
                        }}
                      >
                        <option value="dakshinpuri">
                          Dakshinpuri Centre (South Delhi - 110062)
                        </option>
                        <option value="dwarka">
                          Dwarka Sector 13 Centre (West Delhi - 110078)
                        </option>
                        <option value="tigri">
                          Tigri Community Outreach Hub
                        </option>
                      </select>
                    </Column>
                  </Grid>

                  <Column gap="8">
                    <Text variant="label-strong-xs">
                      {pathway === "parent"
                        ? "Child's Age & Developmental Concerns"
                        : pathway === "csr"
                          ? "Organization Name, CSR Focus Area & Target Tranche"
                          : "University / Hospital Affiliation & Proposed Dates"}
                    </Text>
                    <textarea
                      required
                      rows={4}
                      placeholder={
                        pathway === "parent"
                          ? "Briefly share your child's age (e.g., 3.5 years) and what support you are looking for (speech delay, ABA therapy, OT, special schooling)..."
                          : "Share details of your CSR initiative, grant inquiry, or institutional partnership..."
                      }
                      style={{
                        padding: "12px 14px",
                        borderRadius: "8px",
                        border: "1px solid var(--neutral-alpha-medium)",
                        background: "var(--page-background)",
                        color: "var(--neutral-on-background-strong)",
                        fontSize: "0.9rem",
                        fontFamily: "inherit",
                      }}
                    />
                  </Column>

                  <Button
                    type="submit"
                    variant="primary"
                    size="l"
                    label="Submit Inquiry to SAMADHAN Desk →"
                  />
                </form>
              )}
            </Column>

            {/* Right 5 columns: Direct Telephone & Centre Directory */}
            <Column style={{ gridColumn: "span 5" }} gap="20">
              {SAMADHAN_ORG.centres.map((c) => (
                <Column
                  key={c.id}
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
                    {c.role}
                  </Text>
                  <Text variant="heading-strong-m">{c.name}</Text>
                  <Text variant="body-default-xs" onBackground="neutral-medium">
                    {c.address}
                  </Text>
                  <Text variant="label-strong-s">
                    Tel: {c.phone.join(" / ")}
                  </Text>
                  <Text variant="code-default-xs" onBackground="neutral-weak">
                    Lead: {c.contactPerson} · {c.email}
                  </Text>
                </Column>
              ))}
            </Column>
          </Grid>
        </Column>
      </Column>
    </Column>
  );
}
