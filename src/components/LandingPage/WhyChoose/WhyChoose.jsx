import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import SectionHeader from "../SectionHeader";

const WhyChoose = () => {
  const { config } = useLandingPageConfig();
  const whyChoose = config.whyChoose;

  return (
    <section>
      <div className="container">
        <SectionHeader
          title={whyChoose.title}
          description={whyChoose.description}
        />

        <div className="grid grid-cols-1 gap-5 mt-[30px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg:mt-[55px]">
          {whyChoose.cards.map((card) => (
            <div key={card.title} className="rounded-[24px] border border-slate-100 bg-white/60 py-[30px] px-4 sm:px-5 shadow-sm">
              <div className="flex items-center justify-center">
                <img src={card.image} alt={card.title} className="h-[84px] sm:h-[100px] w-auto" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[22px] leading-8 sm:text-[26px] sm:leading-9 text-headingColor font-[700] text-center">
                  {card.title}
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  {card.description}
                </p>

                <Link
                  to={card.href}
                  className="w-[44px] h-[44px] rounded-full border border-solid border-primaryColor/30 mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-primaryColor"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
