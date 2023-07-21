import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, Theme, ThemeProvider, createTheme } from "@mui/material";
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
  const contactPageRef = useRef(null); // Create a ref for the ContactPage component

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
        <>
          <NavBar
            darkModeEnabled={darkModeEnabled}
            setDarkModeEnabled={setDarkModeEnabled}
            scrollToContact={handleScrollToContact} // Pass the scroll function as a prop
          />
          <LandingPage darkModeEnabled={darkModeEnabled} />
          <ParticlesBackgound darkModeEnabled={darkModeEnabled} />
          <div ref={contactPageRef}>
            {" "}
            {/* Attach the ref to the ContactPage component */}
            <ContactPage darkModeEnabled={darkModeEnabled} />
          </div>
          <Footer darkModeEnabled={darkModeEnabled} />
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
