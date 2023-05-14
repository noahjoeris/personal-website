import { Box, Divider, Typography, styled, useTheme } from "@mui/material";

const ContactPage = () => {
  const theme = useTheme();

  const GradientDivider = styled(Divider)(({ theme }) => ({
    minWidth: "6rem",
    minHeight: "0.4em",
    width: "5rem",
    marginTop: "1rem",
    borderRadius: "1rem",
    boxShadow:
      theme.palette.mode === "light"
        ? "0 0 1rem 0.2rem rgba(0, 0, 0, 0.2)"
        : "0 0 1rem 0.2rem rgba(255, 255, 255, 0.1)",
    backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
  }));

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Typography variant="h3" align="left">
          Contact Me
        </Typography>
        <GradientDivider variant="fullWidth" />
      </Box>
    </Box>
  );
};

export default ContactPage;
