"use client";
import { useState } from "react";
import { Link2, Check } from "lucide-react";
import Brand from "@/components/ui/brand";
import { cn } from "@/lib/utils";
interface FooterProps {
  className?: string;
}
export default function Footer({ className }: FooterProps) {
  const [copied, setCopied] = useState(false);
  const share = async () => {
    try {
      await navigator.clipboard.writeText(location.href.split("#")[0]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };
  return (
    <footer className={cn("site-footer section-pad", className)}>
      <div className="footer-grid">
        <div className="footer-brand">
          <a href="#top" aria-label="GRIT home">
            <Brand />
          </a>
          <p>
            For the ones building
            <br />
            on their own terms.
            <br />A little less alone.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fbootstrapped-founders-meetup-hero.trade-79-kinder.chatgpt.site"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
            >
              in
            </a>
            <a
              href="https://twitter.com/intent/tweet?text=Find%20your%20people%20at%20GRIT%20%E2%80%94%20a%20bootstrapped%20founders%20meetup&url=https%3A%2F%2Fbootstrapped-founders-meetup-hero.trade-79-kinder.chatgpt.site"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
            >
              𝕏
            </a>
            <button
              onClick={share}
              aria-label={copied ? "Link copied" : "Copy meetup link"}
            >
              {copied ? <Check size={13} /> : <Link2 size={13} />}
            </button>
          </div>
          <span className="sr-only" role="status">
            {copied ? "Meetup link copied" : ""}
          </span>
        </div>
        <div>
          <h3>The meetup</h3>
          <a href="#about">Our story</a>
          <a href="#who">Who it’s for</a>
          <a href="#gain">What you’ll gain</a>
          <a href="#moments">Community moments</a>
        </div>
        <div>
          <h3>Plan your day</h3>
          <a href="#speakers">Speakers & hosts</a>
          <a href="#agenda">The agenda</a>
          <a href="#venue">The venue</a>
          <a href="#faq">Common questions</a>
        </div>
        <div>
          <h3>Meet us in California</h3>
          <p>
            San Francisco, USA
            <br />
            March 13, 2027
            <br />
            09:30 AM – 03:00 PM PT
          </p>
          <a
            href="#register"
            className="footer-register"
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent("grit:register"));
            }}
          >
            Join the meetup
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} GRIT. Independent by design.</span>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
