import React, { createContext, useEffect, useState } from "react";
import { landingPageDefaults } from "../data/landingPageDefaults";

const STORAGE_KEY = "ohi-landing-page-config";
const LEGACY_VIDEO_TITLE =
  "Story-led video production for development and visibility";
const LEGACY_VIDEO_DESCRIPTION =
  "A dedicated space for OHI's video work. The layout is ready for local video files or embedded links while preserving the same rounded, editorial look used across the site.";
const PREVIOUS_VIDEO_TITLE = "Video Stories";
const PREVIOUS_VIDEO_DESCRIPTION =
  "A dedicated space for OHI's video work, ready for local video files or embedded links while keeping the same rounded editorial look across the site.";

const LandingPageConfigContext = createContext(null);

function safeParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function mergeDeep(base, override) {
  if (Array.isArray(base)) {
    return Array.isArray(override) && override.length ? override : base;
  }

  if (base && typeof base === "object") {
    const result = { ...base };
    const source = override && typeof override === "object" ? override : {};

    for (const key of Object.keys(base)) {
      result[key] = mergeDeep(base[key], source[key]);
    }

    for (const key of Object.keys(source)) {
      if (!(key in result)) {
        result[key] = source[key];
      }
    }

    return result;
  }

  return override ?? base;
}

function normalizeConfig(config) {
  if (!config?.video) return config;

  const nextVideo = { ...config.video };

  if (nextVideo.title === LEGACY_VIDEO_TITLE) {
    nextVideo.title = landingPageDefaults.video.title;
  }

  if (nextVideo.description === LEGACY_VIDEO_DESCRIPTION) {
    nextVideo.description = landingPageDefaults.video.description;
  }

  if (nextVideo.title === PREVIOUS_VIDEO_TITLE) {
    nextVideo.title = landingPageDefaults.video.title;
  }

  if (nextVideo.description === PREVIOUS_VIDEO_DESCRIPTION) {
    nextVideo.description = landingPageDefaults.video.description;
  }

  return {
    ...config,
    video: nextVideo,
  };
}

function applyThemeVars(theme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  root.style.setProperty("--ohi-primary", theme.primaryColor);
  root.style.setProperty("--ohi-accent", theme.accentColor);
  root.style.setProperty("--ohi-hero-text", theme.heroButtonText);
  root.style.setProperty("--ohi-hero-bg", `url("${theme.heroBgImage}")`);
  root.style.setProperty("--ohi-header-bg", `url("${theme.headerBgImage}")`);
}

function loadConfig() {
  if (typeof window === "undefined") return landingPageDefaults;

  const stored = safeParse(window.localStorage.getItem(STORAGE_KEY));
  return normalizeConfig(mergeDeep(landingPageDefaults, stored));
}

export function LandingPageConfigProvider({ children }) {
  const [config, setConfig] = useState(loadConfig);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    applyThemeVars(config.theme);
  }, [config]);

  useEffect(() => {
    if (
      config?.video?.title === LEGACY_VIDEO_TITLE ||
      config?.video?.description === LEGACY_VIDEO_DESCRIPTION ||
      config?.video?.title === PREVIOUS_VIDEO_TITLE ||
      config?.video?.description === PREVIOUS_VIDEO_DESCRIPTION
    ) {
      setConfig((current) => normalizeConfig(current));
    }
  }, [config]);

  useEffect(() => {
    applyThemeVars(config.theme);
  }, []);

  const updateConfig = (nextConfig) => {
    setConfig((current) =>
      typeof nextConfig === "function" ? nextConfig(current) : nextConfig
    );
  };

  const resetConfig = () => {
    setConfig(landingPageDefaults);
  };

  return (
    <LandingPageConfigContext.Provider
      value={{ config, setConfig: updateConfig, resetConfig }}
    >
      {children}
    </LandingPageConfigContext.Provider>
  );
}

export function useLandingPageConfig() {
  const context = React.useContext(LandingPageConfigContext);

  if (!context) {
    throw new Error(
      "useLandingPageConfig must be used within a LandingPageConfigProvider"
    );
  }

  return context;
}
