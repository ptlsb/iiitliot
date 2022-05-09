import { React, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/userContext";

// MUI Components
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import { Typography, Stack, Avatar, Menu, MenuItem } from "@mui/material";

// Icons
import HomeIcon from "@mui/icons-material/Home";

const Navbar = () => {
  const redirect = useNavigate();
  const [user, setUser] = useContext(UserContext);
  // States
  const [Open, setOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handelLogout = () => {
    localStorage.removeItem("IOT-user");
    setUser(null);
    redirect(0);
  };
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          backgroundColor: "rgb(2,0,36)",
        }}
      >
        <Stack
          sx={{ width: "100%" }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
          >
            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Avatar
                src="/images/iot.png"
                alt="Home Automation"
                variant="square"
              />
              <Typography variant="h5">
                <strong>Home Appliances Data</strong>
              </Typography>
              {/* <Link to="/">
                <Button
                  size="small"
                  color="inherit"
                  startIcon={<HomeIcon />}
                  variant="outlined"
                >
                  Home
                </Button>
              </Link> */}
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            spacing={10}
          >
            <Stack
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={5}
            >
              <Link to="/">
                <Button
                  size="small"
                  color="inherit"
                  startIcon={<HomeIcon />}
                  variant="outlined"
                >
                  Home
                </Button>
              </Link>
              <Link to="/sensor">
                <Button variant="outlined" color="warning">
                  Sensors
                </Button>
              </Link>
              {user ? (
                <>
                  <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)}>
                    <Avatar src="/images/profile.png" alt={user.email} />
                  </IconButton>
                  <Menu
                    anchorEl={menuAnchor}
                    open={Boolean(menuAnchor)}
                    onClose={() => setMenuAnchor(null)}
                  >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={handelLogout}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="contained" color="success">
                    Login
                  </Button>
                </Link>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
