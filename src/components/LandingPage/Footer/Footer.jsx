import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import Logo from "../Logo/Logo.jsx";
import { Skeleton } from "../../ui/skeleton";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";

const socialLinks = [
  {
    path: "https://olympianhouseintl.com",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "mailto:contact@olympianhouseintl.com",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "tel:+237671646331",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path: "https://www.linkedin.com",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
];

const quickLinks01 = [
  { path: "/#home", display: "Home" },
  { path: "/#about", display: "Our Story" },
  { path: "/#services", display: "Services" },
  { path: "/#clients", display: "Clients" },
];

const quickLinks02 = [
  { path: "/#value-proposition", display: "Value Proposition" },
  { path: "/#strengths", display: "Strengths" },
  { path: "/#approach", display: "Our Approach" },
  { path: "/#contact", display: "Contact Details" },
];

const quickLinks03 = [
  { path: "/#faq", display: "Support & FAQs" },
  { path: "/#contact", display: "Get in Touch" },
];

const Footer = () => {
  const [loading, setLoading] = useState(true);
  const year = new Date().getFullYear();
  const { config } = useLandingPageConfig();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <footer
        id="contact"
        className="bg-no-repeat bg-center bg-cover pb-16 pt-10"
        style={{ backgroundImage: "var(--ohi-hero-bg)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div className="max-w-[420px]">
              <Skeleton className="w-[120px] h-[40px] rounded-lg mb-4" />
              <Skeleton className="w-[220px] h-[20px] rounded mb-2" />
              <div className="flex items-center gap-3 mt-4">
                <Skeleton className="w-9 h-9 rounded-full" />
                <Skeleton className="w-9 h-9 rounded-full" />
                <Skeleton className="w-9 h-9 rounded-full" />
                <Skeleton className="w-9 h-9 rounded-full" />
              </div>
            </div>
            <div>
              <Skeleton className="w-[120px] h-[28px] rounded mb-4" />
              <Skeleton className="w-[120px] h-[20px] rounded mb-2" />
              <Skeleton className="w-[120px] h-[20px] rounded mb-2" />
              <Skeleton className="w-[120px] h-[20px] rounded mb-2" />
              <Skeleton className="w-[120px] h-[20px] rounded mb-2" />
            </div>
            <div>
              <Skeleton className="w-[120px] h-[28px] rounded mb-4" />
              <Skeleton className="w-[120px] h-[20px] rounded mb-2" />
              <Skeleton className="w-[120px] h-[20px] rounded mb-2" />
              <Skeleton className="w-[120px] h-[20px] rounded mb-2" />
              <Skeleton className="w-[120px] h-[20px] rounded mb-2" />
            </div>
            <div>
              <Skeleton className="w-[120px] h-[28px] rounded mb-4" />
              <Skeleton className="w-[120px] h-[20px] rounded mb-2" />
              <Skeleton className="w-[120px] h-[20px] rounded mb-2" />
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      id="contact"
      className="bg-no-repeat bg-center bg-cover pb-16 pt-10"
      style={{ backgroundImage: "var(--ohi-hero-bg)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex flex-col items-start">
            <Logo />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4 max-w-[320px]">
              {config.footer.description.replace("{year}", year)}
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <a
                  href={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-primaryColor/30 rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-primaryColor"
                  target={link.path.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.path.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label="Open OHI contact link"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Services
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
