import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Typewriter } from "react-simple-typewriter";
import { ImagePath } from "../constants/constants";

const LandingText: React.FC<{ darkModeEnabled?: boolean }> = ({
  darkModeEnabled = false,
}) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h3" marginBottom={"1rem"}>
        {t("landingPageTextWelcome")} 👋🏻
      </Typography>
      <Box>
        <Typography variant="h6" marginBottom={"2rem"}>
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
      <Typography variant="h4" fontStyle="italic" marginTop="2rem">
        {t("jobRole")}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h4" fontStyle="italic" marginRight={"0.5rem"}>
          @
        </Typography>
        <img
          src={ImagePath.AirbusLogo}
          height="25rem"
          alt="Airbus"
          style={
            darkModeEnabled
              ? { filter: "invert(1) grayscale(1) brightness(100)" }
              : null
          }
        />
      </Box>
    </Box>
  );
};

export default LandingText;
