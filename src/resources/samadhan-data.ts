export interface MilestoneEntry {
  year: string;
  category: "founding" | "programs" | "centers" | "awards" | "leadership" | "performance";
  title: string;
  description: string;
  detail: string;
  era: "1981–1995" | "1996–2013" | "2014–2026";
}

export interface ProgrammeItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  ageGroup: string;
  centres: string;
  centre: string;
  ratioOrCadence: string;
  annualBeneficiaries: string;
  summary: string;
  clinicalHighlights: string[];
  clinicalModalities: string[];
  outcomes2025: string;
  fy25Highlight: string;
  funderHighlight: string;
  imageUrl: string;
  fallbackCategory:
    | "early-intervention"
    | "aba-clinic"
    | "special-ed"
    | "pre-vocational"
    | "dramatherapy"
    | "outreach"
    | "livelihoods";
}

export interface ChildCaseStudy {
  id: string;
  name: string;
  childName: string;
  age: string;
  centre: "Dakshinpuri Centre" | "Dwarka Centre";
  diagnosis: string;
  diagnosisContext: string;
  programme: string;
  sponsorOrCohort: string;
  beforeState: string;
  baseline: string;
  intervention: string;
  breakthrough: string;
  outcome: string;
  reportYear: string;
  imageUrl: string;
}

export interface AnnualReportItem {
  year: string;
  title: string;
  pdfUrl: string;
  coverUrl: string;
  fileSize: string;
  highlight: string;
  highlights: string;
}

export const STATUTORY_CREDENTIALS = {
  legalName: "Society for the Aid of Mentally and Developmentally Handicapped (‘SAMADHAN’)",
  foundedDate: "9 December 1981",
  societiesActReg: "12183 (Societies Registration Act, 1860)",
  rpwDActReg: "Section 51(2), Rights of Persons with Disabilities Act, 2016",
  fcraReg: "231650031 (Ministry of Home Affairs, Govt. of India)",
  taxExemption: "Section 80G & Section 12A (Income Tax Act, 1961)",
  nationalTrust: "Registered Organisation under The National Trust (Disha & Niramaya Schemes)",
  usEquivalency:
    "NGOsource Equivalency Determination (ED) Certified — US 501(c)(3) Public Charity Equivalent",
};

export const SAMADHAN_ORG = {
  legalName: "Society for the Aid of Mentally and Developmentally Handicapped (SAMADHAN)",
  shortName: "SAMADHAN India",
  foundedYear: 1981,
  founder: "Mrs. Pramila Balasundaram",
  registrations: {
    societiesAct: "12183",
    fcraNumber: "231650031",
    rpwdAct: "Section 51(2), RPwD Act 2016 (Govt. of NCT of Delhi)",
    incomeTax80G: "Section 80G & Section 12A (Income Tax Act, 1961)",
    nationalTrust: "Registered under The National Trust (Disha & Niramaya Health Insurance)",
    ngosource: "NGOsource US 501(c)(3) Public Charity Equivalency Certified",
  },
  mediaAssets: {
    earlyInterventionHero:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Sneha01.jpg",
    founderPortrait:
      "https://samadhanindia.org/wp-content/uploads/2026/01/SAMADHAN-RECEIVES-THE-MOST-PROMISING-PROGRAMME-AWARD-2018-03.jpg",
    abaTherapyRoom:
      "https://samadhanindia.org/wp-content/uploads/2026/01/FREE-HEALTH-CAMP-CONDUCTED-FOR-CHILDREN-WITH-SPECIAL-NEEDS.png",
  },
  centres: [
    {
      id: "dakshinpuri",
      name: "Dakshinpuri Centre (South Delhi Clinical & Community Hub)",
      role: "Registered Office & Clinical Hub · Est. 1983",
      address:
        "F-Block Main Park (Near Durbalnath Mandir), Sector-V, Dakshinpuri, New Delhi – 110062",
      phone: ["+91-11-26056812", "+91-11-41022446"],
      email: "<REDACTED:EMAIL>",
      contactPerson: "Mrs. Sumathi Morgan (Executive Director) & Clinical Team",
      mapQuery: "Samadhan Sector V Dakshinpuri New Delhi 110062",
      services: [
        "Early Intervention & Infant Stimulation Unit (0–6 years)",
        "5-Day Special Education Classrooms (1:5 Educator Ratio)",
        "2-Day Multidisciplinary Pediatric Rehabilitation Clinic (OT, Speech, Physio)",
        "Papier-Mâché Sheltered Co-Production & NFI Nutritious Laddoo / Nutri-Mix Kitchen",
        "Japanese Volunteers E-Rickshaw for safe last-mile student transit",
      ],
    },
    {
      id: "dwarka",
      name: "Dwarka Centre for Human Resources (SW Delhi HQ & ABA Suite)",
      role: "Administrative HQ & Clinical Hub · Est. 2003",
      address:
        "Samadhan, Centre for Human Resources, Sector 2, Pocket 2, Dwarka, New Delhi – 110075",
      phone: ["+91-11-45516693", "+91-7428450880"],
      email: "<REDACTED:EMAIL>",
      contactPerson: "Mrs. Sumathi Morgan & Dwarka Clinical Coordinator",
      mapQuery: "Samadhan Centre for Human Resources Sector 2 Pocket 2 Dwarka New Delhi 110075",
      services: [
        "SMAS Auto Leasing Applied Behaviour Analysis (ABA) Therapy Room (2024–25)",
        "JCB Literature Foundation 'Sugamya Quissa Pitara' Multisensory Room",
        "₹10,00,000 Vertical Accessibility Lift (AMC by Japanese Volunteers Group)",
        "SAMADHAN Spices Processing Unit & Organic Hydroponics / Mushroom Unit",
        "University Clinical Practicum & RCI Special Educator Training Suites",
      ],
    },
    {
      id: "tigri-outreach",
      name: "South Delhi Resettlement CBR Outreach (Tigri, Madangir & Sangam Vihar)",
      role: "Door-to-Door Identification & Maternal Counseling",
      address:
        "Operating out of Sector-V Dakshinpuri across Madangir, Khanpur, Tigri & Sangam Vihar",
      phone: ["+91-11-26056812"],
      email: "<REDACTED:EMAIL>",
      contactPerson: "Senior Community Outreach & Survey Coordinators",
      mapQuery: "Tigri Madangir Dakshinpuri New Delhi 110062",
      services: [
        "Door-to-door early disability screening across 50,000+ low-income households",
        "Under-3 home-based infant stimulation and maternal stigma counseling",
        "MCD primary school teacher sensitization and mainstream transition tracking",
        "Legal Literacy Camps (with DLSA) and Niramaya ₹1,00,000 health insurance enrollment",
      ],
    },
  ],
};

