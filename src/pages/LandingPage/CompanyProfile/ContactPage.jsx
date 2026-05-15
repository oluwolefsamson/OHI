import React from "react";
import { ArrowRight, Globe, Mail, MapPinned, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";

const ContactPage = () => {
  const { config } = useLandingPageConfig();

  const contacts = [
    {
      label: "Office",
      value: "Mendong MAETUR - Yaounde",
      icon: MapPinned,
    },
    {
      label: "Email",
      value: "contact@olympianhouseintl.com",
      icon: Mail,
      href: "mailto:contact@olympianhouseintl.com",
    },
    {
      label: "General",
      value: "fbanns1@gmail.com",
      icon: Globe,
      href: "mailto:fbanns1@gmail.com",
    },
    {
      label: "Phone",
      value: "+237 671 646 331",
      icon: Phone,
      href: "tel:+237671646331",
    },
  ];

  return (
    <ProfilePageShell
      eyebrow="Contact us"
      title="Reach out to Olympian House International"
      description="Use the details below if you want to discuss a project, a partnership, or a visibility campaign."
      primaryCta={{ label: "Go to profile", href: "/company-profile" }}
      secondaryCta={{ label: "See services", href: "/services" }}
      heroBadge={
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryColor">
            Direct contact
          </p>
          <p className="mt-1 text-sm leading-6 text-textColor">
            Available for development communication, impact storytelling, and strategic visibility projects.
          </p>
        </div>
      }
      statCards={[
        {
          eyebrow: "Phone",
          value: "+237",
          label: "Local and WhatsApp contact options listed in the profile.",
        },
        {
          eyebrow: "Email",
          value: "24/7",
          label: "Project and partnership inquiries can be sent any time.",
        },
        {
          eyebrow: "Region",
          value: "Africa",
          label: "Work focused on African development and investment stories.",
        },
      ]}
    >
      <section>
        <SectionHeader
          title="Fastest ways to reach OHI"
          description="These details come directly from the profile document and should be used for direct outreach."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contacts.map((item) => {
            const cardClass = "rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm";

            if (item.href) {
              return (
                <a key={item.label} href={item.href} className={cardClass}>
                  <item.icon className="h-5 w-5 text-primaryColor" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
                    {item.label}
                  </p>
                  <p className="mt-3 text-xl font-bold text-headingColor">{item.value}</p>
                </a>
              );
            }

            return (
              <div key={item.label} className={cardClass}>
                <item.icon className="h-5 w-5 text-primaryColor" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
                  {item.label}
                </p>
                <p className="mt-3 text-xl font-bold text-headingColor">{item.value}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-[#D9DCE2] bg-[#0f172a] p-6 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Social and web
          </p>
          <h3 className="mt-4 text-3xl font-bold">Visit the company online</h3>
          <div className="mt-6 space-y-3">
            {[
              { label: "Website", href: "https://olympianhouseintl.com" },
              { label: "#Olympian House International", href: "https://olympianhouseintl.com" },
              { label: "WhatsApp", href: "tel:+237691377313" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/15"
              >
                {item.label}
                <ArrowRight className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
            Footer details
          </p>
          <p className="text__para">
            {config.footer.description.replace("{year}", new Date().getFullYear())}
          </p>
          <div className="mt-6">
            <Link to="/company-profile">
              <button className="btn inline-flex items-center gap-2">
                Review profile <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default ContactPage;
