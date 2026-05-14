import React from "react";
import { ArrowRight, Globe2, Layers3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const sectors = [
  "Development agencies",
  "Nonprofits and NGOs",
  "Government ministries",
  "Municipalities and city programs",
  "Foundations and DFIs",
  "Private-sector social impact projects",
];

const strengths = [
  "Multilingual team working in English, French, and Pidgin.",
  "Deep expertise in NGO and development-sector communication.",
  "Storytelling that resonates with communities, policymakers, and investors.",
  "Experience with documentaries and stakeholder engagement media.",
  "Led by an award-winning Producer/Director.",
  "Project management aligned with donor and DFI standards.",
];

const WhoWeServePage = () => {
  const { config } = useLandingPageConfig();

  return (
    <ProfilePageShell
      eyebrow="Who we serve"
      title="Organizations that need credible, human-centered storytelling"
      description="OHI works with institutions and mission-led brands that need communication assets built for visibility, trust, and action."
      primaryCta={{ label: "Explore impact", href: "/impact" }}
      secondaryCta={{ label: "Our approach", href: "/approach" }}
      heroBadge={
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryColor">
            Institutional focus
          </p>
          <p className="mt-1 text-sm leading-6 text-textColor">
            Built for programs that need confidence, clarity, and public-facing proof.
          </p>
        </div>
      }
      statCards={[
        {
          eyebrow: "Audience",
          value: "Public",
          label: "Communication for institutions, communities, and stakeholders.",
        },
        {
          eyebrow: "Language",
          value: "Bilingual",
          label: "English, French, and Pidgin coverage where needed.",
        },
        {
          eyebrow: "Standard",
          value: "Donor-ready",
          label: "Created to meet communication expectations in institutional work.",
        },
      ]}
    >
      <section>
        <SectionHeader
          title="Sectors OHI works with"
          description="These sectors map directly to the profile document and explain the kind of partners OHI is built to support."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm"
            >
              <Users className="h-5 w-5 text-primaryColor" />
              <h3 className="mt-4 text-2xl font-bold text-headingColor">{sector}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Layers3 className="h-5 w-5 text-primaryColor" />
            <h3 className="text-2xl font-bold text-headingColor">Unique strengths</h3>
          </div>
          <div className="mt-6 space-y-4">
            {strengths.map((strength) => (
              <div key={strength} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-textColor">
                {strength}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-[#D9DCE2] bg-[#0f172a] p-6 text-white shadow-sm">
          <div className="flex items-center gap-3">
            <Globe2 className="h-5 w-5 text-yellow-300" />
            <h3 className="text-2xl font-bold">Built for African contexts</h3>
          </div>
          <p className="mt-4 leading-7 text-white/80">
            The company profile positions OHI as a partner for African development and investment stories, with the flexibility to work across regions, institutions, and audiences.
          </p>
          <div className="mt-6 rounded-[24px] bg-white/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Communication outcome
            </p>
            <p className="mt-3 text-lg leading-8 text-white/90">
              Clearer reporting, stronger stakeholder alignment, and stories that feel credible to the people who need to act on them.
            </p>
          </div>
          <div className="mt-6">
            <Link to="/contact">
              <button className="hero_btn1 inline-flex items-center gap-2">
                Start a project <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default WhoWeServePage;
