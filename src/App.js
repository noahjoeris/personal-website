import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import NavBar from "./components/NavBar";
import ParticlesBackgound from "./components/ParticlesBackground";
import useDarkMode from "./hooks/useDarkMode";
import ContactPage from "./pages/ContactPage";
import FooterPage from "./pages/FooterPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();
  const { i18n } = useTranslation();
  const parallaxRef = useRef();

  const theme = createTheme(
    {
      palette: {
        mode: darkModeEnabled ? "dark" : "light",
        primary: {
          light: "#7081ed",
          main: "#0f3ed7",
          dark: "#000bae",
        },
        secondary: {
          light: "#bd60d5",
          main: "#9000bd",
          dark: "#3e00a5",
        },
      },
    },
    i18n.language === "en" ? "enUS" : "deDE"
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Parallax ref={parallaxRef} pages={2}>
          <ParallaxLayer
            offset={0}
            speed={0.2}
            style={{ backgroundSize: "cover", overflow: "hidden" }}
          >
            <NavBar
              darkModeEnabled={darkModeEnabled}
              setDarkModeEnabled={setDarkModeEnabled}
              parallaxRef={parallaxRef}
            />
            <LandingPage darkModeEnabled={darkModeEnabled} />
            <ParticlesBackgound darkModeEnabled={darkModeEnabled} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={0.98}
            speed={0.2}
            style={{ backgroundSize: "cover", overflow: "hidden" }}
          >
            <ContactPage darkModeEnabled={darkModeEnabled} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.78}
            speed={0.2}
            style={{ backgroundSize: "cover", overflow: "hidden" }}
          >
            <FooterPage />
          </ParallaxLayer>
        </Parallax>
      </ThemeProvider>
    </div>
  );
}

export default App;
