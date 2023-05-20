import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContactsSideBar from "../components/ContactsSideBar";
import LandingImage from "../components/LandingImage";
import LandingText from "../components/LandingText";

const LandingPage = (props) => {
  const isMobileScreenSize = useMediaQuery(useTheme().breakpoints.down("sm"));

  return (
    <Box
      minHeight={"100%"}
      display={"flex"}
      flexDirection={isMobileScreenSize ? "column" : "row"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <LandingText darkModeEnabled={props.darkModeEnabled} />
      <LandingImage />
      <ContactsSideBar />
    </Box>
  );
};

export default LandingPage;
