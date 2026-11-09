"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { photos } from "@/lib/meetup-assets";
interface SpeakersProps {
  className?: string;
}
const people = [
  {
    img: photos.woman,
    name: "Maya Bennett",
    designation: "Founder & CEO",
    company: "Goodfield",
  },
  {
    img: photos.man,
    name: "Daniel Carter",
    designation: "Co-founder",
    company: "Smallstack",
  },
  {
    img: photos.womanTwo,
    name: "Olivia Brooks",
    designation: "Community Lead",
    company: "Buildfolk",
  },
  {
    img: photos.manTwo,
    name: "Ethan Reed",
    designation: "Founder",
    company: "Northform",
  },
];
export default function Speakers({ className }: SpeakersProps) {
  const [active, setActive] = useState(0);
  return (
    <section
      id="speakers"
      className={cn("speakers-section section-pad", className)}
    >
      <div className="center-heading reveal">
        <h2 className="condensed">
          MEET THE
          <br />
          <span>INDEPENDENT MINDS.</span>
        </h2>
        <p>Founders, builders, and the people bringing us together.</p>
      </div>
      <div
        className="speakers-accordion reveal"
      >
        {people.map((p, i) => (
          <button
            key={p.name}
            className={cn("speaker-panel", active === i && "active")}
            onClick={() => setActive(i)}
            aria-expanded={active === i}
          >
            <img
              src={p.img}
              alt={p.name + " — " + p.designation + ", " + p.company}
              loading="lazy"
            />
            <span className="speaker-shade" />
            <span className="speaker-content">
              <strong>{p.name}</strong>
              <span className="speaker-role">{p.designation}</span>
              <span className="speaker-company">{p.company}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
