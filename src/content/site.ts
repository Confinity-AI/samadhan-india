export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const baseURL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://samadhanindia.org");

export const withBase = (path: string) => `${basePath}${path}`;

export const org = {
  name: "SAMADHAN",
  publicName: "SAMADHAN India",
  legalName: 'Society for the Aid of Mentally and Developmentally Handicapped "SAMADHAN"',
  founded: "1981-12-09",
  description:
    "Therapy, early intervention and special education for children with intellectual disabilities in low-income neighbourhoods of New Delhi, since 1981.",
  email: "samadhan.dwarka@gmail.com",
  social: {
    facebook: "https://www.facebook.com/indiasamadhan",
    instagram: "https://www.instagram.com/samadhan.india",
    linkedin: "https://in.linkedin.com/company/samadhan-india",
  },
};

export const whatsapp = {
  number: "+91 74284 50880",
  base: "https://wa.me/917428450880",
  href: `https://wa.me/917428450880?text=${encodeURIComponent("Hello, I would like some information about SAMADHAN.")}`,
  hrefHi: `https://wa.me/917428450880?text=${encodeURIComponent("नमस्ते, मुझे अपने बच्चे के लिए जानकारी चाहिए।")}`,
};

export type Centre = {
  id: "dakshinpuri" | "dwarka";
  name: string;
  nameHi: string;
  role: string;
  address: string[];
  postal: { street: string; locality: string; code: string };
  phones: { label: string; href: string }[];
  map: string;
  photo: string;
};

export const centres: Centre[] = [
  {
    id: "dakshinpuri",
    name: "Dakshinpuri centre",
    nameHi: "दक्षिणपुरी केंद्र",
    role: "Clinic and school",
    address: ["F-Block Main Park, Sector V", "Dakshinpuri, New Delhi 110062"],
    postal: { street: "F-Block Main Park, Sector V, Dakshinpuri", locality: "New Delhi", code: "110062" },
    phones: [{ label: "+91 11 2605 6812", href: "tel:+911126056812" }],
    map: "https://www.google.com/maps/search/?api=1&query=Samadhan+F-Block+Main+Park+Sector+V+Dakshinpuri+New+Delhi+110062",
    photo: "centre-dakshinpuri",
  },
  {
    id: "dwarka",
    name: "Dwarka centre",
    nameHi: "द्वारका केंद्र",
    role: "Clinic and main office",
    address: ["Centre for Human Resources, Sector 2, Pocket\u00a02", "Dwarka, New Delhi 110075"],
    postal: { street: "Centre for Human Resources, Sector 2, Pocket 2, Dwarka", locality: "New Delhi", code: "110075" },
    phones: [
      { label: "+91 11 4551 6693", href: "tel:+911145516693" },
      { label: "+91 74284 50880", href: "tel:+917428450880" },
    ],
    map: "https://www.google.com/maps/search/?api=1&query=Samadhan+Centre+for+Human+Resources+Sector+2+Dwarka+New+Delhi+110075",
    photo: "centre-dwarka",
  },
];

export const registrations = [
  { label: "Society registration", value: "No. 12183 (1981)" },
  { label: "FCRA", value: "231650031" },
  { label: "Income Tax", value: "80G registered" },
  { label: "RPwD Act 2016", value: "Registered, s.51(2)" },
  { label: "National Trust", value: "Registered member" },
  { label: "US donors", value: "Equivalency determination (ask us for current status)" },
];

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

export const nav: NavItem[] = [
  {
    label: "Our work",
    href: "/our-work",
    children: [
      { label: "Early intervention", href: "/our-work/early-intervention" },
      { label: "Therapy", href: "/our-work/therapy" },
      { label: "Special education", href: "/our-work/special-education" },
      { label: "Support for mothers", href: "/our-work/mothers" },
      { label: "Community outreach", href: "/our-work/community" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our history", href: "/about/history" },
      { label: "Our founder", href: "/about/founder" },
      { label: "Our people", href: "/about/people" },
      { label: "Accountability", href: "/accountability" },
    ],
  },
  { label: "Stories", href: "/stories" },
  {
    label: "Get involved",
    href: "/get-involved",
    children: [
      { label: "Volunteer", href: "/get-involved/volunteer" },
      { label: "Internships", href: "/get-involved/internships" },
      { label: "Partner with us", href: "/get-involved/partner" },
      { label: "Donate", href: "/donate" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const partners = {
  foundations: [
    "Ford Foundation",
    "Software AG Stiftung",
    "Lebenshilfe",
    "Heart & Hand Foundation",
    "Share and Care Foundation",
    "Art for Change Foundation",
    "Friends of SAMADHAN, Australia",
    "GlobalGiving",
    "The Leprosy Mission",
  ],
  companies: [
    "The Walt Disney Company",
    "S&P Global",
    "Johnson & Johnson",
    "McGraw Hill",
    "Sumitomo Corporation",
    "Carlson Wagonlit Travel",
    "GAP International",
    "Shoppers Stop",
  ],
  public: [
    "The National Trust",
    "Ministry of Culture",
    "Irish Aid",
    "Delhi Legal Services Authority",
    "Inclusion International",
    "Ummeed and PVR Nest",
  ],
};

export const awards = [
  { year: "2020", title: "Collective of Leaders for Persons with Disabilities", by: "PVR Nest and Ummeed" },
  { year: "2018", title: "Most Promising Social Programme", by: "Coffee Because, Delhi" },
  { year: "2005", title: "Good Practice Award", by: "Dubai International Award for Best Practices" },
  { year: "1998", title: "Award of Recognition", by: "Inclusion International, The Hague" },
];

export const yearInNumbers = {
  year: "2020-21",
  items: [
    { value: "44", label: "children in early intervention" },
    { value: "22", label: "children in special education" },
    { value: "6", label: "moved into mainstream schools" },
    { value: "35", label: "enrolled in Niramaya health cover" },
    { value: "15", label: "given orthotic or prosthetic devices" },
    { value: "50 kg", label: "of Nutri-mix made by the mothers' group" },
  ],
};
