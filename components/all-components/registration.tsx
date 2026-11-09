"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button";
import { photos } from "@/lib/meetup-assets";
interface RegistrationProps {
  className?: string;
}
export default function Registration({ className }: RegistrationProps) {
  const modal = useRef<HTMLDialogElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const orbit = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = orbit.current;
    if (!el) return;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      el.style.setProperty(
        "--mouse-x",
        String((e.clientX - r.left) / r.width - 0.5),
      );
      el.style.setProperty(
        "--mouse-y",
        String((e.clientY - r.top) / r.height - 0.5),
      );
    };
    el.addEventListener("pointermove", move);
    return () => el.removeEventListener("pointermove", move);
  }, []);
  useEffect(() => {
    const dialog = modal.current;
    if (!dialog) return;
    let previous: HTMLElement | null = null;
    let oldOverflow = "";
    const open = () => {
      if (dialog.open) return;
      previous = document.activeElement as HTMLElement;
      oldOverflow = document.body.style.overflow;
      dialog.showModal();
      document.body.style.overflow = "hidden";
    };
    const click = (event: MouseEvent) => {
      const link = (event.target as Element)?.closest('a[href="#register"]');
      if (!link) return;
      event.preventDefault();
      open();
    };
    const restore = () => {
      document.body.style.overflow = oldOverflow;
      previous?.focus();
    };
    document.addEventListener("click", click);
    window.addEventListener("grit:register", open);
    window.addEventListener("grit:open-registration", open);
    dialog.addEventListener("close", restore);
    return () => {
      document.removeEventListener("click", click);
      window.removeEventListener("grit:register", open);
      window.removeEventListener("grit:open-registration", open);
      dialog.removeEventListener("close", restore);
      if (dialog.open) document.body.style.overflow = oldOverflow;
    };
  }, []);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    if (!f.reportValidity()) return;
    setStatus("sending");
    const data = Object.fromEntries(new FormData(f).entries());
    try {
      const key = "grit-registration-v1";
      const entries = JSON.parse(localStorage.getItem(key) || "[]") as Record<string, string>[];
      if (!Array.isArray(entries)) throw new Error("Saved entries could not be read. Please clear this site's stored data and try again.");
      const email = String(data.email).trim().toLowerCase();
      const duplicate = entries.some((entry) => entry.email === email);
      if (!duplicate) {
        entries.push({ ...data, email, savedAt: new Date().toISOString() } as Record<string, string>);
        localStorage.setItem(key, JSON.stringify(entries));
      }
      setStatus("success");
      setMessage(duplicate ? "These details are already saved on this device." : "Your details have been saved on this device.");
    } catch {
      setStatus("error");
      setMessage(
        "Unable to save on this device. Please enable browser storage and try again.",
      );
    }
  }
  return (
    <section
      id="register"
      ref={orbit}
      className={cn("registration-section", className)}
    >
      <div className="registration-orbit" aria-hidden="true">
        {[
          photos.table,
          photos.laptop,
          photos.coffee,
          photos.workshop,
          photos.conversation,
          photos.together,
          photos.coworking,
          photos.conference,
        ].map((src, i) => (
          <div className={"orbit-photo orbit-" + i} key={i}>
            <img src={src} alt={["Founders working around a shared table", "Laptops and notebooks in a collaborative workspace", "A welcoming cafe for coffee conversations", "Builders reviewing a product on a laptop", "A group sharing a meal and conversation", "A team discussing ideas together", "A bright modern coworking space", "An audience listening to a speaker"][i]} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="registration-copy reveal">
        <span className="micro">MARCH 13, 2027 · SAN FRANCISCO</span>
        <h2>
          BUILD SOMETHING
          <br />
          <span>WORTH SHARING?</span>
        </h2>
        <p>
          Bring your story, your questions, and your next idea.
          <br />
          There’s a seat in the conversation for you.
        </p>
        <button className="button" type="button" onClick={() => window.dispatchEvent(new Event("grit:register"))}>
          Join the meetup
        </button>
        <span className="registration-caption">
          Independent founders. Shared momentum.
        </span>
      </div>
      <dialog
        ref={modal}
        className="registration-dialog" aria-labelledby="registration-title"
        onClick={(e) => {
          if (e.target === modal.current) modal.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Close registration"
          onClick={() => modal.current?.close()}
        >
          ×
        </button>
        {status === "success" ? (
          <div className="form-success">
            <span className="success-mark">✓</span>
            <h2 id="registration-title">Details saved.</h2>
            <p role="status">{message}</p>
            <button
              className="button dark"
              onClick={() => modal.current?.close()}
            >
              Back to the meetup
            </button>
          </div>
        ) : (
          <>
            <span className="micro">GRIT · BOOTSTRAPPED FOUNDERS MEETUP</span>
            <h2 id="registration-title">Find your people.</h2>
            <p className="form-intro">
              Register your interest for March 13, 2027 in San Francisco. Your details will be saved on this device.
            </p>
            <form onSubmit={submit}>
              <div className="form-row">
                <label>
                  Full name
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    maxLength={100}
                  />
                </label>
                <label>
                  Email address
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    maxLength={254}
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Company or project
                  <input
                    name="company"
                    autoComplete="organization"
                    placeholder="What’s it called?"
                    maxLength={120}
                  />
                </label>
                <label>
                  Where are you on the journey?
                  <select name="stage" required defaultValue="">
                    <option value="" disabled>
                      Select your stage
                    </option>
                    <option>Exploring an idea</option>
                    <option>Building a first product</option>
                    <option>Finding first customers</option>
                    <option>Growing an existing business</option>
                  </select>
                </label>
              </div>
              <label>
                What are you building?
                <textarea
                  name="building"
                  rows={3}
                  placeholder="A little about your business or idea…"
                  maxLength={1000}
                />
              </label>
              <label className="checkbox-label">
                <input type="checkbox" name="consent" required value="yes" />I
                agree to save these details on this device.
              </label>
              <div className="honey" aria-hidden="true">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              {status === "error" && (
                <p className="form-error" role="alert">
                  {message}
                </p>
              )}
              <Button
                variant="secondary"
                type="submit"
                className="button dark submit-button"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Submitting…" : "Submit registration"}
              </Button>
            </form>
          </>
        )}
      </dialog>
    </section>
  );
}