export const IMPACT_METRICS_2025 = [
  {
    id: "years",
    figure: "44+ Years",
    label: "Unbroken Clinical Service in Delhi",
    context:
      "Founded 9 December 1981 (Reg. No. 12183), predating almost every major NCR autism and IDD institution.",
    source: "Societies Act Registry & 44th Annual Review",
  },
  {
    id: "children-growth",
    figure: "120+ Children",
    label: "Direct Daily Clinical Cohort (+22.4% YoY)",
    context:
      "Expanded from 98 children in FY 2023–24 to 120+ children in FY 2024–25 across Dakshinpuri and Dwarka.",
    source: "Audited Annual Report FY 2024–25",
  },
  {
    id: "families",
    figure: "50,000+",
    label: "Low-Income Families Reached",
    context:
      "Reached through door-to-door surveys, pediatric camps, and community rehabilitation in South & SW Delhi.",
    source: "SAMADHAN Cumulative CBR Ledger",
  },
  {
    id: "ratio",
    figure: "1 : 5",
    label: "Special Educator-to-Child Ratio",
    context:
      "Every enrolled student receives a 5-day-a-week Individualized Education Plan (IEP) and quarterly audit.",
    source: "Dakshinpuri & Dwarka Academic Protocol",
  },
  {
    id: "quissa-pitara",
    figure: "101 Children",
    label: "Sugamya Quissa Pitara Library Cohort",
    context:
      "India's first rollout site for the JCB Literature Foundation & Access For All multisensory learning box.",
    source: "Annual Reports FY 2023–24 & FY 2024–25",
  },
  {
    id: "aba-suite",
    figure: "100% Subsidized",
    label: "SMAS Auto Leasing ABA Therapy Suite",
    context:
      "Climate-controlled behavioural and sensory integration room commissioned at Dwarka in FY 2024–25.",
    source: "Annual Report FY 2024–25",
  },
  {
    id: "lift-capex",
    figure: "₹10.0 Lakh",
    label: "Dwarka Vertical Accessibility Lift",
    context:
      "Barrier-free vertical lift installed for children with Cerebral Palsy, with AMC funded by Japanese Volunteers.",
    source: "Annual Report FY 2024–25",
  },
  {
    id: "insurance",
    figure: "₹1,00,000 / Child",
    label: "Niramaya Health Insurance Coverage",
    context:
      "Facilitates National Trust Niramaya coverage for OPD therapies, hospitalizations, and epilepsy medication.",
    source: "The National Trust (MSJE) Scheme",
  },
];

