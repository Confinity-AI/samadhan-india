export type Programme = {
  slug: string;
  title: string;
  kicker: string;
  short: string;
  metaDescription: string;
  easyRead: string;
  hero: string;
  /** Colour photo for cards shown beside other programmes, when the hero is an archive photo */
  thumb?: string;
  ages?: string;
  where: string;
  steps: { title: string; body: string }[];
  facts: { value: string; label: string }[];
  gallery: string[];
  quote?: { text: string; by: string };
};

export const programmes: Programme[] = [
  {
    slug: "early-intervention",
    title: "Early intervention",
    kicker: "Babies and pre-school children",
    short: "Help for babies and young children, with exercises parents can do at home.",
    metaDescription:
      "Early intervention for babies and young children with developmental delays in Dakshinpuri and Dwarka, New Delhi. Ask us about fees and government schemes.",
    easyRead: "We help babies and small children who are learning slowly. We also teach parents what to do at home.",
    hero: "girl-early-intervention",
    ages: "From birth to 6 years",
    where: "Dakshinpuri and Dwarka",
    steps: [
      { title: "Find", body: "Community workers go door to door and to local schools, looking for children who need help early." },
      { title: "Assess", body: "A paediatrician, therapists and a psychologist assess the child." },
      { title: "Home plan", body: "Parents learn simple exercises to do at home every day." },
      { title: "Nutrition", body: "Mothers get advice on breastfeeding and feeding their child." },
    ],
    facts: [
      { value: "44", label: "children in early intervention, 2020-21" },
      { value: "10", label: "children on the National Trust Disha scheme, 2020-21" },
    ],
    gallery: ["children-play-garden", "boy-drawing-floor", "child-drawing-umbrella"],
    quote: {
      text: "Thanks to SAMADHAN, we were able to give her exercises at home after getting instructions from the doctors and teachers.",
      by: "Asha, Navya's mother",
    },
  },
  {
    slug: "therapy",
    title: "Therapy",
    kicker: "Ages 0 to 16",
    short: "Speech, movement and creative therapies at both centres.",
    metaDescription:
      "Occupational therapy, speech therapy, psychology and drama therapy for children with intellectual disabilities at SAMADHAN's Delhi clinics.",
    easyRead: "Our therapists help children move, speak and play. Drama, music and art are part of therapy too.",
    hero: "therapy-one-to-one",
    thumb: "child-standing-frame",
    ages: "0 to 16 years",
    where: "Clinic days at Dakshinpuri and Dwarka",
    steps: [
      { title: "Occupational therapy", body: "Movement, balance and everyday skills like eating and dressing." },
      { title: "Speech therapy", body: "Words, signs and other ways for a child to be understood." },
      { title: "Psychology", body: "Assessments and counselling for parents." },
      { title: "Creative therapies", body: "Drama, music, art and creative movement." },
    ],
    facts: [
      { value: "15", label: "children given orthotic or prosthetic devices, 2020-21" },
      { value: "35", label: "children enrolled in Niramaya health cover, 2020-21" },
    ],
    gallery: ["child-handprint-painting", "child-swing"],
    quote: {
      text: "Even during the lockdown, the teachers from SAMADHAN took online classes and we also got assistive devices for Prince for home-use.",
      by: "Hema, Prince's mother",
    },
  },
  {
    slug: "special-education",
    title: "Special education",
    kicker: "Ages 6 to 14",
    short: "Small classes with a plan for each child. Some children move on to a regular school.",
    metaDescription:
      "Special education for children aged 6 to 14 with intellectual disabilities: small classes, individual plans and a pre-vocational unit in New Delhi.",
    easyRead: "Our school has small classes. Each child has their own plan. Some children move to a regular school.",
    hero: "child-writing",
    ages: "6 to 14 years (12 to 16 in the pre-vocational unit)",
    where: "Dakshinpuri",
    steps: [
      { title: "Small classes", body: "About one teacher for every five children." },
      { title: "A plan for each child", body: "Teachers write a learning plan for each child." },
      { title: "Moving to a regular school", body: "When a child is ready, we help them join a regular school nearby." },
      { title: "Pre-vocational unit", body: "Block printing, card making, bookbinding, gardening and housekeeping for ages 12 to 16." },
    ],
    facts: [
      { value: "22", label: "children in special education, 2020-21" },
      { value: "6", label: "moved into mainstream schools, 2020-21" },
    ],
    gallery: ["volunteer-writing", "vocational-pot-painting", "vocational-gardening", "vocational-diyas"],
  },
  {
    slug: "mothers",
    title: "Support for mothers",
    kicker: "For mothers",
    short: "Counselling for mothers, and food and craft units that earn an income.",
    metaDescription:
      "SAMADHAN's mothers' group: counselling, training and income from laddoos, spices, Nutri-mix and papier-mâché in New Delhi.",
    easyRead: "Mothers meet and help each other. They make food and crafts to sell.",
    hero: "mothers-counselling",
    where: "Dwarka and Dakshinpuri",
    steps: [
      { title: "Support circles", body: "Counselling and time with other mothers who understand." },
      { title: "Training", body: "Training for the food and craft units." },
      { title: "Income units", body: "Nutritious laddoos, SAMADHAN Spices, Nutri-mix and papier-mâché, made by the mothers." },
      { title: "Garden project", body: "Started in 2020." },
    ],
    facts: [
      { value: "50 kg", label: "of Nutri-mix made by the group in 2020" },
      { value: "2000", label: "the year the mothers' income units started" },
    ],
    gallery: ["diwali-rangoli", "mothers-garden-harvest", "friends-gifts"],
    quote: {
      text: "When I joined SAMADHAN 10 years ago, I was not very confident about myself. Today, I have made sure that both my daughters are well educated and I feel more in control of my life.",
      by: "Renu Gupta, mothers' group",
    },
  },
  {
    slug: "community",
    title: "Community outreach",
    kicker: "Door to door",
    short: "Surveys, camps and workshops where families live.",
    metaDescription:
      "Door-to-door surveys, health camps, parent workshops and legal awareness for families of children with disabilities in South and South-West Delhi.",
    easyRead: "We visit homes and schools to find children who need help. We tell families about their rights.",
    hero: "parents-workshop",
    where: "Dakshinpuri, Dwarka and nearby areas",
    steps: [
      { title: "Surveys", body: "Door-to-door and school surveys to find children up to 12 years old who need help." },
      { title: "Awareness", body: "Puppet shows, street plays, health camps and talks." },
      { title: "Rights and schemes", body: "Help with Niramaya health cover and legal guardianship." },
      { title: "Training local women", body: "Women from the neighbourhood train as community workers." },
    ],
    facts: [
      { value: "1998", label: "community-based rehabilitation began" },
      { value: "300,000+", label: "people live in Dakshinpuri, where our first centre is (2020-21 annual report)" },
    ],
    gallery: ["legal-awareness", "centre-dakshinpuri", "centre-dwarka"],
  },
];

export const getProgramme = (slug: string) => programmes.find((p) => p.slug === slug);
