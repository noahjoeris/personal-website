import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, Theme, ThemeProvider, createTheme } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRef } from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ParticlesBackgound from "./components/ParticlesBackground";
import useDarkMode from "./hooks/useDarkMode";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();
  const parallaxRef = useRef<any>(null);

  const theme: Theme = createTheme({
    palette: {
      mode: darkModeEnabled ? "dark" : "light",
      primary: {
        light: "#7081ed",
        main: "#0f3ed7",
        dark: "#000bae",
      },
      secondary: {
        light: "#FF0080",
        main: "#9000bd",
        dark: "#3e00a5",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
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
              offset={1.79}
              speed={0.4}
              style={{
                backgroundSize: "cover",
                overflow: "hidden",
                position: "fixed",
                bottom: 0,
                height: "100%",
                left: 0,
                zIndex: "-1",
              }}
            >
              <Footer />
            </ParallaxLayer>
          </Parallax>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
