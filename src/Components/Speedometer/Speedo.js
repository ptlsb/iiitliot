import React, { useState, useEffect, useRef } from "react";
import Speedometer from "react-d3-speedometer";
import "./Speedo.css";
import SensorData from "../Home/SensorData";

// Material UI
import { Stack, Box } from "@mui/material";

const Speedo = (props) => {
  const [value, setValue] = useState(
    props.type === "current"
      ? props.data.current
      : props.data.type === "voltage"
      ? props.data.voltage
      : props.data.current
  );
  const interval = useRef(null);
  // const generateRandom = () =>
  //   setValue(props.value);
  // useEffect(() => {
  //   interval.current = setInterval(function () {
  //     generateRandom();
  //   }, 500);
  //   return () => clearInterval(interval.current);
  // }, []);

  return (
    <Stack justifyContent="center" alignItems="center" sx={{ width: "100%" }}>
      <Box
        sx={{
          border: "1px solid rgba(0,0,0,0.2)",
          padding: "10px",
          maxWidth: 400,
          borderRadius: "10px",
        }}
      >
        <Stack>
          <Speedometer
            minValue={0}
            maxValue={40}
            maxSegmentLabels={12}
            needleHeightRatio={0.8}
            ringWidth={15}
            segments={4}
            value={value}
            segmentColors={[
              "#b81414",
              "#ec5555",
              "#f2db5b",
              "#7ab55c",
              "#56fc03",
              "#385828",
            ]}
            needleColor="#000080"
          />
          <Stack>
            <SensorData data={props.data}/>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Speedo;
