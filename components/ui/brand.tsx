import { cn } from "@/lib/utils";
import mark from "@/assets/icons/grit-mark.svg";
interface BrandProps {
  className?: string;
}
export default function Brand({ className }: BrandProps) {
  return (
    <span className={cn("brand", className)}>
      <img src={typeof mark === "string" ? mark : mark.src} alt="GRIT symbol" />
      <span>GRIT</span>
    </span>
  );
}
