import React from "react";
import { motion } from "framer-motion";
import { AvatarCirclesDemo } from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";

const Hero = () => {
  const { config } = useLandingPageConfig();
  const hero = config.hero;

  return (
    <section id="home" className="hero__section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center lg:gap-[90px]">
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="w-full lg:w-[570px]">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl font-bold text-gray-800 leading-[3rem] sm:text-5xl lg:text-6xl"
              >
                <p>{hero.titleLine1}</p>
                <p>{hero.titleLine2}</p>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="text__para"
              >
                {hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-full flex-col gap-3 pt-4 items-stretch sm:flex-row sm:items-center sm:pt-0"
              >
                <Link to={hero.primaryCtaHref}>
                  <button className="hero_btn1 !mt-0 w-full transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.15)] sm:w-auto">
                    {hero.primaryCtaLabel}
                  </button>
                </Link>
                <Link to={hero.secondaryCtaHref}>
                  <button className="hero_btn2 !mt-0 w-full transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.08)] sm:w-auto">
                    {hero.secondaryCtaLabel}
                  </button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="pt-[30px]"
              >
                <AvatarCirclesDemo />
              </motion.div>
            </div>

            <div className="mt-[30px] flex flex-col items-start gap-5 lg:mt-[20px] lg:flex-row lg:items-center lg:gap-[30px]">
              {hero.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-2"
                >
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    {stat.value}
                  </h2>
                  <span
                    className="h-2 rounded-full block mt-[-14px]"
                    style={{ backgroundColor: stat.accent, width: stat.barWidth }}
                  />
                  <p className="text__para">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 72, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="relative grid w-full max-w-[720px] grid-cols-3 gap-2 overflow-visible pt-6 sm:gap-3 sm:pt-0 lg:flex lg:min-h-[700px] lg:max-w-none lg:flex-row lg:items-center lg:justify-center lg:gap-[12px]"
          >
            <motion.div
              initial={{ y: 24, rotate: -2 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 col-span-1 overflow-hidden rounded-2xl lg:w-[31%]"
            >
              <img
                src={hero.images.hero1}
                alt="OHI visual story 1"
                className="h-[220px] w-full object-cover transition duration-500 ease-out hover:scale-[1.02] sm:h-[280px] lg:h-full"
              />
            </motion.div>
            <div className="relative z-10 col-span-1 -mt-7 flex flex-col gap-2 overflow-hidden rounded-2xl sm:-mt-8 sm:gap-3 lg:mt-[30px] lg:w-[36%] lg:gap-[20px]">
              <motion.img
                initial={{ y: 36, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                src={hero.images.hero5}
                alt="OHI visual story 2"
                className="h-[100px] w-full object-cover transition duration-500 ease-out hover:scale-[1.02] sm:h-[145px] lg:h-[250px]"
              />
              <motion.img
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                src={hero.images.hero3}
                alt="OHI visual story 3"
                className="h-[76px] w-full object-cover transition duration-500 ease-out hover:scale-[1.02] sm:h-[108px] lg:h-[150px]"
              />
              <motion.img
                initial={{ y: 36, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
                src={hero.images.hero5}
                alt="OHI visual story 4"
                className="h-[76px] w-full object-cover transition duration-500 ease-out hover:scale-[1.02] sm:h-[108px] lg:h-[150px]"
              />
            </div>
            <motion.div
              initial={{ y: 24, rotate: 2 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 col-span-1 overflow-hidden rounded-2xl lg:w-[31%]"
            >
              <img
                src={hero.images.hero1}
                alt="OHI visual story 5"
                className="h-[220px] w-full object-cover transition duration-500 ease-out hover:scale-[1.02] sm:h-[280px] lg:h-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
