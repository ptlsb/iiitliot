import React, { useState, useEffect, useRef } from "react";
import Speedometer from "react-d3-speedometer";
import "./Speedo.css";

// Material UI
import { Stack, Box, Typography } from "@mui/material";

const Speedo = (props) => {
  const power = Number(props.data.power);
  const current = Number(props.data.current);
  const voltage = Number(props.data.voltage);

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
      <Typography variant="legend" sx={{ textTransform: "capitalize" }}>
        {props.type}
      </Typography>
      <Box
        sx={{
          padding: "20px",
          maxWidth: 400,
          borderRadius: "10px",
        }}
      >
        <Speedometer
          minValue={0}
          maxValue={props.max}
          maxSegmentLabels={12}
          needleHeightRatio={0.75}
          ringWidth={55}
          segments={6}
          value={
            props.type === "c" ? current : props.type === "v" ? voltage : power
          }
          segmentColors={[
            "#b81414",
            "#ec5555",
            "#f6961e",
            "#ecdb23",
            "#aee228",
            "#6bd72d",
          ]}
          needleColor="#4287f5"
          needleTransitionDuration={1000}
          labelFontSize="12px"
        />
      </Box>
    </Stack>
  );
};

export default Speedo;
