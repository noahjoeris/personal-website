import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const NavBar = ({ darkModeEnabled, setDarkModeEnabled, parallaxRef }) => {
  const { t, i18n } = useTranslation();

  return (
    <Box flexGrow={1}>
      <AppBar
        color="default"
        style={darkModeEnabled ? { background: "transparent" } : null}
      >
        <Toolbar>
          <Typography
            align="left"
            fontFamily="Babylonica"
            component="div"
            flexGrow={1}
            variant="h4"
            color="inherit"
          >
            Noah Joeris
          </Typography>
          <MenuItem
            color="inherit"
            onClick={() => parallaxRef.current.scrollTo(1)}
          >
            <Typography variant="button">{t("portfolioNav")}</Typography>
          </MenuItem>
          <MenuItem
            color="inherit"
            onClick={() => parallaxRef.current.scrollTo(1)}
          >
            <Typography variant="button">{t("aboutMeNav")}</Typography>
          </MenuItem>
          <MenuItem
            color="inherit"
            onClick={() => parallaxRef.current.scrollTo(1)}
          >
            <Typography variant="button">{t("contactNav")}</Typography>
          </MenuItem>
          <IconButton onClick={() => setDarkModeEnabled(!darkModeEnabled)}>
            <DarkModeIcon color="inherit" />
          </IconButton>
          <IconButton
            onClick={() => {
              i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
            }}
          >
            <Badge
              badgeContent={
                <img
                  src={i18n.language === "en" ? "flag_eng.svg" : "flag_ger.svg"}
                  alt=""
                  style={{ width: "150%", height: "150%" }}
                />
              }
            >
              <LanguageIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
