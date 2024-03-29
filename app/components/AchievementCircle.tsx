import { Box, Typography } from "@mui/material";
import React from "react";

interface AchievementCircleProps {
  headerVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  header: string;
  subheader: string;
}

const AchievementCircle: React.FC<AchievementCircleProps> = ({
  header,
  subheader,
  headerVariant = "h3",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "11rem",
        width: "12rem",
        borderRadius: "50%",
        borderStyle: "solid",
        justifyContent: "center",
        padding: "0.7rem",
        backgroundImage: `linear-gradient(rgba(255, 0, 128, 0.5), rgba(15, 62, 215, 0.9))`,
        boxShadow: "inset 0 0 0.5rem 0.2rem",
      }}
    >
      <Typography
        variant={headerVariant}
        fontStyle={"italic"}
        fontWeight={"bold"}
        align="center"
        color={"white"}
      >
        {header}
      </Typography>
      <Typography variant="subtitle1" align="center" color={"white"}>
        {subheader}
      </Typography>
    </Box>
  );
};

export default AchievementCircle;
