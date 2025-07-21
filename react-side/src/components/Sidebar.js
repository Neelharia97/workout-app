import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 220,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 220,
          boxSizing: "border-box",
          backgroundColor: "#F4F6FA",
        },
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "#5A4FCF", mb: 2 }}
        >
          FitTrack
        </Typography>
        <List>
          {["Home", "Analytics", "Clients", "Tasks"].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
