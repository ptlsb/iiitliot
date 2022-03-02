import { React, useState, useEffect } from "react";
import axios from "axios";

import { Stack, Button, CircularProgress } from "@mui/material";
import {
  List,
  ListItem,
  ListItemButton,
  Divider,
  ListItemText,
} from "@mui/material";

// Icons
import ReloadIcon from "@mui/icons-material/Replay";

const URL = "https://iiitliot.herokuapp.com/getinfo";

const SensorData = (props) => {
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
      sx={{ border: "1px solid rgba(0,0,0,0.3)", borderRadius: "5px" }}
    >
      <Button
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
      </Button>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Reading" secondary={sensor?.reading} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Sensor" secondary={sensor?.sensor} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Time" secondary={sensor?.time} />
          </ListItemButton>
        </ListItem>
      </List>
    </Stack>
  );
};

export default SensorData;