export const PROGRAMMES: ProgrammeItem[] = [
  {
    id: "early-intervention",
    slug: "early-intervention",
    title: "Early Intervention & Infant Stimulation (Disha Scheme)",
    shortTitle: "Early Intervention (0–6 yrs)",
    ageGroup: "0 to 6 years",
    centres: "Dakshinpuri (Sector-V) & Dwarka (Sector-2)",
    centre: "Dakshinpuri & Dwarka Centres",
    ratioOrCadence: "5 days/week pre-school readiness + scheduled home visits",
    annualBeneficiaries: "45+ Infants & Toddlers",
    summary:
      "Identifies developmental delays during the peak neuroplasticity window. For infants under 3, trained community workers visit homes to counsel mothers on acceptance, breastfeeding, Oral Rehydration (ORD), infant nutrition, and daily motor exercises. Children aged 3–6 transition into our pediatric clinical pre-school.",
    clinicalHighlights: [
      "Enrolled under The National Trust's DISHA Early Intervention and School Readiness Scheme (0–10 yrs).",
      "Maternal counseling to eliminate family stigma alongside high-protein Nutri-Mix supplementation.",
      "Pediatrician-supervised developmental screening, sensory stimulation, and inclusive playschool.",
    ],
    clinicalModalities: [
      "Enrolled under The National Trust's DISHA Early Intervention and School Readiness Scheme (0–10 yrs).",
      "Maternal counseling to eliminate family stigma alongside high-protein Nutri-Mix supplementation.",
      "Pediatrician-supervised developmental screening, sensory stimulation, and inclusive playschool.",
    ],
    outcomes2025:
      "Toddlers like Shubhan and Ranjeet progressed from inability to sit or stand to walking unsupported and speaking full sentences prior to age 6.",
    fy25Highlight:
      "Toddlers like Shubhan and Rihansh progressed from acute motor/sensory delays to independent walking and peer play.",
    funderHighlight: "The National Trust (Disha) & Individual 80G Sponsors",
    imageUrl: "https://samadhanindia.org/wp-content/uploads/2026/01/Sneha01.jpg",
    fallbackCategory: "early-intervention",
  },
  {
    id: "rehabilitation-aba-clinic",
    slug: "rehabilitation-aba-clinic",
    title: "Multidisciplinary Rehabilitation & SMAS ABA Therapy Clinic",
    shortTitle: "ABA, OT, Speech & Physio Clinic",
    ageGroup: "0 to 16 years",
    centres: "2-Day Clinic at Dakshinpuri · Daily ABA Room at Dwarka",
    centre: "Dwarka Sector 2 & Dakshinpuri",
    ratioOrCadence: "Individualized 1:1 & small-group clinical sessions",
    annualBeneficiaries: "120+ Children (FY 24–25)",
    summary:
      "Brings together a Pediatrician, Occupational Therapist, Speech & Hearing Therapist, Physiotherapist, Clinical Psychologist, and Special Educators under one roof for families who cannot afford ₹1,500/session private hospital rates.",
    clinicalHighlights: [
      "Climate-controlled SMAS Auto Leasing Applied Behaviour Analysis (ABA) Room with standing frames, foam tunnel climbers, scooter boards, and oral-motor kits.",
      "Custom orthotic and prosthetic assistive devices (CP chairs, walkers, parallel bars, gait training).",
      "Niramaya Health Insurance enrollment providing up to ₹1,00,000/year medical coverage per child.",
    ],
    clinicalModalities: [
      "Climate-controlled SMAS Auto Leasing Applied Behaviour Analysis (ABA) Room with standing frames, foam tunnel climbers, scooter boards, and oral-motor kits.",
      "Custom orthotic and prosthetic assistive devices (CP chairs, walkers, parallel bars, gait training).",
      "Niramaya Health Insurance enrollment providing up to ₹1,00,000/year medical coverage per child.",
    ],
    outcomes2025:
      "Direct clinical therapy delivered to 120+ children in FY 2024–25 (+22.4% YoY growth).",
    fy25Highlight:
      "New SMAS Auto Leasing ABA Therapy Room commissioned at Dwarka; direct therapy scaled +22.4% YoY to 120+ children.",
    funderHighlight: "SMAS Auto Leasing India CSR & DataFlow Group",
    imageUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/FREE-HEALTH-CAMP-CONDUCTED-FOR-CHILDREN-WITH-SPECIAL-NEEDS.png",
    fallbackCategory: "aba-clinic",
  },
  {
    id: "special-education",
    slug: "special-education",
    title: "Special & Inclusive Education (Sugamya Quissa Pitara)",
    shortTitle: "1:5 Special Education & Quissa Pitara",
    ageGroup: "6 to 14 years",
    centres: "Dakshinpuri & Dwarka Special Education Units",
    centre: "Dakshinpuri & Dwarka Classrooms",
    ratioOrCadence: "1:5 Educator-to-Student Ratio · 5 Days/Week",
    annualBeneficiaries: "101+ Students",
    summary:
      "A structured 5-day-a-week school environment where every child receives a tailored Individual Education Plan (IEP). Educators craft low-cost teaching aids from local materials and integrate the JCB Literature Foundation Sugamya Quissa Pitara multisensory trunk.",
    clinicalHighlights: [
      "1:5 teacher-to-student ratio—contrasting with 1:45 overcrowded local classrooms.",
      "65 tactile games, 12-texture sensory mats, braille/large-font books, and daily living (ADL) wall panels.",
      "Active mainstream school transition pathway into local schools (Balwant Rai Mehta School, Sivas Public School).",
    ],
    clinicalModalities: [
      "1:5 teacher-to-student ratio—contrasting with 1:45 overcrowded local classrooms.",
      "65 tactile games, 12-texture sensory mats, braille/large-font books, and daily living (ADL) wall panels.",
      "Active mainstream school transition pathway into local schools (Balwant Rai Mehta School, Sivas Public School).",
    ],
    outcomes2025:
      "Students like Ishan and Farman Safi successfully transitioned into mainstream primary classrooms after 2–3 years of foundational IEP support.",
    fy25Highlight:
      "Selected as India's first launch site for JCB Literature Foundation's Sugamya Quissa Pitara inclusive learning box.",
    funderHighlight: "The JCB Literature Foundation & Access For All",
    imageUrl: "https://samadhanindia.org/wp-content/uploads/2026/01/ISHAN.jpg",
    fallbackCategory: "special-ed",
  },
  {
    id: "pre-vocational",
    slug: "pre-vocational",
    title: "Pre-Vocational Skills & Computer Literacy Unit",
    shortTitle: "Pre-Vocational & ICT Lab",
    ageGroup: "12 to 18+ years",
    centres: "Dakshinpuri & Dwarka Centres",
    centre: "Dakshinpuri & Dwarka Vocational Units",
    ratioOrCadence: "Daily functional & trade skill workshops",
    annualBeneficiaries: "35+ Adolescents & Youth",
    summary:
      "Prepares adolescents with intellectual and developmental disabilities for dignified economic participation, functional independence, and assisted co-production alongside our women's collectives.",
    clinicalHighlights: [
      "Hands-on training in block printing, handmade greeting cards, bookbinding, and digital lamination.",
      "Functional computer lab literacy, urban kitchen gardening, hydroponics, and housekeeping routines.",
      "Task-analyzed co-production in the Papier-Mâché unit where youth with severe IDD lead paper soaking, pulping, and base moulding.",
    ],
    clinicalModalities: [
      "Hands-on training in block printing, handmade greeting cards, bookbinding, and digital lamination.",
      "Functional computer lab literacy, urban kitchen gardening, hydroponics, and housekeeping routines.",
      "Task-analyzed co-production in the Papier-Mâché unit where youth with severe IDD lead paper soaking, pulping, and base moulding.",
    ],
    outcomes2025:
      "Graduates transition into sheltered co-production or local employment in shops, printing units, and hospitality.",
    fy25Highlight:
      "Adolescents co-produced Papier-Mâché corporate gift hampers and cultivated chemical-free vegetables in the Dwarka garden.",
    funderHighlight: "Sumitomo Corporation India & Japanese Volunteers",
    imageUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Using-ICT-for-Inclusive-Education-in-India-02.jpg",
    fallbackCategory: "pre-vocational",
  },
  {
    id: "dramatherapy",
    slug: "dramatherapy",
    title: "THE A.R.T.S. Dramatherapy & Expressive Movement",
    shortTitle: "THE A.R.T.S. Dramatherapy",
    ageGroup: "4 to 18 years",
    centres: "Dakshinpuri & Dwarka + Public Stage Showcases (IIC Delhi)",
    centre: "Dakshinpuri, Dwarka & IIC New Delhi",
    ratioOrCadence: "Weekly Saturday A.R.T.S. Sessions + Annual Showcases",
    annualBeneficiaries: "100+ Children",
    summary:
      "Pioneered in India in 1992 by Founder Pramila Balasundaram in collaboration with Dr. Sue Jennings and the British Institute of Drama Therapists. Translates Western dramatherapy into the Indian cultural idiom through story dramatization, rhythm, puppet theatre, and mural art.",
    clinicalHighlights: [
      "THE A.R.T.S. (Art, Recreation, Therapy, and Song) builds emotional regulation, self-esteem, and anti-bullying confidence.",
      "2024–25 partnership with Art for Change Foundation (Director Isaac Gregan) creating the Dwarka Centre hallway mural.",
      "Landmark public performances including 'The Carnival of Animals', 'The Little Butterfly', 'Awaken the Magic', and 'A Walk to Remember' at India International Centre (IIC).",
    ],
    clinicalModalities: [
      "THE A.R.T.S. (Art, Recreation, Therapy, and Song) builds emotional regulation, self-esteem, and anti-bullying confidence.",
      "2024–25 partnership with Art for Change Foundation (Director Isaac Gregan) creating the Dwarka Centre hallway mural.",
      "Landmark public performances including 'The Carnival of Animals', 'The Little Butterfly', 'Awaken the Magic', and 'A Walk to Remember' at India International Centre (IIC).",
    ],
    outcomes2025:
      "Transforms non-verbal and socially withdrawn children into confident stage performers.",
    fy25Highlight:
      "Completed collaborative hallway mural at Dwarka Centre with Art for Change Foundation (Isaac Gregan).",
    funderHighlight: "Art for Change Foundation & Ministry of Culture",
    imageUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/AWAKENTHEMAGIC01.jpg",
    fallbackCategory: "dramatherapy",
  },
  {
    id: "womens-livelihoods",
    slug: "womens-livelihoods",
    title: "Matrika Maternal Mental Health & Mother-Made Social Enterprise",
    shortTitle: "Mothers' SHG & Livelihoods",
    ageGroup: "Mothers of Children with IDD",
    centres: "Dakshinpuri (Est. 2000) & Dwarka (Est. 2003)",
    centre: "Dakshinpuri & Dwarka Production Units",
    ratioOrCadence: "4 Active Production Units · Year-Round ESG Gifting",
    annualBeneficiaries: "60+ Mothers & SHG Members",
    summary:
      "Recognized with the World Bank Award for Innovation for interlinking disability rehabilitation, poverty eradication, and women's economic empowerment. Mothers earn while their children attend therapy in the same building.",
    clinicalHighlights: [
      "SAMADHAN Spices Unit (Dwarka): Hygienically ground and packed Haldi, Mirch, Dhania, and Garam Masala patronized by Japanese Volunteers and corporate offices.",
      "Nutritious Laddoo & Nutri-Mix Unit (Dakshinpuri): High-protein peanut, soya bean, lentil, and wheat germ supplement validated by the Nutrition Foundation of India (NFI).",
      "Papier-Mâché Co-Production (Dakshinpuri) & The Garden/Hydroponics/Mushroom Unit (Dwarka).",
    ],
    clinicalModalities: [
      "SAMADHAN Spices Unit (Dwarka): Hygienically ground and packed Haldi, Mirch, Dhania, and Garam Masala patronized by Japanese Volunteers and corporate offices.",
      "Nutritious Laddoo & Nutri-Mix Unit (Dakshinpuri): High-protein peanut, soya bean, lentil, and wheat germ supplement validated by the Nutrition Foundation of India (NFI).",
      "Papier-Mâché Co-Production (Dakshinpuri) & The Garden/Hydroponics/Mushroom Unit (Dwarka).",
    ],
    outcomes2025:
      "Fulfilled corporate orders including 250 festive boxes for JSS Steelitalia Ltd, GAP International employee sales, and 50 kg Nutri-Mix batches for malnourished children.",
    fy25Highlight:
      "Sustained maternal earnings across Spices, NFI Nutritious Laddoos, Papier-Mâché, and Dwarka Hydroponics.",
    funderHighlight: "World Bank Innovation Awardee · Corporate ESG Buyers",
    imageUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/SAMADHAN-RECEIVES-THE-MOST-PROMISING-PROGRAMME-AWARD-2018-03.jpg",
    fallbackCategory: "livelihoods",
  },
  {
    id: "community-outreach",
    slug: "community-outreach",
    title: "Community-Based Rehabilitation (CBR) & Door-to-Door Surveys",
    shortTitle: "Community Outreach & Surveys",
    ageGroup: "0 to 18 years + Community Families",
    centres: "Dakshinpuri, Madangir, Khanpur, Tigri, Sangam Vihar & Dwarka",
    centre: "South & South-West Delhi Resettlement Colonies",
    ratioOrCadence: "Year-round household, school & dispensary outreach",
    annualBeneficiaries: "1,600+ Community Members/Yr",
    summary:
      "Rather than waiting for families in urban resettlement colonies to find a clinic, SAMADHAN trains local women from the community as outreach survey workers to go door-to-door, identify hidden disabilities early, and sensitize MCD schools and dispensaries.",
    clinicalHighlights: [
      "Surveyed 5,751+ households, 153 primary schools (MCD, government, private), and 39 clinics/dispensaries in recorded baseline sweeps.",
      "Training of Trainers (ToT) converting experienced mothers and ASHA workers into paid community faculty.",
      "Street puppet theatre, free pediatric health camps, epilepsy awareness, and Legal Literacy Camps with Delhi Legal Services Authority.",
    ],
    clinicalModalities: [
      "Surveyed 5,751+ households, 153 primary schools (MCD, government, private), and 39 clinics/dispensaries in recorded baseline sweeps.",
      "Training of Trainers (ToT) converting experienced mothers and ASHA workers into paid community faculty.",
      "Street puppet theatre, free pediatric health camps, epilepsy awareness, and Legal Literacy Camps with Delhi Legal Services Authority.",
    ],
    outcomes2025:
      "Over 50,000 families reached across South and South-West Delhi since inception.",
    fy25Highlight:
      "Trained 72+ community health workers and educators; conducted free pediatric and legal literacy camps.",
    funderHighlight: "Software AG Stiftung & Delhi Legal Services Authority",
    imageUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Legal-Literacy-Camp-03.jpg",
    fallbackCategory: "outreach",
  },
];

