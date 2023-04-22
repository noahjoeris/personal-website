import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Avatar, Badge, ThemeProvider, styled } from "@mui/material";
import { useState } from "react";
import "./App.css";
import "./NavBar";
import NavBar from "./NavBar";
import { darkTheme, lightTheme } from "./constantsThemes";
const imgPath = "ich.jpg";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    width: "5rem",
    height: "5rem",
    borderRadius: "50%",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function App() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(true);
  return (
    <div className="App">
      <ThemeProvider theme={darkModeEnabled ? darkTheme : lightTheme}>
        <NavBar
          darkModeEnabled={darkModeEnabled}
          setDarkModeEnabled={setDarkModeEnabled}
        />
        <header className="App-header">
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              className="App-logo"
              alt="Noah Joeris"
              src={imgPath}
              sx={{ width: "20rem", height: "20rem" }}
            />
          </StyledBadge>

          <p>Website in Progress</p>
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
