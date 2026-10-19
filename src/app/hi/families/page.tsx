import { FamiliesPage } from "@/components/FamiliesPage";
import { familiesHi } from "@/content/families";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "परिवारों के लिए: धीरे सीखने वाले बच्चों की मदद",
  description:
    "दक्षिणपुरी और द्वारका, नई दिल्ली में बौद्धिक दिव्यांगता वाले बच्चों के लिए थेरेपी, स्कूल और छोटी उम्र से मदद। हमें कॉल या व्हाट्सऐप करें।",
  path: "/hi/families",
  languages: { "en-IN": "/families", hi: "/hi/families", "x-default": "/families" },
});

export default function FamiliesHindi() {
  return <FamiliesPage copy={familiesHi} />;
}
