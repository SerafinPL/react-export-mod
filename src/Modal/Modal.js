import classes from "./Modal.module.scss";

import {
 
  TextField,
  Box,
  FormControl,

  Typography,
  InputLabel,
  Select,
  MenuItem,
  
  Button,
} from "@mui/material";
import { useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker, DateTimePicker, TimePicker } from "@mui/lab";

import useFetchData from "../fetchData";
import RadioComponent from "../Components/RadioComponent";
import { weeksToDays } from "date-fns";

const Modal = () => {
  const TypoStyleOBJ = {
    textAlign: "left",
    color: "#000",
    height: "50px",
    m: 2,
    mt: 3,
  };

  const arrayOfFirstOptions = [
    { value: "Excel", label: "Excel" },
    { value: "CSV", label: "CSV" },
  ];
  const arrayOfSecondOptions = [
    { value: "noRepeat", label: "No Repeat" },
    { value: "date", label: "Specific Date" },
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
  ];

  const weeksToDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const { data, fetchData } = useFetchData();

  const [email, setEmail] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const [value, setValue] = useState(new Date());

  const [name, setName] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const [typeOfExport, setTypeOfExport] = useState("Excel");

  const handleChangeTypeOfExport = (event) => {
    setTypeOfExport(event.target.value);
  };

  const [typeOfSchedule, setTypeOfSchedule] = useState("noRepeat");

  const handleChangeTypeOfSchedule = (event) => {
    setTypeOfSchedule(event.target.value);
  };

  const [dayofWeek, setDayofWeek] = useState("");

  const handleChangedayofWeek = (event) => {
    setDayofWeek(event.target.value);
  };

  const clickHandker = () => {
    fetchData({
      name: name,
      typeOfExport: typeOfExport,
      email: email,
      typeOfSchedule: typeOfSchedule,
      dataTime: value,
      dayofWeek: dayofWeek,
    });
  };

  return (
    <div className={classes.Backdrop}>
      <div className={classes.Modal}>
        <header className={classes.ModalHeader}>Export Report</header>
        <main>
          <Box
            sx={{
              display: "flex",
              
            }}
          >
            <Box sx={{ width: "320px" }}>
              <Typography sx={TypoStyleOBJ}>Report Name</Typography>
              <Typography sx={TypoStyleOBJ}>Format</Typography>
              <Typography sx={TypoStyleOBJ}>E-mail to</Typography>
              <Typography sx={TypoStyleOBJ}>Schedule</Typography>
              {typeOfSchedule === "date" && (
                <Typography sx={TypoStyleOBJ}>Date</Typography>
              )}
              {typeOfSchedule === "daily" && (
                <Typography sx={TypoStyleOBJ}>Everyday at</Typography>
              )}
              {typeOfSchedule === "weekly" && (
                <Typography sx={TypoStyleOBJ}>Every</Typography>
              )}
            </Box>
            <Box>
              <TextField
                id="name"
                label="Shareablee Report"
                variant="outlined"
                sx={{ width: "95%", height: "50px", m: 2 }}
                value={name}
                onChange={handleChangeName}
              />

              <RadioComponent
                controlStyle={{ height: "50px", m: 1, pl: 2, color: "#000" }}
                radioStyle={{ height: "50px", textAlign: "left" }}
                value={typeOfExport}
                onChange={handleChangeTypeOfExport}
                arrayOptions={arrayOfFirstOptions}
              />
              <TextField
                id="email"
                label="client@company.com"
                variant="outlined"
                sx={{ width: "95%", height: "50px", m: 2 }}
                value={email}
                onChange={handleChangeEmail}
              />
              <RadioComponent
                controlStyle={{
                  width: "100%",
                  height: "50px",
                  m: 1,
                  pl: 2,
                  color: "#000",
                }}
                value={typeOfSchedule}
                onChange={handleChangeTypeOfSchedule}
                arrayOptions={arrayOfSecondOptions}
              />

              {typeOfSchedule === "date" && (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Date and Time"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        sx={{ width: "95%", height: "50px", m: 2, mt: 5 }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              )}
              {typeOfSchedule === "daily" && (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <TimePicker
                    label="Time"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        sx={{ width: "95%", height: "50px", m: 2, mt: 5 }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              )}
              {typeOfSchedule === "weekly" && (
                <Box>
                  <FormControl
                    sx={{
                      width: "20%",
                      height: "50px",
                      m: 1,
                      color: "#000",
                      float: "left",
                      mt: 5,
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Day of week
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={dayofWeek}
                      label="Day of week"
                      onChange={handleChangedayofWeek}
                    >
                      {weeksToDays.map((item) => (
                        <MenuItem key={item} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Typography
                    sx={{
                      width: "5%",
                      height: "50px",
                      m: 1,
                      color: "#000",
                      float: "left",
                      mt: 5,
                    }}
                  >
                    {" "}
                    at{" "}
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Time"
                      value={value}
                      onChange={(newValue) => {
                        setValue(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          sx={{ width: "55%", height: "50px", m: 1, mt: 5 }}
                          {...params}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Box>
              )}
            </Box>
          </Box>
          <Box sx={{ justifyContent: "end", display: "flex" }}>
            <Button variant="outlined" sx={{ m: 3 }}>
              Cancel
            </Button>
            <Button variant="contained" sx={{ m: 3 }} onClick={clickHandker}>
              OK
            </Button>
          </Box>
          <Box sx={{ justifyContent: "end", display: "flex" }}>
            <Typography variant="button" sx={{ m: 3, color: "#000" }}>
              {" "}
              Answer form Host: {data === undefined ? "" : data.toString()}
            </Typography>
          </Box>
        </main>
      </div>
    </div>
  );
};

export default Modal;



