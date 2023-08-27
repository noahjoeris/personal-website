import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const myTheme = (darkModeEnabled: boolean) =>
  createTheme({
    typography: { fontFamily: roboto.style.fontFamily },
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
