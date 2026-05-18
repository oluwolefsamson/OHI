import React from "react";
import { ArrowRight, ClipboardList, Handshake, Rocket, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import approachVisual from "../../../assets/images/Gallery/gallery-06.jpeg";

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
  return (
    <ProfilePageShell
      title="Our Approach"
      titleClassName="underline decoration-[10px] decoration-[#f59e0b] underline-offset-8"
    >
      <section>
        <SectionHeader
          title="How OHI works"
          description="Each project is designed to be practical for DFIs, governments, and institutions that need professional communication support without unnecessary complexity."
        />
        <div className="mt-10 overflow-hidden rounded-[32px] border border-[#D9DCE2] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="relative min-h-[280px] lg:min-h-[340px]">
              <img
                src={approachVisual}
                alt="Production workflow visual"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,22,36,0.08)_0%,rgba(5,22,36,0.52)_100%)]" />
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
                Workflow
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-headingColor sm:text-4xl">
                A practical process built around delivery
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-textColor">
                The approach section now carries a visual cue from the recent image set
                while keeping the steps and deliverables easy to scan.
              </p>
            </div>
          </div>
        </div>
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
            The profile notes a project management approach that aligns with communication standards expected by development partners, DFIs, and institutional teams.
          </p>
        </div>

        <div className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
            Deliverables
          </p>
          <div className="mt-5 space-y-3">
            {[
              "Documentary films and mission coverage",
              "Visibility content for programmes and institutions",
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
