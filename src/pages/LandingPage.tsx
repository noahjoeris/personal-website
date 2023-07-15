import { Box, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import ContactsSideBar from "../components/ContactsSideBar";
import LandingImage from "../components/LandingImage";
import LandingText from "../components/LandingText";

interface LandingPageProps {
  darkModeEnabled?: boolean;
}

const LandingPage: FC<LandingPageProps> = ({ darkModeEnabled = true }) => {
  const theme = useTheme();
  const isMobileScreenSize = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      minHeight={"100%"}
      display={"flex"}
      flexDirection={isMobileScreenSize ? "column" : "row"}
      alignItems={"center"}
      justifyContent={isMobileScreenSize ? "start" : "center"}
    >
      <LandingText darkModeEnabled={darkModeEnabled} />
      <LandingImage padding="0 0 0 10rem" />
      <ContactsSideBar
        alignment={isMobileScreenSize ? "row" : "column"}
        topPositioning={isMobileScreenSize ? "-1rem" : "0"}
      />
    </Box>
  );
};

export default LandingPage;
