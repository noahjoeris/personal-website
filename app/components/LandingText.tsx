import airbusLogo from "@/public/images/airbus.png";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { ImagePath } from "../constants/constants";

const LandingText: React.FC = () => {
  const theme = useTheme();

  const imageStyle: React.CSSProperties = {
    maxWidth: "90%",
    maxHeight: "15rem",
    filter: theme.palette.mode === "dark" ? "invert(100%)" : null,
  };

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
        {/* {translations("landingPageTextWelcome")} */}
      </Typography>
      <img src={ImagePath.Signature} alt="Signature" style={imageStyle} />
      <Box>
        <Typography variant="h6" marginBottom={"1rem"} marginTop={"2rem"}>
          <Typewriter
            words={
              ["test", "dada", "tetete"]
              /* 
              translations("factsAboutMe", {
                returnObjects: true,
              }) (as string[]).sort(() => Math.random() - 0.5) */
            }
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
        {/* {translations("jobRole")} */}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography variant="h5" fontStyle="italic" marginRight={"0.5rem"}>
          @
        </Typography>
        <Image
          src={airbusLogo}
          alt="Airbus"
          style={{
            height: "1.5rem",
            width: "auto",
            ...(theme.palette.mode === "dark"
              ? { filter: "invert(1) grayscale(1) brightness(100)" }
              : null),
          }}
        />
      </Box>
    </Box>
  );
};

export default LandingText;
