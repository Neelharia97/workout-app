import Topbar from "./Topbar";
import { Box } from "@mui/material";
import BottomCard from "./BottomCard";
const DashboardLayout = ({ children }) => (
  <Box>
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexGrow: 2 }}>
        <Topbar />
        <Box sx={{ p: 3 }}>{children}</Box>
        <BottomCard />
      </Box>
    </Box>
  </Box>
);

export default DashboardLayout;
