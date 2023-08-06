"use client";
import AboutmePage from "@/app/pages/AboutMePage";
import ContactPage from "@/app/pages/ContactPage";
import FooterPage from "@/app/pages/FooterPage";
import LandingPage from "@/app/pages/LandingPage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Divider } from "@mui/material";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Home({ params: { lng } }) {
  /* const contactPageRef = useRef(null);
  const aboutPageRef = useRef(null); */

  // TODO: turn into SSR fix dark mode
  return (
    <div className="App">
      <ParticlesBackground />
      <>
        <LandingPage />
        <Divider
          sx={{ orientation: "horizontal", borderBottomWidth: "0.3rem" }}
        />
        <div /* ref={aboutPageRef} */>
          <AboutmePage />
        </div>
        <Divider
          sx={{ orientation: "horizontal", borderBottomWidth: "0.3rem" }}
        />
        <div /* ref={contactPageRef} */>
          <ContactPage />
        </div>
        <FooterPage />
      </>
    </div>
  );
}
