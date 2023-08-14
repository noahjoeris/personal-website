"use client";
import { Box } from "@mui/material";
import { FC } from "react";
import ContactsSideBar from "../components/ContactsSideBar";
import LandingImage from "../components/LandingImage";
import LandingText from "../components/LandingText";

const LandingPage: FC = () => {
  return (
    <Box
      minHeight={"90vh"}
      maxHeight={{ xs: "100vh", sm: undefined }}
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems={"center"}
      justifyContent={{ xs: "start", sm: "center" }}
      overflow={"hidden"}
      gap={{ xs: "1rem", md: "7rem" }}
    >
      <LandingText />
      <LandingImage padding={{ sm: "0 0 0 4rem" }} />
      <ContactsSideBar alignment="column" />
    </Box>
  );
};

export default LandingPage;
