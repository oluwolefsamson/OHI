import React from "react";
import { ArrowRight, Film, Megaphone, VideoIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const ServicesPage = () => {
  const { config } = useLandingPageConfig();
  const { services } = config;

  const serviceFormats = [
    "Impact documentaries",
    "Development program visibility",
    "Investment promotion films",
    "Community engagement content",
    "Testimonial and beneficiary stories",
    "Digital campaign content",
  ];

  return (
    <ProfilePageShell
      eyebrow="What we do"
      title={services.title}
      description={services.description}
      primaryCta={{ label: "Who we serve", href: "/who-we-serve" }}
      secondaryCta={{ label: "Contact OHI", href: "/contact" }}
      heroBadge={
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryColor">
            Service language
          </p>
          <p className="mt-1 text-sm leading-6 text-textColor">
            Development communication, impact storytelling, and strategic visibility.
          </p>
        </div>
      }
      statCards={[
        {
          eyebrow: "Format",
          value: "Film",
          label: "Documentary, testimonial, event, and campaign production.",
        },
        {
          eyebrow: "Audience",
          value: "Clear",
          label: "Made for communities, partners, donors, and decision-makers.",
        },
        {
          eyebrow: "Goal",
          value: "Action",
          label: "Designed to inform, inspire confidence, and mobilize support.",
        },
      ]}
    >
      <section>
        <SectionHeader
          title="Core services"
          description="The company profile describes OHI as a partner for organisations that need clear, credible, and human-centered storytelling."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.cards.map((card) => (
            <article
              key={card.name}
              className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm"
            >
              <div
                className="h-2 w-20 rounded-full"
                style={{ backgroundColor: card.textColor }}
              />
              <h3 className="mt-5 text-2xl font-bold text-headingColor">{card.name}</h3>
              <p className="text__para">{card.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-[#D9DCE2] bg-[#0f172a] p-6 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Production language
          </p>
          <h3 className="mt-4 text-3xl font-bold">Visual formats built for clarity</h3>
          <p className="mt-4 leading-7 text-white/80">
            Each format is chosen to match the communication objective, whether the goal is public awareness, stakeholder trust, donor reporting, or investor confidence.
          </p>
          <div className="mt-6 space-y-3">
            {serviceFormats.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
                <VideoIcon className="h-4 w-4 text-yellow-300" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <Megaphone className="h-5 w-5 text-primaryColor" />
            <h3 className="text-2xl font-bold text-headingColor">How the work behaves</h3>
          </div>
          <p className="text__para">
            OHI frames each production as a communication asset, not just a video. The result is content that can be used across reports, websites, social channels, presentations, and stakeholder engagement.
          </p>
          <div className="mt-6 rounded-[24px] bg-slate-50 p-5">
            <div className="flex items-center gap-3">
              <Film className="h-5 w-5 text-primaryColor" />
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
                Delivery mindset
              </p>
            </div>
            <p className="mt-3 text-sm leading-6 text-textColor">
              Strategic, polished, and grounded in the realities of development work across the continent.
            </p>
          </div>
          <div className="mt-6">
            <Link to="/who-we-serve">
              <button className="btn inline-flex items-center gap-2">
                See sectors <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default ServicesPage;
