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
      justifyContent={isMobileScreenSize ? "start" : "center"}
    >
      <LandingText darkModeEnabled={props.darkModeEnabled} />
      <LandingImage padding={"0.2rem 3rem 0 3rem"} />
      <ContactsSideBar
        alignment={isMobileScreenSize ? "row" : "column"}
        topPositioning={isMobileScreenSize ? "-1rem" : "0"}
      />
    </Box>
  );
};

export default LandingPage;
