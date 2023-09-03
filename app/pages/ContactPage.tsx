import { Box, Divider, Typography } from "@mui/material";
import React, { FC } from "react";
import MessageStepper from "../components/MessageStepper";
import { useTranslation } from "../i18n/server";

const GradientDivider: React.FC = () => {
  return (
    <Divider
      variant="fullWidth"
      sx={{
        minWidth: "6rem",
        minHeight: "0.4em",
        width: "5rem",
        marginTop: "1rem",
        marginBottom: "3rem",
        borderRadius: "1rem",
        boxShadow: "0 0 1rem 0.2rem rgba(255, 255, 255, 0.2)",
        backgroundImage: `linear-gradient(to right, #9000bd, #0f3ed7)`,
      }}
    />
  );
};

const GlassBox: React.FC<{ children: any }> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "50rem",
        width: { xs: "90%", sm: "40rem" },
        height: { sm: "35rem" },
        maxHeight: "50rem",

        marginTop: { xs: "2rem", sm: "4rem" },
        marginLeft: "2rem",
        marginRight: "2rem",
        marginBottom: { xs: "1rem", sm: "4rem" },
        padding: "2rem",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
        border: "4px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "12px",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(200%)",
      }}
    >
      {children}
    </Box>
  );
};

interface ContactPageProps {
  language?: string;
}

const ContactPage: FC<ContactPageProps> = async ({ language = "en" }) => {
  const { t } = await useTranslation(language);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      zIndex={2}
      sx={{
        backgroundColor: "rgba(18, 18, 18, 0.1)",
        backgroundImage:
          "radial-gradient(at 47% 33%, rgba(144, 0, 189, 0.4) 0, transparent 59%), radial-gradient(at 82% 65%, rgba(0, 11, 174, 0.4) 0, transparent 70%)",
      }}
    >
      <GlassBox>
        <Typography variant="h3">Let's Talk</Typography>
        <GradientDivider />
        <Typography variant="subtitle1" align="center">
          {t("contactText")}
        </Typography>
      </GlassBox>
      <GlassBox>
        <MessageStepper />
      </GlassBox>
    </Box>
  );
};

export default ContactPage;
