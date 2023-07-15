import { Badge, Box, styled, useTheme } from "@mui/material";
import React from "react";
import "../components/LandingImageStyles.css";
import { ImagePath, PARALLAX_OFFSET } from "../constants/constants";

const StyledBadge = styled(Badge)(({ theme }) => ({
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
}));

const LandingImage: React.FC<{
  padding?: string;
  isMobileScreen?: boolean;
}> = ({ padding = "0", isMobileScreen = false }) => {
  const theme = useTheme();
  return (
    <Box
      alignSelf={"end"}
      display={"flex"}
      flexDirection={"row"}
      sx={{
        padding,
        position: "relative",
        bottom: isMobileScreen ? 0 : PARALLAX_OFFSET,
      }}
    >
      <img
        alt="Noah Joeris"
        src={ImagePath.Myself}
        width={"400rem"}
        style={{ zIndex: 1 }}
      />
      <div
        style={{
          width: "38rem",
          height: "38rem",
          position: "absolute",
          bottom: "-4rem",
          right: "-5rem",
          borderRadius: "50%",
          boxShadow: "inset 0 0 0.5rem 0.2rem",
          backgroundImage: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.primary.main})`,
        }}
      />
    </Box>
  );
};

export default LandingImage;
