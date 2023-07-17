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

interface NavBarVersionProps extends NavBarProps {
  t: (key: string) => string;
  i18n: any;
}

const ListItemComponent: FC<{
  icon: React.ReactNode;
  text: string;
  action: () => void;
}> = ({ icon, text, action }) => (
  <ListItem disablePadding>
    <ListItemButton onClick={action}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
);

const changeLanguage = (i18n: any) => {
  i18n.changeLanguage(
    i18n.language === Language.English ? Language.German : Language.English
  );
};

const NavBar: FC<NavBarProps> = (props) => {
  const isMobileScreenSize = useMediaQuery(useTheme().breakpoints.down("sm"));
  const { t, i18n } = useTranslation();

  return isMobileScreenSize ? (
    <NavBarMobile {...props} t={t} i18n={i18n} />
  ) : (
    <NavBarDesktop {...props} t={t} i18n={i18n} />
  );
};

const NavBarMobile: FC<NavBarVersionProps> = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleContactClick = () => {
    setTimeout(() => {
      props.scrollToContact();
    }, 10);
  };

  const handleDarkModeToggle = () =>
    props.setDarkModeEnabled(!props.darkModeEnabled);

  const handleLanguageChange = () => changeLanguage(props.i18n);

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
                <ListItemComponent
                  icon={<ContactMailIcon />}
                  text={props.t("contactNav")}
                  action={handleContactClick}
                />
              </List>
              <Divider />
              <List>
                <ListItemComponent
                  icon={<DarkModeIcon />}
                  text={props.darkModeEnabled ? "Light Mode" : "Dark Mode"}
                  action={handleDarkModeToggle}
                />
                <ListItemComponent
                  icon={
                    <Badge
                      badgeContent={
                        <img
                          src={
                            props.i18n.language === Language.German
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
                  }
                  text={props.t("language")}
                  action={handleLanguageChange}
                />
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
              style={
                props.darkModeEnabled ? { filter: "invert(100%)" } : undefined
              }
            />
          </IconButton>
          <Box />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

const NavBarDesktop: FC<NavBarVersionProps> = (props) => {
  const handleDarkModeToggle = () =>
    props.setDarkModeEnabled(!props.darkModeEnabled);

  const handleLanguageChange = () => changeLanguage(props.i18n);

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
              style={
                props.darkModeEnabled ? { filter: "invert(100%)" } : undefined
              }
            />
          </Box>
          <MenuItem onClick={props.scrollToContact}>
            <Typography variant="button">{props.t("contactNav")}</Typography>
          </MenuItem>
          <IconButton onClick={handleDarkModeToggle}>
            <DarkModeIcon />
          </IconButton>
          <IconButton onClick={handleLanguageChange}>
            <Badge
              badgeContent={
                <img
                  src={
                    props.i18n.language === Language.German
                      ? ImagePath.GermanFlag
                      : ImagePath.EnglishFlag
                  }
                  alt="Language Flag"
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
