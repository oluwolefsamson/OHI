import React from "react";
import { ArrowRight, BadgeCheck, HeartHandshake, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const AboutPage = () => {
  const { config } = useLandingPageConfig();
  const { profile, about } = config;

  return (
    <ProfilePageShell
      eyebrow="About OHI"
      title="Our Story"
      description={
        <span className="text-white">
          Founded in 2015 by filmmaker and development communication specialist
          Fombang Banns N., OHI was built on the belief that stories move people
          and change follows movement.
        </span>
      }
      primaryCta={{ label: "See services", href: "/services" }}
      secondaryCta={{ label: "Our approach", href: "/approach" }}
      heroBadge={
        <div className="flex items-center gap-3">
          <img src={about.overlay.icon} alt="" className="h-10 w-10 rounded-full" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryColor">
              {about.overlay.since}
            </p>
            <p className="text-sm leading-6 text-textColor">{about.overlay.tagline}</p>
          </div>
        </div>
      }
      statCards={[
        {
          eyebrow: "Founded",
          value: "2015",
          label: "Founded by filmmaker and development communication specialist Fombang Banns N.",
        },
        {
          eyebrow: "Promise",
          value: "Stories",
          label: "Stories have the power to move people and shape change.",
        },
        {
          eyebrow: "Result",
          value: "Visibility",
          label: "Turning complex initiatives into relatable, human-centered narratives.",
        },
      ]}
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm">
          <SectionHeader
            title={profile.storyTitle}
            description="OHI exists to make Africa's development and investment journeys visible, relatable, and unforgettable."
            className="max-w-none text-left"
          />
          <div className="mt-6 space-y-4 text-textColor">
            {profile.storyDescription.split(". ").slice(1).map((sentence) => (
              <p key={sentence} className="text__para">
                {sentence}
              </p>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/contact">
              <button className="btn inline-flex items-center gap-2">
                Talk to OHI <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </section>

        <section className="rounded-[28px] border border-[#D9DCE2] bg-[#0f172a] p-6 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Mission and vision
          </p>
          <h2 className="mt-4 text-3xl font-bold">{profile.missionTitle}</h2>
          <p className="mt-4 leading-7 text-white/80">{profile.missionDescription}</p>
          <div className="mt-6 rounded-[24px] bg-white/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              Vision
            </p>
            <p className="mt-3 text-lg leading-8 text-white/90">
              {profile.visionDescription}
            </p>
          </div>
        </section>
      </div>

      <section className="mt-10">
        <SectionHeader
          title={profile.valuesTitle}
          description="The values that shape every production and partnership."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {profile.values.map((value) => (
            <div
              key={value}
              className="rounded-[24px] border border-[#D9DCE2] bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 text-primaryColor">
                <Sparkles className="h-4 w-4" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Value
                </p>
              </div>
              <p className="mt-4 text-lg font-bold text-headingColor">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm">
          <BadgeCheck className="h-6 w-6 text-primaryColor" />
          <h3 className="mt-4 text-2xl font-bold text-headingColor">Credibility</h3>
          <p className="text__para">
            Consistent, professional communication that builds trust with partners and audiences.
          </p>
        </div>
        <div className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm">
          <HeartHandshake className="h-6 w-6 text-primaryColor" />
          <h3 className="mt-4 text-2xl font-bold text-headingColor">Collaboration</h3>
          <p className="text__para">
            Strong working relationships with institutions, communities, and implementation teams.
          </p>
        </div>
        <div className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm">
          <Sparkles className="h-6 w-6 text-primaryColor" />
          <h3 className="mt-4 text-2xl font-bold text-headingColor">Excellence</h3>
          <p className="text__para">
            Every frame, sound, and story is crafted to a high standard.
          </p>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default AboutPage;
