import React, { createContext, useEffect, useState } from "react";
import { landingPageDefaults } from "../data/landingPageDefaults";

const STORAGE_KEY = "ohi-landing-page-config";

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
  return mergeDeep(landingPageDefaults, stored);
}

export function LandingPageConfigProvider({ children }) {
  const [config, setConfig] = useState(loadConfig);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    applyThemeVars(config.theme);
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