export const CHILD_CASE_STUDIES: ChildCaseStudy[] = [
  {
    id: "vivaan",
    name: "Vivaan Awasthi",
    childName: "Vivaan Awasthi",
    age: "6 years",
    centre: "Dwarka Centre",
    diagnosis: "Autism Spectrum Disorder (ASD) & Intellectual Disability",
    diagnosisContext: "Autism Spectrum Disorder (ASD)",
    programme: "SMAS Auto Leasing ABA Therapy Room & Speech Therapy",
    sponsorOrCohort: "SMAS Auto Leasing India CSR Cohort",
    beforeState:
      "Entered with limited verbal expression, difficulty maintaining visual tracking, and high sensory restlessness in structured classroom settings.",
    baseline:
      "Entered with limited verbal expression, difficulty maintaining visual tracking, and high sensory restlessness in structured classroom settings.",
    intervention:
      "Daily individualized sessions inside the new climate-controlled SMAS ABA Therapy Room using oral-motor tools, thematic flashcards, visual learning boards, and foam tunnel climbers.",
    breakthrough:
      "Achieved measurable gains in vocalization, visual tracking, gross motor balance, and independent engagement with daily living (ADL) wall panels.",
    outcome:
      "Achieved measurable gains in vocalization, visual tracking, gross motor balance, and independent engagement with daily living (ADL) wall panels.",
    reportYear: "FY 2024–25",
    imageUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/FREE-HEALTH-CAMP-CONDUCTED-FOR-CHILDREN-WITH-SPECIAL-NEEDS.png",
  },
  {
    id: "rihansh",
    name: "Rihansh",
    childName: "Rihansh",
    age: "4 years",
    centre: "Dwarka Centre",
    diagnosis: "Global Developmental Delay (GDD)",
    diagnosisContext: "Global Developmental Delay (GDD)",
    programme: "Early Intervention & SMAS ABA Sensory Suite",
    sponsorOrCohort: "SMAS Auto Leasing India CSR Cohort",
    beforeState:
      "Experienced acute separation anxiety when parting from his mother and avoided unfamiliar tactile textures and group activities.",
    baseline:
      "Experienced acute separation anxiety when parting from his mother and avoided unfamiliar tactile textures and group activities.",
    intervention:
      "Graduated sensory desensitization using the 12-texture mats from Sugamya Quissa Pitara, mini-trampoline proprioceptive play, foam climbers, and abacus counting frames.",
    breakthrough:
      "Overcame separation anxiety within months; now enters the therapy room independently and initiates play with peers and educators.",
    outcome:
      "Overcame separation anxiety within months; now enters the therapy room independently and initiates play with peers and educators.",
    reportYear: "FY 2024–25",
    imageUrl: "https://samadhanindia.org/wp-content/uploads/2026/01/Sneha02.jpg",
  },
  {
    id: "ishan",
    name: "Ishan Rajoura",
    childName: "Ishan Rajoura",
    age: "9 years",
    centre: "Dakshinpuri Centre",
    diagnosis: "Post-Jaundice Apraxia Cerebral Palsy with Generalized Hypotonia",
    diagnosisContext: "Apraxia Cerebral Palsy & Hypotonia",
    programme: "Early Intervention, Physiotherapy, Speech & Special Education",
    sponsorOrCohort: "Dakshinpuri Community Survey Cohort",
    beforeState:
      "Son of Manju and Kamal Rajoura (who run a small stationery shop in Dakshinpuri). Contracted acute jaundice at age 2, losing motor control and speech clarity.",
    baseline:
      "Contracted acute jaundice at age 2 in Dakshinpuri, losing motor control, posture, and speech clarity.",
    intervention:
      "Identified during a door-to-door survey. Completed 3 years of intensive physiotherapy, speech therapy, and 1:5 Individual Education Plan (IEP) schooling at SAMADHAN.",
    breakthrough:
      "Successfully admitted into a mainstream classroom at Balwant Rai Mehta School in Dakshinpuri at age 9.",
    outcome:
      "Successfully admitted into a mainstream classroom at Balwant Rai Mehta School in Dakshinpuri.",
    reportYear: "Verified Case Study",
    imageUrl: "https://samadhanindia.org/wp-content/uploads/2026/01/ISHAN.jpg",
  },
  {
    id: "roopali",
    name: "Roopali",
    childName: "Roopali",
    age: "9 years",
    centre: "Dakshinpuri Centre",
    diagnosis: "Cerebral Palsy (Spastic Quadriplegia)",
    diagnosisContext: "Cerebral Palsy (Spastic Quadriplegia)",
    programme: "Multidisciplinary Rehabilitation, OT, Physiotherapy & Nutrition",
    sponsorOrCohort: "Dakshinpuri Rehabilitation Clinic",
    beforeState:
      "Daughter of Sangeeta and a local tailor in Dakshinpuri. Joined at age 6 lying flat on her back, unable to hold her head up, sit, grasp objects, or chew solid food (surviving on liquids only).",
    baseline:
      "Joined at age 6 lying flat on her back, unable to hold her head up, sit, grasp objects, or chew solid food.",
    intervention:
      "Three years of sustained occupational therapy, postural positioning, oral-motor feeding therapy, and hands-on caregiver training for her mother Sangeeta.",
    breakthrough:
      "Now sits with minimal support, grasps toys, eats solid meals independently, and greets her therapists with a radiant smile.",
    outcome:
      "Now sits with minimal support, grasps toys, eats solid meals independently, and participates in group sessions.",
    reportYear: "Verified Case Study",
    imageUrl: "https://samadhanindia.org/wp-content/uploads/2026/01/ROOPALI.jpg",
  },
  {
    id: "sneha",
    name: "Sneha",
    childName: "Sneha",
    age: "6 years",
    centre: "Dakshinpuri Centre",
    diagnosis: "Down Syndrome",
    diagnosisContext: "Down Syndrome",
    programme: "Dakshinpuri Early Intervention & Pre-School Readiness Unit",
    sponsorOrCohort: "DISHA Early Intervention Cohort",
    beforeState:
      "Joined the Dakshinpuri Early Intervention Unit with delayed speech, hypotonia, and shyness around unfamiliar children.",
    baseline:
      "Joined the Dakshinpuri Early Intervention Unit with delayed speech, hypotonia, and social withdrawal.",
    intervention:
      "Enrolled in daily group sensory play, music and rhythm therapy, and pre-school readiness exercises.",
    breakthrough:
      "Became the expressive leader of her classroom cohort, participating in cultural dances, group songs, and independent self-care.",
    outcome:
      "Became the expressive leader of her classroom cohort, participating in cultural dances, group songs, and independent self-care.",
    reportYear: "FY 2023–24",
    imageUrl: "https://samadhanindia.org/wp-content/uploads/2026/01/Sneha01.jpg",
  },
  {
    id: "shubhan",
    name: "Shubhan",
    childName: "Shubhan",
    age: "5 years",
    centre: "Dakshinpuri Centre",
    diagnosis: "Global Developmental Delay & Motor Impairment",
    diagnosisContext: "Global Developmental Delay (GDD)",
    programme: "Home-Based & Centre-Based Early Intervention + Family Counseling",
    sponsorOrCohort: "Dakshinpuri Outreach Cohort",
    beforeState:
      "His mother Tabassum (married at age 15) faced intense household stigma and blame because Shubhan could neither stand nor speak.",
    baseline:
      "Could neither stand nor speak at intake; his young mother Tabassum faced severe household blame in Dakshinpuri.",
    intervention:
      "Outreach worker Sarojini counseled the entire family in Dakshinpuri and enrolled Shubhan in daily gait training, speech therapy, and group rhythm sessions.",
    breakthrough:
      "Now walks independently, sings rhymes, and speaks in full sentences, transforming his mother's standing within her household.",
    outcome:
      "Now walks independently, sings rhymes, and speaks in full sentences, eliminating maternal stigma at home.",
    reportYear: "Verified Case Study",
    imageUrl: "https://samadhanindia.org/wp-content/uploads/2026/01/Shubhan01.jpg",
  },
  {
    id: "payal",
    name: "Payal & Mother Usha",
    childName: "Payal & Mother Usha",
    age: "Identified at age 2",
    centre: "Dakshinpuri Centre",
    diagnosis: "Intergenerational Intellectual Disability & Extreme Poverty",
    diagnosisContext: "Intergenerational IDD",
    programme: "3-Year Home-Based Early Intervention + Mother's SHG Employment",
    sponsorOrCohort: "Madangir Resettlement Colony Dual-Intervention Case",
    beforeState:
      "Identified at age 2 in Madangir after her father (a hand-cart puller) passed away. Payal's mother, Usha, also had an intellectual disability and no source of income.",
    baseline:
      "Identified at age 2 in Madangir after her father passed away; her mother Usha also had an intellectual disability and zero income.",
    intervention:
      "Home-based educator Neelam trained Payal at home for 3 years before moving her into center-based schooling, while SAMADHAN employed mother Usha in its Women's Self-Help Group.",
    breakthrough:
      "Kept mother and daughter together with a dignified livelihood and continuous special education.",
    outcome:
      "Kept mother and daughter together with a dignified livelihood in the Women's SHG and continuous special education.",
    reportYear: "Verified Case Study",
    imageUrl: "https://samadhanindia.org/wp-content/uploads/2026/01/ROOPALI4.jpg",
  },
  {
    id: "dataflow-cohort",
    name: "Yuvraj, Yagya, Aarish, Bhavya & Pratham",
    childName: "Yuvraj, Yagya, Aarish, Bhavya & Pratham",
    age: "4 to 11 years",
    centre: "Dakshinpuri Centre",
    diagnosis: "Cerebral Palsy, Autism Spectrum Disorder (ASD) & GDD",
    diagnosisContext: "CP, Autism & GDD Cohort",
    programme: "DataFlow Group Child Sponsorship Cohort",
    sponsorOrCohort: "Sponsored by DataFlow Group",
    beforeState:
      "Five children from low-income families requiring multi-domain occupational, speech, and behavioural therapy.",
    baseline:
      "Five children from low-income families requiring multi-domain occupational, speech, and behavioural therapy.",
    intervention:
      "Full-year sponsored clinical therapy, IEP tracking, and parent counseling documented in the FY 2023–24 Annual Report.",
    breakthrough:
      "All 5 children recorded verified improvements in fine motor coordination, speech clarity, listening responsiveness, and peer socialization.",
    outcome:
      "All 5 children recorded verified improvements in fine motor coordination, speech clarity, listening responsiveness, and peer socialization.",
    reportYear: "FY 2023–24",
    imageUrl: "https://samadhanindia.org/wp-content/uploads/2026/01/Sneha03.jpg",
  },
];

