import { FamiliesPage } from "@/components/FamiliesPage";
import { familiesEn } from "@/content/families";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "For families: help for a child who is learning slowly",
  description:
    "Early intervention, therapy and school for children with developmental delays and intellectual disabilities in Dakshinpuri and Dwarka, New Delhi. Call or WhatsApp us.",
  path: "/families",
  languages: { "en-IN": "/families", hi: "/hi/families", "x-default": "/families" },
});

export default function Families() {
  return <FamiliesPage copy={familiesEn} />;
}
