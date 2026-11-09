import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[13px] font-medium",
  {
    variants: {
      variant: {
        default: "border-[#C66B43] bg-[#C66B43] text-[#FFFAF4]",
        outline: "border-[#CDD1C0] text-[#747C65]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  className?: string;
}
export default function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
