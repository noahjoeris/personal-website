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

const NavBar = ({ darkModeEnabled, setDarkModeEnabled, locale, setLocale }) => {
  const { i18n } = useTranslation();

  return (
    <Box flexGrow={1}>
      <AppBar position="static">
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
          <MenuItem color="inherit">
            <Typography variant="button">Portfolio</Typography>
          </MenuItem>
          <MenuItem color="inherit">
            <Typography variant="button">About Me</Typography>
          </MenuItem>
          <MenuItem color="inherit">
            <Typography variant="button">Contact</Typography>
          </MenuItem>
          <IconButton onClick={() => setDarkModeEnabled(!darkModeEnabled)}>
            <DarkModeIcon color="inherit" />
          </IconButton>
          <IconButton
            onClick={() => {
              i18n.changeLanguage(locale === "enUS" ? "de" : "en");
              setLocale(locale === "enUS" ? "deDE" : "enUS");
            }}
          >
            <Badge
              badgeContent={
                <img
                  src={locale === "enUS" ? "flag_eng.svg" : "flag_ger.svg"}
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
