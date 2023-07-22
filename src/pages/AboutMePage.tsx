import {
  Avatar,
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { ImagePath } from "../constants/constants";

const mainContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
};

const rowContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
};

const AboutmePage: React.FC = () => {
  const theme = useTheme();
  const isMobileScreen: boolean = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box display="flex" alignItems={"center"} justifyContent={"center"}>
      <Grid
        container
        padding={4}
        maxWidth={"70rem"}
        gap={{ xs: 2, md: 6 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid md={12}>
          <Typography
            variant={isMobileScreen ? "subtitle2" : "h6"}
            paragraph
            align="justify"
          >
            Over the past four years, I've honed my skills at Airbus, working
            across a spectrum of departments. My multifaceted experience
            encompasses software engineering, web development, cloud computing,
            and IT security, affording me a holistic view of technology in
            industry. Today, I am at the helm of innovation at Airbus, entrusted
            with spearheading in-house developments. I bring ideas to life by
            crafting proof-of-concepts (PoCs) and minimum viable products (MVPs)
            in a range of burgeoning fields.
          </Typography>
          <Typography
            variant={isMobileScreen ? "subtitle2" : "h6"}
            paragraph
            align="justify"
          >
            Beyond my duties at Airbus, I also leverage my expertise to support
            other companies in navigating the complex landscapes of software and
            DevOps. As a Freelancer, my mission is to empower businesses to
            thrive by leveraging well-designed software products{" "}
            <Button size="small" sx={{ color: theme.palette.secondary.light }}>
              Hire me
            </Button>
          </Typography>
        </Grid>
        <Grid>
          <Avatar
            src={ImagePath.Myself2}
            variant="rounded"
            sx={{
              borderRadius: "20%",
              minWidth: "12rem",
              minHeight: "12rem",
              ...(isMobileScreen
                ? {
                    width: "80vw",
                    height: "40vh",
                  }
                : {
                    width: "20rem",
                    height: "20rem",
                  }),
            }}
          />
        </Grid>
        <Grid>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "10rem",
              width: "10rem",
              borderRadius: "50%",
              borderStyle: "solid",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3">4</Typography>
            <Typography variant="h6">Years of Experience</Typography>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutmePage;
