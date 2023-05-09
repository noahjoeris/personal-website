import { Box, useMediaQuery, useTheme } from "@mui/material";
import LandingImage from "../components/LandingImage";
import LandingText from "../components/LandingText";

const LandingPage = () => {
  const isMobileScreenSize = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
    <Box
      minHeight={"100%"}
      display={"flex"}
      flexDirection={isMobileScreenSize ? "column" : "row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <LandingText />
      <LandingImage />
    </Box>
  );
};

export default LandingPage;
