import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { ImagePath } from "../constants/constants";

const lightBackground: string =
  "linear-gradient(to top right,  rgb(240, 240, 240, 0.8) 80%, #000bae 120%)";
const darkBackground: string =
  "linear-gradient(to top right,  	rgb(8,8,8, 0.9) 80%, #000bae 120%)";

const FooterPage: React.FC<{
  darkModeEnabled?: boolean;
}> = ({ darkModeEnabled = true }) => {
  const theme = useTheme();
  const isMobileScreenSize: boolean = useMediaQuery(
    theme.breakpoints.down("sm")
  );

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
          <img
            src={ImagePath.MyLogo}
            alt="Noah Joeris Logo"
            style={{
              position: "relative",
              height: isMobileScreenSize ? "12vh" : "20vh",
              zIndex: 1,
              right: 0,
              filter: darkModeEnabled
                ? "invert(1) grayscale(1) brightness(100)"
                : undefined,
            }}
          />
        </Box>
        <Typography sx={{ backgroundColor: "#404040" }}>
          Made with ❤️ in React.js
        </Typography>
      </Box>
    </>
  );
};

export default FooterPage;
