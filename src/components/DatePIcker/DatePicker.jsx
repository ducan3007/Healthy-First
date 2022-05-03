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
    width:"100%",
    "& fieldset legend": {
      fontSize: "1.2rem",
    },
  },
});

const DatePicker = ({ value, onChange, label,classes, ...props }) => {
  const _class_ = useInputStyles();
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className={_class_.root}>
        <KeyboardDatePicker
          {...props}
          id="date-picker-inline"
          invalidDateMessage="Ngày không hợp lệ"
          minDateMessage=""          
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
        />
      </div>
    </MuiPickersUtilsProvider>
  );
};

export default withStyles(styles)(DatePicker);
