import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  CssBaseline,
  Divider,
  Theme,
  ThemeProvider,
  createTheme,
  styled,
} from "@mui/material";
import { useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ParticlesBackgound from "./components/ParticlesBackground";
import useDarkMode from "./hooks/useDarkMode";
import AboutmePage from "./pages/AboutMePage";
import ContactPage from "./pages/ContactPage";
import FooterPage from "./pages/FooterPage";
import LandingPage from "./pages/LandingPage";

const PageDivider = styled(Divider)(() => ({
  orientation: "horizontal",
  borderBottomWidth: "0.3rem",
}));

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();
  const contactPageRef = useRef(null);

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

  const handleScrollToContact = () => {
    if (contactPageRef.current) {
      contactPageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ParticlesBackgound darkModeEnabled={darkModeEnabled} />
        <>
          <NavBar
            darkModeEnabled={darkModeEnabled}
            setDarkModeEnabled={setDarkModeEnabled}
            scrollToContact={handleScrollToContact} // Pass the scroll function as a prop
          />
          <LandingPage darkModeEnabled={darkModeEnabled} />
          <PageDivider />
          <AboutmePage darkModeEnabled={darkModeEnabled} />
          <PageDivider />
          <div ref={contactPageRef}>
            <ContactPage darkModeEnabled={darkModeEnabled} />
          </div>
          <FooterPage darkModeEnabled={darkModeEnabled} />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