export const CHILD_OUTCOME_STORIES = CHILD_CASE_STUDIES;

export const MILESTONES_TIMELINE: MilestoneEntry[] = [
  {
    year: "1981",
    category: "founding",
    title: "SAMADHAN founded on 9 December 1981 in New Delhi",
    description:
      "Mrs. Pramila Balasundaram registers Society for the Aid of Mentally and Developmentally Handicapped (Reg. No. 12183) under the Societies Registration Act to serve low-income families.",
    detail:
      "Mrs. Pramila Balasundaram registers Society for the Aid of Mentally and Developmentally Handicapped (Reg. No. 12183) under the Societies Registration Act.",
    era: "1981–1995",
  },
  {
    year: "1983",
    category: "centers",
    title: "First Special Education Unit opens in Dakshinpuri resettlement colony",
    description:
      "Launches grassroots special education inside Dakshinpuri (South Delhi), serving a relocated slum resettlement community of 50,000+ families.",
    detail:
      "Launches grassroots special education inside Dakshinpuri (South Delhi), serving a relocated resettlement community of 50,000+ families.",
    era: "1981–1995",
  },
  {
    year: "1984–85",
    category: "performance",
    title: "Delhi's first public stage performance by children with intellectual disabilities",
    description:
      "SAMADHAN students stage 'The Carnival of Animals' and launch community street awareness using traditional puppet theatre.",
    detail:
      "SAMADHAN students stage 'The Carnival of Animals' and launch community street awareness using traditional puppet theatre.",
    era: "1981–1995",
  },
  {
    year: "1986",
    category: "programs",
    title: "First Early Intervention Workshop with Dr. Peter Woods (Wales)",
    description:
      "Introduces systematic infant and toddler developmental intervention for low-income mothers in South Delhi.",
    detail:
      "Introduces systematic infant and toddler developmental intervention for low-income mothers in South Delhi.",
    era: "1981–1995",
  },
  {
    year: "1988",
    category: "leadership",
    title: "First organization from India admitted to Inclusion International",
    description:
      "Connects grassroots Indian disability practice with the global Inclusion International federation.",
    detail:
      "Connects grassroots Indian disability practice with the global Inclusion International federation.",
    era: "1981–1995",
  },
  {
    year: "1989–90",
    category: "programs",
    title: "Vocational Training Unit & Multidisciplinary Rehabilitation Clinic launched",
    description:
      "Adds clinical pediatric screening, speech therapy, occupational therapy, physiotherapy, and pre-vocational training in Dakshinpuri.",
    detail:
      "Adds clinical pediatric screening, speech therapy, occupational therapy, physiotherapy, and pre-vocational training in Dakshinpuri.",
    era: "1981–1995",
  },
  {
    year: "1992",
    category: "programs",
    title: "First National Workshop introducing Dramatherapy with Dr. Sue Jennings (UK)",
    description:
      "Launches THE A.R.T.S. (Art, Recreation, Therapy, and Song) in partnership with the founder of the UK Dramatherapy movement.",
    detail:
      "Launches THE A.R.T.S. (Art, Recreation, Therapy, and Song) in partnership with the founder of the UK Dramatherapy movement.",
    era: "1981–1995",
  },
  {
    year: "1993–94",
    category: "centers",
    title: "Dakshinpuri Centre laid by Lebenshilfe Germany & inaugurated by Dr. Kiran Bedi",
    description:
      "Geert Freyhoff (Lebenshilfe, Germany) lays the foundation stone in 1993; Dr. Kiran Bedi and Dr. Ingrid Körner inaugurate the dedicated Dakshinpuri facility in 1994.",
    detail:
      "Geert Freyhoff (Lebenshilfe, Germany) lays the foundation stone in 1993; Dr. Kiran Bedi and Dr. Ingrid Körner inaugurate the Dakshinpuri facility in 1994.",
    era: "1981–1995",
  },
  {
    year: "1998",
    category: "awards",
    title: "Inclusion International Award of Recognition (The Hague) & CBR Survey Launch",
    description:
      "Honored in The Hague, Netherlands; launches door-to-door Community-Based Rehabilitation (CBR) identification surveys across South Delhi.",
    detail:
      "Honored in The Hague, Netherlands; launches door-to-door Community-Based Rehabilitation (CBR) identification surveys across South Delhi.",
    era: "1996–2013",
  },
  {
    year: "2000",
    category: "programs",
    title: "Mothers' Income Generation Collective launched in Dakshinpuri",
    description:
      "Establishes Self-Help Groups (SHGs) for mothers of children with disabilities, creating the Papier-Mâché and Nutritious Laddoo units.",
    detail:
      "Establishes Self-Help Groups (SHGs) for mothers of children with disabilities, creating the Papier-Mâché and Nutritious Laddoo units.",
    era: "1996–2013",
  },
  {
    year: "2001–02",
    category: "awards",
    title: "Wins the World Bank Award for Innovation",
    description:
      "Recognized by the World Bank for successfully interlinking intellectual disability rehabilitation, urban poverty reduction, and women's empowerment.",
    detail:
      "Recognized by the World Bank for interlinking intellectual disability rehabilitation, urban poverty reduction, and women's empowerment.",
    era: "1996–2013",
  },
  {
    year: "2003",
    category: "centers",
    title: "Dwarka Centre for Human Resources completed in Sector 2, South-West Delhi",
    description:
      "Opens SAMADHAN's second permanent centre in Dwarka alongside a dedicated Women's Livelihood and Spices unit.",
    detail:
      "Opens SAMADHAN's second permanent centre in Dwarka alongside a dedicated Women's Livelihood and Spices unit.",
    era: "1996–2013",
  },
  {
    year: "2005",
    category: "awards",
    title: "UN-Habitat Dubai International Award for Best Practices (DIABP)",
    description:
      "Wins The Good Practice Award from Dubai International Awards; Dr. Kiran Bedi releases Founder Pramila Balasundaram's book 'Sunny's Story'.",
    detail:
      "Wins The Good Practice Award from Dubai International Awards; Dr. Kiran Bedi releases Founder Pramila Balasundaram's book 'Sunny's Story'.",
    era: "1996–2013",
  },
  {
    year: "2011–13",
    category: "leadership",
    title: "Elected President of AFID & hosts the 21st Asian Federation Conference",
    description:
      "SAMADHAN represents India as President of the Asian Federation for the Intellectually Disabled (AFID) and hosts the 2013 international conference in New Delhi.",
    detail:
      "Represents India as President of the Asian Federation for the Intellectually Disabled (AFID) and hosts the 2013 international conference in New Delhi.",
    era: "1996–2013",
  },
  {
    year: "2018",
    category: "awards",
    title: "Wins Most Promising Social Programme Complementing the UN SDGs Award",
    description:
      "Conferred by Coffee Because, Delhi, recognizing SAMADHAN's integrated child-and-mother community model.",
    detail:
      "Conferred by Coffee Because, Delhi, recognizing SAMADHAN's integrated child-and-mother community model.",
    era: "2014–2026",
  },
  {
    year: "2020",
    category: "awards",
    title: "PVRNest & Ummeed 'Collective of Leaders' Award + NGOsource US Equivalency",
    description:
      "Honored by PVRNest and Ummeed Child Development Center; obtains NGOsource Equivalency Determination (ED) certifying US 501(c)(3) Public Charity equivalency.",
    detail:
      "Honored by PVRNest and Ummeed Child Development Center; obtains NGOsource Equivalency Determination (ED) certifying US 501(c)(3) equivalency.",
    era: "2014–2026",
  },
  {
    year: "2024",
    category: "programs",
    title: "Selected as India's first launch site for JCB 'Sugamya Quissa Pitara'",
    description:
      "On 22 January 2024, launches the multisensory inclusive learning trunk (65 games, 12-texture mats, braille/tactile books) with The JCB Literature Foundation and Access For All.",
    detail:
      "On 22 January 2024, launches the multisensory inclusive learning trunk (65 games, 12-texture mats, braille/tactile books) with The JCB Literature Foundation.",
    era: "2014–2026",
  },
  {
    year: "2024–25",
    category: "centers",
    title: "SMAS Auto Leasing ABA Therapy Room, ₹10L Dwarka Lift & 120+ Active Children",
    description:
      "Commissions the climate-controlled ABA Therapy Room with SMAS Auto Leasing India, installs the ₹10,00,000 Dwarka Centre Accessibility Lift, and expands direct service to 120+ children (+22.4% YoY).",
    detail:
      "Commissions the climate-controlled ABA Therapy Room with SMAS Auto Leasing India, installs the ₹10L Dwarka Lift, and expands direct service to 120+ children.",
    era: "2014–2026",
  },
];

