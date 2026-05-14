import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import "./App.css";
import Routers from "./routes/Routers";
import { LandingPageConfigProvider } from "./context/LandingPageConfigContext";
import { AdminAuthProvider } from "./context/AdminAuthContext";

function App() {
  return (
    <LandingPageConfigProvider>
      <AdminAuthProvider>
        <BrowserRouter>
          <Routers />
          <div className="pointer-events-none fixed inset-0 z-[9999]">
            <Toaster
              position="bottom-right"
              richColors
              closeButton
              duration={4000}
              expand={true}
            />
          </div>
        </BrowserRouter>
      </AdminAuthProvider>
    </LandingPageConfigProvider>
  );
}

export default App;
