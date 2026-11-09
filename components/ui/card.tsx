import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}
export default function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#DCDFCF] bg-[#F5F1E8] text-[#242722]",
        className,
      )}
      {...props}
    />
  );
}
