import React from "react";
import { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Globe } from "lucide-react";
import contactImg from "../../assets/images/Gallery/gallery-11.jpeg";

const contactOptions = [
  {
    label: "Call",
    action: "Call Now",
    href: "tel:+237671646331",
    icon: <MdCall size={22} className="text-emerald-700" />,
  },
  {
    label: "WhatsApp",
    action: "Chat Now",
    href: "https://wa.me/237691377313",
    icon: <FaWhatsapp size={22} className="text-emerald-700" />,
  },
  {
    label: "Email",
    action: "Send Mail",
    href: "mailto:contact@olympianhouseintl.com",
    icon: <BiLogoGmail size={22} className="text-emerald-700" />,
  },
  {
    label: "Website",
    action: "Visit Site",
    href: "https://olympianhouseintl.com",
    icon: <Globe size={22} className="text-emerald-700" />,
  },
];

const Contact = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative bg-[#f4f7f3] py-12 lg:py-28">
      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">
              Let&apos;s Connect
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 md:text-5xl">
                We make it easy to reach a real project lead.
              </h2>
              <p className="max-w-xl text-lg text-slate-700">
                Whether you need a quick introduction or a full project brief,
                our team is ready to respond with clear guidance.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactOptions.map((option) => (
                <div
                  key={option.label}
                  className="group rounded-2xl border border-emerald-900/10 bg-white/80 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(5,150,105,0.18)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100/80">
                      {option.icon}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-slate-900">
                        {option.label}
                      </p>
                      <p className="text-sm text-slate-600">
                        Typical response within one business day
                      </p>
                    </div>
                  </div>
                  <a
                    href={option.href}
                    className="mt-4 block rounded-full border border-emerald-700/20 bg-emerald-50 px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800 transition hover:bg-emerald-700 hover:text-white"
                  >
                    {option.action}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
              <span className="rounded-full border border-emerald-700/20 bg-white/80 px-4 py-2 font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Project Support
              </span>
              <span className="rounded-full border border-emerald-700/20 bg-white/80 px-4 py-2 font-semibold uppercase tracking-[0.2em] text-emerald-800">
                Creative Team
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/80 shadow-[0_22px_45px_rgba(15,23,42,0.12)]">
              {!imageLoaded && (
                <div className="h-[520px] w-full animate-pulse bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50" />
              )}
              <img
                src={contactImg}
                alt="Contact"
                onLoad={() => setImageLoaded(true)}
                className={`h-[520px] w-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className="absolute -bottom-8 left-8 rounded-2xl border border-emerald-900/10 bg-white/90 px-5 py-4 text-sm text-slate-700 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
              <p className="font-semibold text-slate-900">Office Hours</p>
              <p className="mt-1">Mon-Fri - 8:00am - 6:00pm</p>
              <p className="text-xs text-slate-500">Project support by request.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
