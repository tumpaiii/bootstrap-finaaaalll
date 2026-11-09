"use client";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
interface MotionControllerProps {
  className?: string;
}
export default function MotionController({ className }: MotionControllerProps) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scenes = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-scene"),
    );
    const textReveals = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-reveal"),
    );
    const venue = document.querySelector<HTMLElement>(".venue-stage");
    const schedules = Array.from(
      document.querySelectorAll<HTMLElement>(".schedule-item"),
    );
    const entranceTargets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );
    let frame: number | null = null;
    let disposed = false;
    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("in-view");
                  observer?.unobserve(entry.target);
                }
              });
            },
            { threshold: 0.08 },
          )
        : null;
    entranceTargets.forEach((el) =>
      observer ? observer.observe(el) : el.classList.add("in-view"),
    );
    const update = () => {
      frame = null;
      if (disposed) return;
      const reduced = preference.matches;
      const vh = document.documentElement.clientHeight || window.innerHeight;
      scenes.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, -r.top / Math.max(1, r.height - vh)));
        el.style.setProperty("--progress", String(reduced ? 1 : p));
      });
      textReveals.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = reduced
          ? 1
          : Math.max(0, Math.min(1, (vh * 0.9 - r.top) / (vh * 0.6)));
        const words = el.querySelectorAll<HTMLElement>("span");
        words.forEach((word, i) => {
          const amount = Math.max(
            0,
            Math.min(1, (p - i / Math.max(1, words.length) * 0.75) / 0.25),
          );
          word.style.opacity = String(0.3 + amount * 0.7);
          word.style.filter = `blur(${(1 - amount) * 1.5}px)`;
        });
      });
      document.querySelectorAll<HTMLElement>(".collage-scene, .registration-section").forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = reduced ? 0.5 : Math.max(0, Math.min(1, (vh - r.top) / (vh + r.height)));
        el.style.setProperty("--image-progress", String(p));
      });
      if (venue) {
        const r = venue.getBoundingClientRect();
        const p = reduced
          ? 1
          : Math.max(0, Math.min(1, (vh * 0.95 - r.top) / (vh * 0.8)));
        venue.style.setProperty("--venue-progress", String(p));
      }
      let active = 0;
      schedules.forEach((el, i) => {
        if (el.getBoundingClientRect().top < vh * 0.62) active = i;
      });
      schedules.forEach((el, i) => el.classList.toggle("active", i === active));
      document
        .querySelectorAll(".agenda-step")
        .forEach((el, i) => el.classList.toggle("active", i === active));
      const label = document.querySelector("#current-session");
      if (label && schedules[active])
        label.textContent = schedules[active].dataset.short || "";
    };
    const schedule = () => {
      if (frame === null && !disposed) frame = requestAnimationFrame(update);
    };
    // Capture scrolls from the page and embedded preview scrolling containers.
    document.addEventListener("scroll", schedule, {
      capture: true,
      passive: true,
    });
    window.addEventListener("resize", schedule, { passive: true });
    document.addEventListener("load", schedule, true);
    preference.addEventListener("change", schedule);
    const resize =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(schedule)
        : null;
    resize?.observe(document.body);
    document.fonts?.ready.then(() => {
      if (!disposed) schedule();
    });
    update();
    return () => {
      disposed = true;
      if (frame !== null) cancelAnimationFrame(frame);
      observer?.disconnect();
      resize?.disconnect();
      document.removeEventListener("scroll", schedule, true);
      document.removeEventListener("load", schedule, true);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", schedule);
    };
  }, []);
  return <span aria-hidden="true" className={cn("sr-only", className)} />;
}
