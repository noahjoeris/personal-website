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
        translations={t}
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
