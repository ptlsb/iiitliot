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
import CheckIcon from "@mui/icons-material/Check";
import ErrorIcon from "@mui/icons-material/Error";
import SendIcon from "@mui/icons-material/Send";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);

  // States
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [phone, setPhone] = useState("");

  // Dynamic States
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    severity: "info",
  });

  // handling SignUp
  const handleSignUp = () => {
    setLoading(true);
    const URL = "https://iiitliot.herokuapp.com/adduser";
    const params = {
      firstname: fname,
      lastname: lname,
      phone: phone,
      email: email,
      password: password,
    };
    const Fetch = async () => {
      axios
        .post(URL, params)
        .then((res) => {
          setLoading(false);
          console.log(res.data);
          localStorage.setItem(
            "IOT-user",
            JSON.stringify({
              firstname: fname,
              lastname: lname,
              phone: phone,
              email: email,
              isVerified: false,
            })
          );
          setUser({
            firstname: fname,
            lastname: lname,
            phone: phone,
            email: email,
            isVerified: false,
          });
          navigate("/login");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.data);
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
          spacing={2}
          sx={{ padding: "16px 24px" }}
          justifyContent="center"
          alignItems="center"
        >
          <Avatar
            src="/images/iot.png"
            alt="IOT"
            variant="square"
            sx={{ height: 50, width: 50 }}
          />
          <Typography variant="h4">
            <strong>SignUp</strong>
          </Typography>
          <Stack direction="row" spacing={2}>
            <TextField
              label="First Name"
              value={fname}
              onChange={(e) => setfname(e.target.value)}
              size="small"
            />
            <TextField
              label="Last Name"
              value={lname}
              onChange={(e) => setlname(e.target.value)}
              size="small"
            />
          </Stack>
          <TextField
            size="small"
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            label="Phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            size="small"
            fullWidth
            type={showPassword ? "text" : "password"}
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            size="small"
            fullWidth
            type="password"
            label="Verify Password"
            value={verifyPassword}
            onChange={(e) => {
              setVerifyPassword(e.target.value);
              if (password === e.target.value) {
                setPasswordMatch(true);
              } else {
                setPasswordMatch(false);
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color={passwordMatch ? "success" : "error"}>
                    {passwordMatch ? (
                      <CheckIcon color="inherit" />
                    ) : (
                      <ErrorIcon color="inherit" />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!passwordMatch}
          />
          <Button
            size="small"
            variant="outlined"
            endIcon={
              loading ? (
                <CircularProgress size={15} color="inherit" />
              ) : (
                <SendIcon />
              )
            }
            color="success"
            fullWidth
            disabled={loading}
            onClick={handleSignUp}
          >
            SignUp
          </Button>
          <Link to="/login">
            <Typography color="secondary" variant="caption">
              Already Have an Account? Login Now.
            </Typography>
          </Link>
        </Stack>
      </Paper>
    </Stack>
  );
};
export default SignUp;
