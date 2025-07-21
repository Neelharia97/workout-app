import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Topbar = () => {
  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#5A4FCF" }}>
          FitTrack Dashboard
        </Typography>
        <Box>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
