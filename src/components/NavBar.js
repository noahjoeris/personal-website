import ContactMailIcon from "@mui/icons-material/ContactMail";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  AppBar,
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const NavBar = ({
  parallaxRef,
  darkModeEnabled = true,
  setDarkModeEnabled = () => {},
}) => {
  const theme = useTheme();
  const isMobileScreenSize = useMediaQuery(theme.breakpoints.down("sm"));
  const { t, i18n } = useTranslation();

  return isMobileScreenSize ? (
    <NavBarMobile
      parallaxRef={parallaxRef}
      darkModeEnabled={darkModeEnabled}
      setDarkModeEnabled={setDarkModeEnabled}
      t={t}
      i18n={i18n}
    />
  ) : (
    <NavBarDesktop
      parallaxRef={parallaxRef}
      darkModeEnabled={darkModeEnabled}
      setDarkModeEnabled={setDarkModeEnabled}
      t={t}
      i18n={i18n}
    />
  );
};

const NavBarMobile = ({
  parallaxRef,
  darkModeEnabled,
  setDarkModeEnabled,
  t,
  i18n,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Box flexGrow={1}>
      <AppBar color="default" style={{ background: "transparent" }}>
        <Toolbar sx={{ flexDirection: "row-reverse" }}>
          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          >
            <Box
              sx={{
                width: 250,
              }}
              role="presentation"
              onClick={() => setIsDrawerOpen(false)}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => parallaxRef?.current.scrollTo(1)}
                  >
                    <ListItemIcon>
                      <FeaturedVideoIcon />
                    </ListItemIcon>
                    <ListItemText primary={t("portfolioNav")} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => parallaxRef?.current.scrollTo(1)}
                  >
                    <ListItemIcon>
                      <EmojiPeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary={t("aboutMeNav")} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => parallaxRef?.current.scrollTo(1)}
                  >
                    <ListItemIcon>
                      <ContactMailIcon />
                    </ListItemIcon>
                    <ListItemText primary={t("contactNav")} />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => setDarkModeEnabled(!darkModeEnabled)}
                  >
                    <ListItemIcon>
                      <DarkModeIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={darkModeEnabled ? "Light Mode" : "Dark Mode"}
                    />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() =>
                      i18n.changeLanguage(i18n.language === "en" ? "de" : "en")
                    }
                  >
                    <ListItemIcon>
                      <Badge
                        badgeContent={
                          <img
                            src={
                              i18n.language === "en"
                                ? "flag_eng.svg"
                                : "flag_ger.svg"
                            }
                            alt=""
                            style={{ width: "150%", height: "150%" }}
                          />
                        }
                      >
                        <LanguageIcon />
                      </Badge>
                    </ListItemIcon>
                    <ListItemText primary={t("language")} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
          <IconButton
            onClick={() => setIsDrawerOpen(true)}
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            align="left"
            fontFamily="Babylonica"
            flexGrow={1}
            variant="h4"
            color="inherit"
          >
            Noah Joeris
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const NavBarDesktop = ({
  parallaxRef,
  darkModeEnabled,
  setDarkModeEnabled,
  t,
  i18n,
}) => {
  return (
    <Box flexGrow={1}>
      <AppBar color="default" style={{ background: "transparent" }}>
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
            onClick={() => parallaxRef?.current.scrollTo(1)}
          >
            <Typography variant="button">{t("portfolioNav")}</Typography>
          </MenuItem>
          <MenuItem
            color="inherit"
            onClick={() => parallaxRef?.current.scrollTo(1)}
          >
            <Typography variant="button">{t("aboutMeNav")}</Typography>
          </MenuItem>
          <MenuItem
            color="inherit"
            onClick={() => parallaxRef?.current.scrollTo(1)}
          >
            <Typography variant="button">{t("contactNav")}</Typography>
          </MenuItem>
          <IconButton onClick={() => setDarkModeEnabled(!darkModeEnabled)}>
            <DarkModeIcon color="inherit" />
          </IconButton>
          <IconButton
            onClick={() =>
              i18n.changeLanguage(i18n.language === "en" ? "de" : "en")
            }
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
