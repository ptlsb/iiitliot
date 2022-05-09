import { React, useState, useEffect } from "react";

// MUI Components
import { Stack, Chip, Paper } from "@mui/material";
import { CircularProgress, Alert, Typography } from "@mui/material";
import Switch from "@mui/material/Switch";

// Icons
import SearchIcon from "@mui/icons-material/Search";

// API
import axios from "axios";

// Custom Components
import Speedo from "../Speedometer/Speedo";
import SensorData from "./SensorData";

const Sensor = () => {
  // States
  const [Loading, setLoading] = useState(false);
  const [sensor, setSensor] = useState("abc");
  const [resData, setResData] = useState({});
  const [dateTime, setDateTime] = useState("");
  const [alertShow, setAlertShow] = useState(false);
  const [on, setOn] = useState(false);
  const [timestamp, setTimeStamp] = useState(false);

  const Request = () => {
    axios
      .post("https://iiitliot.herokuapp.com/getinfo", { sensor: sensor })
      .then((data) => {
        console.log(data.data);
        if (data.data.success) {
          setResData(data.data);
          setOn(data.data.oning === "0" ? false : true);
          var currentdate = new Date();
          setTimeStamp(
            currentdate.getDate() +
              "/" +
              (currentdate.getMonth() + 1) +
              "/" +
              currentdate.getFullYear() +
              " @ " +
              currentdate.getHours() +
              ":" +
              currentdate.getMinutes() +
              ":" +
              currentdate.getSeconds()
          );
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
        console.log(error);
      });
  };

  // const handelSubmit = async () => {
  // setLoading(true);
  // e.preventDefault();
  //   Request();
  // };

  const handleChange = (e) => {
    console.log(e.target.checked);
    // setOn(e.target.checked);
    setLoading(true);
    axios
      .post("https://iiitliot.herokuapp.com/onof", {
        sensor: "abc",
        oning: e.target.checked === true ? "1" : "0",
      })
      .then((res) => {
        console.log(res);
        // Request();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const myTimeout = setTimeout(Request, 2000);
    return () => {
      clearTimeout(myTimeout);
    };
  }, [Request]);

  return (
    <Stack
      sx={{ padding: "15px 24px", width: "100%" }}
      spacing={4}
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="row"
        justifyContent="space-evenly"
        spacing={2}
        sx={{ width: "100%", position: "relative" }}
      >
        <Paper
          sx={{
            padding: "10px",
            position: "absolute",
            right: 0,
            top: 0,
            border: "1px solid rgba(0,0,0,0.2)",
          }}
          elevation={3}
        >
          <Stack sx={{ minWidth: 200 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Typography>
                <strong>Sensor</strong>
              </Typography>
              <Typography variant="caption">{resData.sensor}</Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Switch
                checked={on}
                onChange={(e) => handleChange(e)}
                color="success"
              />
              <Chip
                Icon={
                  Loading ? (
                    <CircularProgress color="inherit" size={15} />
                  ) : (
                    <></>
                  )
                }
                label={on ? "ON" : "OFF"}
                size="small"
                color={on ? "success" : "error"}
              />
            </Stack>
            <Typography sx={{ fontSize: "8px" }}>
              Last Updated : {timestamp}
            </Typography>
          </Stack>
        </Paper>
        {/* <form onSubmit={handelSubmit}>
          <Stack spacing={2} sx={{ minWidth: 400 }}>
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
            {alertShow ? (
              <Alert severity="error">Sensor Not Found</Alert>
            ) : null}
          </Stack>
          <br />
          <Typography variant="body2" textAlign="center">
            Data Recieved By ESP32
          </Typography>
        </form> */}
      </Stack>

      {/* {resData ? (
        <Stack direction="row" spacing={1} sx={{ overflowX: "auto" }}>
          {resData.map((data,i) => (
            <SensorData data={data}/>
          ))}
        </Stack> 
      ) : null} */}
      <SensorData data={resData} />
      <Stack direction="row" spacing={1}>
        <Speedo data={resData} type="c" max={50} />
        <Speedo data={resData} type="v" max={300} />
        <Speedo data={resData} type="p" max={2000} />
      </Stack>
    </Stack>
  );
};

export default Sensor;
