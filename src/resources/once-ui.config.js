import {
  Newsreader,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";

const heading = Newsreader({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const label = Plus_Jakarta_Sans({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const code = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const fonts = {
  heading,
  body,
  label,
  code,
};

export const style = {
  theme: "light",
  neutral: "sand",
  brand: "custom",
  accent: "custom",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

export const dataStyle = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};
