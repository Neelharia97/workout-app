import { Box, Paper, Typography } from "@mui/material";

const BottomCard = () => {
  return (
    <Box sx={{ p: 3, borderRadius: 15 }}>
      <Paper
        elevation={0}
        sx={{ backgroundColor: "#F5F7FA", borderRadius: 15 }}
      >
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
          <Typography
            sx={{ p: 3, justifyContent: "center", fontFamily: "fantasy" }}
          >
            S&S Fitomania
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default BottomCard;
