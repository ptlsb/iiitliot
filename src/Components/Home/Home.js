import { React, useState, useEffect } from "react";
import Slider from "./Slider";
import Testimonial from "./Testimonial";
// MUI Components
import { Stack, Box, Typography } from "@mui/material";

// Icons

const Home = () => {
  return (
    <Stack>
      <Slider />
      <Stack
        sx={{
          background: "url(/images/bg-1.jpg)",
          width: "100%",
          minHeight: "80vh",
          backgroundPosition: "center center",
          backgroundSize: "contain",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 10,
            top: -90,
            height: "400px",
            width: "300px",
            backgroundColor: "#fff",
            borderRadius: "20px",
            boxShadow: "2px 3px 5px rgba(0,0,0,0.2)",
          }}
        >
          <Stack
            sx={{ height: "400px", width: "100%", padding: "20px" }}
            justifyContent="center"
            alignItems="center"
          >
            <img
              src="https://templatekit.tokomoo.com/smarthomekit/wp-content/uploads/sites/69/2022/02/remote.png"
              height="100px"
              width="100px"
            />
            <Typography variant="h5">
              <strong>Remote Access</strong>
            </Typography>
            <Typography variant="caption" textAlign="center">
              <strong>
                Now Access Your Home Devices from Anywhere with just a click
              </strong>
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: -90,
            right: 10,
            height: "400px",
            width: "300px",
            backgroundColor: "#fff",
            borderRadius: "20px",
            boxShadow: "2px 3px 5px rgba(0,0,0,0.2)",
          }}
        >
          <Stack
            sx={{ height: "400px", width: "100%", padding: "20px" }}
            justifyContent="center"
            alignItems="center"
          >
            <img
              src="https://templatekit.tokomoo.com/smarthomekit/wp-content/uploads/sites/69/2022/02/cable.png"
              height="100px"
              width="100px"
            />
            <Typography variant="h5">
              <strong>Save Energy</strong>
            </Typography>
            <Typography variant="caption" textAlign="center">
              <strong>
                Switch On/Off Devices with a Click. Save Energy when devices are
                not in use. Save Environment.
              </strong>
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Testimonial />
    </Stack>
  );
};

export default Home;
