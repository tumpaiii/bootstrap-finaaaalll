import type { Metadata } from "next";
import "./globals.css";
import gritIcon from "@/assets/icons/grit.svg";
export const metadata: Metadata = {
  title: "GRIT — Bootstrapped Founders Meetup",
  icons: { icon: typeof gritIcon === "string" ? gritIcon : gritIcon.src },
  description:
    "Independent minds. Shared ambition. A San Francisco meetup for bootstrapped founders building on their own terms.",
  openGraph: {
    title: "GRIT — Bootstrapped Founders Meetup",
    description:
      "Independent minds. Shared ambition. A San Francisco meetup for bootstrapped founders building on their own terms.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
