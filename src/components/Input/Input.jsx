import React from "react";
import { TextField, Grid, InputAdornment, IconButton, Typography } from "@material-ui/core";

const Input = ({ name, required, handleChange, autoFocus, type, error, errorMessage, label, size, register }) => {
  return (
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
  );
};

export default Input;
