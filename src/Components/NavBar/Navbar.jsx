import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Typography,Button
} from "@mui/material";
import FabBack from "../FabBack";

export default function DrawerAppBar({ CategoryAlldata }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (id) => {
    navigate(`id_category/${id}`);
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
          <ListItem key={item.name } disablePadding sx={{color:"#text.main"}}>
            <ListItemButton >
              <ListItemIcon>
                <Button onClick={() => handleClick(item.id)} className="btn" >
                  <ListItemText primary={item.name} sx={{color:"text.main"}}/>
                  <Divider></Divider>
                </Button>
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
              <Typography variant="h4"></Typography>
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
                anchor="left"
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
      <FabBack />
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
