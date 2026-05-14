import React from "react";
import { Link } from "react-router-dom";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";

const About = () => {
  const { config } = useLandingPageConfig();
  const about = config.about;

  return (
    <section id="about">
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          <div className="relative z-10 xl:w-[750px] flex justify-start mt-[50px] lg:mt-0">
            <img
              src={about.image}
              className="w-3/4 rounded"
              alt="Olympian House International"
            />

            <div className="w-[150px] lg:w-[240px] bg-gray-200 absolute bottom-[50px] right-0 md:bottom-[100px] md:right-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    {about.overlay.since}
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                    {about.overlay.tagline}
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={about.overlay.icon} alt="" />
                </span>
              </div>

              <div className="w-[65px] lg:w-[56px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[9px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                {about.overlay.trustLabel}
              </div>

              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={about.overlay.avatar} alt="" className="h-[50px] rounded-full" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                  {about.overlay.role}
                </h4>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">{about.title}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text__para">
                {paragraph}
              </p>
            ))}

            <Link to="/#contact">
              <button className="btn">Contact OHI</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
