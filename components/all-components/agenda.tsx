"use client";
import { cn } from "@/lib/utils";
import { photos } from "@/lib/meetup-assets";
interface AgendaProps {
  className?: string;
}
const sessions = [
  {
    time: "09:30",
    end: "10:00 AM",
    title: "Coffee & first hellos",
    short: "Coffee & first hellos",
    text: "Settle in, grab a coffee, and meet a few people before the day gets going.",
    type: "ARRIVE & CONNECT",
    img: photos.coffee,
  },
  {
    time: "10:00",
    end: "10:45 AM",
    title: "The honest founder story",
    short: "Founder stories",
    text: "A candid conversation about building without a funding cushion: the trade-offs, the customer wins, and the things you’d do differently.",
    type: "FOUNDER CONVERSATION",
    img: photos.conference,
  },
  {
    time: "11:00",
    end: "12:00 PM",
    title: "Bring your biggest question",
    short: "Small-group conversations",
    text: "Join a small table around pricing, finding customers, product decisions, or staying focused. Share what’s working and where you’re stuck.",
    type: "SMALL-GROUP ROUNDTABLES",
    img: photos.table,
  },
  {
    time: "12:00",
    end: "01:00 PM",
    title: "Lunch, without the small talk",
    short: "Lunch & connections",
    text: "Good food and unhurried conversation. Keep a thread going or pull up a chair with someone new.",
    type: "LUNCH & CONNECTIONS",
    img: photos.conversation,
  },
  {
    time: "01:00",
    end: "02:00 PM",
    title: "Show what you’re building",
    short: "Product demos & feedback",
    text: "A few minutes to share your product, followed by thoughtful questions and practical feedback from the room.",
    type: "PRODUCT DEMOS & FEEDBACK",
    img: photos.workshop,
  },
  {
    time: "02:00",
    end: "03:00 PM",
    title: "One next step. New people.",
    short: "Open networking & next steps",
    text: "Turn the day’s ideas into one action you’ll take next. Exchange details, make plans, and keep the conversation going.",
    type: "OPEN NETWORKING",
    img: photos.together,
  },
];
export default function Agenda({ className }: AgendaProps) {
  return (
    <section
      id="agenda"
      className={cn("agenda-section section-pad", className)}
    >
      <div className="section-header reveal">
        <h2>
          A DAY
          <br />
          <span>WELL SPENT.</span>
        </h2>
        <p>
          Space to learn.
          <br />
          Time to connect.
        </p>
      </div>
      <div className="agenda-layout">
        <aside className="calendar-sticky">
          <div className="calendar-card">
            <div className="calendar-top">
              <span>SATURDAY</span>
              <span>SAN FRANCISCO</span>
            </div>
            <div className="calendar-date">
              <strong>13</strong>
              <span>
                MAR
                <br />
                2027
              </span>
            </div>
            <div className="calendar-month">
              <b>March 2027</b>
              <span>Proposed date</span>
            </div>
            <div className="calendar-grid">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <span className="day-label" key={"label" + i}>
                  {d}
                </span>
              ))}
              <span />
              {Array.from({ length: 31 }, (_, i) => (
                <span key={i} className={cn(i === 12 && "event-day")}>
                  {i + 1}
                </span>
              ))}
            </div>
            <div className="calendar-footer">
              <span className="status-dot" />
              09:30 AM – 03:00 PM PT
            </div>
          </div>
          <div className="agenda-progress">
            <div className="agenda-dots">
              {sessions.map((s, i) => (
                <span
                  key={i}
                  className={cn("agenda-step", i === 0 && "active")}
                />
              ))}
            </div>
            <span id="current-session">Coffee & first hellos</span>
          </div>
          <a className="text-link" href="#register">
            Make a day of it. Join us.
          </a>
        </aside>
        <div className="schedule-list">
          {sessions.map((s, i) => (
            <article
              key={s.title}
              className={cn("schedule-item", i === 0 && "active")}
              data-short={s.short}
            >
              <div className="schedule-time">
                <strong>{s.time}</strong>
                <span>– {s.end}</span>
              </div>
              <div className="schedule-content">
                <span className="micro">{s.type}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="schedule-image">
                  <img
                    src={s.img}
                    alt={s.title + " — the atmosphere of the meetup"}
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
