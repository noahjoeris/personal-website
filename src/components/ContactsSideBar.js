import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";

const ContactsSideBar = ({ alignment, topPositioning }) => {
  const [focusedButton, setFocusedButton] = useState("");

  const icons = [
    {
      icon: faLinkedin,
      key: "linkedin",
      link: "https://www.linkedin.com/in/njoeris/",
    },
    { icon: faEnvelope, key: "email", link: "mailto:noahjoeris@gmail.com" },
    { icon: faGithub, key: "github", link: "https://github.com/noahjoeris" },
  ];

  const grayLineStyle = {
    width: "0.2rem",
    height: "1rem",
    backgroundColor: "gray",
    borderRadius: "30px",
    marginTop: "0.3rem",
    marginBottom: "0.3rem",
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
  };

  const boxStyle = {
    display: "flex",
    flexDirection: alignment,
    position: "relative",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    border: "3px solid rgba(255, 255, 255, 0.5)",
    top: topPositioning,
    borderRadius: "25px",
    padding: "0.3rem",
    margin: "1rem",
    boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(3px)",
  };

  return (
    <Box sx={boxStyle}>
      {icons.map(({ icon, key, link }, index) => (
        <>
          <IconButton
            onMouseEnter={() => setFocusedButton(key)}
            onMouseLeave={() => setFocusedButton("")}
            onClick={() => window.open(link, "_blank")}
          >
            <FontAwesomeIcon
              icon={icon}
              {...(focusedButton === key ? { bounce: true } : null)}
            />
          </IconButton>
          {icons.length - 1 > index ? <div style={grayLineStyle} /> : null}
        </>
      ))}
    </Box>
  );
};

export default ContactsSideBar;
