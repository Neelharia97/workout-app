import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Box,
  Typography,
  Paper,
  Fade,
  Divider,
} from "@mui/material";

export const SignIn = () => {
  const [emailID, setEmailID] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:5000/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_id: emailID,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
        if (data.message === "Login Success!") {
          navigate(`/profile?user_id=${data.id}`);
        } else {
          alert("Coming here");
          alert(data.message || "Login Failed");
          navigate("/signup");
        }
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };
  return (
    <Fade in timeout={600}>
      <Box
        sx={{
          background: "linear-gradient(to right, #f9f9f9, #f0f0f5)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Paper
          elevation={8}
          sx={{
            padding: 5,
            maxWidth: 400,
            width: "90%",
            borderRadius: "24px",
            background: "#ffffff",
            boxShadow:
              "0 8px 24px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: 700,
              color: "#5A4FCF", // violet blue
              mb: 1,
            }}
          >
            👋 Welcome Back
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ color: "#777", mb: 3 }}
          >
            Let’s log you in ✨
          </Typography>

          <form onSubmit={submitHandler}>
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={emailID}
              onChange={(e) => setEmailID(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 1,
                py: 1.2,
                backgroundColor: "#5A4FCF",
                fontWeight: "600",
                borderRadius: "12px",
                fontSize: "1rem",
                textTransform: "none",
                ":hover": {
                  backgroundColor: "#463ab6",
                },
              }}
            >
              Let Me In 🚀
            </Button>
          </form>

          <Divider sx={{ my: 3 }}>or</Divider>

          <Typography variant="body2" align="center" sx={{ color: "#999" }}>
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              style={{
                color: "#5A4FCF",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Sign up
            </span>
          </Typography>
        </Paper>
      </Box>
    </Fade>
  );
};
