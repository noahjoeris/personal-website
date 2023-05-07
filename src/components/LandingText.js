import { Divider, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const LandingText = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Typography variant="h3">{t("landingPageText1")}</Typography>
      <Divider sx={{ borderBottomWidth: "0.3rem" }} />
      <Typography variant="h4">{t("landingPageText2")}</Typography>
    </div>
  );
};

export default LandingText;
