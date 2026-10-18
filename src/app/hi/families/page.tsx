import { FamiliesPage } from "@/components/FamiliesPage";
import { familiesHi } from "@/content/families";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "परिवारों के लिए: देर से सीखने वाले बच्चों के लिए मदद",
  description:
    "दक्षिणपुरी और द्वारका, नई दिल्ली में बौद्धिक दिव्यांगता वाले बच्चों के लिए अर्ली इंटरवेंशन, थेरेपी और स्कूल। हमें कॉल या व्हाट्सऐप करें।",
  path: "/hi/families",
  languages: { "en-IN": "/families", hi: "/hi/families", "x-default": "/families" },
});

export default function FamiliesHindi() {
  return <FamiliesPage copy={familiesHi} />;
}
