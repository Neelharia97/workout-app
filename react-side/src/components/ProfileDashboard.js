import {
  Box,
  Typography,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { BottomTab } from "./BottomNav";

const ProfileDashboard = ({ profileName, lastWorkouts, nextWorkout }) => {
  //   const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        background: "linear-gradient(135deg, #f0f0f5, #e6e6ff)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Left Main Dashboard */}
      <Box
        sx={{
          flex: 4,
          p: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            flex: 1,
            borderRadius: 4,
            p: 6,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ fontWeight: 800, color: "#5A4FCF", mb: 2 }}
            >
              Dashboard
            </Typography>
            <Typography variant="h5" sx={{ mb: 3 }}>
              Hey <span style={{ color: "#463ab6" }}>{profileName}</span>! 👋
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
              Your workout summary:
            </Typography>
            <Typography variant="h6" sx={{ color: "#5A4FCF", fontWeight: 700 }}>
              Total Workouts: 42
            </Typography>
            <Typography variant="h6" sx={{ color: "#5A4FCF", fontWeight: 700 }}>
              Calories Burned: 12,345 kcal
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#5A4FCF",
              mt: 3,
              alignSelf: "flex-start",
              ":hover": { backgroundColor: "#463ab6" },
              borderRadius: 2,
              px: 4,
              py: 1.4,
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
            }}
            startIcon={<FitnessCenterIcon />}
          >
            Start New Workout
          </Button>
        </Paper>
      </Box>

      {/* Right Sidebar */}
      <Box
        sx={{
          flex: 1.5,
          p: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            flex: 1,
            borderRadius: 4,
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#5A4FCF", mb: 2 }}
            >
              Last 5 Workouts
            </Typography>
            <List dense>
              {lastWorkouts.map(({ id, type, duration, date }) => (
                <ListItem key={id} disableGutters>
                  <ListItemText
                    primary={`${type} – ${duration} min`}
                    secondary={new Date(date).toLocaleDateString()}
                    primaryTypographyProps={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                    secondaryTypographyProps={{
                      fontSize: "0.75rem",
                      color: "text.secondary",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box mt={3}>
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
  );
};

export default ProfileDashboard;
