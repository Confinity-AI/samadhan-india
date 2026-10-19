import { withBase } from "./site";

export type Theme = "children" | "art" | "mothers" | "made" | "community" | "places";

export type Asset = {
  id: string;
  width: number;
  height: number;
  theme: Theme;
  alt: string;
  caption: string;
  gallery?: false;
  mono?: true;
};

const list: Asset[] = [
  { id: "art-fish", width: 1192, height: 600, theme: "art", alt: "A child's painting of yellow and brown fish swimming in blue water", caption: "Fish, painted at SAMADHAN" },
  { id: "art-flowers", width: 1191, height: 475, theme: "art", alt: "A child's painting of pale yellow flowers and green leaves on a magenta ground", caption: "Flowers, painted at SAMADHAN" },
  { id: "art-strokes", width: 1192, height: 495, theme: "art", alt: "Bold pink, green and brown brushstrokes on yellow, painted by a child", caption: "Brushstrokes, painted at SAMADHAN" },
  { id: "art-trees", width: 1191, height: 714, theme: "art", alt: "A child's painting of red trees on a bright green and yellow field", caption: "Trees, painted at SAMADHAN" },
  { id: "children-play-garden", width: 960, height: 737, theme: "children", alt: "Children playing on a green lawn, one girl raising her arm", caption: "Playtime on the lawn" },
  { id: "therapy-one-to-one", width: 1172, height: 978, theme: "children", alt: "A therapist and a child working together at a table outdoors", caption: "One-to-one therapy", mono: true },
  { id: "child-handprint-painting", width: 860, height: 1154, theme: "children", alt: "A small boy beside a sketchbook of painted handprints, opening pots of paint", caption: "Handprints become elephants", mono: true },
  { id: "girl-early-intervention", width: 415, height: 618, theme: "children", alt: "A young girl looking to the side, with a woman sitting behind her", caption: "Early intervention at SAMADHAN" },
  { id: "boy-drawing-floor", width: 463, height: 618, theme: "children", alt: "A smiling boy kneeling on a bright patterned bedsheet, tracing the pattern with his finger", caption: "At home during lockdown" },
  { id: "child-standing-frame", width: 376, height: 618, theme: "children", alt: "A child supported in a wooden standing frame", caption: "A standing frame for daily practice" },
  { id: "child-swing", width: 494, height: 709, theme: "children", alt: "A boy sitting on outdoor exercise equipment in a garden", caption: "Exercise in the garden", mono: true },
  { id: "child-drawing-umbrella", width: 341, height: 554, theme: "children", alt: "A child's drawing of an umbrella and a potted plant", caption: "An umbrella and a plant" },
  { id: "child-writing", width: 346, height: 554, theme: "children", alt: "A boy bent over a worksheet, writing carefully", caption: "Writing practice" },
  { id: "volunteer-writing", width: 432, height: 460, theme: "children", alt: "A boy writing at a purple table while a smiling volunteer holds a camera", caption: "Writing with a volunteer" },
  { id: "vocational-diyas", width: 663, height: 472, theme: "made", alt: "A young man and a boy painting clay diyas at a pink table", caption: "Painting diyas for Diwali" },
  { id: "vocational-pot-painting", width: 663, height: 517, theme: "made", alt: "A teenage boy at a table, painting a craft piece with a fine brush", caption: "Pot painting, pre-vocational unit" },
  { id: "vocational-gardening", width: 670, height: 1007, theme: "made", alt: "A boy in a red sweater watering potted plants", caption: "Gardening, pre-vocational unit" },
  { id: "papier-mache-birds", width: 361, height: 491, theme: "made", alt: "Brightly painted papier-mâché birds hanging on a string", caption: "Papier-mâché birds" },
  { id: "laddoo-boxes", width: 690, height: 517, theme: "mothers", alt: "Rows of packed laddoo boxes on a table", caption: "Laddoo boxes, packed by the mothers' group" },
  { id: "mothers-kitchen", width: 656, height: 516, theme: "mothers", alt: "Women in hairnets and gloves sorting grains and nuts in a kitchen", caption: "The mothers' kitchen" },
  { id: "mothers-garden-harvest", width: 365, height: 564, theme: "mothers", alt: "Three women standing behind fresh vegetables from the garden", caption: "Harvest from the garden project" },
  { id: "mothers-counselling", width: 654, height: 554, theme: "mothers", alt: "A counsellor standing and talking with seated mothers", caption: "A mothers' support circle" },
  { id: "parents-workshop", width: 670, height: 509, theme: "community", alt: "Parents seated in rows at a workshop", caption: "A parents' workshop" },
  { id: "legal-awareness", width: 680, height: 508, theme: "community", alt: "Parents at a legal awareness session in a classroom", caption: "Legal awareness with the Delhi Legal Services Authority" },
  { id: "diwali-rangoli", width: 543, height: 363, theme: "community", alt: "Staff and families seated behind a Diwali rangoli", caption: "Diwali together" },
  { id: "friends-gifts", width: 541, height: 362, theme: "community", alt: "Three women holding red gift boxes", caption: "Gifts from Friends of SAMADHAN" },
  { id: "founder-portrait", width: 221, height: 221, theme: "community", alt: "Prameela Balasundaram, founder of SAMADHAN", caption: "Our founder, Prameela Balasundaram", gallery: false },
  { id: "centre-dakshinpuri", width: 790, height: 534, theme: "places", alt: "The SAMADHAN building in Dakshinpuri among trees", caption: "The Dakshinpuri centre" },
  { id: "centre-dwarka", width: 497, height: 570, theme: "places", alt: "The SAMADHAN building in Dwarka with a flowering shrub", caption: "The Dwarka centre" },
];

const byId = new Map(list.map((a) => [a.id, a]));

export function asset(id: string) {
  const a = byId.get(id);
  if (!a) throw new Error(`Unknown asset: ${id}`);
  return { ...a, src: withBase(`/images/${a.id}.webp`), ratio: `${a.width} / ${a.height}` };
}

export const assets = list.filter((a) => a.gallery !== false).map((a) => asset(a.id));
export const artworks = ["art-fish", "art-flowers", "art-strokes", "art-trees"].map(asset);
export const themeLabels: Record<Theme, string> = {
  children: "Children",
  art: "Paintings",
  mothers: "Mothers",
  made: "Made here",
  community: "Community",
  places: "Our centres",
};
