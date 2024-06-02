import signature from "@/public/images/signature.png";
import velocity from "@/public/images/velocity.svg";
import { Box, Divider, Typography } from "@mui/material";
import { FC } from "react";

import { TFunction } from "i18next";
import DarkModeAdjustingImage from "./DarkModeAdjustingImage";
import MyTypewriter from "./MyTypewriter";

const LandingText: FC<{ translations: TFunction }> = ({ translations }) => {
  const shuffledWords = Object.values(
    translations("factsAboutMe", { returnObjects: true })
  ).sort(() => Math.random() - 0.5);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography fontStyle="italic">
        {translations("landingPageTextWelcome")}
      </Typography>
      <DarkModeAdjustingImage
        src={signature}
        alt="Noah Joeris Signature"
        priority
        style={{
          maxWidth: "90%",
          maxHeight: "15rem",
          height: "auto",
          width: "auto",
        }}
        onDarkModeStyles={{
          filter: "invert(100%)",
        }}
      />

      <Box>
        <Typography variant="h6" marginBottom={"1rem"} marginTop={"2rem"}>
          <MyTypewriter words={shuffledWords} />
        </Typography>
      </Box>
      <Divider
        variant="middle"
        sx={{ borderBottomWidth: "0.3rem", width: "5rem" }}
      />
      <Typography variant="h5" fontStyle="italic" marginTop="1rem">
        {translations("jobRole")}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" fontStyle="italic" marginRight={"0.5rem"}>
          at
        </Typography>
        <DarkModeAdjustingImage
          src={velocity}
          alt="Velocity Labs"
          priority
          style={{ height: "1.8rem", width: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default LandingText;
