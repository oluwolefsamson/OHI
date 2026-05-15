import { Camera, Clapperboard, Film } from "lucide-react";
import heroBg from "../assets/images/hero-bg.png";
import headerBg from "../assets/images/mask.png";
import hero1 from "../assets/images/HeroImg/hero1.jpg";
import hero2 from "../assets/images/HeroImg/hero2.jpg";
import hero3 from "../assets/images/HeroImg/hero3.jpg";
import hero4 from "../assets/images/HeroImg/hero4.jpg";
import hero5 from "../assets/images/HeroImg/hero5.jpg";
import aboutImg from "../assets/img/about-us.jpg";
import aboutCard from "../assets/img/BTS-02864.jpg";
import featureImg from "../assets/img/BTS-02812.jpg";
import faqImg from "../assets/img/WFP-03558.jpg";
import rev1 from "../assets/img/WFP-03555-150x150.jpg";
import rev2 from "../assets/img/WFP-03556-150x150.jpg";
import rev4 from "../assets/img/WFP-03558-150x150.jpg";
import supplier1 from "../assets/img/WFP-03520.jpg";
import supplier2 from "../assets/img/WFP-03523.jpg";
import supplier3 from "../assets/img/WFP-03524.jpg";
import videoIcon from "../assets/img/logo-ohi-blue.png";
import avatarIcon from "../assets/img/WFP-03558-150x150.jpg";

