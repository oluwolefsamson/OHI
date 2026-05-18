import { Camera, Clapperboard, Film } from "lucide-react";
import heroBg from "../assets/images/hero-bg.png";
import headerBg from "../assets/images/mask.png";
import hero1 from "../assets/images/HeroImg/hero1.jpg";
import hero2 from "../assets/images/HeroImg/hero2.jpg";
import hero3 from "../assets/images/HeroImg/hero3.jpg";
import hero4 from "../assets/images/HeroImg/hero4.jpg";
import hero5 from "../assets/images/HeroImg/hero5.jpg";
import storyImg from "../assets/img/Photography.jpg";
import featureImg from "../assets/img/BTS-02812.jpg";
import aboutCard from "../assets/img/BTS-02864.jpg";
import faqImg from "../assets/img/FAQ.jpg";
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
    titleLine1: "Africa's development story",
    titleLine2: "deserves investment-grade visibility",
    description:
      "Olympian House International (OHI) turns complex development, ESG, and investment programmes into cinematic proof that builds trust, demonstrates results, and mobilises capital, partnerships, and policy action.",
    primaryCtaLabel: "Contact Us",
    primaryCtaHref: "/#contact",
    secondaryCtaLabel: "Our Story",
    secondaryCtaHref: "/#about",
    stats: [
      {
        value: "100+",
        label: "Projects delivered",
        accent: "#f9a11b",
        barWidth: "150px",
      },
      {
        value: "70+",
        label: "Institutional clients served",
        accent: "#05c1ff",
        barWidth: "150px",
      },
      {
        value: "95%",
        label: "Repeat-client rate",
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
      "Olympian House International was founded in 2015 by filmmaker and development communication specialist Fombang Banns N. on a conviction that has only deepened over a decade of work: the quality of a story is inseparable from the quality of the capital, partnerships, and policy decisions it attracts.",
      "We make Africa's development and investment journeys visible through strategic, multilingual visual narratives that turn technical programmes into credible proof for institutions, investors, donors, and the communities they serve.",
    ],
    image: storyImg,
    overlay: {
      since: "Since 2015",
      tagline: "Investment-grade storytelling",
      trustLabel: "Proof-led",
      role: "Development, Impact & Investment",
      icon: videoIcon,
      avatar: avatarIcon,
    },
  },
  services: {
    title: "What We Do",
    description:
      "We help DFIs, governments, multilaterals, and private-sector partners turn programmes into proof.",
    cards: [
      {
        name: "Investment & Programme Visibility",
        desc: "Films and content packages for DFIs and bilateral institutions that need proof of delivery, stakeholder confidence, and stronger public-facing visibility.",
        bgColor: "rgba(249, 161, 27, 0.14)",
        textColor: "#F9A11B",
      },
      {
        name: "Impact Documentaries",
        desc: "Cinematic documentary work that translates programme complexity into human stories, measurable change, and institutional trust.",
        bgColor: "rgba(5, 193, 255, 0.14)",
        textColor: "#05C1FF",
      },
      {
        name: "ESG & Social Impact Storytelling",
        desc: "Strategic storytelling for private-sector actors operating in Africa who need to show responsibility, alignment, and real-world contribution.",
        bgColor: "rgba(5, 193, 255, 0.12)",
        textColor: "#0296CC",
      },
      {
        name: "Development Programme Communication",
        desc: "Clear communication for governments and implementing partners across the project lifecycle, from launch to reporting.",
        bgColor: "rgba(249, 161, 27, 0.12)",
        textColor: "#F9A11B",
      },
      {
        name: "Donor & Investor Reporting Films",
        desc: "Evidence-led films that communicate results, learning, and accountability with the precision institutional audiences expect.",
        bgColor: "rgba(249, 161, 27, 0.14)",
        textColor: "#F9A11B",
      },
      {
        name: "Multilingual Field Production",
        desc: "English, French, and Pidgin coverage that captures field realities and makes stories accessible across audiences.",
        bgColor: "rgba(5, 193, 255, 0.14)",
        textColor: "#05C1FF",
      },
    ],
  },
  gallery: {
    title: "Selected Visual Moments",
    description:
      "A curated view of OHI's production language across development, investment, ESG, and partner-facing storytelling.",
    items: [
      {
        title: "Field stories",
        category: "Documentary coverage",
        image: supplier1,
      },
      {
        title: "Development visibility",
        category: "Program reporting",
        image: featureImg,
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
        image: supplier2,
      },
      {
        title: "Community engagement",
        category: "Strategic visibility",
        image: faqImg,
      },
      {
        title: "Investment narratives",
        category: "Private-sector content",
        image: supplier3,
      },
      {
        title: "Stakeholder confidence",
        category: "Brand trust",
        image: rev2,
      },
      {
        title: "Story capture",
        category: "Behind the scenes",
        image: storyImg,
      },
      {
        title: "Creative setup",
        category: "Production craft",
        image: aboutCard,
      },
      {
        title: "Field perspective",
        category: "Audience connection",
        image: rev4,
      },
      {
        title: "Documentary detail",
        category: "Visual archive",
        image: hero1,
      },
      {
        title: "Institutional film",
        category: "Development story",
        image: hero2,
      },
      {
        title: "Strategic outreach",
        category: "Partner engagement",
        image: hero3,
      },
      {
        title: "Audience focus",
        category: "Beneficiary insight",
        image: hero4,
      },
      {
        title: "Event coverage",
        category: "Community moments",
        image: hero5,
      },
      {
        title: "Program launch",
        category: "Narrative capture",
        image: supplier1,
      },
      {
        title: "Impact frame",
        category: "Progress snapshot",
        image: supplier2,
      },
      {
        title: "Visual identity",
        category: "Brand story",
        image: faqImg,
      },
      {
        title: "Editorial archive",
        category: "Storytelling system",
        image: featureImg,
      },
    ],
  },
  galleryStories: {
    title: "Editorial frames for proof and visibility",
    description:
      "A second visual section that shows how OHI carries one story across fieldwork, institutional communication, and investor-facing visibility.",
    lead: {
      title: "Community reporting",
      category: "Documentary coverage",
      description:
        "Coverage designed to preserve context, tone and the human detail that makes impact credible.",
      image: featureImg,
    },
    supportIntro: {
      eyebrow: "Why it works",
      title: "Built for institutions that need credibility, evidence, and reach",
      description:
        "The gallery language mirrors the company profile: clear, professional, and grounded in the kind of visual evidence that helps partners communicate with confidence.",
      image: featureImg,
    },
    supportCards: [
      {
        title: "Institutional visibility",
        description:
          "Cinematic frames that strengthen credibility for partners, programs, and public reporting.",
        image: aboutCard,
        accent: "from-[#0296cc]/85 to-[#05c1ff]/90",
      },
      {
        title: "Partnership moments",
        description:
          "Coverage that documents presence, engagement, and shared purpose in the field.",
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
        description: "Field settings where evidence, context, and human stories meet.",
      },
      {
        label: "Audience trust",
        image: rev2,
        description: "Visual proof that supports trust with donors, investors, and communities.",
      },
      {
        label: "Project delivery",
        image: rev4,
        description: "Delivery moments that show results, implementation, and momentum.",
      },
      {
        label: "Executive visibility",
        image: featureImg,
        description: "High-level communication built for decision-makers and partner briefings.",
      },
    ],
  },
  video: {
    title: "Strategic Visibility Reel",
    description:
      "OHI presents its video work here, with room for local files or embedded links, all framed in the same rounded editorial style used across the site.",
    lead: {
      title: "OHI overview reel",
      category: "Featured film",
      description:
        "A concise branded film for introducing the organisation, its purpose, and the kind of stories it tells.",
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
          "A credibility-led edit for projects, partners, and institutional communication.",
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
          "An adaptable short-form format for launches, events, and reporting moments.",
        poster: rev4,
      },
    ],
    icon: videoIcon,
  },
  profile: {
    title: "Mission, Vision and Values",
    description:
      "The profile is built around credibility, evidence, and strategic visibility. These are the principles that shape every OHI project.",
    storyTitle: "Our Story",
    storyDescription:
      "Founded in 2015 by filmmaker and development communication specialist Fombang Banns N., OHI was built on the belief that strong stories attract stronger capital, partnerships, and policy attention.",
    missionTitle: "Amplify Africa's stories",
    missionDescription:
      "To amplify Africa's development and investment stories with authenticity, excellence, and strategic clarity so impactful projects gain the visibility, credibility, and support they deserve.",
    visionTitle: "Vision",
    visionDescription:
      "To be Africa's leading partner in investment-grade development storytelling and strategic visibility.",
    valuesTitle: "Core values",
    values: [
      "Evidence over assumption",
      "Cultural respect and inclusion",
      "Accountability and leadership",
      "Creative excellence",
      "Institutional fluency",
    ],
  },
  voices: {
    title: "Selected Voices",
    description:
      "A snapshot of how partners describe OHI's work across development, public-sector, and private impact projects.",
    reviews: [
      {
        name: "Development Partner",
        username: "@institutional",
        body: "OHI turns technical program results into stories that stakeholders can understand, trust, and act on.",
        img: rev1,
      },
      {
        name: "Government Partner",
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
      "We blend development communication, impact storytelling, and strategic visibility to help organisations communicate with clarity and credibility.",
    cards: [
      {
        title: "Institutional credibility",
        description:
          "We help projects explain themselves clearly so communities, institutions, and partners can understand the value being created.",
        icon: Camera,
        href: "/#contact",
      },
      {
        title: "Evidence-led storytelling",
        description:
          "Our narratives turn programme results and lived experiences into proof that moves decision-makers to action.",
        icon: Film,
        href: "/#services",
      },
      {
        title: "Multilingual execution",
        description:
          "We deliver English, French, and Pidgin content that strengthens stakeholder alignment and expands reach.",
        icon: Clapperboard,
        href: "/#approach",
      },
    ],
  },
  footer: {
    description:
      "Copyright {year} Olympian House International. Development storytelling and strategic visibility across Africa.",
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
