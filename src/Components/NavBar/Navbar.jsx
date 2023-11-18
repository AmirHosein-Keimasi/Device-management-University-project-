import { useEffect, useState } from "react";
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
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

import CustomDivider from "../../Constants/CustomDivider";

export default function DrawerAppBar({ CategoryAlldata }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawerWidth = 240;
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          flexGrow: 0,
          my: 5,
        }}
      >
        <img
          src={require("../../Assets/Logo.png")}
          className="w-50 "
          alt="Logo"
        />
      </Box>{" "}
      <List sx={{ textAlign: "center", alignItems: "start" }}>
        {Object.values(CategoryAlldata).map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Link to={`id_category/${item.id}`} className="btn ">
                  <ListItemText primary={item.name} />
                  <Divider></Divider>
                </Link>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
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
                display: { xs: "flex", sm: "flex" },
              }}
            >
              <Typography
            variant="h4"
              >
                 
              </Typography>
              {/* Selection */}
            </Stack>
            <nav>
              {" "}
              <Drawer
                PaperProps={{
                  sx: {
                    backgroundColor: "gray",
                  },
                }}
                anchor="l"
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
              edge="right"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" }, mr: 40 }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: "flex", sm: "block" },
                justifyContent: "start",
                alignItems: "center",
                flexGrow: 0,
              }}
            >
              <img
                src={require("../../Assets/Logo.png")}
                className="w-50"
                alt="Logo"
              />
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
