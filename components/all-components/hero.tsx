"use client";
import { motion, useReducedMotion } from "framer-motion";
import { photos } from "@/lib/meetup-assets";
import { cn } from "@/lib/utils";
import ScrollScene from "@/components/ui/scroll-scene";
interface HeroProps {
  className?: string;
}
export default function Hero({ className }: HeroProps) {
  const reduced = useReducedMotion();
  return (
    <section id="top" className={cn("hero-sequence", className)}>
      <div className="hero">
        
        <motion.h1
          className="hero-title"
          initial={false}
          whileInView={reduced ? undefined : { y: [18, 0] }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduced ? 0 : 1.2,
            delay: reduced ? 0 : 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          BOOTSTRAPPED<span>FOUNDERS</span>
        </motion.h1>
        <div
          className="hero-landscape"
          style={{
            backgroundImage: `linear-gradient(#11111000 30%,#111110 100%),url(${photos.mountain})`,
          }}
        />
        <div className="hero-copy">
          <p>
            Meet founders building on their own terms.
            <br />
            Build your next chapter together.
          </p>
          <a
            href="#register"
            className="button"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("grit:register"));
            }}
          >
            Join the meetup
          </a>
        </div>
        <div className="hero-bottom">
          <span>
            <i className="status-dot" />
            YOUR BUSINESS. YOUR TERMS.
          </span>
          <span>SAN FRANCISCO · MARCH 13, 2027</span>
        </div>
      </div>
      <ScrollScene className="collage-scene">
        <div className="collage-sticky">
          <div className="collage-track">
            {[
              photos.coffee,
              photos.workshop,
              photos.table,
              photos.conversation,
              photos.laptop,
            ].map((src, i) => (
              <figure className={"collage-photo photo-" + i} key={src}>
                <img
                  src={src}
                  alt={
                    [
                      "A coffee break between conversations",
                      "Builders sharing ideas around a laptop",
                      "An independent team working together",
                      "People connecting over a shared meal",
                      "A collaborative workspace for new ideas",
                    ][i]
                  }
                  loading="lazy"
                />
                <figcaption>
                  {
                    [
                      "THE SMALL MOMENTS",
                      "THE REAL QUESTIONS",
                      "THE PEOPLE WHO GET IT",
                      "THE SHARED EXPERIENCE",
                      "THE NEXT CHAPTER",
                    ][i]
                  }
                </figcaption>
              </figure>
            ))}
          </div>

        </div>
      </ScrollScene>
    </section>
  );
}
