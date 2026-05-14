import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";

const WhyChoose = () => {
  const { config } = useLandingPageConfig();
  const whyChoose = config.whyChoose;

  return (
    <section>
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">{whyChoose.title}</h2>
          <p className="text__para text-center">{whyChoose.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {whyChoose.cards.map((card) => (
            <div key={card.title} className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={card.image} alt={card.title} className="h-[100px]" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  {card.title}
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  {card.description}
                </p>

                <Link
                  to={card.href}
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
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
