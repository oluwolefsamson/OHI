import React from "react";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import SectionHeader from "../SectionHeader";

const Gallery = () => {
  const { config } = useLandingPageConfig();

  return (
    <section id="gallery" className="py-24">
      <div className="container">
        <SectionHeader
          title={config.gallery.title}
          description={config.gallery.description}
          className="max-w-[560px]"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-5">
          {config.gallery.items.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[18px] shadow-lg ${item.span || ""}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">
                  {item.category}
                </p>
                <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
