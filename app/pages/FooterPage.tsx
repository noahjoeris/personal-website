"use client";
import myLogo from "@/public/images/logo.webp";
import { Box, Typography } from "@mui/material";
import React from "react";
import DarkModeAdjustingImage from "../components/DarkModeAdjustingImage";

const FooterPage: React.FC = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="8rem"
        width="100%"
        justifyContent="space-evenly"
        sx={{
          background: (theme) =>
            theme.palette.mode === "dark"
              ? "rgb(8,8,8, 0.5)"
              : "rgb(0,0,0, 0.3)",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          p={"3rem"}
        >
          <Typography>
            © {new Date().getFullYear()} Noah Joeris. All rights reserved.
          </Typography>
          <DarkModeAdjustingImage
            src={myLogo}
            alt="Noah Joeris Logo"
            style={{ height: "8rem", width: "auto", zIndex: 1 }}
            onDarkModeStyles={{
              filter: "invert(1) grayscale(1) brightness(100)",
            }}
          />
        </Box>

        <Typography align="center" sx={{ backgroundColor: "#404040" }}>
          Made with ❤️ in React.js
        </Typography>
      </Box>
    </>
  );
};

export default FooterPage;
