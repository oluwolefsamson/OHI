import React from "react";
import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import SectionHeader from "../LandingPage/SectionHeader";
import brochurePage01 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0001.jpg";
import brochurePage02 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0002.jpg";
import brochurePage03 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0003.jpg";
import brochurePage04 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0004.jpg";
import brochurePage05 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0005.jpg";
import brochurePage06 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0006.jpg";
import brochurePage07 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0007.jpg";
import brochurePage08 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0008.jpg";
import brochurePage09 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0009.jpg";
import brochurePage10 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0010.jpg";
import brochurePage11 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0011.jpg";
import brochurePage12 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0012.jpg";

const Brochure = () => {
  const slides = useMemo(
    () => [
      { src: brochurePage01, alt: "OHI company profile page 1" },
      { src: brochurePage02, alt: "OHI company profile page 2" },
      { src: brochurePage03, alt: "OHI company profile page 3" },
      { src: brochurePage04, alt: "OHI company profile page 4" },
      { src: brochurePage05, alt: "OHI company profile page 5" },
      { src: brochurePage06, alt: "OHI company profile page 6" },
      { src: brochurePage07, alt: "OHI company profile page 7" },
      { src: brochurePage08, alt: "OHI company profile page 8" },
      { src: brochurePage09, alt: "OHI company profile page 9" },
      { src: brochurePage10, alt: "OHI company profile page 10" },
      { src: brochurePage11, alt: "OHI company profile page 11" },
      { src: brochurePage12, alt: "OHI company profile page 12" },
    ],
    []
  );

  const [loadedCount, setLoadedCount] = useState(0);
  const showSkeleton = loadedCount === 0;

  return (
    <section
      id="brochure"
      className="relative mt-16 w-full overflow-hidden border border-[#D9DCE2] shadow-sm"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "var(--ohi-hero-bg)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/78" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 py-12 sm:px-5 lg:px-20 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            title="Company Profile"
            description="Browse the company profile in a page-by-page Swiper deck."
            className="max-w-2xl"
          />

          <div className="relative mx-auto mt-8 flex max-w-sm justify-center">
            {showSkeleton ? (
              <div
                className="absolute inset-0 z-10 flex h-[440px] w-[300px] flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/70 shadow-[0_25px_45px_rgba(15,23,42,0.2)]"
                aria-busy="true"
                aria-label="Loading brochure previews"
              >
                <div className="h-full w-full animate-pulse bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50" />
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
        </div>
      </div>
    </section>
  );
};

export default Brochure;
