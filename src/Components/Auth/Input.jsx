import React from "react";
import { TextField, Grid, InputAdornment, IconButton, Typography } from "@material-ui/core";

const Input = ({ name, required, handleChange, autoFocus, type, error, errorMessage, label, xs, size, register }) => {
  return (
    <Grid item xs={12} sm={xs ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        required={required}
        fullWidth
        autoFocus={autoFocus}
        type={type}
        size={size}
        variant="outlined"
        error={error}
        helperText={errorMessage}
        {...register}
      ></TextField>
    </Grid>
  );
};

export default Input;
