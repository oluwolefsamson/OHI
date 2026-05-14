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
import { Marquee } from "../../../components/LandingPage/magicui/marquee";
import ifrcLogo from "../../../assets/img/International_Federation_of_Red_Cross_and_Red_Crescent_Societies_Logo.png";
import corafLogo from "../../../assets/img/logo-coraf.png";
import sunKingLogo from "../../../assets/img/Sun-King_New_Logo-02.png";
import wfpLogo from "../../../assets/img/wfp-logo-extended-blue-en.png";
import portfolioImage01 from "../../../assets/img/WFP-03520.jpg";
import portfolioImage02 from "../../../assets/img/WFP-03523.jpg";
import portfolioImage03 from "../../../assets/img/WFP-03524.jpg";
import portfolioImage04 from "../../../assets/img/WFP-03525.jpg";
import portfolioImage05 from "../../../assets/img/WFP-03527.jpg";
import portfolioImage06 from "../../../assets/img/WFP-03534.jpg";

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

const clientLogos = [
  {
    name: "World Food Programme",
    image: wfpLogo,
  },
  {
    name: "Sun King",
    image: sunKingLogo,
  },
  {
    name: "CORAF",
    image: corafLogo,
  },
  {
    name: "International Federation of Red Cross and Red Crescent Societies",
    image: ifrcLogo,
  },
];

const portfolioProjects = [
  {
    title: "Program visibility films",
    category: "Development communication",
    image: portfolioImage01,
    description: "Clear stories that help teams show results, context, and human impact.",
  },
  {
    title: "Stakeholder event coverage",
    category: "Event production",
    image: portfolioImage02,
    description: "Fast, polished coverage for launches, convenings, and milestone moments.",
  },
  {
    title: "Human-centered interviews",
    category: "Story gathering",
    image: portfolioImage03,
    description: "Short-form stories that make complex initiatives feel relatable and real.",
  },
  {
    title: "Campaign content packages",
    category: "Multi-channel delivery",
    image: portfolioImage04,
    description: "Reusable content for reports, digital campaigns, and partner updates.",
  },
  {
    title: "Field documentation",
    category: "On-location production",
    image: portfolioImage05,
    description: "Visual reporting from communities, project sites, and implementation work.",
  },
  {
    title: "Impact storytelling",
    category: "Strategic visibility",
    image: portfolioImage06,
    description: "Editorial visuals built to support credibility, trust, and action.",
  },
];

const CompanyProfile = () => {
  return (
    <ProfilePageShell
      eyebrow="Olympian House International"
      title="Development communication production company"
      description="Authentic Stories. Real Impact. African Excellence."
      primaryCta={{ label: "Our Portfolio", href: "/company-profile#portfolio" }}
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

      <section id="clients" className="mt-16 rounded-[32px] border border-[#D9DCE2] bg-white p-6 shadow-sm sm:p-8">
        <SectionHeader
          title="Our Clients"
          description="A moving strip of organizations and institutions OHI has worked with or produced for."
          className="max-w-3xl"
        />

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <Marquee pauseOnHover className="[--duration:28s] px-0 py-0">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="flex h-28 w-56 items-center justify-center rounded-[24px] border border-[#E5E7EB] bg-[#F8FAFC] px-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-12 w-full object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="portfolio" className="mt-16">
        <SectionHeader
          title="Portfolio"
          description="Selected work that shows how OHI turns development, public-sector, and impact work into clear visual stories."
          className="max-w-4xl"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[28px] border border-[#D9DCE2] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,22,36,0.06)_0%,rgba(5,22,36,0.72)_100%)]" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor backdrop-blur-sm">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-headingColor">{project.title}</h3>
                <p className="mt-3 text__para">{project.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primaryColor">
                  View case style <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default CompanyProfile;
