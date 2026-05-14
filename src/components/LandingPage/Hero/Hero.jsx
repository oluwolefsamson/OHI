import React from "react";
import { AvatarCirclesDemo } from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";

const Hero = () => {
  const { config } = useLandingPageConfig();
  const hero = config.hero;

  return (
    <section id="home" className="hero__section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-4xl font-bold text-gray-800 leading-[3rem] sm:text-5xl lg:text-6xl">
                <p>{hero.titleLine1}</p>
                <p>{hero.titleLine2}</p>
              </h1>

              <p className="text__para">
                {hero.description}
              </p>

              <div className="flex gap-3 items-center">
                <Link to={hero.primaryCtaHref}>
                  <button className="hero_btn1">{hero.primaryCtaLabel}</button>
                </Link>
                <Link to={hero.secondaryCtaHref}>
                  <button className="hero_btn2">{hero.secondaryCtaLabel}</button>
                </Link>
              </div>

              <div className="pt-[30px]">
                <AvatarCirclesDemo />
              </div>
            </div>

            <div className="mt-[30px] lg:mt-[20px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              {hero.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-2">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    {stat.value}
                  </h2>
                  <span
                    className="h-2 rounded-full block mt-[-14px]"
                    style={{ backgroundColor: stat.accent, width: stat.barWidth }}
                  />
                  <p className="text__para">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex gap-[20px] h-[400px] lg:h-[700px] justify-center items-center px-8">
            <div className="relative z-10">
              <img src={hero.images.hero1} alt="OHI visual story 1" className="w-full rounded" />
            </div>
            <div className="relative z-10 mt-[30px]">
              <img src={hero.images.hero2} alt="OHI visual story 2" className="w-full rounded" />
              <img src={hero.images.hero3} alt="OHI visual story 3" className="w-full my-[30px] rounded" />
              <img src={hero.images.hero4} alt="OHI visual story 4" className="w-full rounded" />
            </div>
            <div className="relative z-10">
              <img src={hero.images.hero5} alt="OHI visual story 5" className="w-full rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
