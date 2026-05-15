import React from "react";
import Reveal from "../ui/reveal";

const SectionHeader = ({ title, description, className = "" }) => {
  return (
    <Reveal className={`mx-auto max-w-3xl text-center ${className}`.trim()}>
      <h2 className="heading">{title}</h2>
      {description ? <p className="text__para">{description}</p> : null}
    </Reveal>
  );
};

export default SectionHeader;
