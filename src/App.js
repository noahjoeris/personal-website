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
import useLocalStorage from "./hooks/useLocalStorage";
import ComingSoonPage from "./pages/ComingSoonPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useLocalStorage(
    "darkModeEnabled",
    "true"
  );
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
          <ParallaxLayer offset={0} speed={0.2}>
            <div>
              <NavBar
                darkModeEnabled={darkModeEnabled}
                setDarkModeEnabled={setDarkModeEnabled}
                language={i18n.language}
                parallaxRef={parallaxRef}
              />
              <LandingPage />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.2}>
            <ComingSoonPage />
          </ParallaxLayer>
        </Parallax>
      </ThemeProvider>
    </div>
  );
}

export default App;
