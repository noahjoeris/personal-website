"use client";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { TFunction } from "i18next";
import { FC } from "react";
import ContactsSideBar from "../components/ContactsSideBar";
import LandingImage from "../components/LandingImage";
import LandingText from "../components/LandingText";

interface LandingPageProps {
  darkModeEnabled?: boolean;
  translations?: TFunction;
}

const LandingPage: FC<LandingPageProps> = ({
  darkModeEnabled = true,
  translations = undefined,
}) => {
  const theme = useTheme();
  const isMobileScreenSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      minHeight={"90vh"}
      maxHeight={isMobileScreenSize ? "100vh" : undefined}
      display={"flex"}
      flexDirection={isMobileScreenSize ? "column" : "row"}
      alignItems={"center"}
      justifyContent={isMobileScreenSize ? "start" : "center"}
      overflow={"hidden"}
    >
      <LandingText
        darkModeEnabled={darkModeEnabled}
        isMobileScreen={isMobileScreenSize}
        translations={translations}
      />
      <LandingImage
        isMobileScreen={isMobileScreenSize}
        padding={isMobileScreenSize ? undefined : "0 0 0 7rem"}
      />
      <ContactsSideBar alignment="column" />
    </Box>
  );
};

export default LandingPage;
