"use client";
import { Box } from "@mui/material";
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
  return (
    <Box
      minHeight={"90vh"}
      maxHeight={{ xs: "100vh", sm: undefined }}
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems={"center"}
      justifyContent={{ xs: "start", sm: "center" }}
      overflow={"hidden"}
      gap={"2rem"}
    >
      <LandingText translations={translations} />
      <LandingImage padding={{ sm: "0 0 0 4rem" }} />
      <ContactsSideBar alignment="column" />
    </Box>
  );
};

export default LandingPage;
