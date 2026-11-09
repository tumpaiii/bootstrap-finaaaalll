"use client";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { photos } from "@/lib/meetup-assets";
interface MomentsProps {
  className?: string;
}
const moments = [
  {
    img: photos.table,
    title: "A conversation worth having.",
    category: "BETTER TOGETHER",
    copy: "Pull up a chair. The best connection might start with a question you’ve been sitting on for weeks.",
  },
  {
    img: photos.workshop,
    title: "The five-minute demo. The fresh perspective.",
    category: "BUILDING IN THE OPEN",
    copy: "Share a work in progress and invite someone else to see what you might have missed.",
  },
  {
    img: photos.conversation,
    title: "One more coffee. One more good idea.",
    category: "THE MOMENTS IN BETWEEN",
    copy: "Leave enough room for the unplanned conversations. They’re often the ones that stay with you.",
  },
];
export default function Moments({ className }: MomentsProps) {
  const modal = useRef<HTMLDialogElement>(null);
  return (
    <section
      id="moments"
      className={cn("moments-section section-pad", className)}
    >
      <div className="section-header reveal">
        <h2>
          COMMUNITY
          <br />
          <span>IN THE MAKING.</span>
        </h2>
        <p>
          The people. The conversations.
          <br />
          The moments in between.
        </p>
      </div>
      <div className="moments-grid">
        {moments.map((m, i) => (
          <article
            key={m.title}
            className={cn("moment-card reveal", i === 0 && "featured")}
          >
            <button
              className="moment-image"
              onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty("--pointer-x", `${e.clientX-r.left}px`); e.currentTarget.style.setProperty("--pointer-y", `${e.clientY-r.top}px`); }}
              aria-label={"View " + m.title}
              onClick={() => {
                const d = modal.current;
                if (d) {
                  d.querySelector("img")!.src = m.img;
                  d.querySelector("img")!.alt = m.title;
                  d.querySelector("h3")!.textContent = m.title;
                  d.querySelector("p")!.textContent = m.copy;
                  d.showModal();
                }
              }}
            >
              <img src={m.img} alt={m.title} loading="lazy" />
              <span>VIEW MOMENT</span>
            </button>
            <div className="moment-caption">
              <span className="micro">{m.category}</span>
              <h3>{m.title}</h3>
            </div>
          </article>
        ))}
      </div>
      <dialog
        ref={modal}
        className="moment-dialog"
        onClick={(e) => {
          if (e.target === modal.current) modal.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Close photo"
          onClick={() => modal.current?.close()}
        >
          ×
        </button>
        <img src={photos.table} alt="Community moment" />
        <div>
          <h3 />
          <p />
        </div>
      </dialog>
    </section>
  );
}
