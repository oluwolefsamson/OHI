import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  Clock3Icon,
  Layers3Icon,
  LayoutGridIcon,
  PaletteIcon,
  PenToolIcon,
  ShieldCheckIcon,
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
      <section className="relative overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/92 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#0f4c81]/8 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#118ab2]/10 blur-3xl" />
        </div>
        <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primaryColor">
              OHI Dashboard
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-headingColor sm:text-5xl">
              Manage the OHI website from one clear workspace
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-textColor">
              Update the homepage content that powers the public site, with
              cleaner navigation, clearer section hierarchy, and fewer guesses
              about where things live.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/dashboard/landing-page"
                className="inline-flex items-center gap-2 rounded-full bg-primaryColor px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,76,129,0.24)] transition hover:translate-y-[-1px] hover:brightness-110"
              >
                Open homepage editor
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                to="/dashboard/landing-page#theme-settings"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Jump to theme
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Sections
                </p>
                <p className="mt-1 text-lg font-bold text-headingColor">
                  {editableItems.length}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Last sync
                </p>
                <p className="mt-1 text-lg font-bold text-headingColor">
                  Local browser
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Status
                </p>
                <p className="mt-1 text-lg font-bold text-headingColor">
                  Live preview
                </p>
              </div>
            </div>
          </div>

          <aside className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Editing focus
                </p>
                <h2 className="mt-2 text-xl font-bold text-headingColor">
                  What this dashboard controls
                </h2>
              </div>
              <div className="rounded-full bg-[#0f4c81]/10 p-3 text-[#0f4c81]">
                <ShieldCheckIcon className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <LayoutGridIcon className="h-4 w-4 text-[#0f4c81]" />
                  <span className="text-sm font-semibold text-headingColor">
                    Homepage sections
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-textColor">
                  Hero, About, Why OHI, gallery, video, mission, values, and
                  footer content.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <Clock3Icon className="h-4 w-4 text-[#0f4c81]" />
                  <span className="text-sm font-semibold text-headingColor">
                    Faster edits
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-textColor">
                  Changes reflect immediately in the browser preview while you
                  work.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {editableItems.map((item) => (
          <article
            key={item.title}
            className="group rounded-[24px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-primaryColor/10 p-3 text-primaryColor ring-1 ring-primaryColor/10">
                <item.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-lg font-bold text-headingColor">
                    {item.title}
                  </h2>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Editable
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-textColor">
                  {item.description}
                </p>
                <Link
                  to={item.route}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primaryColor transition group-hover:translate-x-0.5"
                >
                  Open editor
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <section className="rounded-[28px] border border-slate-200/80 bg-white/92 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Editor scope
          </p>
          <h2 className="mt-2 text-2xl font-bold text-headingColor">
            What the landing page editor can change
          </h2>
          <p className="mt-3 text-sm leading-6 text-textColor">
            The current editor controls the sections wired to the landing-page
            config context. Those values update the public site immediately in
            this browser.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "Hero headline, description, buttons, stats, and images",
              "About section copy, image, and overlay card content",
              "Why OHI cards, links, and images",
              "Brand colors, hero background, and header background",
              "Footer text and contact copy",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm leading-6 text-textColor"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-slate-200/80 bg-white/92 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Snapshot
          </p>
          <h2 className="mt-2 text-2xl font-bold text-headingColor">
            Current homepage state
          </h2>
          <div className="mt-5 space-y-4">
            <div className="rounded-2xl bg-slate-50/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Hero
              </p>
              <p className="mt-2 text-sm leading-6 text-textColor">
                {config.hero.titleLine1} {config.hero.titleLine2}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                About
              </p>
              <p className="mt-2 text-sm leading-6 text-textColor">
                {config.about.title}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Why OHI
              </p>
              <p className="mt-2 text-sm leading-6 text-textColor">
                {config.whyChoose.title}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Footer
              </p>
              <p className="mt-2 text-sm leading-6 text-textColor">
                {config.footer.description}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