export const HISTORICAL_TIMELINE = MILESTONES_TIMELINE;

export const GOVERNANCE_TEAM = [
  {
    name: "Mrs. Pramila Balasundaram",
    role: "Founder & Clinical Mentor (Founded Dec 1981)",
    bio: "Clinical Psychologist, Former President of the Asian Federation for the Intellectually Disabled (AFID 2011–13), and author of 'Sunny's Story'. Pioneered community-based early intervention and dramatherapy in Delhi's resettlement colonies.",
  },
  {
    name: "Mrs. Sumathi Morgan",
    role: "Secretary & Executive Director",
    bio: "Leads SAMADHAN's clinical operations, CSR partnerships, and multidisciplinary centres across Dakshinpuri and Dwarka Sector 2.",
  },
  {
    name: "Mr. Prabodh Bhambal",
    role: "President, Executive Board",
    bio: "Development advisor guiding institutional governance, statutory compliance, and multi-year strategic growth.",
  },
  {
    name: "Mr. Ratan Kumar Gurtoo",
    role: "Immediate Past President & Chartered Accountant",
    bio: "Partner at A.K. Kar & Company; oversees financial stewardship, FCRA compliance, and statutory audits.",
  },
  {
    name: "Mrs. Janak Kumari Gandhi",
    role: "Treasurer",
    bio: "Retired Technical Officer, Council of Scientific and Industrial Research (CSIR), overseeing treasury and grant disbursements.",
  },
  {
    name: "Dr. Alex Joseph & Cdr. Reena Magdalene",
    role: "Executive Board Members",
    bio: "Senior specialists in social work, community rehabilitation, and institutional operations.",
  },
];

