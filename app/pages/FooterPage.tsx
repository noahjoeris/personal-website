"use client";
import myLogo from "@/public/images/logo.png";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";

const lightBackground: string =
  "linear-gradient(to top right,  rgb(240, 240, 240, 0.8) 80%, #000bae 120%)";
const darkBackground: string =
  "linear-gradient(to top right,  	rgb(8,8,8, 0.9) 80%, #000bae 120%)";

const FooterPage: React.FC = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="20vh"
        width="100%"
        justifyContent="space-evenly"
        sx={{
          background:
            theme.palette.mode === "dark" ? darkBackground : lightBackground,
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
          <Image
            src={myLogo}
            alt="Noah Joeris Logo"
            style={{
              height: "8rem",
              width: "auto",
              zIndex: 1,
              filter:
                theme.palette.mode === "dark"
                  ? "invert(1) grayscale(1) brightness(100)"
                  : undefined,
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
