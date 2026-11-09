"use client";
import { cn } from "@/lib/utils";
interface FaqProps {
  className?: string;
}
const questions = [
  [
    "Is this meetup for me?",
    "If you’re building a business with your own resources, working on a side project, or exploring an independent path, you’ll fit right in. You don’t need a polished company or a perfect pitch.",
  ],
  [
    "Do I need to have launched already?",
    "No. Idea-stage founders and people with established businesses both bring useful perspectives. Come ready to listen, share, and ask questions.",
  ],
  [
    "Can I come on my own?",
    "Absolutely. The day starts with introductions, and the small-group format makes it easier to meet people without having to work the room.",
  ],
  [
    "What should I bring?",
    "Bring your questions, something to take notes with, and your laptop if you’d like to share a product. A short, informal introduction to what you’re building is enough.",
  ],
  [
    "Will there be a chance to demo my product?",
    "Yes. The proposed agenda includes a product demo and feedback session. Let the host know when you register if you’d like to share what you’re building.",
  ],
  [
    "Are the venue and speakers confirmed?",
    "The Pearl is the proposed San Francisco venue. Final venue details, the speaker lineup, and any ticket information will be confirmed before attendance is finalized.",
  ],
  [
    "How does registration work?",
    "Use the registration form to share your interest and a little about what you’re building. Your details are saved securely for event coordination. This is an expression of interest, not a paid ticket.",
  ],
];
export default function Faq({ className }: FaqProps) {
  return (
    <section id="faq" className={cn("faq-section section-pad", className)}>
      <div className="faq-layout">
        <div className="faq-sticky">
          <span className="micro">FAQ</span>
          <h2>
            GOOD QUESTIONS.
            <br />
            <span>CLEAR ANSWERS.</span>
          </h2>
          <p>
            A few things to know
            <br />
            before you join us.
          </p>
          <a href="#register" className="text-link">
            Ready to meet your people?
          </a>
        </div>
        <div className="faq-list">
          {questions.map(([q, a], i) => (
            <details key={q} open={i === 0} className="faq-item">
              <summary>
                {q}
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div>
                <p>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
