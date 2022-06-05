import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from "@material-ui/pickers";
import { makeStyles, withStyles } from "@material-ui/styles";
import { TextField } from "@material-ui/core";

import useInputStyles from "../Input/input.style";

import color from "../Theme/Theme";

const styles = (theme) => ({
  root: {
    "& fieldset legend": {
      fontSize: "1.2rem",
    },
    "& .MuiIconButton-root": {
      color: color.dark_blue_2,
      "&.Mui-disabled": {
        color: "transparent",
      },
    },
  },
});

const DatePicker = ({ value, disabled = false, _class_, onChange, label, classes, ...props }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={_class_}>
        <KeyboardDatePicker
          disabled={disabled}
          id="date-picker-inline"
          invalidDateMessage="Ngày không hợp lệ"
          minDate={new Date()}
          minDateMessage=""
          maxDateMessage=""
          inputVariant="outlined"
          variant="inline"
          format="dd/MM/yyyy"
          label={label}
          value={value}
          onChange={onChange}
          InputProps={{ className: classes.root }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          {...props}
        />
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default withStyles(styles)(DatePicker);
