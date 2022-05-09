import { React, useState, useEffect } from "react";

// MUI Components
import { Stack, Box, Typography } from "@mui/material";

// Icons

const Home = () => {
  return (
    <Stack sx={{ minHeight: "100vh", overflowX: "hidden" }}>
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
            left: -20,
            top: -20,
            height: "400px",
            width: "350px",
            backgroundColor: "#ff844b",
            borderRadius: "20px",
            boxShadow: "2px 3px 5px rgba(0,0,0,0.2)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -90,
            right: -30,
            height: "400px",
            width: "300px",
            backgroundColor: "#ff844b",
            borderRadius: "20px",
            boxShadow: "2px 3px 5px rgba(0,0,0,0.2)",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Home;
