import { defineConfig } from "@once-ui-system/core/config";
import { Atkinson_Hyperlegible_Next, Geist_Mono, Mukta, Source_Serif_4 } from "next/font/google";

const heading = Source_Serif_4({
  variable: "--font-heading",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const body = Atkinson_Hyperlegible_Next({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Atkinson_Hyperlegible_Next({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const hindi = Mukta({
  variable: "--font-hindi",
  subsets: ["devanagari", "latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const { fonts, style } = defineConfig({
  fonts: { heading, body, label, code, hindi },
  style: {
    theme: "light",
    brand: "custom",
    brandSeed: "#233A73",
    accent: "custom",
    accentSeed: "#D99A1E",
    neutral: "sand",
    solid: "color",
    solidStyle: "flat",
    border: "conservative",
    surface: "filled",
    transition: "all",
    scaling: "100",
  },
});
