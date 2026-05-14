import React from "react";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";

export const MissionVisionValues = () => {
  const { config } = useLandingPageConfig();
  const { profile } = config;

  return (
    <section id="values" className="py-24">
      <div className="container">
        <div className="xl:w-[540px] mx-auto text-center">
          <h2 className="heading">{profile.title}</h2>
          <p className="text__para">{profile.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <div className="rounded-3xl border border-[#D9DCE2] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
              Who we are
            </p>
            <h3 className="mt-4 text-2xl font-bold text-headingColor">
              {profile.storyTitle}
            </h3>
            <p className="text__para mt-4">{profile.storyDescription}</p>
          </div>

          <div className="rounded-3xl border border-[#D9DCE2] bg-[#0f172a] p-8 shadow-sm text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Mission
            </p>
            <h3 className="mt-4 text-2xl font-bold">{profile.missionTitle}</h3>
            <p className="mt-4 text-white/75 leading-7">
              {profile.missionDescription}
            </p>
            <p className="mt-6 text-sm text-white/60">
              {profile.visionTitle}: {profile.visionDescription}
            </p>
          </div>

          <div className="rounded-3xl border border-[#D9DCE2] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
              {profile.valuesTitle}
            </p>
            <ul className="mt-6 space-y-3">
              {profile.values.map((value) => (
                <li key={value} className="flex items-start gap-3 text-textColor">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primaryColor" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
