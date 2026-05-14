import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { useLandingPageConfig } from "../../context/LandingPageConfigContext";
import { ArrowRightIcon, RotateCcwIcon, SparklesIcon } from "lucide-react";

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function SectionCard({ id, title, description, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 overflow-hidden rounded-[30px] border border-slate-200/80 bg-white/95 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
    >
      <div className="h-1 bg-[linear-gradient(90deg,#0f4c81,#118ab2,#f4b942)]" />
      <div className="border-b border-slate-100 px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
          Section editor
        </p>
        <h2 className="mt-2 text-2xl font-bold text-headingColor">{title}</h2>
        {description && (
          <p className="mt-2 max-w-3xl text-sm leading-6 text-textColor">
            {description}
          </p>
        )}
      </div>
      <div className="px-6 py-6">{children}</div>
    </section>
  );
}

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-headingColor">
        {label}
      </span>
      {children}
      {hint && <span className="mt-2 block text-xs text-textColor">{hint}</span>}
    </label>
  );
}

function TextInput(props) {
  return (
    <input
      {...props}
      className={`w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-primaryColor focus:bg-white ${props.className || ""}`}
    />
  );
}

function TextArea(props) {
  return (
    <textarea
      {...props}
      className={`w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-primaryColor focus:bg-white ${props.className || ""}`}
    />
  );
}

function ImageField({ label, value, onChange, hint }) {
  return (
    <Field label={label} hint={hint}>
      <div className="flex flex-col gap-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 p-4">
        <div className="flex items-center gap-4">
          <img
            src={value}
            alt={label}
            className="h-20 w-20 rounded-2xl object-cover ring-1 ring-slate-200"
          />
          <input
            type="file"
            accept="image/*"
            onChange={onChange}
            className="block w-full text-sm text-textColor file:mr-4 file:rounded-full file:border-0 file:bg-primaryColor file:px-4 file:py-2 file:text-white hover:file:cursor-pointer"
          />
        </div>
      </div>
    </Field>
  );
}

