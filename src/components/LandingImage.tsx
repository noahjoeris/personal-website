import React from "react";
import { Avatar, Badge, styled, useTheme } from "@mui/material";
import "../components/LandingImageStyles.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 1px ${theme.palette.background.paper}`,
    width: "3rem",
    height: "3rem",
    borderRadius: "100%",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "2px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const imgPath = "me.png";

const LandingImage: React.FC<{ padding?: string }> = ({ padding="0" }) => {
  const theme = useTheme();
  return (
    <div className="floating" style={{ padding: padding }}>
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar
          alt="Noah Joeris"
          src={imgPath}
          sx={{
            width: "16rem",
            height: "16rem",
            borderRadius: "50%",
            boxShadow: "inset 0 0 0.5rem 0.2rem",
            backgroundImage: `linear-gradient(${theme.palette.secondary.light}, ${theme.palette.primary.main})`,
          }}
        />
      </StyledBadge>
    </div>
  );
};

export default LandingImage;