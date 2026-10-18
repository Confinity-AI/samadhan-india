"use client";

import React, { useState } from "react";
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
import {
  STRATEGY_SLIDES,
  COMPETITOR_BENCHMARK,
  SEO_OPPORTUNITY_MATRIX,
  DIRECTORY_SYNDICATION_PLATFORMS,
  STRATEGIC_PARTNERSHIP_PILLARS,
} from "@/resources/strategy-deck-data";

export default function StrategyPresentationPage() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"interactive" | "all">(
    "interactive"
  );

  const currentSlide = STRATEGY_SLIDES[activeSlideIndex];

  return (
    <Column fillWidth>
      {/* Top Deck Bar */}
      <Column
        fillWidth
        paddingX="24"
        paddingY="40"
        horizontal="center"
        className="samadhan-hero-gradient"
      >
        <Column fillWidth maxWidth="xl" gap="20">
          <Row
            fillWidth
            horizontal="between"
            vertical="center"
            gap="16"
            style={{ flexWrap: "wrap" }}
          >
            <Row gap="8" vertical="center" style={{ flexWrap: "wrap" }}>
              <Badge title="Executive Advisory Deck · 5 Slides" />
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
                Competitor Audit · SEO Outranking · CSR Syndication ·
                Partnerships
              </span>
            </Row>

            <Row gap="8">
              <button
                onClick={() => setViewMode("interactive")}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border:
                    viewMode === "interactive"
                      ? "1px solid #14244b"
                      : "1px solid var(--neutral-alpha-medium)",
                  background:
                    viewMode === "interactive"
                      ? "#14244b"
                      : "var(--surface-background)",
                  color:
                    viewMode === "interactive"
                      ? "#ffffff"
                      : "var(--neutral-on-background-strong)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Interactive Slide Deck (1–5)
              </button>
              <button
                onClick={() => setViewMode("all")}
                style={{
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border:
                    viewMode === "all"
                      ? "1px solid #14244b"
                      : "1px solid var(--neutral-alpha-medium)",
                  background:
                    viewMode === "all"
                      ? "#14244b"
                      : "var(--surface-background)",
                  color:
                    viewMode === "all"
                      ? "#ffffff"
                      : "var(--neutral-on-background-strong)",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Boardroom Full-Scroll View
              </button>
            </Row>
          </Row>

          <Heading
            as="h1"
            variant="display-strong-s"
            style={{ fontFamily: "var(--font-heading)", maxWidth: "900px" }}
          >
            How we take SAMADHAN beyond a website redesign into Delhi NCR’s #1
            digital, CSR, and clinical authority.
          </Heading>

          {/* Slide Selector Pills */}
          <Row gap="8" style={{ flexWrap: "wrap" }}>
            {STRATEGY_SLIDES.map((s, idx) => (
              <button
                key={s.slideNumber}
                onClick={() => {
                  setViewMode("interactive");
                  setActiveSlideIndex(idx);
                }}
                style={{
                  padding: "10px 16px",
                  borderRadius: "10px",
                  border:
                    activeSlideIndex === idx && viewMode === "interactive"
                      ? "2px solid #c2621a"
                      : "1px solid var(--neutral-alpha-medium)",
                  background:
                    activeSlideIndex === idx && viewMode === "interactive"
                      ? "#14244b"
                      : "var(--surface-background)",
                  color:
                    activeSlideIndex === idx && viewMode === "interactive"
                      ? "#ffffff"
                      : "var(--neutral-on-background-strong)",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-code)",
                    color:
                      activeSlideIndex === idx && viewMode === "interactive"
                        ? "#f5c28b"
                        : "#c2621a",
                  }}
                >
                  0{s.slideNumber}
                </span>
                <span>{s.kicker.split("·")[1]?.trim() || s.title}</span>
              </button>
            ))}
          </Row>
        </Column>
      </Column>

      {/* Main Slide Canvas */}
      <Column fillWidth paddingX="24" paddingY="48" horizontal="center">
        <Column fillWidth maxWidth="xl" gap="48">
          {(viewMode === "all" ? STRATEGY_SLIDES : [currentSlide]).map(
            (slide) => (
              <Column
                key={slide.slideNumber}
                padding="32"
                radius="l"
                background="surface"
                border="neutral-alpha-medium"
                gap="24"
                className="strategy-slide-card"
              >
                {/* Slide Header */}
                <Row
                  fillWidth
                  horizontal="between"
                  vertical="start"
                  gap="16"
                  style={{
                    borderBottom: "1px solid var(--neutral-alpha-medium)",
                    paddingBottom: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  <Column gap="8" style={{ maxWidth: "820px" }}>
                    <Text
                      variant="code-default-xs"
                      style={{
                        color: "#c2621a",
                        textTransform: "uppercase",
                        fontWeight: 700,
                      }}
                    >
                      {slide.kicker}
                    </Text>
                    <Heading
                      as="h2"
                      variant="heading-strong-xl"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {slide.title}
                    </Heading>
                    <Text
                      variant="body-default-m"
                      onBackground="neutral-medium"
                    >
                      {slide.subtitle}
                    </Text>
                  </Column>

                  <Column
                    padding="16"
                    radius="m"
                    style={{
                      background: "#14244b",
                      color: "#ffffff",
                      maxWidth: "340px",
                    }}
                    gap="4"
                  >
                    <Text
                      variant="code-default-xs"
                      style={{ color: "#f5c28b", fontWeight: 600 }}
                    >
                      EXECUTIVE TAKEAWAY
                    </Text>
                    <Text variant="body-default-xs" style={{ color: "#ffffff" }}>
                      {slide.executiveTakeaway}
                    </Text>
                  </Column>
                </Row>

                {/* SLIDE 1 SPECIFIC DATA: COMPETITOR BENCHMARK TABLE */}
                {slide.slideNumber === 1 && (
                  <Column gap="20" fillWidth>
                    <Text variant="label-strong-m">
                      Who is out-competing SAMADHAN right now in Delhi NCR &
                      India (and why):
                    </Text>
                    <div style={{ overflowX: "auto", width: "100%" }}>
                      <table className="samadhan-table">
                        <thead>
                          <tr>
                            <th>Organization</th>
                            <th>HQ & Founded</th>
                            <th>Digital & SEO Strengths</th>
                            <th>CSR / Donor Funnel</th>
                            <th>How SAMADHAN Beats Them</th>
                          </tr>
                        </thead>
                        <tbody>
                          {COMPETITOR_BENCHMARK.map((comp) => (
                            <tr key={comp.name}>
                              <td>
                                <strong>{comp.name}</strong>
                                <div
                                  style={{
                                    fontSize: "0.75rem",
                                    color: "var(--neutral-on-background-weak)",
                                  }}
                                >
                                  {comp.domain} · {comp.scaleMetric}
                                </div>
                              </td>
                              <td>
                                {comp.hq}
                                <br />
                                <span
                                  style={{
                                    fontSize: "0.75rem",
                                    fontFamily: "var(--font-code)",
                                  }}
                                >
                                  Est. {comp.founded}
                                </span>
                              </td>
                              <td>{comp.seoStrength}</td>
                              <td>{comp.donorFunnel}</td>
                              <td
                                style={{
                                  background: "rgba(27, 67, 50, 0.06)",
                                  fontWeight: 500,
                                }}
                              >
                                {comp.samadhanAdvantage}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Column>
                )}

                {/* SLIDE 2 SPECIFIC DATA: SEO KEYWORD MATRIX & OUTRANKING ROI */}
                {slide.slideNumber === 2 && (
                  <Column gap="20" fillWidth>
                    <Text variant="label-strong-m">
                      High-Intent Search Clusters Where Competitors Outrank
                      SAMADHAN Today — And Our Target Route Mapping:
                    </Text>
                    <div style={{ overflowX: "auto", width: "100%" }}>
                      <table className="samadhan-table">
                        <thead>
                          <tr>
                            <th>Search Keyword Cluster</th>
                            <th>User Intent</th>
                            <th>Who Ranks #1–#3 Now</th>
                            <th>SAMADHAN Legacy Rank</th>
                            <th>New Target Route</th>
                            <th>What Happens When We Outrank Them</th>
                          </tr>
                        </thead>
                        <tbody>
                          {SEO_OPPORTUNITY_MATRIX.map((row) => (
                            <tr key={row.keywordCluster}>
                              <td>
                                <strong>{row.keywordCluster}</strong>
                              </td>
                              <td>
                                <span
                                  style={{
                                    fontSize: "0.72rem",
                                    fontFamily: "var(--font-code)",
                                    padding: "2px 6px",
                                    borderRadius: "4px",
                                    background: "var(--brand-alpha-weak)",
                                  }}
                                >
                                  {row.searchIntent}
                                </span>
                              </td>
                              <td>{row.currentLeader}</td>
                              <td style={{ color: "#b42318" }}>
                                {row.samadhanCurrentRank}
                              </td>
                              <td>
                                <code>{row.targetRoute}</code>
                              </td>
                              <td style={{ fontWeight: 500 }}>
                                {row.projectedImpact}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Column>
                )}

                {/* SLIDE 3 SPECIFIC DATA: CSR, CROWDFUNDING & GLOBAL GRANT SYNDICATION */}
                {slide.slideNumber === 3 && (
                  <Column gap="20" fillWidth>
                    <Text variant="label-strong-m">
                      8 High-Leverage Marketplaces & CSR Portals Where SAMADHAN
                      Must Be Listed Next:
                    </Text>
                    <Grid
                      columns="2"
                      m={{ columns: 1 }}
                      s={{ columns: 1 }}
                      gap="16"
                      fillWidth
                    >
                      {DIRECTORY_SYNDICATION_PLATFORMS.map((plat) => (
                        <Column
                          key={plat.platform}
                          padding="20"
                          radius="m"
                          background="page"
                          border="neutral-alpha-weak"
                          gap="8"
                        >
                          <Row
                            fillWidth
                            horizontal="between"
                            vertical="center"
                          >
                            <Text variant="heading-strong-s">
                              {plat.platform}
                            </Text>
                            <span
                              style={{
                                fontSize: "0.68rem",
                                fontFamily: "var(--font-code)",
                                padding: "2px 8px",
                                borderRadius: "999px",
                                background: "rgba(194, 98, 26, 0.14)",
                                color: "#c2621a",
                                fontWeight: 600,
                              }}
                            >
                              {plat.category}
                            </span>
                          </Row>
                          <Text
                            variant="body-default-xs"
                            onBackground="neutral-medium"
                          >
                            <strong>Why it matters:</strong> {plat.whyItMatters}
                          </Text>
                          <Text
                            variant="code-default-xs"
                            onBackground="neutral-weak"
                          >
                            <strong>Prerequisite:</strong> {plat.prerequisite}
                          </Text>
                          <Text
                            variant="body-default-xs"
                            style={{ color: "#2d6a4f", fontWeight: 600 }}
                          >
                            → Action: {plat.expectedYield}
                          </Text>
                        </Column>
                      ))}
                    </Grid>
                  </Column>
                )}

                {/* SLIDE 4 SPECIFIC DATA: 4 STRATEGIC PARTNERSHIP PILLARS */}
                {slide.slideNumber === 4 && (
                  <Column gap="20" fillWidth>
                    <Text variant="label-strong-m">
                      Four Institutional Partnership Pipelines (Hospitals,
                      Universities, Corporate CSR, and B2B Vocational Gifting):
                    </Text>
                    <Grid
                      columns="2"
                      m={{ columns: 1 }}
                      s={{ columns: 1 }}
                      gap="20"
                      fillWidth
                    >
                      {STRATEGIC_PARTNERSHIP_PILLARS.map((p) => (
                        <Column
                          key={p.pillar}
                          padding="24"
                          radius="m"
                          background="page"
                          border="neutral-alpha-medium"
                          gap="12"
                        >
                          <Text
                            variant="code-default-xs"
                            style={{ color: "#c2621a", fontWeight: 700 }}
                          >
                            PARTNERSHIP PILLAR
                          </Text>
                          <Text variant="heading-strong-m">{p.pillar}</Text>
                          <Text
                            variant="body-default-xs"
                            onBackground="neutral-weak"
                          >
                            <strong>Target Institutions:</strong>{" "}
                            {p.targetPartners.join(" · ")}
                          </Text>
                          <Text
                            variant="body-default-xs"
                            onBackground="neutral-medium"
                          >
                            <strong>Structure:</strong> {p.mechanism}
                          </Text>
                          <Row
                            padding="12"
                            radius="s"
                            style={{
                              background: "rgba(27, 67, 50, 0.08)",
                              borderLeft: "3px solid #2d6a4f",
                            }}
                          >
                            <Text variant="body-default-xs">
                              <strong>Strategic Value:</strong>{" "}
                              {p.samadhanValue}
                            </Text>
                          </Row>
                        </Column>
                      ))}
                    </Grid>
                  </Column>
                )}

                {/* SLIDE 5 / GENERAL BULLET SUMMARY */}
                <Column gap="12" fillWidth>
                  <Text
                    variant="code-default-xs"
                    style={{
                      textTransform: "uppercase",
                      color: "var(--brand-on-background-strong)",
                      fontWeight: 700,
                    }}
                  >
                    Key Strategic Highlights (Slide 0{slide.slideNumber})
                  </Text>
                  <Grid
                    columns="2"
                    m={{ columns: 1 }}
                    s={{ columns: 1 }}
                    gap="12"
                    fillWidth
                  >
                    {slide.keyBullets.map((b, i) => (
                      <Row
                        key={i}
                        padding="16"
                        radius="m"
                        background="page"
                        border="neutral-alpha-weak"
                        gap="12"
                        vertical="start"
                      >
                        <Text
                          variant="code-default-xs"
                          style={{ color: "#c2621a", fontWeight: 700 }}
                        >
                          0{i + 1}
                        </Text>
                        <Text variant="body-default-xs">{b}</Text>
                      </Row>
                    ))}
                  </Grid>
                </Column>

                {/* Bottom Navigation Controls (Interactive Mode) */}
                {viewMode === "interactive" && (
                  <Row
                    fillWidth
                    horizontal="between"
                    vertical="center"
                    paddingTop="16"
                    style={{
                      borderTop: "1px solid var(--neutral-alpha-weak)",
                    }}
                  >
                    <Button
                      onClick={() =>
                        setActiveSlideIndex((prev) => Math.max(0, prev - 1))
                      }
                      disabled={activeSlideIndex === 0}
                      variant="secondary"
                      size="s"
                      label="← Previous Slide"
                    />
                    <Text variant="code-default-xs" onBackground="neutral-weak">
                      Slide {slide.slideNumber} of {STRATEGY_SLIDES.length}
                    </Text>
                    <Button
                      onClick={() =>
                        setActiveSlideIndex((prev) =>
                          Math.min(STRATEGY_SLIDES.length - 1, prev + 1)
                        )
                      }
                      disabled={activeSlideIndex === STRATEGY_SLIDES.length - 1}
                      variant="primary"
                      size="s"
                      label="Next Slide →"
                    />
                  </Row>
                )}
              </Column>
            )
          )}
        </Column>
      </Column>
    </Column>
  );
}
