import { Button, Column, Grid, Heading, Text } from "@once-ui-system/core";
import { EasyRead, Photo, PhotoHero, Section } from "@/components/blocks";
import { org } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Volunteer",
  description: "Volunteer at SAMADHAN in Dakshinpuri or Dwarka, New Delhi: classroom help, art and play, events, home visits and office support.",
  path: "/get-involved/volunteer",
});

const roles = [
  { title: "In the classroom", body: "Help teachers with reading, writing and play." },
  { title: "Art, music and play", body: "Run a session in something you love." },
  { title: "Events and outings", body: "Diwali, sports days and trips need extra hands." },
  { title: "Home visits", body: "Join community workers on visits to families." },
  { title: "Office and design", body: "Writing, photos, accounts and social media." },
  { title: "Fundraising", body: "Run a drive at your school, office or society." },
];

export default function Volunteer() {
  return (
    <>
      <PhotoHero
        crumbs={[{ label: "Get involved", href: "/get-involved" }, { label: "Volunteer" }]}
        eyebrow="Volunteer"
        title="Give a few hours a week"
        intro="Volunteering is unpaid. We may cover small costs like local travel."
        easyRead="You can come and help at our centres. Tell us what you are good at."
        image="volunteer-writing"
        actions={
          <Button href={`mailto:${org.email}?subject=${encodeURIComponent("Volunteering at SAMADHAN")}`} size="l" prefixIcon="mail">
            Email us to volunteer
          </Button>
        }
      />
      <Section tone="surface" label="Ways to help">
        <Heading as="h2" variant="display-strong-s">Ways to help</Heading>
        <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="24">
          {roles.map((r) => (
            <Column key={r.title} gap="8" paddingTop="16" borderTop="accent-alpha-strong">
              <Text variant="heading-strong-l">{r.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">{r.body}</Text>
            </Column>
          ))}
        </Grid>
      </Section>
      <Section label="Photos">
        <Grid columns="3" s={{ columns: "1" }} gap="12">
          <Photo id="vocational-diyas" ratio="4 / 3" />
          <Photo id="diwali-rangoli" ratio="4 / 3" />
          <Photo id="child-swing" ratio="4 / 3" />
        </Grid>
      </Section>
    </>
  );
}
