import React from "react";
import Contact from "../../../components/Contact/Contact";
import ContactMap from "../../../components/ContactMap/ContactMap";
import ContactForm from "../../../components/ContactForm/ContactForm";
import contactHeroVideo from "../../../assets/img/OHI-video.mp4";

const ContactPage = () => {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-slate-950">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={contactHeroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,36,0.34)_0%,rgba(6,20,36,0.72)_55%,rgba(6,20,36,0.95)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#0f4c81]" />

        <div className="relative container mx-auto px-4 pb-20 pt-28 sm:px-5 lg:px-20 lg:pb-28 lg:pt-32">
          <div className="max-w-4xl">
            <h1 className="inline-block border-b-[10px] border-[#f59e0b] pb-3 text-5xl font-extrabold leading-none tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      <Contact />
      <ContactMap />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