export const landingPageDefaults = {
  theme: {
    primaryColor: "#05c1ff",
    accentColor: "#f9a11b",
    heroButtonText: "#ffffff",
    heroBgImage: heroBg,
    headerBgImage: headerBg,
  },
  hero: {
    titleLine1: "Together, let's tell",
    titleLine2: "meaningful stories",
    description:
      "Olympian House International is a leading African media production company specialising in development communication, impact storytelling and strategic visibility for NGOs, DFIs, governments and private-sector partners.",
    primaryCtaLabel: "Contact Us",
    primaryCtaHref: "/#contact",
    secondaryCtaLabel: "Our Story",
    secondaryCtaHref: "/#about",
    stats: [
      {
        value: "2015",
        label: "Founded in Yaounde",
        accent: "#f9a11b",
        barWidth: "150px",
      },
      {
        value: "100+",
        label: "Projects and partners served",
        accent: "#05c1ff",
        barWidth: "150px",
      },
      {
        value: "1M+",
        label: "People reached through impact stories",
        accent: "#0296cc",
        barWidth: "100px",
      },
    ],
    images: {
      hero1,
      hero2,
      hero3,
      hero4,
      hero5,
    },
  },
  about: {
    title: "Our Story",
    paragraphs: [
      "Olympian House International was founded in 2015 by filmmaker and development communication specialist Fombang Banns N. with a simple belief: stories move people, and when people move, change follows.",
      "We make Africa's development and investment journeys visible, relatable and unforgettable by turning complex initiatives into authentic, human-centered visual stories that build confidence, spark collaboration and unlock opportunities.",
    ],
    image: aboutImg,
    overlay: {
      since: "Since 2015",
      tagline: "Strategic visibility",
      trustLabel: "Trusted",
      role: "Development Communication",
      icon: videoIcon,
      avatar: avatarIcon,
    },
  },
  services: {
    title: "Who We Serve",
    description:
      "We work with organisations that need clear, credible and human-centered storytelling across Africa.",
    cards: [
      {
        name: "Impact Documentaries",
        desc: "We produce compelling films that capture real stories, complex realities and measurable change across development and investment projects.",
        bgColor: "rgba(249, 161, 27, 0.14)",
        textColor: "#F9A11B",
      },
      {
        name: "Development Program Visibility",
        desc: "We help NGOs, UN agencies and governments showcase program outcomes with clear, credible and stakeholder-ready storytelling.",
        bgColor: "rgba(5, 193, 255, 0.14)",
        textColor: "#05C1FF",
      },
      {
        name: "Investment Promotion Films",
        desc: "We translate opportunities into persuasive visuals that support investor confidence and attract strategic partnerships.",
        bgColor: "rgba(5, 193, 255, 0.12)",
        textColor: "#0296CC",
      },
      {
        name: "Community Engagement Content",
        desc: "We create human-centered content that reflects local voices, builds trust and makes complex initiatives relatable.",
        bgColor: "rgba(249, 161, 27, 0.12)",
        textColor: "#F9A11B",
      },
      {
        name: "Testimonial & Beneficiary Stories",
        desc: "We turn lived experiences into authentic narratives that prove impact and strengthen accountability.",
        bgColor: "rgba(249, 161, 27, 0.14)",
        textColor: "#F9A11B",
      },
      {
        name: "Digital Campaign Content",
        desc: "We deliver social media and digital assets that extend reach, sustain engagement and keep your story visible.",
        bgColor: "rgba(5, 193, 255, 0.14)",
        textColor: "#05C1FF",
      },
    ],
  },
  gallery: {
    title: "Selected Visual Moments",
    description:
      "A curated view of OHI's production language across development communication, mission coverage and partner storytelling.",
    items: [
      {
        title: "Field stories",
        category: "Documentary coverage",
        image: supplier1,
        span: "lg:col-span-2 lg:row-span-2",
      },
      {
        title: "Development visibility",
        category: "Program reporting",
        image: aboutImg,
      },
      {
        title: "Impact moments",
        category: "Human-centered storytelling",
        image: featureImg,
      },
      {
        title: "Partner voices",
        category: "Testimonials",
        image: rev1,
      },
      {
        title: "Mission coverage",
        category: "On-location production",
        image: supplier1,
      },
      {
        title: "Community engagement",
        category: "Strategic visibility",
        image: faqImg,
      },
      {
        title: "Investment narratives",
        category: "Private-sector content",
        image: supplier2,
      },
      {
        title: "Stakeholder confidence",
        category: "Brand trust",
        image: supplier3,
      },
    ],
  },
  galleryStories: {
    title: "Editorial frames for development communication",
    description:
      "A second visual section that shows how OHI can carry one story across fieldwork, institutional communication and partner-facing visibility.",
    lead: {
      title: "Community reporting",
      category: "Documentary coverage",
      description:
        "Coverage designed to preserve context, tone and the human detail that makes impact credible.",
      image: featureImg,
    },
    supportIntro: {
      eyebrow: "Why it works",
      title: "Built for institutions that need clarity and trust",
      description:
        "The gallery language mirrors the company profile: clear, professional and grounded in the kind of visual evidence that helps partners communicate with confidence.",
      image: aboutImg,
    },
    supportCards: [
      {
        title: "Institutional visibility",
        description:
          "Cinematic frames that strengthen credibility for partners and programs.",
        image: aboutCard,
        accent: "from-[#0296cc]/85 to-[#05c1ff]/90",
      },
      {
        title: "Partnership moments",
        description:
          "Coverage that documents presence, engagement and shared purpose.",
        image: rev2,
        accent: "from-[#f9a11b]/85 to-[#ffbd4d]/90",
      },
    ],
    stripTitle: "A broader look at the archive",
    stripBadge: "OHI visual language",
    stripItems: [
      {
        label: "Field production",
        image: rev1,
        description: "A visual cue for the range of settings OHI can document.",
      },
      {
        label: "Audience trust",
        image: rev2,
        description: "A visual cue for the range of settings OHI can document.",
      },
      {
        label: "Project delivery",
        image: rev4,
        description: "A visual cue for the range of settings OHI can document.",
      },
      {
        label: "Executive visibility",
        image: aboutImg,
        description: "A visual cue for the range of settings OHI can document.",
      },
    ],
  },
  video: {
    title: "Video Work",
    description:
      "OHI presents its video work here, with room for local files or embedded links, all framed in the same rounded editorial style used across the site.",
    lead: {
      title: "OHI overview reel",
      category: "Featured film",
      description:
        "A concise branded film for introducing the organisation, its purpose and the kind of stories it tells.",
      poster: supplier1,
      embedUrl:
        "https://player.cloudinary.com/embed/?cloud_name=duk9xwahb&public_id=zdb3xovmicn4o03na0wj",
    },
    clips: [
      {
        title: "Field interviews",
        category: "Story capture",
        description:
          "Short-form documentary moments that keep the human voice at the center of the frame.",
        poster: supplier2,
      },
      {
        title: "Partner spotlight",
        category: "Visibility clip",
        description:
          "A credibility-led edit for projects, partners and institutional communication.",
        poster: supplier3,
      },
      {
        title: "Impact testimonials",
        category: "Voice-led cut",
        description:
          "Testimonial-driven clips that help organizations communicate outcomes clearly.",
        poster: rev1,
      },
      {
        title: "Program highlights",
        category: "Campaign video",
        description:
          "An adaptable short-form format for launches, events and reporting moments.",
        poster: rev4,
      },
    ],
    icon: videoIcon,
  },
  profile: {
    title: "Mission, Vision and Values",
    description:
      "The profile is built around clarity, credibility and human-centered impact. These are the principles that shape every OHI project.",
    storyTitle: "Our Story",
    storyDescription:
      "Founded in 2015 by filmmaker and development communication specialist Fombang Banns N., OHI was built on the belief that stories move people and change follows movement.",
    missionTitle: "Amplify Africa's stories",
    missionDescription:
      "To amplify Africa's development stories with authenticity, excellence and strategic clarity, ensuring impactful projects gain the visibility, credibility and support they deserve.",
    visionTitle: "Vision",
    visionDescription:
      "To be Africa's leading partner in investment-grade and development storytelling.",
    valuesTitle: "Core values",
    values: [
      "Authentic storytelling",
      "Cultural respect and inclusion",
      "Accountability and leadership",
      "Creative excellence",
      "Collaboration",
    ],
  },
  voices: {
    title: "Selected Voices",
    description:
      "A snapshot of how partners describe OHI's work across development, public sector and private impact projects.",
    reviews: [
      {
        name: "UN Partner",
        username: "@development",
        body: "OHI turns technical program results into stories that stakeholders can understand, trust and act on.",
        img: rev1,
      },
      {
        name: "Government Ministry",
        username: "@public-sector",
        body: "Their mission coverage and strategic visibility work helps public initiatives reach the audiences that matter.",
        img: rev4,
      },
      {
        name: "Foundation Lead",
        username: "@impact",
        body: "OHI gives our projects the visibility they deserve and the credibility they need to attract support.",
        img: rev2,
      },
      {
        name: "Private Sector Partner",
        username: "@investment",
        body: "They are strong at translating complex initiatives into persuasive, investment-ready visuals.",
        img: rev4,
      },
    ],
  },
  whyChoose: {
    title: "What OHI Stands For",
    description:
      "We blend development communication, impact storytelling and strategic visibility to help organisations communicate with clarity and credibility.",
    cards: [
      {
        title: "Development Communication",
        description:
          "We help projects explain themselves clearly so communities, institutions and partners can understand the value being created.",
        icon: Camera,
        href: "/#contact",
      },
      {
        title: "Impact Storytelling",
        description:
          "Our narratives turn program results and lived experiences into persuasive stories that move decision-makers to action.",
        icon: Film,
        href: "/#services",
      },
      {
        title: "Strategic Visibility",
        description:
          "We deliver content that supports credibility, strengthens stakeholder alignment and expands the reach of important projects.",
        icon: Clapperboard,
        href: "/#approach",
      },
    ],
  },
  footer: {
    description:
      "Copyright {year} Olympian House International. Development communication, impact storytelling and strategic visibility across Africa.",
    socialLinks: [
      {
        path: "https://olympianhouseintl.com",
      },
      {
        path: "mailto:contact@olympianhouseintl.com",
      },
      {
        path: "tel:+237671646331",
      },
      {
        path: "https://www.linkedin.com",
      },
    ],
  },
};