export const ANNUAL_REPORTS: AnnualReportItem[] = [
  {
    year: "2024–25",
    title: "Annual Report 2024–2025",
    pdfUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/05/Annual-Report-2024-2025-compressed.pdf",
    coverUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/05/Annual-Report-2024-2025-compressed-pdf.jpg",
    fileSize: "3.05 MB",
    highlight:
      "120+ children served (+22.4% YoY), SMAS Auto Leasing ABA Therapy Room, ₹10L Dwarka Lift, Art for Change Mural.",
    highlights:
      "120+ children served (+22.4% YoY), SMAS Auto Leasing ABA Therapy Room, ₹10L Dwarka Lift, Art for Change Mural.",
  },
  {
    year: "2023–24",
    title: "Annual Report 2023–2024",
    pdfUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/05/Samadhan-AR-23-24-200225-compressed.pdf",
    coverUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/05/Samadhan-AR-23-24-200225-compressed-pdf.jpg",
    fileSize: "1.11 MB",
    highlight:
      "98 children served (82 Dakshinpuri, 16 Dwarka), Sugamya Quissa Pitara launch, Japanese Volunteers E-Rickshaw, DataFlow sponsorships.",
    highlights:
      "98 children served (82 Dakshinpuri, 16 Dwarka), Sugamya Quissa Pitara launch, Japanese Volunteers E-Rickshaw, DataFlow sponsorships.",
  },
  {
    year: "2022–23",
    title: "Annual Report 2022–2023",
    pdfUrl: "https://samadhanindia.org/wp-content/uploads/2026/05/Final-2223.pdf",
    coverUrl: "https://samadhanindia.org/wp-content/uploads/2026/05/Final-2223-pdf.jpg",
    fileSize: "566 KB",
    highlight:
      "Post-pandemic full classroom restoration across Dakshinpuri and Dwarka centres.",
    highlights:
      "Post-pandemic full classroom restoration across Dakshinpuri and Dwarka centres.",
  },
  {
    year: "2021–22",
    title: "Annual Report 2021–2022",
    pdfUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/05/Annual-Report-21-22-PDF-535.86-kb.pdf",
    coverUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/05/Annual-Report-21-22-PDF-535.86-kb-pdf.jpg",
    fileSize: "549 KB",
    highlight:
      "Hybrid tele-therapy, community ration distribution, and Niramaya health insurance renewals.",
    highlights:
      "Hybrid tele-therapy, community ration distribution, and Niramaya health insurance renewals.",
  },
  {
    year: "2020–21",
    title: "Annual Report 2020–2021",
    pdfUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/05/ANNUAL-REPORT-2020-21-FINAL.pdf",
    coverUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/05/ANNUAL-REPORT-2020-21-FINAL-pdf.jpg",
    fileSize: "5.40 MB",
    highlight:
      "40th year milestone, NGOsource US Equivalency Determination, Dwarka Garden/Hydroponics launch, 50 kg Nutri-Mix batch.",
    highlights:
      "40th year milestone, NGOsource US Equivalency Determination, Dwarka Garden/Hydroponics launch, 50 kg Nutri-Mix batch.",
  },
  {
    year: "2019–20",
    title: "Annual Report 2019–2020",
    pdfUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-Report-2019-20.pdf",
    coverUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-Report-2019-20-pdf.jpg",
    fileSize: "3.03 MB",
    highlight:
      "PVRNest & Ummeed Collective of Leaders Award and Speech Therapy Lab upgrade.",
    highlights:
      "PVRNest & Ummeed Collective of Leaders Award and Speech Therapy Lab upgrade.",
  },
  {
    year: "2018–19",
    title: "Annual Report 2018–2019",
    pdfUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-Report-2018-19.pdf",
    coverUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-Report-2018-19-pdf.jpg",
    fileSize: "6.13 MB",
    highlight:
      "Most Promising Social Programme SDG Award and expanded DISHA Early Intervention cohort.",
    highlights:
      "Most Promising Social Programme SDG Award and expanded DISHA Early Intervention cohort.",
  },
  {
    year: "2017–18",
    title: "Annual Report 2017–2018",
    pdfUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-Report-17-18.pdf",
    coverUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-Report-17-18-pdf.jpg",
    fileSize: "4.68 MB",
    highlight:
      "23rd AFID Conference delegation in Dhaka and Autism parent training workshops.",
    highlights:
      "23rd AFID Conference delegation in Dhaka and Autism parent training workshops.",
  },
  {
    year: "2016–17",
    title: "Annual Report 2016–2017",
    pdfUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-Report-2016-17.pdf",
    coverUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-Report-2016-17-pdf.jpg",
    fileSize: "6.91 MB",
    highlight:
      "Carlson Wagonlit Travel CSR partnership and JSS Steelitalia 250-box Nutritious Laddoo order.",
    highlights:
      "Carlson Wagonlit Travel CSR partnership and JSS Steelitalia 250-box Nutritious Laddoo order.",
  },
  {
    year: "2015–16",
    title: "Annual Report 2015–2016",
    pdfUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-Report-2015-16.pdf",
    coverUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-Report-2015-16-pdf.jpg",
    fileSize: "5.95 MB",
    highlight:
      "National Workshop on ICT for Inclusive Education with C-DAC & UNICEF at IIC.",
    highlights:
      "National Workshop on ICT for Inclusive Education with C-DAC & UNICEF at IIC.",
  },
  {
    year: "2014–15",
    title: "Annual Report 2014–2015",
    pdfUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-report-2014-15.pdf",
    coverUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-report-2014-15-pdf.jpg",
    fileSize: "2.25 MB",
    highlight:
      "Expansion of Women's Self-Help Groups and Legal Literacy Camps in Dakshinpuri.",
    highlights:
      "Expansion of Women's Self-Help Groups and Legal Literacy Camps in Dakshinpuri.",
  },
  {
    year: "2013–14",
    title: "Annual Report 2013–2014",
    pdfUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/Annual-report-2013-14.pdf",
    coverUrl:
      "https://samadhanindia.org/wp-content/uploads/2026/01/AFID-2013-Report-pdf.jpg",
    fileSize: "1.80 MB",
    highlight: "Hosting the 21st AFID International Conference in New Delhi.",
    highlights: "Hosting the 21st AFID International Conference in New Delhi.",
  },
];

