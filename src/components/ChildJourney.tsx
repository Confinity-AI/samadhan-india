import { Heading, Media, SmartLink, Text } from "@once-ui-system/core";
import { asset } from "@/content/assets";

const steps = [
  {
    label: "Find",
    title: "We knock on doors",
    body: "Community workers visit homes and local schools to find children who need help.",
    image: "legal-awareness",
    href: "/our-work/community",
    link: "Community outreach",
  },
  {
    label: "Assess",
    title: "A doctor and therapists meet the child",
    body: "A paediatrician, therapists and a psychologist see how the child moves, speaks and learns.",
    image: "therapy-one-to-one",
    href: "/our-work/therapy",
    link: "Therapy",
  },
  {
    label: "Early years",
    title: "Help in the first years",
    body: "Parents learn exercises to do at home every day, with regular visits to the centre.",
    image: "child-standing-frame",
    href: "/our-work/early-intervention",
    link: "Early intervention",
  },
  {
    label: "School",
    title: "Small classes",
    body: "About one teacher to five children. When a child is ready, we help them join a regular school.",
    image: "child-writing",
    href: "/our-work/special-education",
    link: "Special education",
  },
  {
    label: "Teenagers",
    title: "Practical skills, ages 12 to 16",
    body: "Block printing, card making, bookbinding and gardening.",
    image: "vocational-gardening",
    href: "/our-work/special-education",
    link: "Pre-vocational unit",
  },
];

export function ChildJourney() {
  return (
    <ol className="journey" aria-label="Steps in a child's path">
      {steps.map((s, i) => {
        const a = asset(s.image);
        return (
          <li key={s.label} className="journey__step">
            <div className={a.mono ? "frame frame--mono" : "frame"}>
              <Media src={a.src} alt={a.alt} aspectRatio="4 / 5" sizes="(max-width: 600px) 72vw, (max-width: 1100px) 40vw, 280px" style={"position" in s ? ({ "--pos": s.position } as React.CSSProperties) : undefined} />
            </div>
            <div className="journey__label">
              <span className="journey__num" style={{ fontSize: 40 }} aria-hidden>
                {i + 1}
              </span>
              <Text variant="label-strong-m" onBackground="accent-medium" style={{ textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {s.label}
              </Text>
            </div>
            <Heading as="h3" variant="heading-strong-l">
              {s.title}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {s.body}
            </Text>
            <SmartLink href={s.href} suffixIcon="arrowRight" style={{ marginTop: "auto" }}>
              {s.link}
            </SmartLink>
          </li>
        );
      })}
    </ol>
  );
}
