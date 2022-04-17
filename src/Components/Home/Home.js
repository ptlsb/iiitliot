import { React, useState, useEffect } from "react";
import ReactSpeedometer from "react-d3-speedometer";

import Speedo from "../Speedometer/Speedo";

// API
import axios from "axios";

// MUI Components
import {
  Stack,
  Typography,
  Button,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";

// Custom Components
import SensorData from "./SensorData";

// Icons
import SearchIcon from "@mui/icons-material/YoutubeSearchedFor";

const Home = () => {
  // States
  const [Loading, setLoading] = useState(false);
  const [sensor, setSensor] = useState("");
  const [resData, setResData] = useState([]);
  const [dateTime, setDateTime] = useState("");
  const [alertShow, setAlertShow] = useState(false);

  // Component Mounted
  useEffect(() => {
    // axios.post('https://iiitliot.herokuapp.com/getinfo', {sensor: 'xyz'}).then((data)=>{
    //   console.log(data.data);
    //   setData(data.data);
    // }).catch((error)=>{
    //   console.log(error.response);
    // })
  }, []);

  const uniqueSensor = (sensorName) => {
    // console.log(sensorName);
    for (let i = 0; i < resData.length; i++) {
      if (resData[i].sensor === sensorName) return false;
    }
    return true;
  };

  const handelSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (uniqueSensor(sensor)) {
      axios
        .post("https://iiitliot.herokuapp.com/getinfo", { sensor: sensor })
        .then((data) => {
          console.log(data.data);
          if (data.data.success) {
            setResData((prev) => {
              return [...Array.from(prev), data.data];
            });
          } else {
            setAlertShow(true);
            setTimeout(() => {
              setAlertShow(false);
            }, 5000);
          }
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          // console.log(error);
        });
    } else setLoading(false);
  };

  return (
    <Stack
      sx={{ padding: "15px 24px" }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={handelSubmit}>
        <Stack spacing={2} sx={{ maxWidth: 400 }}>
          <TextField
            label="Sensor Name"
            variant="outlined"
            color="primary"
            value={sensor}
            onChange={(e) => setSensor(e.target.value)}
          />
          <Button
            variant="outlined"
            color="warning"
            onClick={handelSubmit}
            startIcon={
              Loading ? <CircularProgress size={15} /> : <SearchIcon />
            }
            disabled={Loading}
          >
            Submit
          </Button>
          {alertShow ? <Alert severity="error">Sensor Not Found</Alert> : null}
        </Stack>
      </form>
      <Typography variant="h6">Data Recieved By ESP32</Typography>
      {resData ? (
        <Stack direction="row" spacing={1} sx={{ overflowX: "auto" }}>
          {resData.map((data,i) => (
            <Speedo data={data} key={i} type="current" />
          ))}
        </Stack>
      ) : null}
    </Stack>
  );
};

export default Home;
