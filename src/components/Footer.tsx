import { Box, Typography } from "@mui/material";
import React from "react";
import { ImagePath } from "../constants/constants";

const lightBackground: string =
  "linear-gradient(to top right,  #f0f0f0 80%, #000bae 120%)";
const darkBackground: string =
  "linear-gradient(to top right,  #070707 80%, #000bae 120%)";

const Footer: React.FC<{ darkModeEnabled?: boolean }> = ({
  darkModeEnabled = true,
}) => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="20vh"
        width="100%"
        justifyContent="space-evenly"
        sx={{
          background: darkModeEnabled ? darkBackground : lightBackground,
        }}
      >
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          paddingLeft={"0.5rem"}
        >
          <Typography>
            © {new Date().getFullYear()} Noah Joeris. All rights reserved.
          </Typography>
        </Box>
        <Typography sx={{ backgroundColor: "#404040" }}>
          Made with ❤️ in React.js
        </Typography>
        <img
          src={ImagePath.MyLogo}
          style={{
            position: "absolute",
            height: "20vh",
            zIndex: 1,
            right: 0,
            filter: darkModeEnabled
              ? "invert(1) grayscale(1) brightness(100)"
              : undefined,
          }}
        />
      </Box>
    </>
  );
};

export default Footer;
