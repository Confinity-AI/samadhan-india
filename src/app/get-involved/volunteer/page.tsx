import { Button, Column, Grid, Heading, Row, Text } from "@once-ui-system/core";
import { Photo, PhotoHero, Quote, Section, SectionTitle } from "@/components/blocks";
import { org, whatsapp } from "@/content/site";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta({
  title: "Volunteer",
  description:
    "Volunteer at SAMADHAN in Dakshinpuri or Dwarka, New Delhi: classroom help, therapy support, art and play, community work and professional skills.",
  path: "/get-involved/volunteer",
});

const emailLink = `mailto:${org.email}?subject=${encodeURIComponent("Volunteering at SAMADHAN")}`;
const whatsappLink = `${whatsapp.base}?text=${encodeURIComponent("Hello, I would like to volunteer at SAMADHAN.")}`;

const roles = [
  { title: "In the classroom", body: "Help teachers with the daily routine, or run an activity for a small group." },
  { title: "Be a child's buddy", body: "Spend regular time with one child." },
  { title: "Help our therapists", body: "Write up assessments and case studies, and keep records and schedules." },
  { title: "Art, music and sport", body: "Share a skill: art and craft, dance, music, sports or indoor games." },
  { title: "In the community", body: "Help at health camps, events, conferences and art exhibitions." },
  { title: "Research and training", body: "Support our research, workshops and training programmes." },
  { title: "Professional skills", body: "Advise us on HR, marketing, finance, logistics or our online presence." },
  { title: "Proposals and stories", body: "Write grant proposals, or interview parents and staff for stories." },
  { title: "Fundraising", body: "Hold a fundraising event, or introduce us at your workplace." },
];

const quotes = [
  { text: "The staff at SAMADHAN are the most dedicated bunch of people I’ve come across.", by: "Kavitha, volunteer" },
  { text: "Even though I worked with Samadhan for a very short period they made me feel welcomed and gave me the required exposure.", by: "Nikita, volunteer" },
];

function Actions() {
  return (
    <Row gap="12" wrap>
      <Button href={emailLink} size="l" prefixIcon="mail">
        Email us to volunteer
      </Button>
      <Button href={whatsappLink} size="l" variant="secondary" prefixIcon="whatsapp">
        WhatsApp us
      </Button>
    </Row>
  );
}

export default function Volunteer() {
  return (
    <>
      <PhotoHero
        crumbs={[{ label: "Get involved", href: "/get-involved" }, { label: "Volunteer" }]}
        eyebrow="Volunteer"
        title="Give your time or skills"
        intro="Volunteering is unpaid. We may cover some costs of your work with us."
        easyRead="You can come and help at our centres. Tell us what you are good at."
        image="volunteer-writing"
        actions={<Actions />}
      />
      <Section tone="surface" label="Ways to volunteer">
        <Heading as="h2" variant="display-strong-s">Ways to volunteer</Heading>
        <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="16">
          {roles.map((r) => (
            <Column key={r.title} gap="8" padding="24" radius="l" background="page">
              <Text variant="heading-strong-l">{r.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">{r.body}</Text>
            </Column>
          ))}
        </Grid>
      </Section>
      <Section label="What volunteers say">
        <Heading as="h2" variant="display-strong-s">What volunteers say</Heading>
        <Grid columns="2" m={{ columns: "1" }} gap="48">
          {quotes.map((q) => (
            <Quote key={q.by} text={q.text} by={q.by} />
          ))}
        </Grid>
        <Grid columns="3" s={{ columns: "1" }} gap="12">
          <Photo id="vocational-diyas" ratio="4 / 3" sizes="(max-width: 768px) 100vw, 400px" />
          <Photo id="diwali-rangoli" ratio="4 / 3" sizes="(max-width: 768px) 100vw, 400px" />
          <Photo id="children-play-garden" ratio="4 / 3" sizes="(max-width: 768px) 100vw, 400px" />
        </Grid>
      </Section>
      <Section tone="surface" label="Get in touch">
        <Grid columns="2" m={{ columns: "1" }} gap="32" style={{ alignItems: "center" }}>
          <SectionTitle title="Tell us how you would like to help" intro="Say which centre suits you, when you are free and what you are good at." />
          <Actions />
        </Grid>
      </Section>
    </>
  );
}
