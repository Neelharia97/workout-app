import {
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  Box,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Sidebar from "./Sidebar";

export const BottomTab = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [value, setValue] = useState(0);

  const toggleSidebar = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setSidebarOpen(open);
  };

  return (
    <>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (newValue === 0) {
            setSidebarOpen(true); // Trigger sidebar when "More" is selected
          }
        }}
        sx={{
          position: "fixed",
          mt: 3,
          bottom: 3,
          left: 0,
          right: 0,
          borderTop: "1px solid #ccc",
          backgroundColor: "#fff",
          zIndex: 700,
        }}
        showLabels
      >
        <BottomNavigationAction label="More" icon={<MenuIcon />} />
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction
          label="Profile"
          icon={<PersonIcon />}
          sx={{
            "&.Mui-selected": {
              color: "inherit", // or any custom color, e.g., '#5A4FCF'
            },
          }}
        />
      </BottomNavigation>

      {/* Drawer for sidebar */}
      <Drawer anchor="left" open={sidebarOpen} onClose={toggleSidebar(false)}>
        <Box
          sx={{ width: "auto", height: "auto" }}
          role="presentation"
          onClick={toggleSidebar(false)}
          onKeyDown={toggleSidebar(false)}
        >
          <Sidebar />
        </Box>
      </Drawer>
    </>
  );
};
