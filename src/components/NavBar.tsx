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
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { ImagePath, Language } from "../constants/constants";

interface NavBarProps {
  darkModeEnabled: boolean;
  setDarkModeEnabled: (darkModeEnabled: boolean) => void;
  scrollToContact: () => void;
}

interface NavBarMobileProps extends NavBarProps {
  t: (key: string) => string;
  i18n: any;
  scrollToContact: () => void;
}

interface NavBarDesktopProps extends NavBarProps {
  t: (key: string) => string;
  i18n: any;
  scrollToContact: () => void;
}

const changeLanguage = (i18n: any) => {
  i18n.changeLanguage(
    i18n.language === Language.English ? Language.German : Language.English
  );
};

const NavBar: FC<NavBarProps> = ({
  darkModeEnabled,
  setDarkModeEnabled,
  scrollToContact,
}) => {
  const isMobileScreenSize = useMediaQuery(useTheme().breakpoints.down("sm"));
  const { t, i18n } = useTranslation();

  return isMobileScreenSize ? (
    <NavBarMobile
      darkModeEnabled={darkModeEnabled}
      setDarkModeEnabled={setDarkModeEnabled}
      scrollToContact={scrollToContact}
      t={t}
      i18n={i18n}
    />
  ) : (
    <NavBarDesktop
      darkModeEnabled={darkModeEnabled}
      setDarkModeEnabled={setDarkModeEnabled}
      scrollToContact={scrollToContact}
      t={t}
      i18n={i18n}
    />
  );
};

const NavBarMobile: FC<NavBarMobileProps> = ({
  darkModeEnabled,
  setDarkModeEnabled,
  scrollToContact,
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
                    onClick={() => {
                      setTimeout(() => {
                        scrollToContact();
                      }, 10);
                    }}
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
          <Box flexGrow={1} />
          <IconButton>
            <img
              src={ImagePath.MyLogo}
              alt="Logo"
              height={42}
              style={darkModeEnabled ? { filter: "invert(100%)" } : undefined}
            />
          </IconButton>
          <Box />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const NavBarDesktop: FC<NavBarDesktopProps> = ({
  darkModeEnabled,
  setDarkModeEnabled,
  scrollToContact,
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
              src={ImagePath.MyLogo}
              height={100}
              alt="Logo"
              style={darkModeEnabled ? { filter: "invert(100%)" } : undefined}
            />
          </Box>
          <MenuItem onClick={() => scrollToContact()}>
            <Typography variant="button">{t("contactNav")}</Typography>
          </MenuItem>
          <IconButton onClick={() => setDarkModeEnabled(!darkModeEnabled)}>
            <DarkModeIcon />
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
