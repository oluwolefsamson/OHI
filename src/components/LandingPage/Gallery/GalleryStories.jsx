import React from "react";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";

const GalleryStories = () => {
  const { config } = useLandingPageConfig();
  const { galleryStories } = config;

  return (
    <section id="gallery-stories" className="py-24 bg-slate-50/60">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
            Gallery Stories
          </p>
          <h2 className="heading text-center mt-4">{galleryStories.title}</h2>
          <p className="text__para text-center">{galleryStories.description}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="relative overflow-hidden rounded-[30px] min-h-[360px] shadow-xl">
              <img
                src={galleryStories.lead.image}
                alt={galleryStories.lead.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">
                  {galleryStories.lead.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  {galleryStories.lead.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/80">
                  {galleryStories.lead.description}
                </p>
              </div>
            </article>

            <article className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
                    {galleryStories.supportIntro.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#1f2e2e]">
                    {galleryStories.supportIntro.title}
                  </h3>
                  <p className="mt-4 text__para">
                    {galleryStories.supportIntro.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {galleryStories.supportCards.map((item) => (
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
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${item.accent}`}
                        />
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
                  {galleryStories.stripTitle}
                </h3>
              </div>
              <div className="hidden sm:block rounded-full bg-primaryColor/10 px-4 py-2 text-sm font-semibold text-primaryColor">
                {galleryStories.stripBadge}
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {galleryStories.stripItems.map((item, index) => (
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
                      {item.description}
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
