import React from "react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { ArrowRight, Download } from "lucide-react";
import portfolioImage01 from "../../assets/img/WFP-03520.jpg";
import portfolioImage02 from "../../assets/img/WFP-03523.jpg";
import portfolioImage03 from "../../assets/img/WFP-03524.jpg";
import portfolioImage04 from "../../assets/img/WFP-03525.jpg";
import portfolioImage05 from "../../assets/img/WFP-03527.jpg";
import portfolioImage06 from "../../assets/img/WFP-03534.jpg";

const Brochure = () => {
  const slides = useMemo(
    () => [
      { src: portfolioImage01, alt: "Portfolio brochure cover" },
      { src: portfolioImage02, alt: "Coverage highlights spread" },
      { src: portfolioImage03, alt: "Business protection overview" },
      { src: portfolioImage04, alt: "Personal insurance plans" },
      { src: portfolioImage05, alt: "Claims support and service" },
      { src: portfolioImage06, alt: "Risk assessment and advisory" },
    ],
    []
  );

  const [loadedCount, setLoadedCount] = useState(0);
  const showSkeleton = loadedCount === 0;

  const handleDownload = () => {
    const brochureUrl = "/EquilibriumInsuranceBrochure.pdf";
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "EquilibriumInsuranceBrochure.pdf";
    link.click();
  };

  return (
    <section
      id="brochure"
      className="relative mt-16 left-1/2 w-screen -translate-x-1/2 overflow-hidden border border-[#D9DCE2] shadow-sm"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/pik.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/78" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 py-12 sm:px-5 lg:px-20 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/85 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur">
              Portfolio brochure
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-headingColor md:text-4xl">
                A brochure-style preview of work, packaged for quick review and easy sharing.
              </h2>
              <p className="max-w-xl text-base leading-7 text-textColor">
                This section brings the brochure experience directly into the portfolio, letting visitors scan a compact visual story without leaving the page.
              </p>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-4 rounded-2xl border border-slate-900/10 bg-white/85 p-5 text-center text-sm shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur">
              <div>
                <p className="text-2xl font-semibold">6</p>
                <p className="text-slate-600">Preview pages</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">PDF</p>
                <p className="text-slate-600">Download ready</p>
              </div>
              <div>
                <p className="text-2xl font-semibold">1</p>
                <p className="text-slate-600">Section added</p>
              </div>
            </div>

            <ul className="space-y-3 text-slate-700">
              {[
                "Keeps the brochure experience inside the portfolio flow",
                "Uses a card swiper for a compact, premium visual preview",
                "Includes a download action and contact path for follow-up",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleDownload}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_20px_rgba(5,150,105,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
              >
                <span className="absolute inset-0 translate-x-full bg-emerald-300 transition-transform duration-300 group-hover:translate-x-0" />
                <Download className="relative h-4 w-4" />
                <span className="relative">Download brochure</span>
              </button>
              <Link to="/contact">
                <button className="inline-flex items-center gap-2 rounded-full border border-slate-900/15 bg-white/85 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900/30 hover:text-slate-900">
                  Talk with an advisor
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-10 left-10 h-24 w-24 rotate-12 rounded-3xl border border-slate-900/10 bg-white/80 shadow-[0_18px_35px_rgba(15,23,42,0.12)]" />
            <div className="absolute -bottom-12 right-6 h-28 w-28 -rotate-6 rounded-3xl border border-slate-900/10 bg-white/70 shadow-[0_18px_35px_rgba(15,23,42,0.12)]" />

            <div className="relative mx-auto max-w-sm">
              {showSkeleton ? (
                <div
                  className="absolute inset-0 z-10 flex h-[440px] w-[300px] flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/70 shadow-[0_25px_45px_rgba(15,23,42,0.2)]"
                  aria-busy="true"
                  aria-label="Loading brochure previews"
                >
                  <div className="h-full w-full animate-pulse bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50" />
                  <div className="absolute left-6 top-6 h-4 w-28 rounded-full bg-emerald-200/70" />
                  <div className="absolute left-6 top-14 h-3 w-40 rounded-full bg-emerald-200/60" />
                  <div className="absolute bottom-6 left-6 h-3 w-24 rounded-full bg-emerald-200/60" />
                </div>
              ) : null}

              <Swiper
                effect="cards"
                grabCursor
                modules={[EffectCards]}
                className={`mySwiper ${showSkeleton ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                style={{ width: "300px", height: "440px" }}
              >
                {slides.map((slide) => (
                  <SwiperSlide
                    key={slide.src}
                    className="flex items-center justify-center overflow-hidden rounded-3xl bg-slate-900 text-white shadow-[0_25px_45px_rgba(15,23,42,0.35)]"
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full rounded-3xl object-cover"
                      onLoad={() => setLoadedCount((count) => count + 1)}
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-900/10 bg-white/85 p-4 text-sm text-slate-700 shadow-[0_18px_30px_rgba(15,23,42,0.08)] backdrop-blur">
              <p className="font-semibold text-slate-900">What's inside</p>
              <p className="mt-2">
                Coverage options, project highlights, and a step-by-step guide to choosing the right next move.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
