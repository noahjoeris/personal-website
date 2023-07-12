import ContactMailIcon from "@mui/icons-material/ContactMail";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
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
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImagePath, Language } from "../constants/constants";

interface NavBarProps {
  parallaxRef: React.MutableRefObject<any>;
  darkModeEnabled: boolean;
  setDarkModeEnabled: (darkModeEnabled: boolean) => void;
}

interface NavBarMobileProps extends NavBarProps {
  t: (key: string) => string;
  i18n: any;
}

interface NavBarDesktopProps extends NavBarProps {
  t: (key: string) => string;
  i18n: any;
}

const changeLanguage = (i18n: any) => {
  i18n.changeLanguage(
    i18n.language === Language.English ? Language.German : Language.English
  );
};

const NavBar: FC<NavBarProps> = ({
  parallaxRef,
  darkModeEnabled,
  setDarkModeEnabled,
}) => {
  const isMobileScreenSize = useMediaQuery(useTheme().breakpoints.down("sm"));
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

const NavBarMobile: FC<NavBarMobileProps> = ({
  parallaxRef,
  darkModeEnabled,
  setDarkModeEnabled,
  t,
  i18n,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box flexGrow={1} marginBottom={4}>
      <AppBar
        position="sticky"
        color="default"
        style={{ background: "transparent" }}
      >
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
                    onClick={() => parallaxRef?.current.scrollTo(0.8)}
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
                  <ListItemButton onClick={() => changeLanguage(i18n)}>
                    <ListItemIcon>
                      <Badge
                        badgeContent={
                          <img
                            src={
                              i18n.language === Language.German
                                ? ImagePath.GermanFlag
                                : ImagePath.EnglishFlag
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
            noWrap
          >
            Noah Joeris
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const NavBarDesktop: FC<NavBarDesktopProps> = ({
  parallaxRef,
  darkModeEnabled,
  setDarkModeEnabled,
  t,
  i18n,
}) => {
  return (
    <Box flexGrow={1} maxWidth={"80rem"} margin="0 auto">
      <AppBar
        position="sticky"
        color="default"
        style={{
          background: "transparent",
          borderRadius: "0 0 5rem 5rem",
          backdropFilter: "blur(2px)",
        }}
      >
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <img
              src={ImagePath.Signature}
              height={100}
              alt="Noah Joeris"
              style={darkModeEnabled ? { filter: "invert(100%)" } : null}
            />
          </Box>
          <MenuItem
            color="inherit"
            onClick={() => parallaxRef?.current.scrollTo(0.8)}
          >
            <Typography variant="button">{t("contactNav")}</Typography>
          </MenuItem>
          <IconButton onClick={() => setDarkModeEnabled(!darkModeEnabled)}>
            <DarkModeIcon color="inherit" />
          </IconButton>
          <IconButton onClick={() => changeLanguage(i18n)}>
            <Badge
              badgeContent={
                <img
                  src={
                    i18n.language === Language.German
                      ? ImagePath.GermanFlag
                      : ImagePath.EnglishFlag
                  }
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
