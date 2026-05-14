import React from "react";
import hero1 from "../../../assets/images/HeroImg/hero1.jpg";
import hero2 from "../../../assets/images/HeroImg/hero2.jpg";
import hero3 from "../../../assets/images/HeroImg/hero3.jpg";
import aboutImg from "../../../assets/images/about.jpg";
import featureImg from "../../../assets/images/feature-img.jpg";
import faqImg from "../../../assets/images/faqs.jpeg";
import rev1 from "../../../assets/images/rev1.jpg";
import rev4 from "../../../assets/images/rev4.jpg";

const galleryItems = [
  {
    title: "Field stories",
    category: "Documentary coverage",
    image: hero1,
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Development visibility",
    category: "Program reporting",
    image: aboutImg,
  },
  {
    title: "Impact moments",
    category: "Human-centered storytelling",
    image: featureImg,
  },
  {
    title: "Partner voices",
    category: "Testimonials",
    image: rev1,
  },
  {
    title: "Mission coverage",
    category: "On-location production",
    image: hero2,
  },
  {
    title: "Community engagement",
    category: "Strategic visibility",
    image: faqImg,
  },
  {
    title: "Investment narratives",
    category: "Private-sector content",
    image: hero3,
  },
  {
    title: "Stakeholder confidence",
    category: "Brand trust",
    image: rev4,
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container">
        <div className="xl:w-[560px] mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
            Gallery
          </p>
          <h2 className="heading text-center mt-4">Selected Visual Moments</h2>
          <p className="text__para text-center">
            A curated view of OHI&apos;s production language across development
            communication, mission coverage and partner storytelling.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-5">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className={`group relative overflow-hidden rounded-[28px] shadow-lg ${item.span || ""}`}
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
