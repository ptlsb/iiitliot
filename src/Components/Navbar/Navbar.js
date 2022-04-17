import { React, useState } from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Box,
  Typography,
  Stack,
  Avatar,
  Menu,
  MenuItem,
  InputBase,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

// Custom Css
import "./Navbar.css";

const Navbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  // States

  const [Open, setOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  return (
    <AppBar position="static">
      <Toolbar>
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
            spacing={10}
          >
            {/* SideNav Starts*/}
            <Stack>
              <IconButton onClick={() => setOpen((prev) => !prev)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={Open}
                onClose={() => {
                  setOpen((prev) => !prev);
                }}
              >
                <Box sx={{ minWidth: 250, height: "100%" }}>
                  {/* SideNav Content */}
                </Box>
              </Drawer>
            </Stack>
            {/* SideNav Ends */}

            <Stack
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h5">Home Appliances Data</Typography>
              {/* <Typography variant="body1">IOT</Typography> 
                <Typography variant="body1">IOT</Typography> */}
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
              spacing={3}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>

            <Stack
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="flex-end"
            >
              <IconButton onClick={(e) => setMenuAnchor(e.currentTarget)}>
                <Avatar src="" alt="" />
              </IconButton>
              <Menu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={() => setMenuAnchor(null)}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Menu>
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
