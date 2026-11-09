"use client";
import { cn } from "@/lib/utils";
import { photos } from "@/lib/meetup-assets";
import ScrollReveal from "@/components/ui/scroll-reveal";
interface AboutProps {
  className?: string;
}
export default function About({ className }: AboutProps) {
  const words = [
    "INDEPENDENT THINKING",
    "REAL CUSTOMERS",
    "SUSTAINABLE GROWTH",
    "SHARED EXPERIENCE",
  ];
  return (
    <>
      <section
        id="about"
        className={cn("about-section section-pad", className)}
      >
        <a href="#register" className="wide-link" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent("grit:register")); }}>Join GRIT</a>
        <ScrollReveal
          className="about-statement"
          text="GOOD BUSINESSES ARE BUILT WITH RESOURCEFULNESS, REAL CUSTOMERS, AND PEOPLE WHO GET IT."
        />
        <p className="about-description reveal">
          GRIT brings independent founders together for a day of useful
          conversations, shared lessons, and practical momentum. No perfect
          pitch required. Just something you care about building.
        </p>
        <div
          className="marquees"
          aria-label="Independent thinking, real customers, sustainable growth, shared experience"
        >
          {[false, true].map((reverse, i) => (
            <div
              key={i}
              className={cn("marquee", reverse && "reverse")}
              aria-hidden="true"
            >
              <div>
                {[...words, ...words].map((word, j) => (
                  <span key={j}>
                    <i>✳</i>
                    {word}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="who" className="people-section section-pad">
        <div className="section-header reveal">
          <h2>
            YOUR
            <br />
            <span>PEOPLE.</span>
          </h2>
          <p>
            Different stages.
            <br />
            The same independent spirit.
          </p>
        </div>
        <div className="people-grid">
          {[
            {
              title: "The solo builders",
              text: "One person. Many hats. Plenty of ambition.",
              img: photos.laptop,
            },
            {
              title: "The bootstrapped teams",
              text: "Growing carefully, with customers at the centre.",
              img: photos.together,
            },
            {
              title: "The first-time founders",
              text: "Finding your footing and asking better questions.",
              img: photos.workshop,
            },
            {
              title: "The next-chapter thinkers",
              text: "Ready to turn a side project into something more.",
              img: photos.conversation,
            },
          ].map((p, i) => (
            <article
              className={cn("people-card reveal", i % 2 === 1 && "offset")}
              key={p.title}
            >
              <div className="image-wrap">
                <img
                  src={p.img}
                  alt={p.title + ": a glimpse of collaborative working"}
                  loading="lazy"
                />
              </div>
              <div className="people-card-copy"><h3>{p.title}</h3><p>{p.text}</p></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
