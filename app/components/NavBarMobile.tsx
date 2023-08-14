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
import { FC, useState } from "react";
import { NavBarProps, handleScrollToRef } from "./NavBar";

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

const NavBarMobile: FC<NavBarProps> = ({ pageRefs, onDarkModeButtonClick }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();

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
          >
            <Box
              sx={{ width: "50vw" }}
              role="presentation"
              onClick={() => setIsDrawerOpen(false)}
            >
              <List>
                <ListItemComponent
                  icon={<EmojiPeopleIcon />}
                  text="About Me"
                  action={() => handleScrollToRef(pageRefs.aboutPageRef)}
                />
                <ListItemComponent
                  icon={<ContactMailIcon />}
                  text="Contact"
                  action={() => handleScrollToRef(pageRefs.contactPageRef)}
                />
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
                          src={gerFlag}
                          alt="Language Flag"
                          style={{ width: "150%", height: "150%" }}
                        />
                      }
                    >
                      <LanguageIcon />
                    </Badge>
                  }
                  text="Language"
                  action={() => {}}
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
