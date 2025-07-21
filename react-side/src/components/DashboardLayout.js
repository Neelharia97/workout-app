import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { BottomTab } from "./BottomNav";
import { Box } from "@mui/material";

const DashboardLayout = ({ children }) => (
  <Box>
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Topbar />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  </Box>
);

export default DashboardLayout;
