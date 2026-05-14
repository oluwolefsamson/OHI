import React from "react";
import { cn } from "../../lib/utils";
import { Marquee } from "../../LandingPage/magicui/marquee";
import Rev1 from "../../../assets/images/rev1.jpg";
import Rev4 from "../../../assets/images/rev4.jpg";

const reviews = [
  {
    name: "UN Partner",
    username: "@development",
    body: "OHI turns technical program results into stories that stakeholders can understand, trust and act on.",
    img: Rev1,
  },
  {
    name: "Government Ministry",
    username: "@public-sector",
    body: "Their mission coverage and strategic visibility work helps public initiatives reach the audiences that matter.",
    img: Rev4,
  },
  {
    name: "Foundation Lead",
    username: "@impact",
    body: "OHI gives our projects the visibility they deserve and the credibility they need to attract support.",
    img: Rev1,
  },
  {
    name: "Private Sector Partner",
    username: "@investment",
    body: "They are strong at translating complex initiatives into persuasive, investment-ready visuals.",
    img: Rev4,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function Marquee3D() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
