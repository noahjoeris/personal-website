import { Box, Divider, Typography, styled, useTheme } from "@mui/material";

const ContactPage = () => {
  const theme = useTheme();

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

  const GlassBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "45%",
    marginTop: "10%",
    marginLeft: "2.5%",
    marginRight: "2.5%",
    marginBottom: "10%",
    padding: "4rem",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    border:
      theme.palette.mode === "light"
        ? "4px solid rgba(209, 213, 219, 0.4)"
        : "4px solid rgba(255, 255, 255, 0.125)",
    backgroundColor:
      theme.palette.mode === "light"
        ? "rgba(255, 255, 255, 0.75)"
        : "rgba(17, 25, 40, 0.5)",
    borderRadius: "12px",
    backdropFilter: "blur(16px) saturate(180%)",
    WebkitBackdropFilter: "blur(16px) saturate(200%)",
  }));

  return (
    <Box
      display="flex"
      flexDirection="row"
      minHeight="100%"
      sx={{
        backgroundColor: theme.palette.mode === "light" ? "#bd60d5" : "#121212",
        backgroundImage:
          "radial-gradient(at 47% 33%, #9000bd 0, transparent 59%), radial-gradient(at 82% 65%, #000bae 0, transparent 55%)",
      }}
    >
      <GlassBox>
        <Typography variant="h3">Reach out to me</Typography>
        <GradientDivider variant="fullWidth" />
        <Typography variant="subtitle1">
          My door is always open for a good cup of coffee and a chat. Whether it
          be about a potential project, a new opportunity, or just to say hi.
        </Typography>
      </GlassBox>
      <GlassBox>
        <Typography>
          {/* Add Stepper component here */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Typography>
      </GlassBox>
    </Box>
  );
};

export default ContactPage;
