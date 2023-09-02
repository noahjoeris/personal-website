import AboutmePage from "@/app/pages/AboutMePage";
import ContactPage from "@/app/pages/ContactPage";
import FooterPage from "@/app/pages/FooterPage";
import LandingPage from "@/app/pages/LandingPage";
import { Divider } from "@mui/material";
import { ParticlesBackground } from "../components/ParticlesBackground";

export default function Home({ params: { lng } }) {
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
        <ContactPage language={lng} />
      </section>
      <section id="section-4-footer">
        <FooterPage />
      </section>
    </div>
  );
}
