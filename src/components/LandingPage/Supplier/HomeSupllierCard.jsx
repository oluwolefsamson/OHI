import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const HomeSupplierCard = ({ supplier }) => {
  const {
    id,
    name,
    location,
    avgPricePerTon,
    priceTrend,
    photo,
    cropsAvailable,
    marketInsights,
    avgRating,
    totalReviews,
  } = supplier;

  return (
    <article className="group overflow-hidden rounded-[30px] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
      <div className="relative h-[240px] overflow-hidden">
        <img
          src={photo}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor backdrop-blur-sm">
          {avgPricePerTon}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-headingColor">{name}</h2>
        <p className="mt-2 text-sm text-textColor">{location}</p>

        <div className="mt-4 flex items-center gap-2">
          <div className="flex items-center text-yellow-500">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`text-base ${index < avgRating ? "text-yellow-500" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-textColor">({totalReviews})</span>
        </div>

        <div className="mt-5 rounded-[22px] bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
            Core approach
          </p>
          <h3 className="mt-2 text-lg font-semibold text-headingColor">
            {priceTrend.trend}
          </h3>
          <p className="mt-1 text-sm text-textColor">{priceTrend.predicted}</p>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
            What We Deliver
          </p>
          <div className="mt-3 space-y-3">
            {cropsAvailable.map((item) => (
              <div
                key={item.crop}
                className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3 last:border-b-0 last:pb-0"
              >
                <span className="text-sm text-headingColor">{item.crop}</span>
                <span className="text-sm font-semibold text-headingColor">
                  {item.available}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
            Why it matters
          </p>
          <p className="mt-2 text-sm leading-6 text-textColor">
            {marketInsights.demand}
          </p>
          <p className="mt-2 text-sm leading-6 text-textColor">
            {marketInsights.forecast}
          </p>
        </div>

        <div className="mt-6">
          <Link
            to="/#contact"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primaryColor text-white transition-transform duration-300 hover:translate-x-1"
            aria-label={`Contact OHI about ${name}`}
          >
            <BsArrowRight className="text-xl" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default HomeSupplierCard;
