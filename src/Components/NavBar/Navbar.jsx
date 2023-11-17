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
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import Home from "../../Pages/Home";
import About from "../../Pages/About";
import { Button, Select } from "dracula-ui";
import ThemeActionBtn from "../../Layouts/Themes/ThemeActionBtn";
import { getcategorys } from "../../Server/servises";
import { Link } from "react-router-dom";
import { RemoveRedEye } from "@mui/icons-material";
import CustomDivider from "../../Constants/CustomDivider";

export default function DrawerAppBar() {
  const [CategoryAlldata, setCategorydata] = useState([]);

  useEffect(() => {
    const fetchDate = async () => {
      try {
        const { data } = await getcategorys();
        setCategorydata(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    return () => {
      fetchDate();
    };
  }, []);

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
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 0,
          my: 5,
        }}
      >
        <img src={require("../../Assets/Logo.png")} alt="Logo" />
      </Box>{" "}
      <List sx={{ textAlign: "center", alignItems: "start" }}>
        {Object.values(CategoryAlldata).map((item, index) => (
          <CustomDivider
           
            bColor="#primary.main"
            cColor="primary"
            icon={<RemoveRedEye/>}
            align="center"
            text={
              <Link to={`id_category/${item.id}`} className="btn p-0 top-50">
                {item.name}
              </Link>
             
            }
         
        >
         
        </CustomDivider>
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
              {/* Selection */}
            </Stack>
            <nav>
              {" "}
              <Drawer
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
              sx={{ display: { sm: "none" }, mr: 25 }}
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
