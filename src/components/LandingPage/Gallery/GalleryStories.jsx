import React from "react";
import hero4 from "../../../assets/images/HeroImg/hero4.jpg";
import hero5 from "../../../assets/images/HeroImg/hero5.jpg";
import aboutCard from "../../../assets/images/about-card.jpg";
import supplier1 from "../../../assets/images/supplier-img01.jpg";
import supplier2 from "../../../assets/images/supplier-img02.jpg";
import supplier3 from "../../../assets/images/supplier-img03.jpg";
import rev2 from "../../../assets/images/rev2.jpg";

const storyCards = [
  {
    title: "Community reporting",
    description:
      "Visual storytelling shaped around people, institutions and outcomes.",
    image: hero4,
    accent: "from-emerald-500/85 to-teal-700/90",
  },
  {
    title: "Institutional visibility",
    description:
      "Cinematic frames that strengthen credibility for partners and programs.",
    image: aboutCard,
    accent: "from-slate-900/80 to-slate-700/90",
  },
  {
    title: "Partnership moments",
    description:
      "Coverage that documents presence, engagement and shared purpose.",
    image: rev2,
    accent: "from-amber-500/80 to-orange-700/90",
  },
];

const stripItems = [
  {
    label: "Field production",
    image: hero5,
  },
  {
    label: "Audience trust",
    image: supplier1,
  },
  {
    label: "Project delivery",
    image: supplier2,
  },
  {
    label: "Executive visibility",
    image: supplier3,
  },
];

const GalleryStories = () => {
  return (
    <section id="gallery-stories" className="py-24 bg-slate-50/60">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
            Gallery Stories
          </p>
          <h2 className="heading text-center mt-4">
            Editorial frames for development communication
          </h2>
          <p className="text__para text-center">
            A second visual section that shows how OHI can carry one story
            across fieldwork, institutional communication and partner-facing
            visibility.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="relative overflow-hidden rounded-[30px] min-h-[360px] shadow-xl">
              <img
                src={hero4}
                alt="Community reporting"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">
                  Documentary coverage
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  Community reporting
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/80">
                  Coverage designed to preserve context, tone and the human
                  detail that makes impact credible.
                </p>
              </div>
            </article>

            <article className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
                    Why it works
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#1f2e2e]">
                    Built for institutions that need clarity and trust
                  </h3>
                  <p className="mt-4 text__para">
                    The gallery language mirrors the company profile: clear,
                    professional and grounded in the kind of visual evidence
                    that helps partners communicate with confidence.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {storyCards.slice(1).map((item) => (
                    <div
                      key={item.title}
                      className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50"
                    >
                      <div className="relative h-32">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${item.accent}`} />
                      </div>
                      <div className="p-4">
                        <h4 className="text-base font-semibold text-[#1f2e2e]">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-sm text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
                  Gallery strip
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#1f2e2e]">
                  A broader look at the archive
                </h3>
              </div>
              <div className="hidden sm:block rounded-full bg-primaryColor/10 px-4 py-2 text-sm font-semibold text-primaryColor">
                OHI visual language
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {stripItems.map((item, index) => (
                <article
                  key={item.label}
                  className="group flex items-center gap-4 rounded-[24px] border border-slate-100 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
                      0{index + 1}
                    </p>
                    <h4 className="mt-1 text-lg font-semibold text-[#1f2e2e]">
                      {item.label}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      A visual cue for the range of settings OHI can document.
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryStories;
