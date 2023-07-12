import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ContactsSideBar from "./ContactsSideBar";


const lightBackground : string = "linear-gradient(to top right,  #f0f0f0 80%, #000bae 120%)";
const darkBackground : string = "linear-gradient(to top right,  #070707 80%, #000bae 120%)";

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="10%"
      width="100%"
      justifyContent="space-evenly"
      sx={{ background: theme.palette.mode === "light"
      ? lightBackground
      : darkBackground }}
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
        <ContactsSideBar />
      </Box>
      <Typography sx={{ backgroundColor: "darkgray" }}>
        Made with ❤️ in React.js
      </Typography>
    </Box>
  );
};

export default Footer;
