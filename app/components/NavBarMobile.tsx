"use client";
import engFlag from "@/public/images/flag_eng.svg";
import gerFlag from "@/public/images/flag_ger.svg";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
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
  Toolbar,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FC, useState } from "react";
import { NavBarProps } from "./NavBar";
import ScrollLink from "./ScrollLink";

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

const NavBarMobile: FC<NavBarProps> = ({ onDarkModeButtonClick }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const params = useParams();
  const router = useRouter();

  return (
    <Box flexGrow={1} marginBottom={5}>
      <AppBar elevation={0} style={{ background: "transparent" }}>
        <Toolbar>
          <IconButton
            onClick={() => setIsDrawerOpen(true)}
            aria-label="open drawer"
            sx={{ mr: 2 }}
            edge="end"
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            /* sx={{ zIndex: 1000 }} */
          >
            <Box
              sx={{ width: "50vw" }}
              role="presentation"
              onClick={() => setIsDrawerOpen(false)}
            >
              <List>
                <ScrollLink
                  href="#section-2-aboutme"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemComponent
                    icon={<EmojiPeopleIcon />}
                    text="About Me"
                    action={() => {}}
                  />
                </ScrollLink>
                <ScrollLink
                  href="#section-3-contact"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemComponent
                    icon={<ContactMailIcon />}
                    text="Contact"
                    action={() => {}}
                  />
                </ScrollLink>
              </List>
              <Divider />

              <List>
                <ListItemComponent
                  icon={<DarkModeIcon />}
                  text={
                    theme.palette.mode === "dark" ? "Light Mode" : "Dark Mode"
                  }
                  action={onDarkModeButtonClick}
                />

                <ListItemComponent
                  icon={
                    <Badge
                      badgeContent={
                        <Image
                          src={params["lng"] === "en" ? engFlag : gerFlag}
                          alt="Language Flag"
                          style={{ width: "150%", height: "150%" }}
                        />
                      }
                    >
                      <LanguageIcon />
                    </Badge>
                  }
                  text="Language"
                  action={() => {
                    params["lng"] === "en"
                      ? router.push("de")
                      : router.push("en");
                  }}
                />
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBarMobile;
