import React, { useState } from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton } from "@mui/material";

interface Icon {
  icon: any;
  key: string;
  link: string;
}

interface ContactsSideBarProps {
  alignment?: "row" | "column";
  topPositioning?: number;
}

const ContactsSideBar: React.FC<ContactsSideBarProps> = ({
  alignment = "row",
  topPositioning = 0,
}) => {
  const [focusedButton, setFocusedButton] = useState<string>("");

  const icons: Icon[] = [
    {
      icon: faLinkedin,
      key: "linkedin",
      link: "https://www.linkedin.com/in/njoeris/",
    },
    { icon: faEnvelope, key: "email", link: "mailto:noahjoeris@gmail.com" },
    { icon: faGithub, key: "github", link: "https://github.com/noahjoeris" },
  ];

  const grayLineStyle: React.CSSProperties = {
    width: "0.2rem",
    height: "1rem",
    backgroundColor: "gray",
    borderRadius: "30px",
    marginTop: "0.3rem",
    marginBottom: "0.3rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  };

  const boxStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: alignment,
    position: "relative",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    border: "3px solid rgba(255, 255, 255, 0.5)",
    top: topPositioning,
    borderRadius: "25px",
    padding: "0.3rem",
    boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(3px)",
  };

  return (
    <Box sx={boxStyle}>
      {icons.map(({ icon, key, link }, index) => (
        <React.Fragment key={key}>
          <IconButton
            onMouseEnter={() => setFocusedButton(key)}
            onMouseLeave={() => setFocusedButton("")}
            onClick={() => window.open(link, "_blank")}
          >
            <FontAwesomeIcon
              icon={icon}
              {...(focusedButton === key ? { bounce: true } : undefined)}
            />
          </IconButton>
          {icons.length - 1 > index ? <div style={grayLineStyle} /> : null}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default ContactsSideBar;