import React from "react";
import hero5 from "../../../assets/images/HeroImg/hero5.jpg";
import hero4 from "../../../assets/images/HeroImg/hero4.jpg";
import aboutImg from "../../../assets/images/about.jpg";
import rev1 from "../../../assets/images/rev1.jpg";
import rev4 from "../../../assets/images/rev4.jpg";
import videoIcon from "../../../assets/images/video-icon.png";

const videos = [
  {
    title: "OHI overview reel",
    category: "Featured film",
    description:
      "A concise branded film for introducing the organisation, its purpose and the kind of stories it tells.",
    poster: hero5,
    layout: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Field interviews",
    category: "Story capture",
    description:
      "Short-form documentary moments that keep the human voice at the center of the frame.",
    poster: hero4,
  },
  {
    title: "Partner spotlight",
    category: "Visibility clip",
    description:
      "A credibility-led edit for projects, partners and institutional communication.",
    poster: aboutImg,
  },
  {
    title: "Impact testimonials",
    category: "Voice-led cut",
    description:
      "Testimonial-driven clips that help organizations communicate outcomes clearly.",
    poster: rev1,
  },
  {
    title: "Program highlights",
    category: "Campaign video",
    description:
      "An adaptable short-form format for launches, events and reporting moments.",
    poster: rev4,
  },
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-24 bg-slate-50/60">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
            Videos
          </p>
          <h2 className="heading text-center mt-4">
            Story-led video production for development and visibility
          </h2>
          <p className="text__para text-center">
            A dedicated space for OHI&apos;s video work. The layout is ready for
            local video files or embedded links while preserving the same
            rounded, editorial look used across the site.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="relative overflow-hidden rounded-[32px] min-h-[440px] shadow-xl">
            <img
              src={videos[0].poster}
              alt={videos[0].title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/20">
                  <img src={videoIcon} alt="" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">
                    {videos[0].category}
                  </p>
                  <h3 className="mt-1 text-3xl font-semibold">
                    {videos[0].title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
                {videos[0].description}
              </p>

              <div className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
                Connect your video source here
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            {videos.slice(1).map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative min-h-[180px] sm:w-[42%]">
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute inset-4 flex items-start justify-end">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/90 shadow-lg">
                        <img src={videoIcon} alt="" className="h-5 w-5" />
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
