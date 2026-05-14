import React from "react";
import { suppliers } from "../../../assets/data/suppliers";
import HomeSupplierCard from "./HomeSupllierCard";

const HomeSupplierList = () => {
  return (
    <section
      id="clients"
      className="py-24 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_34%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)]"
    >
      <div className="container mx-auto px-5 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
            Who We Serve
          </p>
          <h2 className="heading mt-4">
            OHI partners with institutions and brands that need stories with
            credibility, clarity and measurable impact
          </h2>
          <p className="text__para mt-4">
            The section is styled with a hero-page rhythm: big statement,
            refined spacing, and cards that feel editorial rather than generic.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {suppliers.map((supplier) => (
            <HomeSupplierCard key={supplier.id} supplier={supplier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSupplierList;
