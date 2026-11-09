"use client";
import { useState } from "react";
import Brand from "@/components/ui/brand";
import { cn } from "@/lib/utils";
interface SiteHeaderProps {
  className?: string;
}

export default function SiteHeader({ className }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <header className={cn("site-header", className)}>
        <a href="#top" aria-label="GRIT home">
          <Brand />
        </a>
        <span className="header-note">
          Independent minds.
          <br />
          Shared ambition.
        </span>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">The meetup</a>
          <a href="#speakers">People</a>
          <a href="#agenda">Agenda</a>
        </nav>
        <div className="header-actions">
          <a
            className="small-join"
            href="#register"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("grit:register"));
            }}
          >
            Join the meetup
          </a>
          <button
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            {open ? "CLOSE" : "MENU"}
            <i className={open ? "is-open" : ""}>
              <b />
              <b />
            </i>
          </button>
        </div>
      </header>
      <nav
        id="site-menu"
        className={cn("site-menu", open && "open")}
        aria-label="Expanded navigation"
        hidden={!open}
      >
        {[
          ["About the meetup", "about"],
          ["What you’ll gain", "gain"],
          ["Speakers & hosts", "speakers"],
          ["The day’s agenda", "agenda"],
          ["Community moments", "moments"],
          ["Getting here", "venue"],
          ["Registration", "register"],
          ["Questions", "faq"],
        ].map(([label, id]) => (
          <a
            key={id}
            href={"#" + id}
            onClick={(e) => {
              setOpen(false);
              if (id === "register") {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("grit:register"));
              }
            }}
          >
            {label}
          </a>
        ))}
        <p>
          BOOTSTRAPPED FOUNDERS MEETUP
          <br />
          SAN FRANCISCO · MARCH 13, 2027
        </p>
      </nav>
    </>
  );
}
