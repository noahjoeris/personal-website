import { Box, useTheme } from "@mui/material";
import React from "react";
import "../components/LandingImageStyles.css";
import { ImagePath } from "../constants/constants";

/* const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    width: "3rem",
    height: "3rem",
    borderRadius: "100%",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "2px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
})); */

const baseImageStyle: React.CSSProperties = {
  zIndex: 1,
  maxWidth: "25rem",
};

const LandingImage = ({ padding = "0", isMobileScreen = false }) => {
  const theme = useTheme();

  const containerStyle: React.CSSProperties = {
    padding,
    display: "flex",
    position: "relative",
    alignSelf: isMobileScreen ? "center" : "flex-end",
  };
  const backgroundStyle: React.CSSProperties = {
    width: "38rem",
    height: "38rem",
    position: "absolute",
    top: isMobileScreen ? "70px" : "3rem",
    left: isMobileScreen ? "-100px" : "2rem",
    maxHeight: isMobileScreen ? "60vh" : undefined,
    maxWidth: isMobileScreen ? "150vw" : undefined,
    borderRadius: "50%",
    boxShadow: "inset 0 0 0.5rem 0.2rem",
    backgroundImage: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.primary.main})`,
  };

  const imageStyle: React.CSSProperties = isMobileScreen
    ? {
        ...baseImageStyle,
        maxHeight: "60vh",
        position: "relative",
        top: "1rem",
        left: "2rem",
      }
    : baseImageStyle;

  return (
    <Box sx={containerStyle}>
      <img alt="Noah Joeris" src={ImagePath.Myself} style={imageStyle} />
      <div style={backgroundStyle} />
    </Box>
  );
};

export default LandingImage;
