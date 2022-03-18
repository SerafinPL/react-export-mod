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
} from "@mui/material";

const Modal = () => {
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
            <Box>
              <Typography sx={{ textAlign: "left" }}>Report Name</Typography>
              <Typography sx={{ textAlign: "left" }}>Format</Typography>
              <Typography sx={{ textAlign: "left" }}>E-mail to</Typography>
              <Typography sx={{ textAlign: "left" }}>Schedule</Typography>
            </Box>
            <Box>
              <TextField
                id="name"
                label="Shareablee Report"
                variant="outlined"
              />

              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
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
              />

            </Box>
          </Box>
        </main>
      </div>
    </div>
  );
};

export default Modal;
