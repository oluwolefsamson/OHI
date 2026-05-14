import React from "react";
import { suppliers } from "../../../assets/data/suppliers";
import HomeSupplierCard from "./HomeSupplierCard";
import SectionHeader from "../SectionHeader";

const HomeSupplierList = () => {
  return (
    <section
      id="clients"
      className="py-24 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_34%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)]"
    >
      <div className="container mx-auto px-4 sm:px-5 lg:px-20">
        <SectionHeader
          title="OHI partners with institutions and brands that need stories with credibility, clarity and measurable impact"
          description="The section is styled with a hero-page rhythm: big statement, refined spacing, and cards that feel editorial rather than generic."
          className="max-w-4xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {suppliers.map((supplier) => (
            <HomeSupplierCard key={supplier.id} supplier={supplier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSupplierList;
