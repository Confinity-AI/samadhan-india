export type FamiliesCopy = {
  lang: "en" | "hi";
  eyebrow: string;
  title: string;
  intro: string;
  easyRead: string;
  signsTitle: string;
  signs: string[];
  stepsTitle: string;
  steps: { title: string; body: string }[];
  costTitle: string;
  cost: string;
  bringTitle: string;
  bring: string[];
  schemesTitle: string;
  schemes: { title: string; body: string }[];
  centresTitle: string;
  switchLabel: string;
  switchHref: string;
};

export const familiesEn: FamiliesCopy = {
  lang: "en",
  eyebrow: "For families",
  title: "Worried your child is learning slowly?",
  intro: "You are not alone, and it is no one's fault. Call or WhatsApp us and we will meet you and your child.",
  easyRead: "If your child is slow to sit, walk, talk or learn, call us. We will help.",
  signsTitle: "When to call us",
  signs: [
    "Not sitting, crawling or walking when other children do",
    "Few or no words by age two",
    "Finds it hard to play, look at you or follow simple things",
    "Struggling in school, far behind classmates",
    "A doctor has said 'developmental delay', autism, cerebral palsy or Down syndrome",
  ],
  stepsTitle: "What happens next",
  steps: [
    { title: "Call or WhatsApp", body: "Tell us your child's age and what worries you." },
    { title: "Come to a centre", body: "Our doctor, therapists and psychologist meet you and your child together." },
    { title: "A plan for your child", body: "Therapy, school or a home programme, and exercises you can do every day." },
  ],
  costTitle: "What does it cost?",
  cost: "Most families we work with have low incomes. Call us and ask about fees, and about the government schemes that can cover therapy and health costs.",
  bringTitle: "What to bring",
  bring: ["Any doctor's reports or prescriptions", "Your child's disability certificate or UDID card, if you have one", "Aadhaar card"],
  schemesTitle: "Help we can arrange",
  schemes: [
    { title: "UDID card", body: "The national disability ID. We help you apply." },
    { title: "Niramaya", body: "Health insurance from the National Trust for children with disabilities." },
    { title: "Disha", body: "National Trust early intervention scheme for children up to 10." },
    { title: "Legal guardianship", body: "We sit on the National Trust Local Level Committee in Delhi." },
  ],
  centresTitle: "Our centres",
  switchLabel: "यह पेज हिंदी में पढ़ें",
  switchHref: "/hi/families",
};

export const familiesHi: FamiliesCopy = {
  lang: "hi",
  eyebrow: "परिवारों के लिए",
  title: "क्या आपका बच्चा देर से सीख रहा है?",
  intro: "आप अकेले नहीं हैं, और यह किसी की गलती नहीं है। हमें कॉल या व्हाट्सऐप करें। हम आपसे और आपके बच्चे से मिलेंगे।",
  easyRead: "अगर आपका बच्चा देर से बैठता, चलता, बोलता या सीखता है, तो हमें कॉल करें। हम मदद करेंगे।",
  signsTitle: "हमें कब कॉल करें",
  signs: [
    "दूसरे बच्चों की उम्र में बैठना, घुटनों पर चलना या चलना नहीं",
    "दो साल की उम्र तक बहुत कम या कोई शब्द नहीं",
    "खेलने, आपकी ओर देखने या छोटी बातें समझने में मुश्किल",
    "स्कूल में बहुत पीछे रह जाना",
    "डॉक्टर ने विकास में देरी, ऑटिज़्म, सेरेब्रल पाल्सी या डाउन सिंड्रोम बताया है",
  ],
  stepsTitle: "आगे क्या होगा",
  steps: [
    { title: "कॉल या व्हाट्सऐप करें", body: "बच्चे की उम्र और अपनी चिंता बताएं।" },
    { title: "केंद्र पर आएं", body: "हमारे डॉक्टर, थेरेपिस्ट और मनोवैज्ञानिक आपसे और बच्चे से एक साथ मिलेंगे।" },
    { title: "बच्चे के लिए योजना", body: "थेरेपी, स्कूल या घर पर करने वाला कार्यक्रम, और रोज़ की एक्सरसाइज़।" },
  ],
  costTitle: "खर्च कितना है?",
  cost: "हमारे ज़्यादातर परिवारों की आमदनी कम है। फीस के बारे में हमसे पूछें, और उन सरकारी योजनाओं के बारे में भी जो थेरेपी और इलाज का खर्च उठा सकती हैं।",
  bringTitle: "साथ क्या लाएं",
  bring: ["डॉक्टर की रिपोर्ट या पर्चे", "दिव्यांगता प्रमाण पत्र या UDID कार्ड, अगर है", "आधार कार्ड"],
  schemesTitle: "हम इनमें मदद करते हैं",
  schemes: [
    { title: "UDID कार्ड", body: "राष्ट्रीय दिव्यांगता पहचान पत्र। हम आवेदन में मदद करते हैं।" },
    { title: "निरामया", body: "नेशनल ट्रस्ट का दिव्यांग बच्चों के लिए स्वास्थ्य बीमा।" },
    { title: "दिशा", body: "10 साल तक के बच्चों के लिए नेशनल ट्रस्ट की अर्ली इंटरवेंशन योजना।" },
    { title: "कानूनी संरक्षकता", body: "हम दिल्ली में नेशनल ट्रस्ट की लोकल लेवल कमेटी में हैं।" },
  ],
  centresTitle: "हमारे केंद्र",
  switchLabel: "Read this page in English",
  switchHref: "/families",
};
