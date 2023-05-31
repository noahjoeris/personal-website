import { Box, Typography, useTheme } from "@mui/material";
import ContactsSideBar from "./ContactsSideBar";

const Footer = () => {
  const theme = useTheme();
  const gradientBackground =
    theme.palette.mode === "light"
      ? "linear-gradient(to top right,  #f0f0f0 80%, #000bae 120%)"
      : "linear-gradient(to top right,  #070707 80%, #000bae 120%)";

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="10%"
      width="100%"
      justifyContent="space-evenly"
      sx={{ background: gradientBackground }}
    >
      <Box display="flex" justifyContent="space-evenly" alignItems="center">
        <Typography>© 2023 Noah Joeris. All rights reserved.</Typography>
        <ContactsSideBar alignment="row" />
      </Box>
      <Typography sx={{ backgroundColor: "darkgray" }}>
        Made with ❤️ in React.js
      </Typography>
    </Box>
  );
};

export default Footer;
