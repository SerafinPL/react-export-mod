import classes from "./Modal.module.scss";

import {
  Radio,
  TextField,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  ButtonGroup,
  Button,
} from "@mui/material";
import { useState } from "react";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { DatePicker, DateTimePicker, TimePicker } from "@mui/lab";

import useFetchData from "../fetchData";

const Modal = () => {
  const TypoStyleOBJ = {
    textAlign: "left",
    color: "#000",
    height: "50px",
    m: 2,
    mt: 3,
  };
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
      dayofWeek: dayofWeek
    });
  };

  console.log(typeOfExport, typeOfSchedule);

  return (
    <div className={classes.Backdrop}>
      <div className={classes.Modal}>
        <header className={classes.ModalHeader}>Export Report</header>
        <main>
          <Box
            // component="form"
            sx={{
              display: "flex",
            }}
            noValidate
            autoComplete="off"
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

              <FormControl sx={{ height: "50px", m: 1, pl: 2, color: "#000" }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ height: "50px", textAlign: "left" }}
                  value={typeOfExport}
                  onChange={handleChangeTypeOfExport}
                >
                  <FormControlLabel
                    value="Excel"
                    control={<Radio />}
                    label="Excel"
                  />
                  <FormControlLabel
                    value="CSV"
                    control={<Radio />}
                    label="CSV"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                id="email"
                label="client@company.com"
                variant="outlined"
                sx={{ width: "95%", height: "50px", m: 2 }}
                value={email}
                onChange={handleChangeEmail}
              />
              <FormControl
                sx={{
                  width: "100%",
                  height: "50px",
                  m: 1,
                  pl: 2,
                  color: "#000",
                }}
              >
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={typeOfSchedule}
                  onChange={handleChangeTypeOfSchedule}
                >
                  <FormControlLabel
                    value="noRepeat"
                    control={<Radio />}
                    label="No Repeat"
                  />
                  <FormControlLabel
                    value="date"
                    control={<Radio />}
                    label="Specific Date"
                  />
                  <FormControlLabel
                    value="daily"
                    control={<Radio />}
                    label="Daily"
                  />
                  <FormControlLabel
                    value="weekly"
                    control={<Radio />}
                    label="Weekly"
                  />
                </RadioGroup>
              </FormControl>
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
                        sx={{ width: "95%", height: "50px", m: 2 }}
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
                        sx={{ width: "95%", height: "50px", m: 2 }}
                        {...params}
                      />
                    )}
                  />
                </LocalizationProvider>
              )}
              {typeOfSchedule === "weekly" && (
                <FormControl
                  sx={{
                    width: "95%",
                    height: "50px",
                    m: 1,
                    color: "#000",
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
                    <MenuItem value={"Mon"}>Mon</MenuItem>
                    <MenuItem value={"Tue"}>Tue</MenuItem>
                    <MenuItem value={"Wed"}>Wed</MenuItem>
                    <MenuItem value={"Thu"}>Thu</MenuItem>
                    <MenuItem value={"Fri"}>Fri</MenuItem>
                    <MenuItem value={"Sat"}>Sat</MenuItem>
                    <MenuItem value={"Sun"}>Sun</MenuItem>
                  </Select>
                </FormControl>
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
            {console.log(data)}
          </Box>
        </main>
      </div>
    </div>
  );
};

export default Modal;
