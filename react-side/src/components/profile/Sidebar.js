import React, { use } from "react";
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
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
const menuItems = [
  { text: "Home", icon: <HomeIcon /> },
  { text: "Analytics", icon: <QueryStatsIcon /> },
  { text: "Clients", icon: <GroupsIcon /> },
  { text: "Tasks", icon: <TaskIcon /> },
  { text: "Logout", icon: <LogoutIcon />, route: "../signin" },
];

const drawerWidth = 220;

const Sidebar = () => {
  const navigate = useNavigate();
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
              onClick={() => navigate(item.route)}
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
