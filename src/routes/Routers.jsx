import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

// Pages
import Home from "../pages/LandingPage/Home";
import CompanyProfile from "../pages/LandingPage/CompanyProfile/CompanyProfile";
import AboutPage from "../pages/LandingPage/CompanyProfile/AboutPage";
import ServicesPage from "../pages/LandingPage/CompanyProfile/ServicesPage";
import WhoWeServePage from "../pages/LandingPage/CompanyProfile/WhoWeServePage";
import ImpactPage from "../pages/LandingPage/CompanyProfile/ImpactPage";
import ApproachPage from "../pages/LandingPage/CompanyProfile/ApproachPage";
import ContactPage from "../pages/LandingPage/CompanyProfile/ContactPage";
import ErrorPage from "../pages/LandingPage/ErrorPage";
import Dashboard from "../pages/Client-Dashboard/Dashboard";
import ProfileSetting from "../pages/Client-Dashboard/ProfileSetting";
import { Overview } from "../pages/Client-Dashboard/Overview";
import LandingPageManager from "../pages/Client-Dashboard/LandingPageManager";
import AdminLogin from "../pages/Client-Dashboard/AdminLogin";
import { RequireAdminAuth } from "../components/ui/RequireAdminAuth";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="company-profile" element={<CompanyProfile />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="who-we-serve" element={<WhoWeServePage />} />
        <Route path="impact" element={<ImpactPage />} />
        <Route path="approach" element={<ApproachPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="admin/login" element={<AdminLogin />} />

        {/* Dashboard */}
        <Route
          path="dashboard/*"
          element={
            <RequireAdminAuth>
              <Dashboard />
            </RequireAdminAuth>
          }
        >
          <Route index element={<LandingPageManager />} />
          <Route path="overview" element={<Overview />} />
          <Route path="profile-setting" element={<ProfileSetting />} />
          <Route path="landing-page" element={<LandingPageManager />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default Routers;
