import ParticlesBackground from "@/app/components/ParticlesBackground";
import AboutmePage from "@/app/pages/AboutMePage";
import ContactPage from "@/app/pages/ContactPage";
import FooterPage from "@/app/pages/FooterPage";
import LandingPage from "@/app/pages/LandingPage";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Divider } from "@mui/material";

export default function Home({ params: { lng } }) {
  /* const contactPageRef = useRef(null);
  const aboutPageRef = useRef(null); */

  return (
    <div className="App">
      <ParticlesBackground />

      <section id="section-1-landingpage">
        <LandingPage language={lng} />
        <Divider
          sx={{ orientation: "horizontal", borderBottomWidth: "0.3rem" }}
        />
      </section>

      <section id="section-2-aboutme">
        <AboutmePage />
        <Divider
          sx={{ orientation: "horizontal", borderBottomWidth: "0.3rem" }}
        />
      </section>

      <section id="section-3-contact">
        <ContactPage />
      </section>

      <section id="section-4-footer">
        <FooterPage />
      </section>
    </div>
  );
}
