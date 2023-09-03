import { TechIconPath } from "@/app/constants/constants";
import meImage from "@/public/images/me2.webp";
import { Avatar, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import AchievementCircle from "../components/AchievementCircle";
import SkillsetVisualizer, {
  SkillsetItem,
} from "../components/SkillsetVisualizer";

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
              Over the past four years at Airbus, I have deepened and
              diversified my technical expertise, working closely with various
              departments. My background in{" "}
              <b>
                <i>
                  software engineering, web development, cloud computing, and IT
                  security
                </i>
              </b>{" "}
              provides me with a holistic understanding of technology's impact
              on modern business. Today, I'm leading the push for digital
              innovations at Airbus by transforming ideas into practical
              proof-of-concepts and viable products. The primary focus lies in
              emerging domains, including blockchain, cryptography, cloud
              computing and other software-centric innovations.
            </Typography>
            <Typography
              /* variant={isMobileScreen ? "subtitle2" : "h6"} */
              variant={"body1"}
              paragraph
              align="justify"
            >
              Beyond my duties at Airbus, I have ventured into{" "}
              <b>
                <i>Freelance Development</i>
              </b>
              . Drawing on my software expertise, I provide businesses with
              custom solutions tailored to their technological challenges. I'm
              dedicated to empowering companies to excel, delivering
              <b>
                <i> high-quality MVPs, and software solutions</i>
              </b>
              . Whether it's UI/UX-centric web applications, websites, or more
              complex systems, I'm equipped to address a wide spectrum of needs.{" "}
              {/* <Button size="small" sx={{ color: theme.palette.secondary.light }}>
              Hire me
            </Button> */}
            </Typography>
          </Box>
        </Grid>

        <Grid md={5}>
          <Box
            sx={{
              width: "20rem",
              height: "20rem",
              borderRadius: "50%",
              borderStyle: "solid",
              boxShadow: "inset 0 0 1rem 0.2rem",
              backgroundImage: `linear-gradient(rgba(255, 0, 128, 0.5), rgba(15, 62, 215, 0.9))`,
            }}
          >
            <Avatar
              sx={{
                width: "100%",
                height: "100%",
                background: "transparent",
              }}
            >
              <Image
                src={meImage}
                alt="Me"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Avatar>
          </Box>
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
