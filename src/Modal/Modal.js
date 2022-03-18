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

const TypoStyleOBJ = { textAlign: "left", color: '#000', height: '50px', m:2, mt:3}

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
            <Box sx={{width: '320px'}}>
              <Typography sx={TypoStyleOBJ}>Report Name</Typography>
              <Typography sx={TypoStyleOBJ}>Format</Typography>
              <Typography sx={TypoStyleOBJ}>E-mail to</Typography>
              <Typography sx={TypoStyleOBJ}>Schedule</Typography>
            </Box>
            <Box>
              <TextField
                id="name"
                label="Shareablee Report"
                variant="outlined"
                sx={{width:'95%', height: '50px', m:2,  }}
              />

              <FormControl sx={{ height: '50px', m:1, pl:2, color: '#000'}}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  sx={{ height: '50px', textAlign: 'left'}}
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
                sx={{width:'95%', height: '50px', m:2}}
              />
              <FormControl sx={{width:'100%', height: '50px', m:1, pl:2, color: '#000'}}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
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

            </Box>
          </Box>
        </main>
      </div>
    </div>
  );
};

export default Modal;
