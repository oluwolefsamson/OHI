import React from "react";

const tiers = [
  {
    name: "Expertise & Credibility",
    id: "tier-expertise",
    href: "#contact",
    priceMonthly: "01",
    description:
      "Seasoned professionals delivering visual content for development institutions, governments, NGOs and corporate brands.",
    features: [
      "Nearly a decade of experience",
      "UN, EU and private-sector project exposure",
      "Trusted delivery across Africa",
    ],
    featured: false,
  },
  {
    name: "Strategic Creativity",
    id: "tier-strategic",
    href: "#contact",
    priceMonthly: "02",
    description:
      "We combine narrative craft with communication strategy so every film supports a clear organisational objective.",
    features: [
      "Storytelling grounded in strategy",
      "Content tailored to audiences and outcomes",
      "Designed to improve visibility and traction",
    ],
    featured: true,
  },
  {
    name: "Flexible, Value-Based Solutions",
    id: "tier-flexible",
    href: "#contact",
    priceMonthly: "03",
    description:
      "We adapt to your timelines, budgets and communication standards without compromising quality.",
    features: [
      "Tailored project scoping",
      "End-to-end production support",
      "Results aligned to your goals",
    ],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Billing() {
  return (
    <div
      id="approach"
      className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="xl:w-[470px] mx-auto">
        <h2 className="heading text-center">Our Value Proposition</h2>
        <p className="text__para text-center">
          OHI combines creativity, credibility and flexibility to help projects
          communicate with clarity and impact.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 lg:max-w-6xl lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative bg-green-900 shadow-2xl"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-green-400" : "text-green-600",
                "text-base/7 font-semibold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-white" : "text-gray-900",
                  "text-5xl font-semibold tracking-tight"
                )}
              >
                {tier.priceMonthly}
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-6 text-base/7"
              )}
            >
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-gray-300" : "text-gray-600",
                "mt-8 space-y-3 text-sm/6 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <span
                    className={classNames(
                      tier.featured ? "text-green-400" : "text-green-600",
                      "h-6 w-5 flex-none"
                    )}
                    aria-hidden="true"
                  >
                    •
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-green-500 text-white shadow-xs hover:bg-green-400 focus-visible:outline-green-500"
                  : "text-green-600 ring-1 ring-green-200 ring-inset hover:ring-green-300 focus-visible:outline-green-600",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Contact OHI
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
