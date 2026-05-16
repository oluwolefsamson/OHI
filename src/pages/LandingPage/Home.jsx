import React from "react";
import { useEffect, useState } from "react";
import About from "../../components/LandingPage/About/About";
import { MissionVisionValues } from "../../components/LandingPage/Profile/MissionVisionValues";
import { ContactBand } from "../../components/LandingPage/Profile/ContactBand";
import faqImg from "../../assets/img/FAQ.jpg";
import FaqList from "../../components/LandingPage/Faq/FaqList";
import Hero from "../../components/LandingPage/Hero/Hero";
import WhyChoose from "../../components/LandingPage/WhyChoose/WhyChoose";
import Feature from "../../components/LandingPage/Feature/Feature";
import Gallery from "../../components/LandingPage/Gallery/Gallery";
import GalleryStories from "../../components/LandingPage/Gallery/GalleryStories";
import VideoSection from "../../components/LandingPage/Video/VideoSection";
import Brochure from "../../components/Brochure/Brochure";
import HomeSupplierList from "../../components/LandingPage/Supplier/HomeSupplierList";
import ServiceList from "../../components/LandingPage/Services/ServiceList";
import ValueProposition from "../../components/LandingPage/ValueProposition/ValueProposition";
import { Marquee3D } from "../../components/LandingPage/Marquee/Marquee";
import { Skeleton } from "../../components/ui/skeleton";
import { useLandingPageConfig } from "../../context/LandingPageConfigContext";
import SectionHeader from "../../components/LandingPage/SectionHeader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { config } = useLandingPageConfig();

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
          <SectionHeader
            title={config.services.title}
            description={config.services.description}
          />
          <ServiceList />
        </div>
      </section>

      <Feature />

      <Gallery />

      <GalleryStories />

      <VideoSection />

      <Brochure />

      <HomeSupplierList />

      <ValueProposition />

      <MissionVisionValues />

      <ContactBand />

      <section id="faq">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between gap-[30px] md:gap-[64px] lg:gap-[96px] xl:gap-[120px] items-stretch">
            <div className="w-full md:w-1/2 flex">
              <img
                src={faqImg}
                alt="OHI FAQs"
                className="w-full h-[280px] rounded object-cover sm:h-[400px] md:h-[520px] lg:h-[680px]"
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
          <SectionHeader
            title={config.voices.title}
            description={config.voices.description}
            className="mb-[80px] lg:mb-[100px] sm:mb-[30px]"
          />
          <Marquee3D />
        </div>
      </section>
    </>
  );
};

export default Home;
