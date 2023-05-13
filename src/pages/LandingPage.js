import { Box, useMediaQuery, useTheme } from "@mui/material";
import ContactsSideBar from "../components/ContactsSideBar";
import LandingImage from "../components/LandingImage";
import LandingText from "../components/LandingText";

const LandingPage = (props) => {
  const theme = useTheme();
  const isMobileScreenSize = useMediaQuery(theme.breakpoints.down("sm"));

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
      <Box
        sx={{
          position: "relative",
          left: "-42rem",
          bottom: "-15rem",
        }}
      >
        <ContactsSideBar />
      </Box>
    </Box>
  );
};

export default LandingPage;
