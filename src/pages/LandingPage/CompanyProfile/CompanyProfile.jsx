import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Handshake,
  Image,
  MapPinned,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import { Marquee } from "../../../components/LandingPage/magicui/marquee";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
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
    label: "Services",
    path: "/services",
    description: "The production formats and storytelling services OHI delivers.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Portfolio",
    path: "/portfolio",
    description: "Selected work and case-style examples from OHI's visual archive.",
    icon: Image,
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
      primaryCta={{ label: "Our Portfolio", href: "/portfolio" }}
      secondaryCta={{ label: "Contact OHI", href: "/contact" }}
    >
      <SectionHeader
        title="Start with the section that matches your goal"
        description="The profile is split into focused pages so each part reads clearly while keeping the same visual language as the landing page."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {profilePages.map((page) => {
          return (
            <Card
              key={page.path}
              className="group overflow-hidden border-[#D9DCE2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <CardHeader className="space-y-0 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                    <page.icon className="h-5 w-5" />
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardTitle className="text-2xl font-semibold tracking-[-0.02em] text-headingColor">
                  {page.label}
                </CardTitle>
                <CardDescription className="text-base leading-7 text-textColor">
                  {page.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex items-center justify-between gap-4 pt-0">
                <Separator className="flex-1 bg-black/10" />
                <Button
                  asChild
                  variant="ghost"
                  className="group/btn h-10 rounded-full px-0 text-sm font-semibold text-slate-700 hover:bg-transparent hover:text-slate-900"
                >
                  <Link to={page.path} className="inline-flex items-center gap-2">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
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
            <Card
              key={project.title}
              className="group overflow-hidden border-[#D9DCE2] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,22,36,0.06)_0%,rgba(5,22,36,0.72)_100%)]" />
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-semibold tracking-[-0.02em] text-headingColor">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-6">
                <CardDescription className="text-base leading-7 text-textColor">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex items-center justify-between pt-0">
                <span className="text-sm font-semibold text-primaryColor">
                  View case style
                </span>
                <ArrowRight className="h-4 w-4 text-primaryColor transition-transform group-hover:translate-x-1" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default CompanyProfile;
