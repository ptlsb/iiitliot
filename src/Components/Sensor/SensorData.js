import { React, useState } from "react";
import axios from "axios";

import {
  Stack,
  Button,
  CircularProgress,
  Divider,
  Typography,
  Chip,
} from "@mui/material";

// Icons
import ReloadIcon from "@mui/icons-material/Replay";

const URL = "https://iiitliot.herokuapp.com/getinfo";

const SensorData = (props) => {
  console.log(props);
  const [sensor, setSensor] = useState(props.data);
  const [Loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    FetchData(sensor.sensor);
  };

  const FetchData = (sensorName) => {
    axios.post(URL, { sensor: sensorName }).then((response) => {
      console.log(response.data);
      setSensor(response.data);
      setLoading(false);
    });
  };

  return (
    <Stack
      spacing={2}
      sx={{
        border: "1px solid rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "16px",
      }}
    >
      {/* <Button
        startIcon={
          Loading ? (
            <CircularProgress size="15" color="inherit" />
          ) : (
            <ReloadIcon />
          )
        }
        color="secondary"
        size="small"
        onClick={handleClick}
        disabled={Loading}
      >
        Update
      </Button> */}
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        <Stack>
          <Typography>
            <strong>Current</strong>
          </Typography>
          <Typography variant="caption">{props.data.current}</Typography>
        </Stack>
        <Stack>
          <Typography>
            <strong>Voltage</strong>
          </Typography>
          <Typography variant="caption">{props.data.voltage}</Typography>
        </Stack>
        <Stack>
          <Typography>
            <strong>Power</strong>
          </Typography>
          <Typography variant="caption">{props.data.power}</Typography>
        </Stack>
        <Stack>
          <Typography>
            <strong>Timestamp</strong>
          </Typography>
          <Typography variant="caption">{props.data.time}</Typography>
        </Stack>
        <Stack>
          <Typography>
            <strong>Kilowatt Hour</strong>
          </Typography>
          <Typography variant="caption">
            <Chip label={props.data.kilowatt} size="small" color="primary" />
          </Typography>
        </Stack>
      </Stack>
      <Chip
        color={props.data.oning === "1" ? "success" : "warning"}
        label={props.data.oning === "1" ? "Active" : "UnActive"}
        size="small"
      />
    </Stack>
  );
};

export default SensorData;
