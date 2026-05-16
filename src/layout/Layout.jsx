import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/LandingPage/Header/Header";
import Footer from "../components/LandingPage/Footer/Footer";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  // Hide header/footer on dashboard or admin pages
  const hiddenRoutes = ["/signup", "/admin", "/dashboard"];
  const shouldHideHeaderFooter = hiddenRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <main className={shouldHideHeaderFooter ? "" : "pt-[100px]"}>
        <Outlet /> {/* Nested routes render here */}
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

export default Layout;
