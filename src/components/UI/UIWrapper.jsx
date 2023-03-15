import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import logo from "../../assets/logo.png";

import navItems from "../../data/navItems";
import { Link } from "react-router-dom";
const drawerWidth = 280;

function UIWrapper(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box
          sx={{
            my: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <Box>
            <img src={logo} alt="logo" width={40} />
          </Box>
          <Typography variant="h5" fontWeight="bolder" color="black">
            Movies Hive
          </Typography>
        </Box>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link to={item.path} key={item.id} style={{ textDecoration: "none" }}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{ textAlign: "center", color: "black", mb: 1 }}
              >
                {item.text}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="absolute" component="nav" sx={{ bgcolor: "#172e47" }}>
        <Toolbar
          sx={{
            width: "100%",
            maxWidth: { md: "80%" },
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  sm: "flex",
                  alignItems: "center",
                  gap: 6,
                },
              }}
            >
              <Box>
                <img src={logo} alt="logo" width={40} />
              </Box>
              <Typography
                variant="h5"
                fontWeight="bolder"
                whiteSpace="nowrap"
                color="white"
              >
                Movies Hive
              </Typography>
            </Box>
          </Link>

          <List
            sx={{
              display: { xs: "none", sm: "flex" },
              whiteSpace: "nowrap",
            }}
          >
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                style={{ textDecoration: "none" }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center", color: "white" }}>
                    {item.text}
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </Box>

      <Box
        component="main"
        minWidth="100vw"
        maxWidth="100vw"
        sx={{ pb: 4 }}
        bgcolor="#0D1B2A"
      >
        <Toolbar />
        <Box>{props.children}</Box>
      </Box>
    </Box>
  );
}

export default UIWrapper;
