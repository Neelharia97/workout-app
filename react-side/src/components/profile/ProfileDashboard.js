import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { BottomTab } from "./BottomNav";
import { WeightGraph } from "./LineCharts";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";

// import Sidebar from "./Sidebar";

const ProfileDashboard = ({
  profileName,
  lastWorkouts,
  nextWorkout,
  userId,
}) => {
  //   const navigate = useNavigate();

  const [value, setValue] = useState(dayjs("2022-04-17"));

  return (
    <Paper elevation={0} sx={{ backgroundColor: "#F5F7FA" }}>
      <Box
        sx={{
          display: "flex",
          background:
            "linear-gradient(135deg,rgb(248, 248, 248),rgb(21, 21, 117))",
          fontFamily: "'Poppins', sans-serif",
          maxWidth: "auto",
          mx: "auto",
          borderRadius: 15,
        }}
      >
        {/* Left Main Dashboard */}
        <Box
          sx={{
            flex: 4,
            p: 3,
            display: "flex",
            flexDirection: "column",
            borderRadius: 15,
            maxWidth: "auto",
            mx: "auto",
            overflowX: "auto",
          }}
        >
          <Paper
            elevation={8}
            sx={{
              flex: 1,
              borderRadius: 15,
              p: 6,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-",
              overflowX: "auto",
            }}
          >
            <Box sx={{ mb: 2 }}>
              {" "}
              {/* 👈 Add marginBottom here to create spacing below content */}
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  color: "#5A4FCF",
                  mb: 2,
                  justifyContent: "center",
                  maxWidth: "auto",
                  mx: "auto",
                }}
              >
                Dashboard
              </Typography>
              <Typography variant="h5" sx={{ mb: 3 }}>
                Hey <span style={{ color: "#463ab6" }}>{profileName}</span>! 👋
              </Typography>
              <WeightGraph userId={userId}></WeightGraph>
              <Paper
                elevation={3}
                sx={{
                  p: 10,
                  mt: 6,
                  mb: 3,
                  display: "flex", // optional, if using layout inside
                  flexDirection: "column",
                  borderRadius: 4,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "#5A4FCF", fontWeight: 700 }}
                >
                  Total Workouts: 42
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: "#5A4FCF", fontWeight: 700, mb: 1 }} // 👈 Add a small bottom margin
                >
                  Calories Burned: 12,345 kcal
                </Typography>
              </Paper>
            </Box>

            {/* 🟣 Adjusted mt from 1 to 0.5 for tighter spacing */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#5A4FCF",
                mt: 0.5,
                alignSelf: "flex-end",
                ":hover": { backgroundColor: "#463ab6" },
                borderRadius: 2,
                px: 4,
                py: 1.4,
                fontWeight: 600,
                fontSize: "1rem",
                textTransform: "none",
                overflowX: "auto",
              }}
              startIcon={<FitnessCenterIcon />}
            >
              Start New Workout
            </Button>
          </Paper>
          {/* Below Dashboard */}
        </Box>

        {/* Right Sidebar */}
        <Box
          sx={{
            flex: 1.5,
            p: 3,
            display: "flex",
            flexDirection: "column",
            overflowX: "auto",
          }}
        >
          <Paper
            elevation={8}
            sx={{
              flex: 1,
              borderRadius: 15,
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                />
              </LocalizationProvider>
            </Box>

            <Box sx={{ borderRadius: 15 }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 800, color: "#5A4FCF", mb: 1 }}
              >
                Last Week's Workouts
              </Typography>
              <List dense>
                {lastWorkouts.map(({ id, type, duration, date }) => (
                  <ListItem key={id} disableGutters>
                    <ListItemText
                      primary={`${type} – ${duration} min`}
                      secondary={new Date(date).toLocaleDateString()}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box mt={1}>
              <Divider sx={{ mb: 2 }} />
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, color: "#5A4FCF", mb: 1 }}
              >
                Next Workout
              </Typography>
              {nextWorkout ? (
                <>
                  <Typography sx={{ fontWeight: 600 }}>
                    {nextWorkout.type}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {new Date(nextWorkout.date).toLocaleString()}
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: "#5A4FCF",
                      color: "#5A4FCF",
                      ":hover": {
                        borderColor: "#463ab6",
                        backgroundColor: "#e0e0ff",
                      },
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                    }}
                  >
                    View Details
                  </Button>
                </>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No upcoming workouts
                </Typography>
              )}
            </Box>
          </Paper>
        </Box>

        <BottomTab></BottomTab>
      </Box>
    </Paper>
  );
};

export default ProfileDashboard;
