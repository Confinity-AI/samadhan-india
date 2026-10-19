import { Grid } from "@once-ui-system/core";
import { DonateBand, EasyRead, LinkCard, PaintHero, Section } from "@/components/blocks";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Get involved",
  description: "Volunteer, intern or partner with SAMADHAN to support children with intellectual disabilities and their mothers in New Delhi.",
  path: "/get-involved",
});

export default function GetInvolved() {
  return (
    <>
      <PaintHero art="art-trees" eyebrow="Get involved" title="Ways to help" />
      <Section paddingY="64">
        <EasyRead>You can help us by giving time, money or skills.</EasyRead>
        <Grid columns="4" m={{ columns: "2" }} s={{ columns: "1" }} gap="24">
          <LinkCard href="/donate" image="art-fish" title="Donate" body="80G for Indian donors. FCRA for gifts from abroad." ratio="3 / 4" />
          <LinkCard href="/get-involved/volunteer" image="volunteer-writing" title="Volunteer" body="Help in class, at events or with your skills." ratio="3 / 4" />
          <LinkCard href="/get-involved/internships" image="therapy-one-to-one" title="Internships" body="Four-week placements for students." ratio="3 / 4" />
          <LinkCard href="/get-involved/partner" image="friends-gifts" title="Partner with us" body="For companies, foundations and trusts." ratio="3 / 4" />
        </Grid>
      </Section>
      <DonateBand art="art-flowers" />
    </>
  );
}
