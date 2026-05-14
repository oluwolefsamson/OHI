import React from "react";
import { useEffect, useState } from "react";
import About from "../../components/LandingPage/About/About";
import { MissionVisionValues } from "../../components/LandingPage/Profile/ProfileSections";
import { ContactBand } from "../../components/LandingPage/Profile/ContactBand";
import faqImg from "../../../src/assets/images/faqs.jpeg";
import FaqList from "../../components/LandingPage/Faq/FaqList";
import Hero from "../../components/LandingPage/Hero/Hero";
import WhyChoose from "../../components/LandingPage/WhyChoose/WhyChoose";
import Feature from "../../components/LandingPage/Feature/Feature";
import Gallery from "../../components/LandingPage/Gallery/Gallery";
import GalleryStories from "../../components/LandingPage/Gallery/GalleryStories";
import VideoSection from "../../components/LandingPage/Video/VideoSection";
import HomeSupplierList from "../../components/LandingPage/Supplier/HomeSupplierList";
import ServiceList from "../../components/LandingPage/Services/ServiceList";
import Billing from "../../components/LandingPage/Billing/Billing";
import { Marquee3D } from "../../components/LandingPage/Marquee/Marquee";
import { Skeleton } from "../../components/ui/skeleton";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-10 space-y-10">
        <Skeleton className="w-full h-[200px] rounded-lg" />
        <Skeleton className="w-full h-[120px] rounded-lg" />
        <Skeleton className="w-full h-[120px] rounded-lg" />
        <Skeleton className="w-full h-[120px] rounded-lg" />
        <Skeleton className="w-full h-[120px] rounded-lg" />
        <Skeleton className="w-full h-[350px] rounded-lg" />
        <Skeleton className="w-full h-[120px] rounded-lg" />
      </div>
    );
  }

  return (
    <>
      <Hero />

      <WhyChoose />

      <About />

      <section id="services">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Services</h2>
            <p className="text__para text-center">
              From documentaries to campaign content, OHI helps organisations
              communicate with clarity, credibility and purpose.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>

      <Feature />

      <Gallery />

      <GalleryStories />

      <VideoSection />

      <HomeSupplierList />

      <Billing />

      <MissionVisionValues />

      <ContactBand />

      <section id="faq">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-[30px] md:gap-[50px] lg:gap-0 items-stretch">
            <div className="w-full md:w-1/2 flex">
              <img
                src={faqImg}
                alt="OHI FAQs"
                className="w-[80%] h-full lg:h-[103vh] md:h-[75vh] object-cover rounded"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <h2 className="heading">Frequently Asked Questions</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto mb-[80px] lg:mb-[100px] sm:mb-[30px]">
            <h2 className="heading text-center">Selected Voices</h2>
            <p className="text__para text-center">
              A snapshot of how partners describe OHI&apos;s work across
              development, public sector and private impact projects.
            </p>
          </div>
          <Marquee3D />
        </div>
      </section>
    </>
  );
};

export default Home;
