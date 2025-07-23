import { Box, Paper, Typography } from "@mui/material";

const BottomCard = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Paper elevation={0}>
        <Box
          sx={{
            display: "flex",
            flex: 3,
            background:
              "linear-gradient(135deg,rgb(248, 248, 248),rgb(21, 21, 117))",
            fontFamily: "'Poppins', sans-serif",
            p: 3,
            borderRadius: 15,
          }}
        >
          <Box sx={{ p: 1, flex: 1 }}>
            <Paper
              elevation={1}
              sx={{
                p: 3,
                borderRadius: 15,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography sx={{ textAlign: "center" }}>CALENDAR</Typography>
            </Paper>
          </Box>

          <Box sx={{ p: 1, flex: 1, display: "flow" }}>
            <Paper
              elevation={1}
              sx={{ p: 3, borderRadius: 15, justifyContent: "center" }}
            >
              <Typography sx={{ justifyContent: "center" }}>
                CALENDAR
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ p: 1, flex: 1, display: "flow" }}>
            <Paper
              elevation={1}
              sx={{ p: 3, borderRadius: 15, justifyContent: "center" }}
            >
              <Typography sx={{ justifyContent: "center" }}>
                CALENDAR
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default BottomCard;
