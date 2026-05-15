import React from "react";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import SectionHeader from "../SectionHeader";

const VideoSection = () => {
  const { config } = useLandingPageConfig();
  const { video } = config;

  return (
    <section id="videos" className="py-24 bg-slate-50/60">
      <div className="container">
        <SectionHeader
          title={video.title}
          description={video.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="relative overflow-hidden rounded-[32px] min-h-[320px] sm:min-h-[440px] shadow-xl">
            {video.lead.embedUrl ? (
              <iframe
                src={video.lead.embedUrl}
                title={video.lead.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={video.lead.poster}
                alt={video.lead.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/20">
                  <img src={video.icon} alt="" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">
                    {video.lead.category}
                  </p>
                  <h3 className="mt-1 text-3xl font-semibold">
                    {video.lead.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
                {video.lead.description}
              </p>
            </div>
          </article>

          <div className="grid gap-4">
            {video.clips.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative min-h-[160px] sm:min-h-[180px] sm:w-[42%]">
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-4 flex items-start justify-end">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg">
                        <img src={video.icon} alt="" className="h-5 w-5" />
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
                      {item.category}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-[#1f2e2e]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                    <div className="mt-4 inline-flex rounded-full bg-primaryColor/10 px-3 py-1 text-xs font-semibold text-primaryColor">
                      Ready for playback source
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