export default function LandingPageManager() {
  const { config, setConfig, resetConfig } = useLandingPageConfig();
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const targetId = location.hash.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  const updateTheme = (key, value) => {
    setConfig((current) => ({
      ...current,
      theme: {
        ...current.theme,
        [key]: value,
      },
    }));
  };

  const updateHero = (key, value) => {
    setConfig((current) => ({
      ...current,
      hero: {
        ...current.hero,
        [key]: value,
      },
    }));
  };

  const updateHeroStat = (index, key, value) => {
    setConfig((current) => {
      const stats = [...current.hero.stats];
      stats[index] = { ...stats[index], [key]: value };
      return {
        ...current,
        hero: {
          ...current.hero,
          stats,
        },
      };
    });
  };

  const updateAbout = (key, value) => {
    setConfig((current) => ({
      ...current,
      about: {
        ...current.about,
        [key]: value,
      },
    }));
  };

  const updateAboutOverlay = (key, value) => {
    setConfig((current) => ({
      ...current,
      about: {
        ...current.about,
        overlay: {
          ...current.about.overlay,
          [key]: value,
        },
      },
    }));
  };

  const updateWhyChoose = (key, value) => {
    setConfig((current) => ({
      ...current,
      whyChoose: {
        ...current.whyChoose,
        [key]: value,
      },
    }));
  };

  const updateWhyChooseCard = (index, key, value) => {
    setConfig((current) => {
      const cards = [...current.whyChoose.cards];
      cards[index] = { ...cards[index], [key]: value };
      return {
        ...current,
        whyChoose: {
          ...current.whyChoose,
          cards,
        },
      };
    });
  };

  const updateFooter = (key, value) => {
    setConfig((current) => ({
      ...current,
      footer: {
        ...current.footer,
        [key]: value,
      },
    }));
  };

  const updateServices = (key, value) => {
    setConfig((current) => ({
      ...current,
      services: {
        ...current.services,
        [key]: value,
      },
    }));
  };

  const updateServiceCard = (index, key, value) => {
    setConfig((current) => {
      const cards = [...current.services.cards];
      cards[index] = { ...cards[index], [key]: value };
      return {
        ...current,
        services: {
          ...current.services,
          cards,
        },
      };
    });
  };

  const updateGallery = (key, value) => {
    setConfig((current) => ({
      ...current,
      gallery: {
        ...current.gallery,
        [key]: value,
      },
    }));
  };

  const updateGalleryItem = (index, key, value) => {
    setConfig((current) => {
      const items = [...current.gallery.items];
      items[index] = { ...items[index], [key]: value };
      return {
        ...current,
        gallery: {
          ...current.gallery,
          items,
        },
      };
    });
  };

  const updateGalleryStories = (key, value) => {
    setConfig((current) => ({
      ...current,
      galleryStories: {
        ...current.galleryStories,
        [key]: value,
      },
    }));
  };

  const updateGalleryLead = (key, value) => {
    setConfig((current) => ({
      ...current,
      galleryStories: {
        ...current.galleryStories,
        lead: {
          ...current.galleryStories.lead,
          [key]: value,
        },
      },
    }));
  };

  const updateGallerySupportIntro = (key, value) => {
    setConfig((current) => ({
      ...current,
      galleryStories: {
        ...current.galleryStories,
        supportIntro: {
          ...current.galleryStories.supportIntro,
          [key]: value,
        },
      },
    }));
  };

  const updateGallerySupportCard = (index, key, value) => {
    setConfig((current) => {
      const supportCards = [...current.galleryStories.supportCards];
      supportCards[index] = { ...supportCards[index], [key]: value };
      return {
        ...current,
        galleryStories: {
          ...current.galleryStories,
          supportCards,
        },
      };
    });
  };

  const updateGalleryStrip = (key, value) => {
    setConfig((current) => ({
      ...current,
      galleryStories: {
        ...current.galleryStories,
        [key]: value,
      },
    }));
  };

  const updateGalleryStripItem = (index, key, value) => {
    setConfig((current) => {
      const stripItems = [...current.galleryStories.stripItems];
      stripItems[index] = { ...stripItems[index], [key]: value };
      return {
        ...current,
        galleryStories: {
          ...current.galleryStories,
          stripItems,
        },
      };
    });
  };

  const updateVideo = (key, value) => {
    setConfig((current) => ({
      ...current,
      video: {
        ...current.video,
        [key]: value,
      },
    }));
  };

  const updateVideoLead = (key, value) => {
    setConfig((current) => ({
      ...current,
      video: {
        ...current.video,
        lead: {
          ...current.video.lead,
          [key]: value,
        },
      },
    }));
  };

  const updateVideoClip = (index, key, value) => {
    setConfig((current) => {
      const clips = [...current.video.clips];
      clips[index] = { ...clips[index], [key]: value };
      return {
        ...current,
        video: {
          ...current.video,
          clips,
        },
      };
    });
  };

  const updateProfile = (key, value) => {
    setConfig((current) => ({
      ...current,
      profile: {
        ...current.profile,
        [key]: value,
      },
    }));
  };

  const updateVoices = (key, value) => {
    setConfig((current) => ({
      ...current,
      voices: {
        ...current.voices,
        [key]: value,
      },
    }));
  };

  const updateVoiceReview = (index, key, value) => {
    setConfig((current) => {
      const reviews = [...current.voices.reviews];
      reviews[index] = { ...reviews[index], [key]: value };
      return {
        ...current,
        voices: {
          ...current.voices,
          reviews,
        },
      };
    });
  };

  const handleImageUpload = async (event, apply) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const dataUrl = await readFileAsDataUrl(file);
      apply(String(dataUrl));
      toast.success("Image updated");
    } catch {
      toast.error("Could not read that image");
    } finally {
      event.target.value = "";
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mb-8 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primaryColor">
              OHI Homepage Manager
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-headingColor sm:text-5xl">
              Control the public OHI homepage from one focused editor
            </h1>
            <p className="mt-4 max-w-3xl text__para">
              Edit the sections wired to the homepage config: hero, about,
              Why OHI, theme colors, gallery, video, mission, values, and
              footer content. Changes are saved to this browser and reflected
              on the public landing page.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-primaryColor px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(15,76,129,0.24)] transition hover:translate-y-[-1px] hover:brightness-110"
                onClick={() => {
                  resetConfig();
                  toast.success("Homepage content reset to defaults");
                }}
              >
                <RotateCcwIcon className="h-4 w-4" />
                Reset defaults
              </button>
              <Link
                to="/dashboard/overview"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Back to overview
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl bg-slate-50/80 p-4">
              <div className="flex items-center gap-2">
                <SparklesIcon className="h-4 w-4 text-[#0f4c81]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Live preview
                </p>
              </div>
              <p className="mt-2 text-sm leading-6 text-textColor">
                Changes update immediately in the browser.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Focus
              </p>
              <p className="mt-2 text-sm leading-6 text-textColor">
                Cleaner hierarchy, less repetition, clearer editing flow.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Scope
              </p>
              <p className="mt-2 text-sm leading-6 text-textColor">
                Homepage, theme settings, and content blocks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SectionCard
        id="what-can-be-edited"
        title="What can be edited now"
        description="These are the homepage sections that are connected to the admin config today."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Hero headline, CTA text, stat blocks, and five hero images",
            "About OHI copy, main image, and overlay card",
            "Why OHI section titles, cards, links, and images",
            "Who We Serve section title, copy, and service cards",
            "Gallery grid, gallery stories, and strip items",
            "Video section title, lead clip, and supporting clips",
            "Mission, Vision and Values text and value list",
            "Selected Voices title, description, and review cards",
            "Primary and accent colors plus hero/header backgrounds",
            "Footer copy and contact details",
            "Logo and favicon assets are managed from the app shell",
            "FAQ, testimonial, and feature sections are still code-managed",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-textColor"
            >
              {item}
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="space-y-6">
        <SectionCard
          id="theme-settings"
          title="Theme Settings"
          description="Set the brand colors and page backgrounds used by the public OHI homepage."
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Field label="Primary color">
              <input
                type="color"
                value={config.theme.primaryColor}
                onChange={(e) => updateTheme("primaryColor", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white p-1"
              />
            </Field>
            <Field label="Accent color">
              <input
                type="color"
                value={config.theme.accentColor}
                onChange={(e) => updateTheme("accentColor", e.target.value)}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white p-1"
              />
            </Field>
            <ImageField
              label="Hero background"
              value={config.theme.heroBgImage}
              onChange={(e) =>
                handleImageUpload(e, (value) => updateTheme("heroBgImage", value))
              }
              hint="This powers the background behind the hero section."
            />
            <ImageField
              label="Header background"
              value={config.theme.headerBgImage}
              onChange={(e) =>
                handleImageUpload(e, (value) =>
                  updateTheme("headerBgImage", value)
                )
              }
              hint="Used behind the top navigation area."
            />
          </div>
        </SectionCard>

        <SectionCard
          id="hero-content"
          title="Hero Content"
          description="Update the headline, call-to-action labels, numbers, and hero gallery images."
        >
          <div className="grid gap-6 xl:grid-cols-2">
            <div className="space-y-5">
              <Field label="Title line 1">
                <TextInput
                  value={config.hero.titleLine1}
                  onChange={(e) => updateHero("titleLine1", e.target.value)}
                />
              </Field>
              <Field label="Title line 2">
                <TextInput
                  value={config.hero.titleLine2}
                  onChange={(e) => updateHero("titleLine2", e.target.value)}
                />
              </Field>
              <Field label="Description">
                <TextArea
                  rows={6}
                  value={config.hero.description}
                  onChange={(e) => updateHero("description", e.target.value)}
                />
              </Field>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Primary CTA label">
                  <TextInput
                    value={config.hero.primaryCtaLabel}
                    onChange={(e) =>
                      updateHero("primaryCtaLabel", e.target.value)
                    }
                  />
                </Field>
                <Field label="Primary CTA link">
                  <TextInput
                    value={config.hero.primaryCtaHref}
                    onChange={(e) =>
                      updateHero("primaryCtaHref", e.target.value)
                    }
                  />
                </Field>
                <Field label="Secondary CTA label">
                  <TextInput
                    value={config.hero.secondaryCtaLabel}
                    onChange={(e) =>
                      updateHero("secondaryCtaLabel", e.target.value)
                    }
                  />
                </Field>
                <Field label="Secondary CTA link">
                  <TextInput
                    value={config.hero.secondaryCtaHref}
                    onChange={(e) =>
                      updateHero("secondaryCtaHref", e.target.value)
                    }
                  />
                </Field>
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid gap-4 md:grid-cols-3">
                {config.hero.stats.map((stat, index) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <Field label={`Stat ${index + 1} value`}>
                      <TextInput
                        value={stat.value}
                        onChange={(e) =>
                          updateHeroStat(index, "value", e.target.value)
                        }
                      />
                    </Field>
                    <Field label={`Stat ${index + 1} label`}>
                      <TextInput
                        value={stat.label}
                        onChange={(e) =>
                          updateHeroStat(index, "label", e.target.value)
                        }
                      />
                    </Field>
                    <Field label="Accent">
                      <input
                        type="color"
                        value={stat.accent}
                        onChange={(e) =>
                          updateHeroStat(index, "accent", e.target.value)
                        }
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white p-1"
                      />
                    </Field>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <ImageField
                  label="Hero image 1"
                  value={config.hero.images.hero1}
                  onChange={(e) =>
                    handleImageUpload(e, (value) =>
                      setConfig((current) => ({
                        ...current,
                        hero: {
                          ...current.hero,
                          images: { ...current.hero.images, hero1: value },
                        },
                      }))
                    )
                  }
                />
                <ImageField
                  label="Hero image 2"
                  value={config.hero.images.hero2}
                  onChange={(e) =>
                    handleImageUpload(e, (value) =>
                      setConfig((current) => ({
                        ...current,
                        hero: {
                          ...current.hero,
                          images: { ...current.hero.images, hero2: value },
                        },
                      }))
                    )
                  }
                />
                <ImageField
                  label="Hero image 3"
                  value={config.hero.images.hero3}
                  onChange={(e) =>
                    handleImageUpload(e, (value) =>
                      setConfig((current) => ({
                        ...current,
                        hero: {
                          ...current.hero,
                          images: { ...current.hero.images, hero3: value },
                        },
                      }))
                    )
                  }
                />
                <ImageField
                  label="Hero image 4"
                  value={config.hero.images.hero4}
                  onChange={(e) =>
                    handleImageUpload(e, (value) =>
                      setConfig((current) => ({
                        ...current,
                        hero: {
                          ...current.hero,
                          images: { ...current.hero.images, hero4: value },
                        },
                      }))
                    )
                  }
                />
                <ImageField
                  label="Hero image 5"
                  value={config.hero.images.hero5}
                  onChange={(e) =>
                    handleImageUpload(e, (value) =>
                      setConfig((current) => ({
                        ...current,
                        hero: {
                          ...current.hero,
                          images: { ...current.hero.images, hero5: value },
                        },
                      }))
                    )
                  }
                />
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="about-ohi"
          title="About Section"
          description="Edit the story block shown below the hero."
        >
          <div className="grid gap-6 xl:grid-cols-2">
            <div className="space-y-5">
              <Field label="Section title">
                <TextInput
                  value={config.about.title}
                  onChange={(e) => updateAbout("title", e.target.value)}
                />
              </Field>
              {config.about.paragraphs.map((paragraph, index) => (
                <Field key={index} label={`Paragraph ${index + 1}`}>
                  <TextArea
                    rows={5}
                    value={paragraph}
                    onChange={(e) => {
                      const next = [...config.about.paragraphs];
                      next[index] = e.target.value;
                      updateAbout("paragraphs", next);
                    }}
                  />
                </Field>
              ))}
              <ImageField
                label="About image"
                value={config.about.image}
                onChange={(e) =>
                  handleImageUpload(e, (value) => updateAbout("image", value))
                }
              />
            </div>

            <div className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h3 className="text-lg font-bold text-headingColor">Overlay card</h3>
              <Field label="Since label">
                <TextInput
                  value={config.about.overlay.since}
                  onChange={(e) => updateAboutOverlay("since", e.target.value)}
                />
              </Field>
              <Field label="Tagline">
                <TextInput
                  value={config.about.overlay.tagline}
                  onChange={(e) => updateAboutOverlay("tagline", e.target.value)}
                />
              </Field>
              <Field label="Trust label">
                <TextInput
                  value={config.about.overlay.trustLabel}
                  onChange={(e) =>
                    updateAboutOverlay("trustLabel", e.target.value)
                  }
                />
              </Field>
              <Field label="Role label">
                <TextInput
                  value={config.about.overlay.role}
                  onChange={(e) => updateAboutOverlay("role", e.target.value)}
                />
              </Field>
              <ImageField
                label="Overlay icon"
                value={config.about.overlay.icon}
                onChange={(e) =>
                  handleImageUpload(e, (value) =>
                    updateAboutOverlay("icon", value)
                  )
                }
              />
              <ImageField
                label="Overlay avatar"
                value={config.about.overlay.avatar}
                onChange={(e) =>
                  handleImageUpload(e, (value) =>
                    updateAboutOverlay("avatar", value)
                  )
                }
              />
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="why-ohi"
          title="Why OHI Section"
          description="Adjust the three feature cards that sit below the about block."
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={config.whyChoose.title}
                onChange={(e) => updateWhyChoose("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={config.whyChoose.description}
                onChange={(e) => updateWhyChoose("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 lg:grid-cols-3">
              {config.whyChoose.cards.map((card, index) => (
                <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Field label={`Card ${index + 1} title`}>
                    <TextInput
                      value={card.title}
                      onChange={(e) =>
                        updateWhyChooseCard(index, "title", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Card ${index + 1} description`}>
                    <TextArea
                      rows={5}
                      value={card.description}
                      onChange={(e) =>
                        updateWhyChooseCard(index, "description", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Card ${index + 1} link`}>
                    <TextInput
                      value={card.href}
                      onChange={(e) =>
                        updateWhyChooseCard(index, "href", e.target.value)
                      }
                    />
                  </Field>
                  <ImageField
                    label={`Card ${index + 1} image`}
                    value={card.image}
                    onChange={(e) =>
                      handleImageUpload(e, (value) =>
                        updateWhyChooseCard(index, "image", value)
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="who-we-serve"
          title="Who We Serve"
          description="Edit the public services block that explains OHI's audience and offering."
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={config.services.title}
                onChange={(e) => updateServices("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={config.services.description}
                onChange={(e) => updateServices("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {config.services.cards.map((card, index) => (
                <div
                  key={card.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Field label={`Card ${index + 1} title`}>
                    <TextInput
                      value={card.name}
                      onChange={(e) =>
                        updateServiceCard(index, "name", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Card ${index + 1} description`}>
                    <TextArea
                      rows={4}
                      value={card.desc}
                      onChange={(e) =>
                        updateServiceCard(index, "desc", e.target.value)
                      }
                    />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Bg color">
                      <input
                        type="color"
                        value={card.bgColor}
                        onChange={(e) =>
                          updateServiceCard(index, "bgColor", e.target.value)
                        }
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white p-1"
                      />
                    </Field>
                    <Field label="Text color">
                      <input
                        type="color"
                        value={card.textColor}
                        onChange={(e) =>
                          updateServiceCard(index, "textColor", e.target.value)
                        }
                        className="h-12 w-full rounded-xl border border-slate-200 bg-white p-1"
                      />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="gallery"
          title="Gallery"
          description="Control the first gallery grid shown on the homepage."
        >
          <div className="space-y-5">
            <Field label="Gallery title">
              <TextInput
                value={config.gallery.title}
                onChange={(e) => updateGallery("title", e.target.value)}
              />
            </Field>
            <Field label="Gallery description">
              <TextArea
                rows={4}
                value={config.gallery.description}
                onChange={(e) => updateGallery("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {config.gallery.items.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Field label={`Item ${index + 1} title`}>
                    <TextInput
                      value={item.title}
                      onChange={(e) =>
                        updateGalleryItem(index, "title", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Item ${index + 1} category`}>
                    <TextInput
                      value={item.category}
                      onChange={(e) =>
                        updateGalleryItem(index, "category", e.target.value)
                      }
                    />
                  </Field>
                  <Field label="Span">
                    <TextInput
                      value={item.span || ""}
                      onChange={(e) =>
                        updateGalleryItem(index, "span", e.target.value)
                      }
                    />
                  </Field>
                  <ImageField
                    label={`Item ${index + 1} image`}
                    value={item.image}
                    onChange={(e) =>
                      handleImageUpload(e, (value) =>
                        updateGalleryItem(index, "image", value)
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="gallery-stories"
          title="Gallery Stories"
          description="Edit the second gallery section with story-led cards and strip items."
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={config.galleryStories.title}
                onChange={(e) => updateGalleryStories("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={config.galleryStories.description}
                onChange={(e) =>
                  updateGalleryStories("description", e.target.value)
                }
              />
            </Field>
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Lead story</h3>
                <Field label="Lead title">
                  <TextInput
                    value={config.galleryStories.lead.title}
                    onChange={(e) => updateGalleryLead("title", e.target.value)}
                  />
                </Field>
                <Field label="Lead category">
                  <TextInput
                    value={config.galleryStories.lead.category}
                    onChange={(e) =>
                      updateGalleryLead("category", e.target.value)
                    }
                  />
                </Field>
                <Field label="Lead description">
                  <TextArea
                    rows={4}
                    value={config.galleryStories.lead.description}
                    onChange={(e) =>
                      updateGalleryLead("description", e.target.value)
                    }
                  />
                </Field>
                <ImageField
                  label="Lead image"
                  value={config.galleryStories.lead.image}
                  onChange={(e) =>
                    handleImageUpload(e, (value) =>
                      updateGalleryLead("image", value)
                    )
                  }
                />
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">
                  Support intro
                </h3>
                <Field label="Eyebrow">
                  <TextInput
                    value={config.galleryStories.supportIntro.eyebrow}
                    onChange={(e) =>
                      updateGallerySupportIntro("eyebrow", e.target.value)
                    }
                  />
                </Field>
                <Field label="Title">
                  <TextInput
                    value={config.galleryStories.supportIntro.title}
                    onChange={(e) =>
                      updateGallerySupportIntro("title", e.target.value)
                    }
                  />
                </Field>
                <Field label="Description">
                  <TextArea
                    rows={5}
                    value={config.galleryStories.supportIntro.description}
                    onChange={(e) =>
                      updateGallerySupportIntro("description", e.target.value)
                    }
                  />
                </Field>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {config.galleryStories.supportCards.map((card, index) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Field label={`Support card ${index + 1} title`}>
                    <TextInput
                      value={card.title}
                      onChange={(e) =>
                        updateGallerySupportCard(index, "title", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Support card ${index + 1} description`}>
                    <TextArea
                      rows={4}
                      value={card.description}
                      onChange={(e) =>
                        updateGallerySupportCard(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </Field>
                  <Field label="Accent">
                    <TextInput
                      value={card.accent}
                      onChange={(e) =>
                        updateGallerySupportCard(index, "accent", e.target.value)
                      }
                    />
                  </Field>
                  <ImageField
                    label={`Support card ${index + 1} image`}
                    value={card.image}
                    onChange={(e) =>
                      handleImageUpload(e, (value) =>
                        updateGallerySupportCard(index, "image", value)
                      )
                    }
                  />
                </div>
              ))}
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Strip</h3>
                <Field label="Strip title">
                  <TextInput
                    value={config.galleryStories.stripTitle}
                    onChange={(e) =>
                      updateGalleryStrip("stripTitle", e.target.value)
                    }
                  />
                </Field>
                <Field label="Strip badge">
                  <TextInput
                    value={config.galleryStories.stripBadge}
                    onChange={(e) =>
                      updateGalleryStrip("stripBadge", e.target.value)
                    }
                  />
                </Field>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {config.galleryStories.stripItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <Field label={`Strip item ${index + 1} label`}>
                      <TextInput
                        value={item.label}
                        onChange={(e) =>
                          updateGalleryStripItem(index, "label", e.target.value)
                        }
                      />
                    </Field>
                    <Field label={`Strip item ${index + 1} description`}>
                      <TextArea
                        rows={3}
                        value={item.description}
                        onChange={(e) =>
                          updateGalleryStripItem(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </Field>
                    <ImageField
                      label={`Strip item ${index + 1} image`}
                      value={item.image}
                      onChange={(e) =>
                        handleImageUpload(e, (value) =>
                          updateGalleryStripItem(index, "image", value)
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="video-section"
          title="Video Section"
          description="Edit the homepage video showcase."
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={config.video.title}
                onChange={(e) => updateVideo("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={config.video.description}
                onChange={(e) => updateVideo("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Lead video</h3>
                <Field label="Lead title">
                  <TextInput
                    value={config.video.lead.title}
                    onChange={(e) => updateVideoLead("title", e.target.value)}
                  />
                </Field>
                <Field label="Lead category">
                  <TextInput
                    value={config.video.lead.category}
                    onChange={(e) => updateVideoLead("category", e.target.value)}
                  />
                </Field>
                <Field label="Lead description">
                  <TextArea
                    rows={4}
                    value={config.video.lead.description}
                    onChange={(e) =>
                      updateVideoLead("description", e.target.value)
                    }
                  />
                </Field>
                <ImageField
                  label="Lead poster"
                  value={config.video.lead.poster}
                  onChange={(e) =>
                    handleImageUpload(e, (value) =>
                      updateVideoLead("poster", value)
                    )
                  }
                />
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Icon</h3>
                <ImageField
                  label="Video icon"
                  value={config.video.icon}
                  onChange={(e) =>
                    handleImageUpload(e, (value) => updateVideo("icon", value))
                  }
                />
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {config.video.clips.map((clip, index) => (
                <div
                  key={clip.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Field label={`Clip ${index + 1} title`}>
                    <TextInput
                      value={clip.title}
                      onChange={(e) =>
                        updateVideoClip(index, "title", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Clip ${index + 1} category`}>
                    <TextInput
                      value={clip.category}
                      onChange={(e) =>
                        updateVideoClip(index, "category", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Clip ${index + 1} description`}>
                    <TextArea
                      rows={4}
                      value={clip.description}
                      onChange={(e) =>
                        updateVideoClip(index, "description", e.target.value)
                      }
                    />
                  </Field>
                  <ImageField
                    label={`Clip ${index + 1} poster`}
                    value={clip.poster}
                    onChange={(e) =>
                      handleImageUpload(e, (value) =>
                        updateVideoClip(index, "poster", value)
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="mission-vision-values"
          title="Mission, Vision and Values"
          description="Edit the profile block shown on the landing page."
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={config.profile.title}
                onChange={(e) => updateProfile("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={config.profile.description}
                onChange={(e) => updateProfile("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 xl:grid-cols-3">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Story</h3>
                <Field label="Story title">
                  <TextInput
                    value={config.profile.storyTitle}
                    onChange={(e) => updateProfile("storyTitle", e.target.value)}
                  />
                </Field>
                <Field label="Story description">
                  <TextArea
                    rows={5}
                    value={config.profile.storyDescription}
                    onChange={(e) =>
                      updateProfile("storyDescription", e.target.value)
                    }
                  />
                </Field>
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Mission</h3>
                <Field label="Mission title">
                  <TextInput
                    value={config.profile.missionTitle}
                    onChange={(e) =>
                      updateProfile("missionTitle", e.target.value)
                    }
                  />
                </Field>
                <Field label="Mission description">
                  <TextArea
                    rows={5}
                    value={config.profile.missionDescription}
                    onChange={(e) =>
                      updateProfile("missionDescription", e.target.value)
                    }
                  />
                </Field>
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Vision</h3>
                <Field label="Vision title">
                  <TextInput
                    value={config.profile.visionTitle}
                    onChange={(e) =>
                      updateProfile("visionTitle", e.target.value)
                    }
                  />
                </Field>
                <Field label="Vision description">
                  <TextArea
                    rows={5}
                    value={config.profile.visionDescription}
                    onChange={(e) =>
                      updateProfile("visionDescription", e.target.value)
                    }
                  />
                </Field>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {config.profile.values.map((value, index) => (
                <Field key={index} label={`Value ${index + 1}`}>
                  <TextInput
                    value={value}
                    onChange={(e) => {
                      const next = [...config.profile.values];
                      next[index] = e.target.value;
                      updateProfile("values", next);
                    }}
                  />
                </Field>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="selected-voices"
          title="Selected Voices"
          description="Edit the testimonial-style quotes that scroll in the voices section."
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={config.voices.title}
                onChange={(e) => updateVoices("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={config.voices.description}
                onChange={(e) => updateVoices("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 lg:grid-cols-2">
              {config.voices.reviews.map((review, index) => (
                <div
                  key={review.username}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Field label={`Review ${index + 1} name`}>
                    <TextInput
                      value={review.name}
                      onChange={(e) =>
                        updateVoiceReview(index, "name", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Review ${index + 1} username`}>
                    <TextInput
                      value={review.username}
                      onChange={(e) =>
                        updateVoiceReview(index, "username", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Review ${index + 1} body`}>
                    <TextArea
                      rows={4}
                      value={review.body}
                      onChange={(e) =>
                        updateVoiceReview(index, "body", e.target.value)
                      }
                    />
                  </Field>
                  <ImageField
                    label={`Review ${index + 1} image`}
                    value={review.img}
                    onChange={(e) =>
                      handleImageUpload(e, (value) =>
                        updateVoiceReview(index, "img", value)
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="footer-settings"
          title="Footer Settings"
          description="Control the footer copy that appears on the public OHI site."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <Field
              label="Footer text"
              hint='Use "{year}" where the current year should appear.'
            >
              <TextArea
                rows={5}
                value={config.footer.description}
                onChange={(e) => updateFooter("description", e.target.value)}
              />
            </Field>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
