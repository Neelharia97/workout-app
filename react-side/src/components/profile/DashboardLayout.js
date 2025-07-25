import Topbar from "./Topbar";
import { Box } from "@mui/material";
import BottomCard from "./BottomCard";
const DashboardLayout = ({ children }) => (
  <Box sx={{ pb: 7, backgroundColor: "#F5F7FA" }}>
    <Box sx={{ display: "flex" }}>
      <Box sx={{ flexGrow: 2 }}>
        {/* <Topbar /> */}
        <BottomCard />
        <Box sx={{ p: 3 }}>{children}</Box>
      </Box>
    </Box>
  </Box>
);

export default DashboardLayout;
