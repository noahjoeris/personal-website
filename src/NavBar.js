import DarkModeIcon from "@mui/icons-material/DarkMode";
import LanguageIcon from "@mui/icons-material/Language";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

const NavBar = ({ darkModeEnabled, setDarkModeEnabled }) => (
  <Box flexGrow={1}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          align="left"
          fontFamily="Babylonica"
          component="div"
          flexGrow={1}
          variant="h4"
          color="inherit"
        >
          Noah Joeris
        </Typography>
        <MenuItem color="inherit">
          <Typography variant="button">Portfolio</Typography>
        </MenuItem>
        <MenuItem color="inherit">
          <Typography variant="button">About Me</Typography>
        </MenuItem>
        <MenuItem color="inherit">
          <Typography variant="button">Contact</Typography>
        </MenuItem>
        <IconButton onClick={() => setDarkModeEnabled(!darkModeEnabled)}>
          <DarkModeIcon color="inherit" />
        </IconButton>
        <IconButton>
          <Badge
            badgeContent={
              <img
                src="flag_eng.svg"
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

export default NavBar;
