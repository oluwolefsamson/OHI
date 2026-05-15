import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  HeartHandshake,
  Play,
  Sparkles,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import Reveal from "../../../components/ui/reveal";
import aboutHeroVideo from "../../../assets/img/OHI-video.mp4";
import aboutVisual from "../../../assets/img/camera-man.jpg";
import storyVisual from "../../../assets/img/Photography.jpg";
import portraitTwo from "../../../assets/img/WFP-03558.jpg";
import teamImageOne from "../../../assets/img/WFP-03523.jpg";
import teamImageTwo from "../../../assets/img/WFP-03524.jpg";
import ctaImage from "../../../assets/img/WFP-03520.jpg";

const principles = [
  {
    title: "Credibility",
    description:
      "OHI produces stories that help institutions communicate with clarity, trust, and confidence.",
    icon: BadgeCheck,
  },
  {
    title: "Human focus",
    description:
      "People stay at the center so technical work becomes relatable, memorable, and useful.",
    icon: HeartHandshake,
  },
  {
    title: "Editorial craft",
    description:
      "Every frame is designed to feel intentional across film, photography, and digital storytelling.",
    icon: Sparkles,
  },
];

const stats = [
  { value: "680", label: "Business trust us" },
  { value: "1,354", label: "Projects done" },
  { value: "97%", label: "Success rate" },
  { value: "15Y", label: "Years of experience" },
];

const teamHighlights = [
  {
    title: "Field production",
    description: "Story capture in communities, project sites, and institutional spaces.",
    image: teamImageOne,
  },
  {
    title: "Post-production",
    description: "Editing, motion, and finishing that keep the story clear and polished.",
    image: teamImageTwo,
  },
];

