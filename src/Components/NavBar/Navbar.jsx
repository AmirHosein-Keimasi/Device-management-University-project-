import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Divider,
  Drawer,
  CssBaseline,
  List,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  AppBar,
  Box,
} from "@mui/material";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import MainContainer from "../MainContainer";
import ItemCard from "../ItemCard";

const drawerWidth = 240;
export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List sx={{ textAlign: "center" }}>
        <Home />
        <About />
      </List>
    </Box>
  );

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
              <Home />
              <About />
            </Stack>
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
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "flex", sm: "block" },
                justifyContent: "start",
                alignItems: "center",
                flexGrow: 0,
                mr: 15,
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
