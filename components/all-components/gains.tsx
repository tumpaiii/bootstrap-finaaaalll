"use client";
import { cn } from "@/lib/utils";
import { photos } from "@/lib/meetup-assets";
interface GainsProps {
  className?: string;
}
const gains = [
  {
    title: "People who understand",
    copy: "Talk honestly with founders on a similar path.",
    img: photos.table,
    tag: "CONNECTION",
  },
  {
    title: "Feedback you can use",
    copy: "Get a fresh perspective on what you’re building.",
    img: photos.workshop,
    tag: "CLARITY",
  },
  {
    title: "Small moves. Real progress.",
    copy: "Take one useful next step back to your business.",
    img: photos.laptop,
    tag: "MOMENTUM",
  },
  {
    title: "Lessons from the doing",
    copy: "Explore pricing, customers, and sustainable growth.",
    img: photos.conference,
    tag: "PRACTICAL KNOWLEDGE",
  },
  {
    title: "A wider circle",
    copy: "Find collaborators, sounding boards, and new friends.",
    img: photos.conversation,
    tag: "COMMUNITY",
  },
  {
    title: "Room to think bigger",
    copy: "Step outside your routine and see new possibilities.",
    img: photos.together,
    tag: "PERSPECTIVE",
  },
];
export default function Gains({ className }: GainsProps) {
  return (
    <section id="gain" className={cn("gains-section", className)}>
      <div className="gains-heading section-pad">
        <h2 className="condensed reveal">
          <span>MORE THAN</span>
          <br />A MEETUP.
        </h2>
        <p className="reveal">
          What you’ll gain: fresh perspective,
          <br />
          practical ideas, and your kind of people.
        </p>
        <div
          className="gain-spotlight"
          style={{
            backgroundImage: `linear-gradient(#09090988,#090909),url(${photos.conference})`,
          }}
        />
      </div>
      <p className="mobile-film-hint">SWIPE TO EXPLORE THE TAKEAWAYS</p>
      <div className="filmstrip-window">
        <div className="filmstrip-grid">
          {[0, 1, 2].map((column) => (
            <div
              key={column}
              className={cn("filmstrip", column === 1 && "reverse")}
            >
              <div className="filmstrip-motion">
                {[0, 1].map((repeat) => (
                  <div
                    key={repeat}
                    className="filmstrip-group"
                    aria-hidden={repeat === 1 ? true : undefined}
                  >
                    {[gains[column], gains[column + 3]].map((g) => (
                      <article className="gain-frame" key={g.title}>
                        <img
                          src={g.img}
                          alt={g.title + " through shared founder experiences"}
                          loading="lazy"
                        />
                        <div>
                          <span className="micro">{g.tag}</span>
                          <h3>{g.title}</h3>
                          <p>{g.copy}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
