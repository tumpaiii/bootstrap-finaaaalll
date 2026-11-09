import table from "@/assets/images/founder-table.jpg";
import workshop from "@/assets/images/workshop.jpg";
import conversation from "@/assets/images/conversation.jpg";
import coworking from "@/assets/images/coworking.jpg";
import conference from "@/assets/images/conference.jpg";
import together from "@/assets/images/building-together.jpg";
import laptop from "@/assets/images/laptop-work.jpg";
import coffee from "@/assets/images/coffee-break.jpg";
import woman from "@/assets/images/portrait-woman.jpg";
import man from "@/assets/images/portrait-man.jpg";
import womanTwo from "@/assets/images/portrait-woman-two.jpg";
import manTwo from "@/assets/images/portrait-man-two.jpg";
import city from "@/assets/images/san-francisco.jpg";
import mountain from "@/assets/images/mountain.jpg";
const url = (asset: string | { src: string }) =>
  typeof asset === "string" ? asset : asset.src;
export const photos = Object.fromEntries(
  Object.entries({
    table,
    workshop,
    conversation,
    coworking,
    conference,
    together,
    laptop,
    coffee,
    woman,
    man,
    womanTwo,
    manTwo,
    city,
    mountain,
  }).map(([key, value]) => [key, url(value)]),
) as Record<string, string>;
