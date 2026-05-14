import React from "react";
import { ArrowRight, ClipboardList, Handshake, Rocket, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";

const steps = [
  {
    title: "Understand objectives",
    description: "Clarify the communication goal, audience, and the outcome the project needs.",
    icon: ClipboardList,
  },
  {
    title: "Provide concept and action plan",
    description: "Shape the story direction and map the production work into a practical plan.",
    icon: Handshake,
  },
  {
    title: "Align on a tailored budget",
    description: "Build an approach that fits the scope, schedule, and available resources.",
    icon: WalletCards,
  },
  {
    title: "Deliver end-to-end storytelling",
    description: "Produce the final communication assets from brief through delivery.",
    icon: Rocket,
  },
];

const ApproachPage = () => {
  const { config } = useLandingPageConfig();

  return (
    <ProfilePageShell
      eyebrow="Our approach"
      title="A simple workflow that keeps the story focused"
      description="The profile is explicit about process: understand the objective, shape the concept, align the budget, and deliver the final story."
      primaryCta={{ label: "Contact OHI", href: "/contact" }}
      secondaryCta={{ label: "See sectors", href: "/who-we-serve" }}
      heroBadge={
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryColor">
            Production process
          </p>
          <p className="mt-1 text-sm leading-6 text-textColor">
            Straightforward, collaborative, and aligned to communication goals.
          </p>
        </div>
      }
      statCards={[
        {
          eyebrow: "Step 1",
          value: "Brief",
          label: "Understand what the project must communicate.",
        },
        {
          eyebrow: "Step 2",
          value: "Plan",
          label: "Turn the brief into a concept and action plan.",
        },
        {
          eyebrow: "Step 3",
          value: "Deliver",
          label: "Finish with a polished story asset ready for use.",
        },
      ]}
    >
      <section>
        <SectionHeader
          title="How OHI works"
          description="Each project is designed to be practical for clients that need professional communication support without unnecessary complexity."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <step.icon className="h-5 w-5 text-primaryColor" />
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-textColor">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-headingColor">{step.title}</h3>
              <p className="text__para">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] border border-[#D9DCE2] bg-[#0f172a] p-6 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Working style
          </p>
          <h3 className="mt-4 text-3xl font-bold">Aligned with donor and DFI standards</h3>
          <p className="mt-4 leading-7 text-white/80">
            The profile notes a project management approach that aligns with communication standards expected by development partners and institutional teams.
          </p>
        </div>

        <div className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
            Deliverables
          </p>
          <div className="mt-5 space-y-3">
            {[
              "Documentary films and mission coverage",
              "Visibility content for programs and institutions",
              "Testimonial stories and beneficiary-focused edits",
              "Campaign-ready outputs for digital channels",
              "Stakeholder communication assets for reporting and presentations",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-textColor">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/services">
              <button className="btn inline-flex items-center gap-2">
                Back to services <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default ApproachPage;
