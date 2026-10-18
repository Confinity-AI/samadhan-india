import { withBase } from "./site";

export type Theme = "children" | "art" | "mothers" | "made" | "community" | "places";

export type Asset = {
  id: string;
  width: number;
  height: number;
  theme: Theme;
  alt: string;
  caption: string;
};

const list: Asset[] = [
  { id: "art-fish", width: 1192, height: 600, theme: "art", alt: "A child's painting of yellow fish swimming in blue water", caption: "Fish, painted at SAMADHAN" },
  { id: "art-flowers", width: 1191, height: 475, theme: "art", alt: "A child's painting of green flowers on a red ground", caption: "Flowers, painted at SAMADHAN" },
  { id: "art-strokes", width: 1192, height: 495, theme: "art", alt: "Bold red, yellow and green brushstrokes painted by a child", caption: "Brushstrokes, painted at SAMADHAN" },
  { id: "art-trees", width: 1191, height: 714, theme: "art", alt: "A child's painting of red trees on a bright green and yellow field", caption: "Trees, painted at SAMADHAN" },
  { id: "children-play-garden", width: 960, height: 737, theme: "children", alt: "Children playing on a green lawn, one girl raising her arm", caption: "Playtime on the lawn" },
  { id: "therapy-one-to-one", width: 1180, height: 978, theme: "children", alt: "A therapist and a child working together at a table", caption: "One-to-one therapy" },
  { id: "child-handprint-painting", width: 860, height: 1154, theme: "children", alt: "A child pressing painted handprints onto paper", caption: "Handprints become elephants" },
  { id: "girl-early-intervention", width: 419, height: 640, theme: "children", alt: "A young girl looking up, her mother sitting behind her", caption: "Early years, with her mother close by" },
  { id: "boy-drawing-floor", width: 467, height: 640, theme: "children", alt: "A small boy drawing on a patterned floor mat at home", caption: "Drawing at home during lockdown" },
  { id: "child-standing-frame", width: 380, height: 640, theme: "children", alt: "A child supported in a wooden standing frame", caption: "A standing frame for daily practice" },
  { id: "child-swing", width: 496, height: 709, theme: "children", alt: "A boy sitting on outdoor exercise equipment in a garden", caption: "Outdoor movement time" },
  { id: "child-drawing-umbrella", width: 345, height: 569, theme: "children", alt: "A child's drawing of an umbrella and a potted plant", caption: "An umbrella and a plant" },
  { id: "child-writing", width: 350, height: 569, theme: "children", alt: "A boy bent over a worksheet, writing carefully", caption: "Writing practice" },
  { id: "volunteer-writing", width: 432, height: 471, theme: "children", alt: "A boy writing at a desk while a volunteer looks on", caption: "Writing with a volunteer" },
  { id: "vocational-diyas", width: 667, height: 476, theme: "made", alt: "Young people painting clay diyas at a pink table", caption: "Painting diyas for Diwali" },
  { id: "vocational-pot-painting", width: 667, height: 522, theme: "made", alt: "A teenage boy painting a pot with a fine brush", caption: "Pot painting, pre-vocational unit" },
  { id: "vocational-gardening", width: 675, height: 1033, theme: "made", alt: "A boy in a red sweater watering potted plants", caption: "Gardening, pre-vocational unit" },
  { id: "papier-mache-birds", width: 365, height: 495, theme: "made", alt: "Brightly painted papier-mâché birds hanging on a string", caption: "Papier-mâché birds" },
  { id: "laddoo-boxes", width: 694, height: 538, theme: "mothers", alt: "Rows of packed laddoo boxes on a table", caption: "Laddoo boxes, packed by the mothers' group" },
  { id: "mothers-kitchen", width: 660, height: 538, theme: "mothers", alt: "Women in hairnets preparing food in a clean kitchen", caption: "The mothers' kitchen" },
  { id: "mothers-garden-harvest", width: 369, height: 568, theme: "mothers", alt: "Three women standing behind fresh vegetables from the garden", caption: "Harvest from the garden project" },
  { id: "mothers-counselling", width: 658, height: 569, theme: "mothers", alt: "A counsellor speaking with a circle of seated mothers", caption: "A mothers' support circle" },
  { id: "parents-workshop", width: 674, height: 529, theme: "community", alt: "Parents seated in rows at a workshop", caption: "A parents' workshop" },
  { id: "legal-awareness", width: 684, height: 529, theme: "community", alt: "Parents at a legal awareness session in a classroom", caption: "Legal awareness with the Delhi Legal Services Authority" },
  { id: "diwali-rangoli", width: 545, height: 367, theme: "community", alt: "Staff and families seated behind a Diwali rangoli", caption: "Diwali together" },
  { id: "friends-gifts", width: 545, height: 366, theme: "community", alt: "Three women holding red gift boxes", caption: "Gifts from Friends of SAMADHAN" },
  { id: "centre-dakshinpuri", width: 794, height: 612, theme: "places", alt: "The SAMADHAN building in Dakshinpuri among trees", caption: "The Dakshinpuri centre" },
  { id: "centre-dwarka", width: 503, height: 612, theme: "places", alt: "The SAMADHAN building in Dwarka with a flowering shrub", caption: "The Dwarka centre" },
];

const byId = new Map(list.map((a) => [a.id, a]));

export function asset(id: string) {
  const a = byId.get(id);
  if (!a) throw new Error(`Unknown asset: ${id}`);
  return { ...a, src: withBase(`/images/${a.id}.webp`), ratio: `${a.width} / ${a.height}` };
}

export const assets = list.map((a) => asset(a.id));
export const artworks = ["art-fish", "art-flowers", "art-strokes", "art-trees"].map(asset);
export const themeLabels: Record<Theme, string> = {
  children: "Children",
  art: "Paintings",
  mothers: "Mothers",
  made: "Made here",
  community: "Community",
  places: "Our centres",
};
