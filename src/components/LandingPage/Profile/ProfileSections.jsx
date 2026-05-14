import React from "react";

const values = [
  "Authentic storytelling",
  "Cultural respect and inclusion",
  "Accountability and leadership",
  "Creative excellence",
  "Collaboration",
];

export const MissionVisionValues = () => {
  return (
    <section id="values" className="py-24">
      <div className="container">
        <div className="xl:w-[540px] mx-auto text-center">
          <h2 className="heading">Mission, Vision and Values</h2>
          <p className="text__para">
            The profile is built around clarity, credibility and human-centered
            impact. These are the principles that shape every OHI project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          <div className="rounded-3xl border border-[#D9DCE2] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
              Who we are
            </p>
            <h3 className="mt-4 text-2xl font-bold text-headingColor">
              Our Story
            </h3>
            <p className="text__para mt-4">
              Founded in 2015 by filmmaker and development communication
              specialist Fombang Banns N., OHI was built on the belief that
              stories move people and change follows movement.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D9DCE2] bg-[#0f172a] p-8 shadow-sm text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
              Mission
            </p>
            <h3 className="mt-4 text-2xl font-bold">Amplify Africa&apos;s stories</h3>
            <p className="mt-4 text-white/75 leading-7">
              To amplify Africa&apos;s development stories with authenticity,
              excellence and strategic clarity, ensuring impactful projects gain
              the visibility, credibility and support they deserve.
            </p>
            <p className="mt-6 text-sm text-white/60">
              Vision: to be Africa&apos;s leading partner in investment-grade
              and development storytelling.
            </p>
          </div>

          <div className="rounded-3xl border border-[#D9DCE2] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
              Core values
            </p>
            <ul className="mt-6 space-y-3">
              {values.map((value) => (
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
