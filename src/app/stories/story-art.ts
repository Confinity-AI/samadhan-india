import type { Story } from "@/content/stories";

/** The stories hero uses art-fish, so no story card repeats it. */
const overrides: Record<string, string> = { prince: "art-strokes" };

export const storyImage = (s: Story) => overrides[s.slug] ?? s.image;
