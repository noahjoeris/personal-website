"use client";

import { myTheme } from "@/app/components/themeRegistry/theme";
import useDarkMode from "@/app/hooks/useDarkMode";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import NavBar from "../NavBar";
import NextAppDirEmotionCacheProvider from "./EmotionCache";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkModeEnabled, setDarkModeEnabled] = useDarkMode();
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={myTheme(darkModeEnabled)}>
        <CssBaseline />
        <NavBar
          onDarkModeButtonClick={() => setDarkModeEnabled(!darkModeEnabled)}
        />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
