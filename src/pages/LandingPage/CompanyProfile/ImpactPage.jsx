import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import impactVisual from "../../../assets/images/Gallery/gallery-05.jpeg";

const impactReasons = [
  "Demonstrate impact and transparency",
  "Attract new partners and financing",
  "Strengthen stakeholder alignment",
  "Build trust with communities",
  "Drive policy influence",
  "Showcase success stories",
];

const ImpactPage = () => {
  const { config } = useLandingPageConfig();

  return (
    <ProfilePageShell
      title="Why It Matters"
      titleClassName="underline decoration-[10px] decoration-[#f59e0b] underline-offset-8"
    >
      <section>
        <SectionHeader
          title="Why organizations invest in storytelling"
          description="The profile makes a direct business case for visual communication, not just a creative one."
        />
        <div className="mt-10 overflow-hidden rounded-[32px] border border-[#D9DCE2] bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
                Visual proof
              </p>
              <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-headingColor sm:text-4xl">
                Stories that help teams show results clearly
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-textColor">
                The same recent image set now supports the hidden profile pages so the
                experience feels consistent across the full company profile.
              </p>
            </div>
            <div className="relative min-h-[280px]">
              <img
                src={impactVisual}
                alt="Development storytelling visual"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.42)_100%)]" />
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {impactReasons.map((reason) => (
            <div
              key={reason}
              className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm"
            >
              <CheckCircle2 className="h-5 w-5 text-primaryColor" />
              <h3 className="mt-4 text-xl font-bold text-headingColor">{reason}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="rounded-[28px] border border-[#D9DCE2] bg-[#0f172a] p-6 text-white shadow-sm">
          <div className="flex items-center gap-3">
            <Target className="h-5 w-5 text-yellow-300" />
            <h3 className="text-2xl font-bold">What OHI helps you achieve</h3>
          </div>
          <p className="mt-4 leading-7 text-white/80">
            OHI transforms African projects into compelling stories that inspire action, visibility, trust, and lasting impact.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {config.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] bg-white/10 p-4">
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/75">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-primaryColor" />
            <h3 className="text-2xl font-bold text-headingColor">The communication payoff</h3>
          </div>
          <p className="text__para">
            Good storytelling helps a programme look like a programme that can be trusted, funded, shared, and scaled. That is the lens behind every project in the profile.
          </p>
          <div className="mt-6 rounded-[24px] bg-slate-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
              Support for teams
            </p>
            <p className="mt-3 text-sm leading-6 text-textColor">
              Use the work across reports, launch materials, stakeholder meetings, digital campaigns, and partner communications.
            </p>
          </div>
          <div className="mt-6">
            <Link to="/contact">
              <button className="btn inline-flex items-center gap-2">
                Discuss visibility <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default ImpactPage;
