import { MomentsGallery } from "@/components/MomentsGallery";
import { DonateBand, EasyRead, PaintHero, Section } from "@/components/blocks";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Photos",
  description: "Photographs and children's paintings from SAMADHAN's centres in Dakshinpuri and Dwarka, New Delhi.",
  path: "/moments",
});

export default function Moments() {
  return (
    <>
      <PaintHero art="art-fish" focus="75% 60%" zoom={1.6} flip eyebrow="Photos" title="Photos and children's paintings">
        <EasyRead>These are photos from our centres. The paintings are by our children.</EasyRead>
      </PaintHero>
      <Section paddingY="64">
        <MomentsGallery />
      </Section>
      <DonateBand art="art-trees" />
    </>
  );
}
