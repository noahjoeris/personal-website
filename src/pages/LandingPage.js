import { Avatar, Badge, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

const imgPath = "me.png";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    width: "5rem",
    height: "5rem",
    borderRadius: "50%",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <header className="App-header">
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          className="App-logo"
          alt="Noah Joeris"
          src={imgPath}
          sx={{ width: "20rem", height: "20rem" }}
        />
      </StyledBadge>
      <p>{t("welcome")}</p>
    </header>
  );
};

export default LandingPage;
