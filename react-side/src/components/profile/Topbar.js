import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Menu,
  MenuItem,
  anchor,
  anchorEl,
  Drawer,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Sidebar from "./Sidebar";

const Topbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = (open) => (event) => {
    // Prevents sidebar toggle on tab or shift-tab key press
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidebarOpen(open);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    console.log("Go to Profile");
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    console.log("Logging out...");
    handleMenuClose();
  };

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#F4F6FA",
          color: "#5A4FCF",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left side: menu + title */}
          <Box display="flex" alignItems="center">
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={toggleSidebar(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 800,
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              StayFit
            </Typography>
          </Box>

          {/* Right side: notifications */}
          <IconButton
            aria-label="account"
            onClick={handleMenuOpen}
            sx={{ ml: 1 }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar(false)}>
        <Box
          sx={{ width: 220 }}
          role="presentation"
          onClick={toggleSidebar(false)}
          onKeyDown={toggleSidebar(false)}
        >
          <Sidebar />
        </Box>
      </Drawer>

      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default Topbar;
