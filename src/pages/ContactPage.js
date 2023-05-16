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
      flexDirection="row"
      minHeight={"100%"}
      sx={{
        background:
          theme.palette.mode === "light"
            ? "linear-gradient(135deg, #fff, #cfdafc)"
            : "linear-gradient(-135deg, #051135, #121212)",
        transition: "background 1s ease",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minWidth={"50%"}
      >
        <Typography variant="h3">Contact Me</Typography>
        <GradientDivider variant="fullWidth" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minWidth={"50%"}
        sx={{ backgroundColor: "rgba(144, 0, 189,0.1)" }}
      >
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactPage;
