import React from "react";
import { Link } from "react-router-dom";
import profileHeroVideo from "../../../assets/img/OHI-video.mp4";

export default function ProfilePageShell({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  heroBadge,
  statCards = [],
  heroVariant = "default",
  titleClassName = "",
  children,
}) {
  return (
    <>
      <section className="hero__section pt-[18px]">
        <div
          className={`relative w-full overflow-hidden rounded-none ${
            heroVariant === "minimal"
              ? "bg-slate-950"
              : "border-y border-black/10 bg-slate-900 shadow-[0_28px_80px_rgba(15,23,42,0.24)]"
          }`}
        >
          {heroVariant === "minimal" ? (
            <>
              <video
                className="absolute inset-0 h-full w-full object-cover opacity-60"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={profileHeroVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,20,36,0.18)_0%,rgba(6,20,36,0.52)_55%,rgba(6,20,36,0.78)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-2 bg-[#0f4c81]" />
              <div className="relative container mx-auto min-h-[340px] px-4 pb-20 pt-28 sm:min-h-[400px] sm:px-5 lg:min-h-[460px] lg:px-20 lg:pb-28 lg:pt-32">
                <div className="max-w-4xl">
                  <h1
                    className={`inline-block border-b-[10px] border-[#f59e0b] pb-3 text-4xl font-extrabold leading-none tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl ${titleClassName}`.trim()}
                  >
                    {title}
                  </h1>
                </div>
              </div>
            </>
          ) : (
            <>
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={profileHeroVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,22,36,0.84)_0%,rgba(5,22,36,0.58)_46%,rgba(5,22,36,0.22)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(5,193,255,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(249,161,27,0.12),transparent_30%)]" />

              <div className="relative z-10 flex min-h-[460px] flex-col justify-center py-8 lg:min-h-[540px] lg:py-10">
                <div className="container">
                  <div className="max-w-2xl">
                    {eyebrow ? (
                      <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80">
                        {eyebrow}
                      </p>
                    ) : null}
                    <h1
                      className={`mt-3 max-w-xl text-3xl font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl xl:text-[4rem] ${titleClassName}`.trim()}
                    >
                      {title}
                    </h1>
                    <p className="mt-4 max-w-lg text-sm leading-6 text-white/78 sm:text-base">
                      {description}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {primaryCta ? (
                        <Link to={primaryCta.href}>
                          <button className="hero_btn1 !mt-0 inline-flex items-center gap-2 bg-[#ff8f1f] text-white shadow-[0_18px_42px_rgba(255,143,31,0.28)] hover:brightness-110">
                            {primaryCta.label}
                          </button>
                        </Link>
                      ) : null}
                      {secondaryCta ? (
                        <Link to={secondaryCta.href}>
                          <button className="hero_btn2 !mt-0 inline-flex items-center gap-2 border-white/20 bg-white text-[#0b3550] shadow-[0_18px_42px_rgba(255,255,255,0.16)] hover:bg-white/95">
                            {secondaryCta.label}
                          </button>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>

                {heroBadge ? (
                  <div className="absolute bottom-6 right-6 hidden max-w-[280px] rounded-[22px] border border-white/18 bg-white/88 px-4 py-3 text-slate-800 shadow-xl backdrop-blur-md lg:block">
                    {heroBadge}
                  </div>
                ) : null}
              </div>
            </>
          )}
        </div>
        {statCards.length > 0 ? (
          <div className="container -mt-8 pb-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {statCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-[22px] border border-[#D9DCE2] bg-white/96 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primaryColor">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-headingColor">
                    {card.value}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-textColor">
                    {card.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <div className="container pb-16">{children}</div>
    </>
  );
}
