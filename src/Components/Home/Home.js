import { React, useState, useEffect } from "react";

// API
import axios from "axios";

// MUI Components
import {
  Stack,
  Typography,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";

import {List,ListItem,ListItemButton,Divider,ListItemText} from '@mui/material';

// Icons
import SearchIcon from "@mui/icons-material/YoutubeSearchedFor";

const Home = () => {
  // States
  const [Loading, setLoading] = useState(false);
  const [sensor, setSensor] = useState("");
  const [resData, setResData] = useState([]);
  const [dateTime, setDateTime] = useState("");

  // Component Mounted
  useEffect(() => {
    // axios.post('https://iiitliot.herokuapp.com/getinfo', {sensor: 'xyz'}).then((data)=>{
    //   console.log(data.data);
    //   setData(data.data);
    // }).catch((error)=>{
    //   console.log(error.response);
    // })
  }, []);

  const handelSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post("https://iiitliot.herokuapp.com/getinfo", { sensor: sensor })
      .then((data) => {
        console.log(data.data);
        setLoading(false);
        setResData(prev => {
           return [...Array.from(prev),data.data];  
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
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
        </Stack>
      </form>
      <Typography variant="h3">Data Recieved By ESP32</Typography>
      {resData ? (
        <Stack direction="row" spacing={1} sx={{overflowX:"auto"}}>
            {resData.map((data)=>(
            <List>
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Reading" secondary={data?.reading}/>
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Sensor" secondary={data?.sensor}/>
            </ListItemButton>
          </ListItem>
          <Divider/>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Time" secondary={data?.time}/>
            </ListItemButton>
          </ListItem>
        </List>
        ))}
        </Stack>
      ) : null}

      
    </Stack>
  );
};

export default Home;
