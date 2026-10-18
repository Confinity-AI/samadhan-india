"use client";

import { Column, Heading, Media, SmartLink, Text } from "@once-ui-system/core";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/content/assets";

const chapters = [
  { id: "find", label: "Find", title: "We knock on doors", body: "Community workers find children who need help, often before anyone else has noticed.", image: "parents-workshop", href: "/our-work/community", link: "More about community outreach" },
  { id: "assess", label: "Assess", title: "Doctors and therapists assess each child", body: "A paediatrician, therapists and a psychologist look at how the child moves, speaks and learns.", image: "therapy-one-to-one", href: "/our-work/therapy", link: "More about therapy" },
  { id: "early", label: "Early years", title: "The first years count most", body: "Exercises at home every day, and regular visits to the centre.", image: "child-handprint-painting", href: "/our-work/early-intervention", link: "More about early intervention" },
  { id: "school", label: "School", title: "Small classes, about one teacher to five children", body: "Small classes, and a path into the neighbourhood school when a child is ready.", image: "volunteer-writing", href: "/our-work/special-education", link: "More about special education" },
  { id: "beyond", label: "Beyond", title: "Skills for a working life", body: "Gardening, printing and craft for teenagers. Training and income for their mothers.", image: "vocational-gardening", href: "/our-work/mothers", link: "More about mothers and livelihoods" },
];

export function ChildJourney() {
  const [active, setActive] = useState(chapters[0].id);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    for (const el of Object.values(refs.current)) if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="journey">
      <nav className="journey__index" aria-label="Steps in a child's path">
        {chapters.map((c, i) => (
          <a key={c.id} href={`#${c.id}`} className="journey__dot" aria-current={active === c.id ? "step" : undefined}>
            <span className="tabular">{`0${i + 1}`}</span> {c.label}
          </a>
        ))}
      </nav>
      <Column gap="64">
        {chapters.map((c, i) => {
          const a = asset(c.image);
          return (
            <section
              key={c.id}
              id={c.id}
              ref={(el) => {
                refs.current[c.id] = el;
              }}
              className="journey__chapter"
              aria-labelledby={`${c.id}-title`}
            >
              <div className="frame">
                <Media src={a.src} alt={a.alt} aspectRatio="4 / 3" sizes="(max-width: 900px) 100vw, 45vw" />
              </div>
              <Column gap="16">
                <span className="journey__num" aria-hidden>
                  0{i + 1}
                </span>
                <Heading as="h3" id={`${c.id}-title`} variant="display-strong-xs">
                  {c.title}
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-weak">
                  {c.body}
                </Text>
                <SmartLink href={c.href} suffixIcon="arrowRight">
                  {c.link}
                </SmartLink>
              </Column>
            </section>
          );
        })}
      </Column>
    </div>
  );
}
