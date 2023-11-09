import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  Drawer,
  CssBaseline,
  List,
  Toolbar,
  IconButton,
  Stack,
  AppBar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import { Select } from "dracula-ui";
import ThemeActionBtn from "../../Layouts/Themes/ThemeActionBtn";

export default function DrawerAppBar() {
  const [SelectionValue, setSelectionValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setSelectionValue(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />{" "}
        <AppBar component="nav">
          <Toolbar>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" />}
              spacing={8}
              sx={{
                alignItems: "center",
                mr: 3,
                flexGrow: 1,
                display: { xs: "none", sm: "flex" },
              }}
            >
        
              {/* Selection */}
              <FormControl variant="standard">
                <InputLabel id="demo-simple-select-standard-label">
                  categoris
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={open}
                  onClose={handleClose}
                  onOpen={handleOpen}
                  value={SelectionValue}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem SelectionValue={10}>Ten</MenuItem>
                  <MenuItem valSelectionValueue={20}>Twenty</MenuItem>
                  <MenuItem SelectionValue={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Stack>
            <Box
              sx={{
                display: { xs: "flex", sm: "block" },
                justifyContent: "start",
                alignItems: "center",
                flexGrow: 0,
              
              }}
            >
              <img src={require("../../Assets/Logo.png")} alt="Logo" />
            </Box>{" "}
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
}

// Create Drawer
{
  /* const drawer = (
  <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    <Box
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 0,
      }}
    >
      <img src={require("../../Assets/Logo.png")} alt="Logo" />
    </Box>{" "}
    <Divider />
    <List sx={{ textAlign: "center" }}>
      <Home />
      <About />
    </List>
  </Box>
);
<nav>
              {" "}
              <Drawer
                anchor="right"
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </nav>{" "}

const [mobileOpen, setMobileOpen] = useState(false);
const handleDrawerToggle = () => {
  setMobileOpen((prevState) => !prevState);
};




<IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
*/
}
