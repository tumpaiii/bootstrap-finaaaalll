import { cn } from "@/lib/utils";
interface ScrollRevealProps {
  className?: string;
  text: string;
}
export default function ScrollReveal({ text, className }: ScrollRevealProps) {
  return (
    <p className={cn("scroll-reveal", className)} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} aria-hidden="true">
          {word}{" "}
        </span>
      ))}
    </p>
  );
}
