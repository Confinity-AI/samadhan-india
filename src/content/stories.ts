export type Story = {
  slug: string;
  title: string;
  person: string;
  role: string;
  programme: { label: string; href: string };
  image: string;
  imageNote: string;
  quote: string;
  body: string[];
};

export const stories: Story[] = [
  {
    slug: "navya",
    title: "Exercises at home",
    person: "Asha",
    role: "Navya's mother",
    programme: { label: "Early intervention", href: "/our-work/early-intervention" },
    image: "art-flowers",
    imageNote: "Painting by a child at SAMADHAN. Navya is not pictured.",
    quote:
      "Thanks to SAMADHAN, we were able to give her exercises at home after getting instructions from the doctors and teachers.",
    body: [
      "At SAMADHAN, doctors, therapists and teachers show parents what to practise with their child at home.",
      "Asha learned Navya's exercises from the team, so the work carried on at home between visits.",
    ],
  },
  {
    slug: "prince",
    title: "Classes that kept going",
    person: "Hema",
    role: "Prince's mother",
    programme: { label: "Therapy", href: "/our-work/therapy" },
    image: "art-fish",
    imageNote: "Painting by a child at SAMADHAN. Prince is not pictured.",
    quote:
      "Even during the lockdown, the teachers from SAMADHAN took online classes and we also got assistive devices for Prince for home-use.",
    body: [
      "When the centres closed in 2020, teachers and therapists moved to WhatsApp and video calls.",
      "Prince kept his classes, and the team arranged assistive devices so he could keep practising at home.",
    ],
  },
  {
    slug: "renu",
    title: "More in control",
    person: "Renu Gupta",
    role: "Mothers' group",
    programme: { label: "Mothers and livelihoods", href: "/our-work/mothers" },
    image: "mothers-kitchen",
    imageNote: "The mothers' kitchen at SAMADHAN.",
    quote:
      "When I joined SAMADHAN 10 years ago, I was not very confident about myself. Today, I have made sure that both my daughters are well educated and I feel more in control of my life.",
    body: [
      "Renu joined the mothers' group a decade ago. The group meets for support, trains together and makes laddoos, spices, Nutri-mix and papier-mâché to sell.",
    ],
  },
];

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);
