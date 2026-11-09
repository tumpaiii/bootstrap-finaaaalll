import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
interface ScrollSceneProps {
  className?: string;
  children: ReactNode;
  id?: string;
}
export default function ScrollScene({
  children,
  className,
  ...rest
}: ScrollSceneProps) {
  return (
    <div {...rest} className={cn("scroll-scene", className)}>
      {children}
    </div>
  );
}
