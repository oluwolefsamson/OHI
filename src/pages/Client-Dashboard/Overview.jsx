import React from "react";
import { Link } from "react-router-dom";
import {
  BadgeCheckIcon,
  Layers3Icon,
  PaletteIcon,
  PenToolIcon,
  SparklesIcon,
  Settings2Icon,
} from "lucide-react";
import { useLandingPageConfig } from "../../context/LandingPageConfigContext";

const editableItems = [
  {
    title: "Hero section",
    description:
      "Headline, supporting copy, CTA labels, CTA links, hero stats, and the five hero images.",
    icon: SparklesIcon,
    route: "/dashboard/landing-page",
  },
  {
    title: "About OHI",
    description:
      "About title, story paragraphs, the main image, and the overlay card copy and images.",
    icon: PenToolIcon,
    route: "/dashboard/landing-page",
  },
  {
    title: "Why OHI",
    description:
      "Section title, description, card titles, card copy, links, and card images.",
    icon: Layers3Icon,
    route: "/dashboard/landing-page",
  },
  {
    title: "Theme and colors",
    description:
      "Primary color, accent color, hero background, and header background imagery.",
    icon: PaletteIcon,
    route: "/dashboard/landing-page",
  },
  {
    title: "Footer",
    description:
      "Footer text and contact/social copy shown at the bottom of the public site.",
    icon: Settings2Icon,
    route: "/dashboard/landing-page",
  },
  {
    title: "Profile settings",
    description:
      "Dashboard identity details and the admin profile area used around the site shell.",
    icon: BadgeCheckIcon,
    route: "/dashboard/profile-setting",
  },
];

export function Overview() {
  const { config } = useLandingPageConfig();

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-8 max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
          OHI Dashboard
        </p>
        <h1 className="mt-3 text-4xl font-bold text-headingColor">
          Manage the OHI website from one place
        </h1>
        <p className="mt-3 text__para">
          This dashboard is centered on Olympian House International, not
          older tools. Use the homepage editor to update the public site
          content that is currently connected to the admin system.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {editableItems.map((item) => (
          <article
            key={item.title}
            className="rounded-[24px] border border-white/60 bg-white/90 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-primaryColor/10 p-3 text-primaryColor">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-bold text-headingColor">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-textColor">
                  {item.description}
                </p>
                <Link
                  to={item.route}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primaryColor"
                >
                  Open editor
                  <span aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[28px] border border-white/60 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
          <h2 className="text-2xl font-bold text-headingColor">
            What the landing page editor can change
          </h2>
          <p className="mt-3 text-sm leading-6 text-textColor">
            The current editor controls the sections that are wired to the
            landing-page config context. Those values update the public site
            immediately in this browser.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-textColor">
            <li>Hero headline, description, buttons, stats, and images</li>
            <li>About section copy, image, and overlay card content</li>
            <li>Why OHI cards, links, and images</li>
            <li>Brand colors, hero background, and header background</li>
            <li>Footer text and contact copy</li>
          </ul>
        </section>

        <section className="rounded-[28px] border border-white/60 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
          <h2 className="text-2xl font-bold text-headingColor">
            Current homepage snapshot
          </h2>
          <p className="mt-3 text-sm leading-6 text-textColor">
            <span className="font-semibold text-headingColor">Hero:</span>{" "}
            {config.hero.titleLine1} {config.hero.titleLine2}
          </p>
          <p className="mt-4 text-sm leading-6 text-textColor">
            <span className="font-semibold text-headingColor">About:</span>{" "}
            {config.about.title}
          </p>
          <p className="mt-4 text-sm leading-6 text-textColor">
            <span className="font-semibold text-headingColor">Why OHI:</span>{" "}
            {config.whyChoose.title}
          </p>
          <p className="mt-4 text-sm leading-6 text-textColor">
            <span className="font-semibold text-headingColor">Footer:</span>{" "}
            {config.footer.description}
          </p>
        </section>
      </div>
    </div>
  );
}
