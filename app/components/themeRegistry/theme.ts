"use client";
import { createTheme } from "@mui/material";
import { deDE, enUS } from "@mui/material/locale";
import { Dekko, Roboto } from "next/font/google";
import { useParams } from "next/navigation";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

/* const font1 = Patrick_Hand({ subsets: ["latin"], weight: "400" });
const font2 = Kaushan_Script({ subsets: ["latin"], weight: "400" }); */
const font3 = Dekko({ subsets: ["latin"], weight: "400" });

export const myTheme = (darkModeEnabled: boolean) => {
  const params = useParams();

  return createTheme(
    {
      typography: { fontFamily: font3.style.fontFamily },
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
    },
    params["lng"] === "en" ? enUS : deDE
  );
};
