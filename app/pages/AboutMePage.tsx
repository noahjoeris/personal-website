import { Avatar, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import AchievementCircle from "../components/AchievementCircle";
import SkillsetVisualizer, {
  SkillsetItem,
} from "../components/SkillsetVisualizer";
import { ImagePath, TechIconPath } from "../constants/constants";

const programmingLanguagesItems: SkillsetItem[] = [
  { icon: TechIconPath.Python, label: "Python" },
  { icon: TechIconPath.Java, label: "Java" },
  { icon: TechIconPath.TypeScript, label: "Typescript" },
  { icon: TechIconPath.JavaScript, label: "Javascript" },
  { icon: TechIconPath.HTML, label: "HTML" },
  { icon: TechIconPath.CSS, label: "CSS" },
];

const devOpsItems: SkillsetItem[] = [
  { icon: TechIconPath.Docker, label: "Docker" },
  { icon: TechIconPath.Linux, label: "Linux" },
  { icon: TechIconPath.AWS, label: "AWS" },
  { icon: TechIconPath.Kubernetes, label: "Kubernetes" },
];

const toolsAndFrameworkItems: SkillsetItem[] = [
  { icon: TechIconPath.React, label: "React" },
  { icon: TechIconPath.Flutter, label: "Flutter" },
  { icon: TechIconPath.MUI, label: "MUI" },
];

const AboutmePage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid
        container
        padding={{ xs: 1, sm: 4 }}
        maxWidth={"70rem"}
        gap={{ xs: 2, sm: 2 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid>
          <Box
            sx={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              borderRadius: "2rem",
              padding: "2rem",
            }}
          >
            <Typography
              /* variant={isMobileScreen ? "h4" : "h2"} */
              variant={"h3"}
              sx={{ fontWeight: "bold" }}
              align="center"
              gutterBottom
            >
              About Me
            </Typography>

            {/* TODO: outsource text to translations */}

            <Typography
              /* variant={isMobileScreen ? "subtitle2" : "h6"} */
              variant={"body1"}
              paragraph
              align="justify"
            >
              Over the past four years, I've significantly enhanced my technical
              skills at Airbus, gaining diverse experience across multiple
              departments. My wide-ranging experience includes software
              engineering, web development, cloud computing, and IT security.
              This gives me a broad understanding of technology in the business
              sector. Today, I'm leading the push for new innovative ideas at
              Airbus, responsible for guiding the development of new projects in
              the company. I turn ideas into reality by building
              proof-of-concepts and minimum viable products in several emerging
              areas.
            </Typography>
            <Typography
              /* variant={isMobileScreen ? "subtitle2" : "h6"} */
              variant={"body1"}
              paragraph
              align="justify"
            >
              Beyond my duties at Airbus, I'm now offering my services as a
              freelancer to help other companies deal with the complexities of
              software and DevOps. My aim is to use my expertise in software to
              enable businesses to succeed with technology. As a freelancer, I'm
              excited to start empowering companies to thrive by providing them
              with well-designed and effective software solutions.{" "}
              {/* <Button size="small" sx={{ color: theme.palette.secondary.light }}>
              Hire me
            </Button> */}
            </Typography>
          </Box>
        </Grid>

        <Grid md={5}>
          <Avatar
            src={ImagePath.Myself2}
            sx={{
              minWidth: "15rem",
              minHeight: "15rem",
              borderStyle: "solid",
              boxShadow: "0 0 1rem 0.1rem",
              width: { xs: "80vw", sm: "20rem" },
              height: { xs: "30vh", sm: "20rem" },
            }}
          />
        </Grid>

        <Grid md={4} minHeight={"20rem"} minWidth={"20rem"}>
          <Box
            display="flex"
            justifyContent="end"
            alignItems={"end"}
            position={"relative"}
            top={"1rem"}
          >
            <AchievementCircle header="4+" subheader="Years Work Experience" />
          </Box>
          <Box display={"flex"} justifyContent={"start"} alignItems={"start"}>
            <AchievementCircle header="Top" subheader="University Graduate" />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"end"}
            alignItems={"end"}
            position={"relative"}
            bottom={"1rem"}
          >
            <AchievementCircle
              header="Since 2016"
              subheader="Fully committed to IT"
              headerVariant="h4"
            />
          </Box>
        </Grid>

        <Grid
          container
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.2)", borderRadius: "2rem" }}
        >
          <Grid>
            <SkillsetVisualizer
              header="Programming Skills"
              items={programmingLanguagesItems}
            />
          </Grid>
          <Grid>
            <SkillsetVisualizer header="DevOps Skills" items={devOpsItems} />
          </Grid>
          <Grid>
            <SkillsetVisualizer
              header="Tools & Frameworks"
              items={toolsAndFrameworkItems}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutmePage;
