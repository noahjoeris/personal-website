import { Box } from "@mui/material";
import LandingImage from "../components/LandingImage";
import LandingText from "../components/LandingText";

const LandingPage = () => {
  return (
    <Box
      minHeight={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <LandingText />
      <LandingImage />
    </Box>
  );
};

export default LandingPage;
