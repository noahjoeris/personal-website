import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

interface AchievementCircleProps {
  isDarkModeEnabled?: boolean;
  isMobileScreen?: boolean;
  headerVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  header: string;
  subheader: string;
}

const AchievementCircle: React.FC<AchievementCircleProps> = ({
  isDarkModeEnabled = true,
  isMobileScreen = false,
  header,
  subheader,
  headerVariant = "h3",
}) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "10.3rem",
        width: "10.3rem",
        borderRadius: "50%",
        borderStyle: "solid",
        alignItems: "center",
        justifyContent: "center",
        padding: "0.6rem",
        backgroundImage: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.primary.main})`,
        boxShadow: "inset 0 0 0.5rem 0.2rem",
      }}
    >
      <Typography
        variant={headerVariant}
        fontStyle={"italic"}
        fontWeight={"bold"}
      >
        {header}
      </Typography>
      <Typography variant="subtitle1">{subheader}</Typography>
    </Box>
  );
};

export default AchievementCircle;
