"use client";
import me from "@/public/images/me.webp";
import { Box, styled } from "@mui/material";
import { Theme } from "@mui/system";
import Image from "next/image";
import { FC } from "react";

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

const LandingImage: FC<{ padding: any }> = ({
  padding = { xs: "0", sm: "0" },
}) => {
  const MainContainer = styled(Box)(({ theme }) => ({
    padding: padding,
    display: "flex",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      alignSelf: "center",
    },
    [theme.breakpoints.up("sm")]: {
      alignSelf: "flex-end",
    },
  }));

  const ColoredCircle = styled("div")(({ theme }) => ({
    width: "38rem",
    height: "38rem",
    position: "absolute",
    borderRadius: "50%",
    boxShadow: "inset 0 0 0.5rem 0.2rem",
    backgroundImage: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.primary.main})`,
    [theme.breakpoints.down("sm")]: {
      top: "6rem",
      left: "-100px",
      maxHeight: "60vh",
      maxWidth: "150vw",
    },
    [theme.breakpoints.up("sm")]: {
      bottom: "-3rem",
      left: "-5rem",
    },
  }));

  const imageStyle = (theme: Theme) => ({
    zIndex: 1,
    maxWidth: "25rem",
    position: "relative",
    bottom: "-1rem",
    [theme.breakpoints.down("sm")]: {
      maxHeight: "60vh",
      top: "1rem",
      left: "5rem",
    },
  });

  return (
    <MainContainer>
      <Box sx={imageStyle}>
        <Image
          src={me}
          alt="Noah Joeris"
          priority
          style={{ height: "100%", width: "auto", maxHeight: "38rem" }}
        />
      </Box>
      <ColoredCircle />
    </MainContainer>
  );
};

export default LandingImage;
