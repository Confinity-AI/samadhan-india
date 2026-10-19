import { MomentsGallery } from "@/components/MomentsGallery";
import { EasyRead, PaintHero, Section } from "@/components/blocks";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Photos",
  description: "Photographs and children's paintings from SAMADHAN's centres in Dakshinpuri and Dwarka, New Delhi.",
  path: "/moments",
});

export default function Moments() {
  return (
    <>
      <PaintHero art="art-trees" eyebrow="Photos" title="Photos and children's paintings" />
      <Section paddingY="64">
        <EasyRead>These are photos from our centres. The paintings are by our children.</EasyRead>
        <MomentsGallery />
      </Section>
    </>
  );
}
