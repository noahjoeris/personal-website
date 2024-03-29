"use client";
import engFlag from "@/public/images/flag_eng.svg";
import gerFlag from "@/public/images/flag_ger.svg";
import myLogo from "@/public/images/logo.webp";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  MenuItem,
  Theme,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { FC, MutableRefObject } from "react";
import { useTranslation } from "../i18n/client";
import DarkModeAdjustingImage from "./DarkModeAdjustingImage";
import NavBarMobile from "./NavBarMobile";
import ScrollLink from "./ScrollLink";

export interface NavBarProps {
  onDarkModeButtonClick?: () => void;
}

export const handleScrollToRef = (ref: MutableRefObject<any>) => {
  if (ref.current) {
    setTimeout(() => {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 10);
  }
};

const NavBar: FC<NavBarProps> = ({ onDarkModeButtonClick }) => {
  const isMobileScreenSize = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return isMobileScreenSize ? (
    <NavBarMobile onDarkModeButtonClick={onDarkModeButtonClick} />
  ) : (
    <NavBarDesktop onDarkModeButtonClick={onDarkModeButtonClick} />
  );
};

const NavBarDesktop: FC<NavBarProps> = ({ onDarkModeButtonClick }) => {
  const params = useParams();
  const router = useRouter();
  const { t } = useTranslation(params["lng"] as string);

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
          <Box display="flex" flexGrow={1} ml={2} p={1.5}>
            <DarkModeAdjustingImage
              src={myLogo}
              alt="Noah Joeris Logo"
              priority
              style={{
                height: "5rem",
                width: "auto",
              }}
              onDarkModeStyles={{
                filter: "invert(100%)",
              }}
            />
          </Box>

          <ScrollLink
            href="#section-2-aboutme"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>
              <Typography variant="button">{t("aboutMeNav")}</Typography>
            </MenuItem>
          </ScrollLink>

          <ScrollLink
            href="#section-3-contact"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>
              <Typography variant="button">{t("contactNav")}</Typography>
            </MenuItem>
          </ScrollLink>

          <IconButton onClick={onDarkModeButtonClick}>
            <DarkModeIcon />
          </IconButton>

          <IconButton
            onClick={() =>
              params["lng"] === "en" ? router.push("de") : router.push("en")
            }
          >
            <Badge
              badgeContent={
                <Image
                  src={params["lng"] === "en" ? engFlag : gerFlag}
                  alt="Language Flag"
                  style={{ width: "1.3rem", height: "auto" }}
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
