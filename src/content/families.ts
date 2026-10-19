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
  jump: { label: string; cost: string; centres: string; bring: string };
  storyTitle: string;
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
    "Finds it hard to play, look at you or follow simple instructions",
    "Struggling in school, far behind classmates",
    "A doctor has said 'developmental delay', autism, cerebral palsy or Down syndrome",
  ],
  stepsTitle: "What happens next",
  steps: [
    { title: "Call or WhatsApp", body: "Tell us your child's age and what worries you." },
    { title: "Come to a centre", body: "Our doctor, therapists and psychologist meet you and your child." },
    { title: "A plan for your child", body: "Therapy, school or a home programme, and exercises you can do every day." },
  ],
  costTitle: "What does it cost?",
  cost: "Most families who come to us have low incomes. Call us to ask about fees. Government schemes can help pay for therapy and health costs.",
  bringTitle: "What to bring",
  bring: ["Any doctor's reports or prescriptions", "Your child's disability certificate or UDID card, if you have one", "Aadhaar card"],
  schemesTitle: "Government schemes we can help with",
  schemes: [
    { title: "Niramaya", body: "Health insurance from the National Trust." },
    { title: "Disha", body: "Early help from the National Trust for children up to age 10." },
    { title: "Legal guardianship", body: "We are on the National Trust committee in Delhi that handles legal guardianship." },
  ],
  centresTitle: "Our centres",
  jump: { label: "On this page", cost: "What it costs", centres: "Where we are", bring: "What to bring" },
  storyTitle: "What another mother says",
  switchLabel: "यह पेज हिंदी में पढ़ें",
  switchHref: "/hi/families",
};

export const familiesHi: FamiliesCopy = {
  lang: "hi",
  eyebrow: "परिवारों के लिए",
  title: "क्या आपका बच्चा धीरे सीख रहा है?",
  intro: "आप अकेले नहीं हैं, और यह किसी की गलती नहीं है। हमें कॉल या व्हाट्सऐप करें। हम आपसे और आपके बच्चे से मिलेंगे।",
  easyRead: "अगर आपका बच्चा देर से बैठता, चलता, बोलता या सीखता है, तो हमें कॉल करें। हम मदद करेंगे।",
  signsTitle: "हमें कब कॉल करें",
  signs: [
    "दूसरे बच्चों की तरह समय पर बैठना, घुटनों के बल चलना या चलना नहीं सीखा",
    "दो साल का होने पर भी बहुत कम बोलता है या बिल्कुल नहीं बोलता",
    "खेलने, आपकी तरफ़ देखने या छोटी-छोटी बातें समझने में मुश्किल होती है",
    "स्कूल में अपनी क्लास के बच्चों से बहुत पीछे है",
    "डॉक्टर ने विकास में देरी, ऑटिज़्म, सेरेब्रल पाल्सी या डाउन सिंड्रोम बताया है",
  ],
  stepsTitle: "आगे क्या होगा",
  steps: [
    { title: "कॉल या व्हाट्सऐप करें", body: "बच्चे की उम्र और अपनी चिंता बताएं।" },
    { title: "केंद्र पर आएं", body: "हमारे डॉक्टर, थेरेपिस्ट और साइकोलॉजिस्ट आपसे और बच्चे से मिलेंगे।" },
    { title: "बच्चे के लिए प्लान", body: "थेरेपी या स्कूल, और रोज़ की एक्सरसाइज़ जो आप घर पर बच्चे को करा सकें।" },
  ],
  costTitle: "खर्च कितना है?",
  cost: "हमारे पास आने वाले ज़्यादातर परिवारों की आमदनी कम है। फीस के बारे में हमें कॉल करके पूछें। सरकारी योजनाओं से थेरेपी और इलाज के खर्च में मदद मिल सकती है।",
  bringTitle: "साथ क्या लाएं",
  bring: ["डॉक्टर की रिपोर्ट या पर्चे", "दिव्यांग सर्टिफिकेट या UDID कार्ड, अगर बना है", "आधार कार्ड"],
  schemesTitle: "सरकारी योजनाएं जिनमें हम मदद करते हैं",
  schemes: [
    { title: "निरामया", body: "नेशनल ट्रस्ट का स्वास्थ्य बीमा।" },
    { title: "दिशा", body: "10 साल तक के बच्चों की जल्दी मदद के लिए नेशनल ट्रस्ट की योजना।" },
    { title: "कानूनी गार्जियनशिप", body: "हम दिल्ली में नेशनल ट्रस्ट की उस कमेटी में हैं जो कानूनी गार्जियन के मामले देखती है।" },
  ],
  centresTitle: "हमारे केंद्र",
  jump: { label: "इस पेज पर", cost: "खर्च कितना है", centres: "हम कहाँ हैं", bring: "साथ क्या लाएं" },
  storyTitle: "एक माँ की बात",
  switchLabel: "Read this page in English",
  switchHref: "/families",
};
