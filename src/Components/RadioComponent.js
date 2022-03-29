import {
  Radio,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

const RadioComponent = (props) => {
  return (
    <FormControl sx={props.controlStyle}>
      <RadioGroup
        row
        sx={props.radioStyle}
        value={props.value}
        onChange={props.onChange}
      >
        {props.arrayOptions.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioComponent;
