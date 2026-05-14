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
          <Toaster
            position="bottom-right"
            richColors
            closeButton
            duration={4000}
            expand={true}
          />
        </BrowserRouter>
      </AdminAuthProvider>
    </LandingPageConfigProvider>
  );
}

export default App;
