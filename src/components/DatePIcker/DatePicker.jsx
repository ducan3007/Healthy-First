import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles, withStyles } from "@material-ui/styles";

const styles = (theme) => ({
  root: {
    color: "red",
    fontSize: "1.5rem",
  },
});

const DatePicker = ({ value, onChange, classes, ...props }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        {...props}
        id="date-picker-inline"
        inputVariant="outlined"
        variant="inline"
        format="dd/MM/yyyy"
        label="Ngày sinh"
        value={value}
        onChange={onChange}
        InputProps={{ className: classes.root }}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

export default withStyles(styles)(DatePicker);
