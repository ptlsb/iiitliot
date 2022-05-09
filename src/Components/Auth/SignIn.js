import { React, useState, useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { Link, useNavigate } from "react-router-dom";

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

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Dynamic States
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Handling Login
  const handleLogin = () => {
    setLoading(true);
    const URL = "https://iiitliot.herokuapp.com/auth";
    const params = { email: email, password: password };
    const Fetch = async () => {
      console.log(params);
      axios
        .post(URL, params)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            localStorage.setItem(
              "IOT-user",
              JSON.stringify({
                ...JSON.parse(localStorage.getItem("IOT-user")),
                email: email,
                token: res.data.token,
              })
            );
            setUser({
              ...JSON.parse(localStorage.getItem("IOT-user")),
              email: email,
              token: res.data.token,
            });
            console.log(res.data);
            setLoading(false);
            navigate("/");
          } else {
            setLoading(false);
            setEmailError(true);
            setPasswordError(true);
            setTimeout(() => {
              setEmailError(false);
              setPasswordError(false);
            }, 5000);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
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
          sx={{ padding: "16px 24px" }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Avatar src="/images/iot.png" variant="square" />
          <Typography variant="h3">
            <strong>Login</strong>
          </Typography>
          <TextField
            label="Email"
            type="email"
            helperText="Username or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            fullWidth
          />
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            helperText="Your Password"
            fullWidth
            error={passwordError}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            variant="contained"
            color="success"
            endIcon={
              loading ? (
                <CircularProgress size={15} color="inherit" />
              ) : (
                <LoginIcon />
              )
            }
            disabled={loading}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Alert severity="info">
            <Typography variant="caption">
              Login to access your Home Appliances
            </Typography>
          </Alert>
          <Link to="/signup" style={{ width: "100%" }}>
            <Button fullWidth> Create Account</Button>
          </Link>
        </Stack>
      </Paper>
    </Stack>
  );
};
export default SignIn;
