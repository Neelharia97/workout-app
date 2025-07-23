import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import GroupsIcon from "@mui/icons-material/Groups";
import TaskIcon from "@mui/icons-material/Task";

const menuItems = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "Analytics", icon: <QueryStatsIcon /> },
  { text: "Clients", icon: <GroupsIcon /> },
  { text: "Tasks", icon: <TaskIcon /> },
];

const drawerWidth = 220;

const Sidebar = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        width: drawerWidth,
        position: "fixed",
        top: "64px", // height of Topbar
        left: 0,
        height: "calc(100vh - 64px)",
        backgroundColor: "#F4F6FA",
        boxSizing: "border-box",
        p: 2,
        zIndex: 1200, // below AppBar but above content
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              sx={{
                marginY: 1,
                marginX: 1,
                borderRadius: "12px",
                color: "#5A4FCF",
                "&:hover": {
                  backgroundColor: "#e6e4ff",
                  color: "#3f36b1",
                },
              }}
            >
              <ListItemIcon sx={{ color: "inherit", minWidth: "40px" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Sidebar;
