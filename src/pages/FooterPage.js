import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import ContactsSideBar from "../components/ContactsSideBar";

const FooterPage = () => {
  const isMobileScreenSize = useMediaQuery(useTheme().breakpoints.down("sm"));
  const theme = useTheme();

  return (
    <Box
      minHeight={"100%"}
      display={"flex"}
      flexDirection={"row"}
      padding={"3rem"}
      alignItems={"top"}
      justifyContent={"center"}
      sx={{
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(to top right,  #f0f0f0 80%, #000bae 120%);"
            : "linear-gradient(to top right,  #070707 80%, #000bae 120%);",
        borderTop: "6px solid #121212",
      }}
    >
      <Box display={"flex"} flexDirection={"column"}>
        <Typography variant={"h6"} align="left" paddingLeft={"2rem"}>
          Contact Me
        </Typography>
        <ContactsSideBar alignment={"row"} />
      </Box>
    </Box>
  );
};

export default FooterPage;
