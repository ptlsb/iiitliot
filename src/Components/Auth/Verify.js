import { React, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";

// axios
import axios from "axios";

// MUI Components
import { Stack, Paper, TextField, Button, Avatar } from "@mui/material";
import { Typography, Alert, IconButton, InputAdornment } from "@mui/material";
import { CircularProgress } from "@mui/material";

// Icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";

const Verify = () => {
  const params = useParams();

  // States
  const [email, setEmail] = useState(params.email);
  const [otp, setOtp] = useState("");

  // Dynamic States
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    severity: "info",
  });
  // Handling Login
  const handleVerify = () => {
    const URL = "";
    const params = { email: email, otp: otp };
    const Fetch = async () => {
      axios
        .post(URL, params)
        .then((res) => {})
        .catch((err) => {});
    };
    Fetch();
  };

  return (
    <Stack
      sx={{ width: "100%", height: "100vh" }}
      justifyContent="center"
      alignItems="center"
    >
      <Paper elevation={3}>
        <Stack
          sx={{ padding: "16px 24px", minWidth: 400 }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Avatar src="/images/iot.png" variant="square" />
          <Typography variant="h5">
            <strong>Verify Email</strong>
          </Typography>
          <TextField
            label="Email"
            type="email"
            helperText="Email provided"
            value={email}
            disabled
            fullWidth
          />
          <TextField
            label="Enter OTP"
            type="text"
            helperText="Enter OTP Send to your Email"
            fullWidth
            value={otp}
            setOtp={(e) => setOtp(e.target.value)}
          />

          <Button
            variant="contained"
            color="success"
            endIcon={loading ? <CircularProgress /> : <LoginIcon />}
            disabled={loading}
            onClick={handleVerify}
          >
            Verify & Login
          </Button>
          {alert.show ? (
            <Alert severity={alert.severity}>
              <Typography variant="caption">{alert.msg}</Typography>
            </Alert>
          ) : null}
          <Link to="/signup" style={{ width: "100%" }}>
            <Button fullWidth> Create Account</Button>
          </Link>
          <Link to="/login" style={{ width: "100%" }}>
            <Button fullWidth>Login</Button>
          </Link>
        </Stack>
      </Paper>
    </Stack>
  );
};
export default Verify;
