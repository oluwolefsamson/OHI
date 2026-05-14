import React from "react";

const SectionHeader = ({ title, description, className = "" }) => {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`.trim()}>
      <h2 className="heading">{title}</h2>
      {description ? <p className="text__para">{description}</p> : null}
    </div>
  );
};

export default SectionHeader;
