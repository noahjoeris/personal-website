import ContactsSideBar from "@/app/components/ContactsSideBar";
import LandingImage from "@/app/components/LandingImage";
import LandingText from "@/app/components/LandingText";
import { useTranslation } from "@/app/i18n/server";
import { Box } from "@mui/material";
import { FC } from "react";

interface LandingPageProps {
  language?: string;
}

const LandingPage: FC<LandingPageProps> = async ({ language = "en" }) => {
  const { t } = await useTranslation(language);

  return (
    <Box
      minHeight={"45rem"}
      maxHeight={{ xs: "100vh", sm: null }}
      display={"flex"}
      flexDirection={{ xs: "column", sm: "row" }}
      alignItems={"center"}
      justifyContent={{ xs: "start", sm: "center" }}
      overflow={"hidden"}
      gap={{ xs: "1rem", md: "7rem" }}
    >
      <LandingText translations={t} />
      <LandingImage padding={{ sm: "0 0 0 4rem" }} />
      <ContactsSideBar alignment="column" />
    </Box>
  );
};

export default LandingPage;
