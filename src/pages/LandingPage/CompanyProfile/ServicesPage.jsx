import React from "react";
import { ArrowRight, Film, Megaphone, VideoIcon } from "lucide-react";
import { Link } from "react-router-dom";
import bts02812Img from "../../../assets/img/BTS-02812.jpg";
import bts02864Img from "../../../assets/img/BTS-02864.jpg";
import pikImg from "../../../assets/img/pik.jpg";
import wfp03520Img from "../../../assets/img/WFP-03520.jpg";
import wfp03523Img from "../../../assets/img/WFP-03523.jpg";
import wfp03524Img from "../../../assets/img/WFP-03524.jpg";
import wfp03527Img from "../../../assets/img/WFP-03527.jpg";
import wfp03534Img from "../../../assets/img/WFP-03534.jpg";
import wfp03558Img from "../../../assets/img/WFP-03558.jpg";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import Reveal from "../../../components/ui/reveal";

const ServicesPage = () => {
  const { config } = useLandingPageConfig();
  const { services } = config;

  const serviceFormats = [
    "Investment & programme visibility",
    "Impact documentaries",
    "ESG & social impact storytelling",
    "Development programme communication",
    "Donor & investor reporting films",
    "Multilingual field production",
  ];

  const serviceShowcase = [
    {
      title: "Impact Documentaries",
      description:
        "We produce high-quality documentaries that humanize data and reveal real impact on the ground. OHI films go beyond storytelling to build trust, credibility, and long-term confidence among investors, donors, and communities.",
      image: wfp03523Img,
    },
    {
      title: "Development Programme Communication",
      description:
        "OHI helps development programmes communicate their objectives, implementation, and results with clarity and authenticity. Our visuals strengthen transparency, accountability, and stakeholder alignment across the project lifecycle.",
      image: wfp03558Img,
    },
    {
      title: "Investment & Programme Visibility",
      description:
        "We craft investor-focused films that present projects as credible, bankable, and scalable opportunities. By combining strategic messaging with compelling visuals, OHI helps unlock financing and accelerate decision-making.",
      image: wfp03520Img,
    },
    {
      title: "ESG & Social Impact Storytelling",
      description:
        "Our content amplifies community voice and local ownership, ensuring projects are seen through the lens of those they serve. OHI storytelling builds legitimacy, social buy-in, and sustainable impact.",
      image: bts02812Img,
    },
    {
      title: "Donor & Investor Reporting Films",
      description:
        "We capture authentic testimonials that turn beneficiaries into powerful advocates for your work. Each story is handled ethically, with dignity, and aligned with broader impact and investment narratives.",
      image: bts02864Img,
    },
    {
      title: "Multilingual Field Production",
      description:
        "OHI produces concise, evidence-driven reporting films that communicate results, learning, and accountability. These films support donor relations, renewal, and long-term partnerships.",
      image: wfp03524Img,
    },
    {
      title: "Event & Mission Coverage",
      description:
        "From high-level forums to field missions, we document moments that matter with professional and strategic intent. OHI ensures your engagements translate into lasting communication value.",
      image: wfp03527Img,
    },
    {
      title: "Social Media & Digital Campaigns",
      description:
        "We design digital-first content that extends the life and reach of your projects beyond the field. OHI campaigns are tailored to engage policymakers, investors, and communities across platforms.",
      image: wfp03534Img,
    },
  ];

  return (
    <ProfilePageShell
      title="Who We Serve"
      heroVariant="minimal"
    >
      <section>
        <SectionHeader
          title="Core services"
          description="The company profile describes OHI as a partner for organisations that need clear, credible, and investment-grade storytelling."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.cards.map((card, index) => (
            <Reveal key={card.name} delay={0.04 + index * 0.04}>
              <article className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <div
                  className="h-2 w-20 rounded-full"
                  style={{ backgroundColor: card.textColor }}
                />
                <h3 className="mt-5 text-2xl font-bold text-headingColor">{card.name}</h3>
                <p className="text__para">{card.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="mt-12 relative w-full rounded-[28px] border border-[#D9DCE2] bg-cover bg-center bg-no-repeat p-4 shadow-sm sm:p-6 lg:p-8"
        style={{ backgroundImage: `url(${pikImg})` }}
      >
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-white/60 bg-white/78 p-6 text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f97316]">
              Communication formats
            </p>
            <h3 className="mt-4 text-3xl font-bold">Visual formats built for clarity</h3>
            <p className="mt-4 leading-7 text-slate-700">
              Each format is chosen to match the communication objective, whether the goal is public awareness, stakeholder trust, donor reporting, or investor confidence.
            </p>
            <div className="mt-6 space-y-3">
              {serviceFormats.map((item, index) => (
                <Reveal key={item} delay={0.05 + index * 0.03}>
                  <div className="flex items-center gap-3 rounded-2xl bg-white/75 px-4 py-3 transition duration-300 ease-out hover:bg-white/90">
                  <VideoIcon className="h-4 w-4 text-[#f97316]" />
                  <span className="text-sm font-medium text-slate-800">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/60 bg-white/82 p-6 text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Megaphone className="h-5 w-5 text-primaryColor" />
              <h3 className="text-2xl font-bold text-headingColor">How the work travels</h3>
            </div>
            <p className="text__para">
              OHI frames each format as a communication asset, not just a video. The result is content that can be used across reports, websites, social channels, presentations, and stakeholder engagement.
            </p>
            <div className="mt-6 rounded-[24px] bg-slate-50 p-5">
              <div className="flex items-center gap-3">
                <Film className="h-5 w-5 text-primaryColor" />
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
                  Delivery approach
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
        </div>
      </section>

      <section className="mt-16 rounded-[36px] bg-[#dff1f7] px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Formats in practice"
            description="A closer look at how OHI adapts each format to the communication objective, audience, and sector."
          />

          <div className="mt-10 space-y-5">
            {serviceShowcase.map((item, index) => (
              <Reveal key={item.title} delay={0.06 + index * 0.05}>
                <article className="overflow-hidden rounded-[24px] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                  <div className="grid items-stretch md:grid-cols-2">
                    <div
                      className={`relative min-h-[220px] md:min-h-[200px] ${
                        index % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 ease-out"
                      />
                    </div>
                    <div
                      className={`flex items-center p-6 sm:p-8 ${
                        index % 2 === 1 ? "md:order-1" : ""
                      }`}
                    >
                      <div className="max-w-xl">
                        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#ff7a1a]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-[15px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default ServicesPage;
