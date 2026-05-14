import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";

// Pages
import Home from "../pages/LandingPage/Home";
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
