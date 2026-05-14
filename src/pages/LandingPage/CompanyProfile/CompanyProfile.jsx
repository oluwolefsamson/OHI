import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Handshake,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const profilePages = [
  {
    label: "About OHI",
    path: "/about",
    description: "The founding story, mission, vision, and values behind the brand.",
    icon: BookOpen,
  },
  {
    label: "Services",
    path: "/services",
    description: "The production formats and storytelling services OHI delivers.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Who We Serve",
    path: "/who-we-serve",
    description: "NGOs, DFIs, governments, municipalities, and private-sector impact teams.",
    icon: Handshake,
  },
  {
    label: "Why It Matters",
    path: "/impact",
    description: "How storytelling improves visibility, trust, alignment, and action.",
    icon: ShieldCheck,
  },
  {
    label: "Our Approach",
    path: "/approach",
    description: "A simple, strategic workflow from brief to delivery.",
    icon: Sparkles,
  },
  {
    label: "Contact",
    path: "/contact",
    description: "Direct contact details and the easiest way to reach OHI.",
    icon: MapPinned,
  },
];

const CompanyProfile = () => {
  return (
    <ProfilePageShell
      eyebrow="Olympian House International"
      title="Development communication production company"
      description="Authentic Stories. Real Impact. African Excellence."
      primaryCta={{ label: "Our Portfolio", href: "/services" }}
      secondaryCta={{ label: "Contact OHI", href: "/contact" }}
      heroBadge={
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryColor">
            Since 2015
          </p>
          <p className="mt-1 text-sm leading-6 text-textColor">
            Story-led production for NGOs, DFIs, governments, and private-sector
            partners.
          </p>
        </div>
      }
      statCards={[
        {
          eyebrow: "Focus",
          value: "Development",
          label: "Clear communication for projects that need credibility and reach.",
        },
        {
          eyebrow: "Style",
          value: "Human",
          label: "Authentic, people-centered visuals and narratives.",
        },
        {
          eyebrow: "Output",
          value: "Strategic",
          label: "Content designed to inform, inspire, and mobilize action.",
        },
      ]}
    >
      <SectionHeader
        title="Start with the section that matches your goal"
        description="The profile has been split into focused pages so each part reads clearly while keeping the same visual language as the landing page."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {profilePages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="group rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-2xl bg-primaryColor/10 p-3 text-primaryColor">
                <page.icon className="h-5 w-5" />
              </div>
              <ArrowRight className="h-5 w-5 text-textColor transition group-hover:translate-x-1" />
            </div>
            <h2 className="mt-5 text-2xl font-bold text-headingColor">{page.label}</h2>
            <p className="mt-3 text__para">{page.description}</p>
          </Link>
        ))}
      </div>
    </ProfilePageShell>
  );
};

export default CompanyProfile;
