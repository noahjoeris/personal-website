import { Box, useMediaQuery, useTheme } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import ContactsSideBar from "../components/ContactsSideBar";
import LandingImage from "../components/LandingImage";
import LandingText from "../components/LandingText";

interface LandingPageProps {
  darkModeEnabled?: boolean;
}

const LandingPage: FC<LandingPageProps> = ({ darkModeEnabled = true }) => {
  const theme = useTheme();
  const isMobileScreenSize = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  return (
    <Box
      minHeight={"100%"}
      display={"flex"}
      flexDirection={isMobileScreenSize ? "column" : "row"}
      alignItems={"center"}
      justifyContent={isMobileScreenSize ? "start" : "center"}
    >
      <LandingText
        darkModeEnabled={darkModeEnabled}
        isMobileScreen={isMobileScreenSize}
        translations={t}
      />
      <LandingImage padding="0 0 0 10rem" isMobileScreen={isMobileScreenSize} />
      <ContactsSideBar
        alignment={isMobileScreenSize ? "row" : "column"}
        topPositioning={isMobileScreenSize ? "-1rem" : "0"}
      />
    </Box>
  );
};

export default LandingPage;
