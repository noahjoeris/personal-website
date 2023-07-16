import { Box, Divider, Typography } from "@mui/material";
import { TFunction } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import { ImagePath, PARALLAX_OFFSET } from "../constants/constants";

const LandingText: React.FC<{
  darkModeEnabled?: boolean;
  isMobileScreen?: boolean;
  translations: TFunction;
}> = ({ darkModeEnabled = false, isMobileScreen = false, translations }) => {
  const { t } = useTranslation();
  const imageStyle: React.CSSProperties = {
    maxWidth: "90%",
    maxHeight: "15rem",
    filter: darkModeEnabled ? "invert(100%)" : undefined,
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        bottom: isMobileScreen ? 0 : PARALLAX_OFFSET,
      }}
    >
      <Typography fontStyle="italic">
        {translations("landingPageTextWelcome")}
      </Typography>
      <img src={ImagePath.Signature} alt="Signature" style={imageStyle} />
      <Box>
        <Typography variant="h6" marginBottom={"1rem"} marginTop={"2rem"}>
          <Typewriter
            words={(
              t("factsAboutMe", { returnObjects: true }) as string[]
            ).sort(() => Math.random() - 0.5)}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </Typography>
      </Box>
      <Divider
        variant="middle"
        sx={{ borderBottomWidth: "0.3rem", width: "5rem" }}
      />
      <Typography variant="h5" fontStyle="italic" marginTop="1rem">
        {t("jobRole")}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" fontStyle="italic" marginRight={"0.5rem"}>
          @
        </Typography>
        <img
          src={ImagePath.AirbusLogo}
          height="25rem"
          alt="Airbus"
          style={
            darkModeEnabled
              ? { filter: "invert(1) grayscale(1) brightness(100)" }
              : undefined
          }
        />
      </Box>
    </Box>
  );
};

export default LandingText;