const SectionLabel = ({ children, dark = false }) => (
  <div className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] ${dark ? "text-white/75" : "text-slate-500"}`}>
    <span>{children}</span>
    <span className={`h-px w-16 ${dark ? "bg-white/50" : "bg-[#f59e0b]"}`} />
  </div>
);

const AboutPage = () => {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-950">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={aboutHeroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,36,0.34)_0%,rgba(6,20,36,0.72)_55%,rgba(6,20,36,0.95)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#0f4c81]" />

        <div className="relative container mx-auto px-4 pb-20 pt-28 sm:px-5 lg:px-20 lg:pb-28 lg:pt-32">
          <div className="max-w-4xl">
            <Reveal as="h1" className="inline-block border-b-[10px] border-[#f59e0b] pb-3 text-5xl font-extrabold leading-none tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              About Us
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-5 lg:px-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="relative mx-auto w-full max-w-[560px]">
              <div className="relative overflow-hidden bg-white shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
                <img
                  src={storyVisual}
                  alt="OHI story visual"
                  className="h-[420px] w-full object-cover transition duration-500 ease-out sm:h-[500px]"
                />
              </div>

              <div className="absolute -right-2 bottom-[-14px] z-10 w-[220px] overflow-hidden border border-white bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:-right-10 sm:w-[240px]">
                <img
                  src={portraitTwo}
                  alt="OHI detail visual"
                  className="h-[230px] w-full object-cover"
                />
              </div>

              <div className="absolute left-[74px] bottom-[-20px] z-20 w-[160px] bg-[#0f4c81] px-5 py-5 text-white shadow-[0_22px_60px_rgba(15,76,129,0.35)] sm:w-[180px]">
                <p className="text-4xl font-extrabold leading-none">680</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                  Business Trust Us
                </p>
              </div>
            </Reveal>

            <div className="max-w-2xl">
              <Reveal delay={0.06}>
                <SectionLabel>About Us</SectionLabel>
              </Reveal>
              <Reveal delay={0.08} as="h2" className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f2937] sm:text-5xl">
                We Are Business Consultants Dedicated To Driving Your Success
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 text-lg leading-8 text-textColor">
                  OHI creates development communication that helps institutions, partners,
                  and communities understand the work being done and why it matters.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-5 border-l-2 border-[#f59e0b] pl-5 text-base italic leading-8 text-slate-600">
                  We build visual stories that are clear, credible, and designed to move
                  audiences from awareness to action.
                </div>
              </Reveal>

              <Reveal delay={0.12} className="mt-8">
                <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-slate-100 text-[#0f4c81]">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-slate-900">15 Years Of Experience</p>
                  <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
                    OHI combines strategy, production, and field storytelling into one
                    editorial workflow.
                  </p>
                </div>
                </div>
              </Reveal>

              <Reveal delay={0.18} className="mt-8">
                <Button asChild className="rounded-none bg-[#f59e0b] px-6 text-white hover:bg-[#d97706]">
                  <Link to="/portfolio" className="inline-flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f4c81] py-20 text-white lg:py-24">
        <img
          src={aboutVisual}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-12"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,76,129,0.96)_0%,rgba(15,76,129,0.92)_55%,rgba(15,76,129,0.78)_100%)]" />

        <div className="relative container mx-auto px-4 sm:px-5 lg:px-20">
          <SectionLabel dark>Our Mission & Vision</SectionLabel>
          <Reveal as="h2" className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-[-0.03em] sm:text-5xl">
            Discover The Core Principles That Guide Us
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <Reveal className="relative overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.28)]" delay={0.08}>
              <img src={aboutVisual} alt="Video preview" className="h-[280px] w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,76,129,0.1)_0%,rgba(15,76,129,0.54)_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center bg-white text-[#0f4c81] shadow-[0_18px_50px_rgba(0,0,0,0.2)]">
                  <Play className="h-7 w-7 fill-current" />
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              {principles.map((item) => (
                <Reveal key={item.title} delay={0.1}>
                  <Card className="border-white/10 bg-white text-slate-800 shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_22px_56px_rgba(0,0,0,0.2)]">
                    <CardHeader className="pb-3">
                      <div className="flex h-11 w-11 items-center justify-center bg-[#0f4c81]/10 text-[#0f4c81]">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-slate-900">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-7 text-textColor">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="-mb-16 mt-10 overflow-hidden border border-white/10 bg-[#0b3f6c] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  className={`p-8 ${index < stats.length - 1 ? "border-b border-white/10 sm:border-b-0 lg:border-r" : ""}`}
                  delay={0.08 + index * 0.04}
                >
                  <p className="text-4xl font-extrabold tracking-[-0.03em]">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/75">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-5 lg:px-20">
          <div className="grid items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {teamHighlights.map((item, index) => (
                <Reveal key={item.title} delay={0.08 + index * 0.05}>
                  <Card className="overflow-hidden border-[#D9DCE2] bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
                    <div className="h-[300px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 ease-out"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-2xl font-semibold tracking-[-0.02em] text-headingColor">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-7 text-textColor">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>

            <div className="max-w-2xl">
              <Reveal>
                <SectionLabel>Meet The Experts</SectionLabel>
              </Reveal>
              <Reveal delay={0.06} as="h2" className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#1f2937] sm:text-5xl">
                Discover Our Team Of Head Business Consultant Experts
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-xl text-lg leading-8 text-textColor">
                  OHI combines strategy, production, and editorial craft to help development
                  work communicate with confidence across Africa.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <Button asChild className="mt-8 rounded-none bg-[#f59e0b] px-6 text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#d97706]">
                  <Link to="/portfolio" className="inline-flex items-center gap-2">
                    Discover Team <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={ctaImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,76,129,0.92)_0%,rgba(15,76,129,0.78)_52%,rgba(15,76,129,0.45)_100%)]" />

        <div className="relative container mx-auto px-4 py-20 text-white sm:px-5 lg:px-20 lg:py-24">
          <div className="max-w-2xl">
            <Reveal as="h2" className="text-4xl font-extrabold leading-tight tracking-[-0.03em] sm:text-5xl">
              Let's Discuss Your Business Goals & Schedule A Free Consultation Today
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">
                OHI is ready to turn your next project, campaign, or report into a story
                that people will remember and trust.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <Button asChild className="mt-8 rounded-none bg-[#f59e0b] px-6 text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#d97706]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Get a Quotation <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
