import { AppBar, Box, MenuItem, Toolbar, Typography } from "@mui/material";

const NavBar = () => (
  <Box flexGrow={1}>
    <AppBar position="static">
      <Toolbar>
        <Typography
          align="left"
          component="div"
          flexGrow={1}
          variant="h6"
          color="inherit"
        >
          Noah Joeris
        </Typography>
        <MenuItem color="inherit">
          <Typography>About Me</Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
