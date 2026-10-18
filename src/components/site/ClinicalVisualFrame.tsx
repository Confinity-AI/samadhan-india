"use client";

import React, { useState } from "react";
import { Badge, Column, Flex, Icon, Row, Text } from "@once-ui-system/core";

interface ClinicalVisualFrameProps {
  imageUrl?: string;
  alt: string;
  caption?: string;
  category: string;
  centreTag?: string;
  metricBadge?: string;
  variant?: "brand" | "terracotta" | "forest" | "slate";
  aspectRatio?: string;
}

export function ClinicalVisualFrame({
  imageUrl,
  alt,
  caption,
  category,
  centreTag = "Dakshinpuri & Dwarka Centres",
  metricBadge,
  variant = "brand",
  aspectRatio = "16 / 10",
}: ClinicalVisualFrameProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const bgGradient =
    variant === "terracotta"
      ? "linear-gradient(135deg, #2d1810 0%, #5c2d16 55%, #8f4419 100%)"
      : variant === "forest"
        ? "linear-gradient(135deg, #0f291e 0%, #1b4332 55%, #2d6a4f 100%)"
        : variant === "slate"
          ? "linear-gradient(135deg, #101828 0%, #1d2939 55%, #344054 100%)"
          : "linear-gradient(135deg, #0d1627 0%, #14244b 55%, #233a73 100%)";

  return (
    <Column
      fillWidth
      radius="l"
      overflow="hidden"
      border="neutral-alpha-medium"
      background="surface"
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio,
          background: bgGradient,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        {/* Architectural grid pattern overlay */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 400 250"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.16,
            pointerEvents: "none",
          }}
        >
          <defs>
            <pattern
              id={`grid-${category.replace(/\s+/g, "-")}`}
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect
            width="400"
            height="250"
            fill={`url(#grid-${category.replace(/\s+/g, "-")})`}
          />
          <circle
            cx="330"
            cy="60"
            r="90"
            fill="none"
            stroke="#e48f45"
            strokeWidth="1.2"
          />
          <circle
            cx="330"
            cy="60"
            r="55"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Attempt real SAMADHAN media if available and not blocked by Cloudflare hotlink */}
        {imageUrl && !imgFailed && (
          <img
            src={imageUrl}
            alt={alt}
            onError={() => setImgFailed(true)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.42,
              mixBlendMode: "luminosity",
            }}
          />
        )}

        {/* Top header bar inside frame */}
        <Row
          fillWidth
          horizontal="between"
          vertical="center"
          style={{ position: "relative", zIndex: 2 }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 10px",
              borderRadius: "999px",
              background: "rgba(255, 255, 255, 0.14)",
              backdropFilter: "blur(8px)",
              color: "#ffffff",
              fontSize: "0.72rem",
              fontFamily: "var(--font-code)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            {category}
          </span>
          {metricBadge && (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "rgba(194, 98, 26, 0.9)",
                color: "#ffffff",
                fontSize: "0.72rem",
                fontWeight: 600,
                fontFamily: "var(--font-code)",
              }}
            >
              {metricBadge}
            </span>
          )}
        </Row>

        {/* Bottom clinical plate */}
        <Column
          gap="4"
          style={{
            position: "relative",
            zIndex: 2,
            background: "rgba(10, 18, 34, 0.78)",
            backdropFilter: "blur(10px)",
            padding: "12px 14px",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.14)",
          }}
        >
          <Text
            variant="label-default-s"
            style={{ color: "#ffffff", fontWeight: 600 }}
          >
            {alt}
          </Text>
          <Row vertical="center" horizontal="between">
            <Text
              variant="body-default-xs"
              style={{ color: "rgba(255, 255, 255, 0.76)" }}
            >
              {centreTag}
            </Text>
            <Text
              variant="code-default-xs"
              style={{ color: "#e48f45", fontSize: "0.68rem" }}
            >
              SAMADHAN ARCHIVE
            </Text>
          </Row>
        </Column>
      </div>
      {caption && (
        <Row
          paddingX="16"
          paddingY="12"
          background="surface"
          borderTop="neutral-alpha-weak"
        >
          <Text variant="body-default-xs" onBackground="neutral-medium">
            {caption}
          </Text>
        </Row>
      )}
    </Column>
  );
}