export const DONATION_TIERS = [
  {
    id: "tier-1500",
    amountINR: "₹1,500",
    amountUSD: "$20",
    title: "1 Month of Speech & Occupational Therapy",
    impact:
      "Covers one child's clinical therapy sessions, developmental assessment, and home exercise materials at Dakshinpuri or Dwarka.",
    taxBenefit: "50% Tax Deduction under Sec 80G (Form 10BE)",
  },
  {
    id: "tier-5000",
    amountINR: "₹5,000",
    amountUSD: "$60",
    title: "ABA Sensory Kit + Niramaya Insurance & Nutri-Mix",
    impact:
      "Funds a child's annual ₹1,00,000 Niramaya Health Insurance premium plus high-protein NFI-validated Nutri-Mix and tactile learning aids.",
    taxBenefit: "50% Tax Deduction under Sec 80G + Utilization Receipt",
  },
  {
    id: "tier-18000",
    amountINR: "₹18,000",
    amountUSD: "$220",
    title: "Full-Year Child Sponsorship (1:5 Special Education)",
    impact:
      "Sponsors a full academic year of 5-day-a-week special education, Individual Education Plan (IEP) reviews, and Sugamya Quissa Pitara sessions for one child.",
    taxBenefit: "Annual Child IEP Progress Dossier + 80G / FCRA Receipt",
  },
  {
    id: "tier-50000",
    amountINR: "₹50,000",
    amountUSD: "$600",
    title: "Assistive Mobility & Orthotic Devices Cohort (5 Children)",
    impact:
      "Provides custom Cerebral Palsy (CP) chairs, walkers, standing frames, and orthotic braces for 5 children from low-income households.",
    taxBenefit: "Geotagged Asset Handover Report + 80G / FCRA Receipt",
  },
  {
    id: "tier-100000",
    amountINR: "₹1,00,000",
    amountUSD: "$1,200",
    title: "Adopt a Classroom or Mother's Livelihood SHG Unit",
    impact:
      "Underwrites a full quarter of multidisciplinary clinic operations or raw materials for the Papier-Mâché, Spices, and Nutri-Mix women's collectives.",
    taxBenefit: "Schedule VII CSR / HNI Patron Recognition + Audit Certificate",
  },
  {
    id: "tier-500000",
    amountINR: "₹5,00,000+",
    amountUSD: "$6,000+",
    title: "Corporate CSR / Foundation Flagship Clinic Grant",
    impact:
      "Co-funds full-year ABA therapy operations, transport fleet (E-Rickshaw/Lift AMC), or satellite early intervention screening camps across South & SW Delhi.",
    taxBenefit: "Companies Act Schedule VII (ii) + NGOsource US 501(c)(3) ED",
  },
];

export const BANK_ACCOUNTS = {
  domestic: {
    label: "Domestic Indian Rupee (INR) Account — Union Bank of India",
    accountName: "SAMADHAN",
    bankName: "Union Bank of India — Dwarka Sector 10 Branch, New Delhi 110075",
    accountNumber: "<REDACTED:CREDIT_CARD>",
    ifsc: "UBIN0811327",
    accountType: "Savings / Domestic 80G Account",
    eligibilityNote:
      "For Indian citizens, domestic companies, and CSR foundations remitting in INR. Eligible for 50% tax exemption under Section 80G of the Income Tax Act, 1961.",
  },
  fcra: {
    label: "International Foreign Currency (FCRA) Account — SBI New Delhi Main Branch",
    accountName: "SOCIETY FOR THE AID OF MENTALLY AND DEVE",
    bankName: "State Bank of India (SBI)",
    branch: "FCRA Cell, 4th Floor, New Delhi Main Branch, 11 Sansad Marg, New Delhi 110001",
    accountNumber: "40052266279",
    ifsc: "SBIN0000691",
    branchCode: "00691",
    swiftCode: "SBININBB104",
    fcraReg: "231650031",
    eligibilityNote:
      "Note: SBI's core banking field truncates our 66-character legal name to exactly 40 characters ('SOCIETY FOR THE AID OF MENTALLY AND DEVE'). Use Purpose Code P1303 on SWIFT wires.",
  },
};

export const INSTITUTIONAL_PARTNERS = [
  {
    name: "SMAS Auto Leasing India Pvt. Ltd.",
    category: "Corporate CSR (Sumitomo Mitsui Group)",
    project:
      "Funded the climate-controlled Applied Behaviour Analysis (ABA) Therapy Room at Dwarka Centre in FY 2024–25.",
  },
  {
    name: "The JCB Literature Foundation & Access For All",
    category: "Inclusive Education Grant",
    project:
      "Selected SAMADHAN as India's first rollout site for 'Sugamya Quissa Pitara' multisensory learning trunks (Jan 2024).",
  },
  {
    name: "Japanese Volunteers Group (New Delhi)",
    category: "Mobility & Infrastructure",
    project:
      "Donated the Dakshinpuri student E-Rickshaw and funded the Annual Maintenance Contract for the ₹10L Dwarka Lift.",
  },
  {
    name: "The National Trust (Govt. of India)",
    category: "Statutory Ministry Affiliation",
    project:
      "Empanelled implementing partner for the DISHA Early Intervention Scheme and Niramaya Health Insurance.",
  },
  {
    name: "DataFlow Group & Sumitomo Corp India",
    category: "Corporate Child Sponsorships",
    project:
      "Multi-year child therapy cohorts, assistive mobility equipment, and special education classroom sponsorships.",
  },
  {
    name: "World Bank & Software AG Stiftung (Germany)",
    category: "Global Institutional Recognition",
    project:
      "World Bank Award for Innovation (Mothers' Livelihoods + IDD Care) and multi-year German foundation patronage.",
  },
];
