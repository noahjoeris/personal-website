"use client"; // TODO: make this work with server-side rendering
import {
  Box,
  Divider,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import MessageStepper from "../components/MessageStepper";

interface ContactPageProps {
  darkModeEnabled?: boolean;
}

const GradientDivider = styled(Divider)(({ theme }) => ({
  minWidth: "6rem",
  minHeight: "0.4em",
  width: "5rem",
  marginTop: "1rem",
  marginBottom: "3rem",
  borderRadius: "1rem",
  boxShadow:
    theme.palette.mode === "light"
      ? "0 0 1rem 0.2rem rgba(0, 0, 0, 0.2)"
      : "0 0 1rem 0.2rem rgba(255, 255, 255, 0.1)",
  backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
}));

const GlassBox = styled(Box)<{ isMobileScreenSize: boolean }>(
  ({ theme, isMobileScreenSize }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "50rem",
    width: isMobileScreenSize ? "90%" : "40rem",
    maxHeight: "50rem",
    height: isMobileScreenSize ? "" : "35rem",
    zoom: isMobileScreenSize ? "0.7" : "1",
    marginTop: isMobileScreenSize ? "2rem" : "6rem",
    marginLeft: "2rem",
    marginRight: "2rem",
    marginBottom: isMobileScreenSize ? "1rem" : "6rem",
    padding: isMobileScreenSize ? "2rem" : "4rem",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
    border:
      theme.palette.mode === "light"
        ? "4px solid rgba(209, 213, 219, 0.4)"
        : "4px solid rgba(255, 255, 255, 0.125)",
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(255, 255, 255, 0.75)"
        : "rgba(17, 25, 40, 0.6)",
    borderRadius: "12px",
    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(200%)",
  })
);

const ContactPage: FC<ContactPageProps> = ({ darkModeEnabled = true }) => {
  const theme = useTheme();
  const isMobileScreenSize: boolean = useMediaQuery(
    theme.breakpoints.down("sm")
  );
  const { t } = useTranslation();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection={isMobileScreenSize ? "column" : "row"}
      justifyContent="center"
      alignItems="center"
      zIndex={2}
      sx={{
        backgroundColor: darkModeEnabled
          ? "rgba(18, 18, 18, 0.4)"
          : "rgba(189, 96, 213, 0.5)",
        backgroundImage:
          "radial-gradient(at 47% 33%, rgba(144, 0, 189, 0.7) 0, transparent 59%), radial-gradient(at 82% 65%, rgba(0, 11, 174, 0.7) 0, transparent 70%)",
      }}
    >
      <GlassBox isMobileScreenSize={isMobileScreenSize}>
        <Typography variant="h3">Let's Talk</Typography>
        <GradientDivider variant="fullWidth" />
        <Typography variant="subtitle1">{t("contactText")}</Typography>
      </GlassBox>
      <GlassBox isMobileScreenSize={isMobileScreenSize}>
        <MessageStepper />
      </GlassBox>
    </Box>
  );
};

export default ContactPage;
