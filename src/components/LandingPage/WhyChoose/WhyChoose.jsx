import React from "react";
import icon01 from "../../../assets/images/icon01.png";
import icon02 from "../../../assets/images/icon02.png";
import icon03 from "../../../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const WhyChoose = () => {
  return (
    <section>
      <div className="container">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">What OHI Stands For</h2>
          <p className="text__para text-center">
            We blend development communication, impact storytelling and
            strategic visibility to help organisations communicate with clarity
            and credibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon01} alt="Development communication" className="h-[100px]" />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Development Communication
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                We help projects explain themselves clearly so communities,
                institutions and partners can understand the value being
                created.
              </p>

              <Link
                to="/#contact"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon02} alt="Impact storytelling" className="h-[100px]" />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Impact Storytelling
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Our narratives turn program results and lived experiences into
                persuasive stories that move decision-makers to action.
              </p>

              <Link
                to="/#services"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>

          <div className="py-[30px] px-5">
            <div className="flex items-center justify-center">
              <img src={icon03} alt="Strategic visibility" className="h-[100px]" />
            </div>

            <div className="mt-[30px]">
              <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Strategic Visibility
              </h2>
              <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                We deliver content that supports credibility, strengthens
                stakeholder alignment and expands the reach of important
                projects.
              </p>

              <Link
                to="/#approach"
                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
              >
                <BsArrowRight className="group-hover:text-white w-6 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
