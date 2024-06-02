import { TechIconPath } from "@/app/constants/constants";
import meImage from "@/public/images/me2.webp";
import { Avatar, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";
import AchievementCircle from "../components/AchievementCircle";
import SkillsetVisualizer, {
  SkillsetItem,
} from "../components/SkillsetVisualizer";
import { useTranslation } from "../i18n/server";

const programmingLanguagesItems: SkillsetItem[] = [
  { icon: TechIconPath.Rust, label: "Rust" },
  { icon: TechIconPath.TypeScript, label: "Typescript" },
  { icon: TechIconPath.JavaScript, label: "Javascript" },
  { icon: TechIconPath.HTML, label: "HTML" },
  { icon: TechIconPath.CSS, label: "CSS" },
  { icon: TechIconPath.Python, label: "Python" },
  { icon: TechIconPath.Java, label: "Java" },
];

const devOpsItems: SkillsetItem[] = [
  { icon: TechIconPath.Docker, label: "Docker" },
  { icon: TechIconPath.Linux, label: "Linux" },
  { icon: TechIconPath.AWS, label: "AWS" },
  { icon: TechIconPath.Kubernetes, label: "Kubernetes" },
];

const toolsAndFrameworkItems: SkillsetItem[] = [
  { icon: TechIconPath.React, label: "React" },
  { icon: TechIconPath.Nextjs, label: "Nextjs" },
  { icon: TechIconPath.Substrate, label: "Substrate" },
  { icon: TechIconPath.Flutter, label: "Flutter" },
  { icon: TechIconPath.MUI, label: "MUI" },
];

interface AboutmePageProps {
  language?: string;
}

const AboutmePage: React.FC<AboutmePageProps> = async ({ language = "en" }) => {
  const { t } = await useTranslation(language);

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
              variant={"h3"}
              sx={{ fontWeight: "bold" }}
              align="center"
              gutterBottom
            >
              {t("aboutMeHeader")}
            </Typography>

            <Typography variant={"body1"} paragraph align="justify">
              {t("aboutMeText1")}
              <br />
              <br />
              {t("aboutMeText2")}
              <br />
              <br />
              {t("aboutMeText3")}
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
            <AchievementCircle
              header={t("aboutMeAchievementHeader1")}
              subheader={t("aboutMeAchievementSubHeader1")}
              headerVariant="h4"
            />
          </Box>
          <Box display={"flex"} justifyContent={"start"} alignItems={"start"}>
            <AchievementCircle
              header={t("aboutMeAchievementHeader2")}
              subheader={t("aboutMeAchievementSubHeader2")}
            />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"end"}
            alignItems={"end"}
            position={"relative"}
            bottom={"1rem"}
          >
            <AchievementCircle
              header={t("aboutMeAchievementHeader3")}
              subheader={t("aboutMeAchievementSubHeader3")}
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
