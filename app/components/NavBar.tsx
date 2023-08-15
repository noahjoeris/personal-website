"use client";
import gerFlag from "@/public/images/flag_ger.svg";
import engFlag from "@/public/images/flag_eng.svg";
import myLogo from "@/public/images/logo.png";
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
import { FC, MutableRefObject, useEffect, useState } from "react";
import { Language } from "../constants/constants";
import DarkModeAdjustingImage from "./DarkModeAdjustingImage";
import NavBarMobile from "./NavBarMobile";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslation } from "../hooks/useTranslation";
import { TFunction } from "i18next";

export interface NavBarProps {
  pageRefs?: any;
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

const NavBar: FC<NavBarProps> = ({ pageRefs, onDarkModeButtonClick }) => {
  const isMobileScreenSize = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return isMobileScreenSize ? (
    <NavBarMobile onDarkModeButtonClick={onDarkModeButtonClick} />
  ) : (
    <NavBarDesktop onDarkModeButtonClick={onDarkModeButtonClick} />
  );
};

const NavBarDesktop: FC<NavBarProps> = ({
  pageRefs,
  onDarkModeButtonClick,
}) => {
  const params = useParams();
  const router = useRouter();
  /* const [translations, setTranslations] = useState<any>();

  useEffect(() => {
    async function loadTranslations() {
      const { t } = await useTranslation(params["lng"] as string);
      setTranslations(t);
    }
    loadTranslations();
  }, [params["lng"]]); */

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

          <MenuItem onClick={() => handleScrollToRef(pageRefs.aboutPageRef)}>
            <Typography variant="button">{/* About Me */}</Typography>
          </MenuItem>
          <MenuItem onClick={() => handleScrollToRef(pageRefs.contactPageRef)}>
            <Typography variant="button">
              {/* {props.t("contactNav")} */}
            </Typography>
          </MenuItem>
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
