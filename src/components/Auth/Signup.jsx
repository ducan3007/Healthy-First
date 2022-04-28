import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, InputAdornment, Grow } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

import Icon from "../Icon/Icon";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../redux/auth/auth.action";
import * as Yup from "yup";
import useStyles from "./styles";
import Input from "./Input";

const SIGNUP = ({ setisSigup }) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const classes = useStyles();

  const schema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 char").max(20, "Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm password do not match"),
  });
  // prettier-ignore
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(signUp(data, navigate));
  };
  return (
    <>
      <Typography variant="h5">SIGN UP</Typography>
      <Grow in>
        <Grid container spacing={2}>
          <Input
            register={register("firstName")}
            error={errors.firstName ? true : false}
            errorMessage={errors.firstName?.message}
            variant="outlined"
            id="firstname"
            name="firstname"
            label="First Name"
            fullWidth
            required
            autoFocus
            xs
          ></Input>
          <Input
            register={register("lastName")}
            error={errors.lastName ? true : false}
            errorMessage={errors.lastName?.message}
            variant="outlined"
            id="lastname"
            name="lastname"
            label="Last Name"
            fullWidth
            required
            xs
          ></Input>
          <Input
            register={register("email")}
            error={errors.email ? true : false}
            errorMessage={errors.email?.message}
            fullWidth
            variant="outlined"
            id="email"
            name="email"
            label="Email"
          ></Input>
          <Input
            register={register("password")}
            error={errors.password ? true : false}
            errorMessage={errors.password?.message}
            id="password"
            type="password"
            fullWidth
            variant="outlined"
            name="password"
            label="Password"
          ></Input>
          <Input
            register={register("confirmPassword")}
            error={errors.confirmPassword ? true : false}
            errorMessage={errors.confirmPassword?.message}
            id="confirmPassword"
            type="password"
            fullWidth
            variant="outlined"
            name="confirmPassword"
            label="Confirm Password"
          ></Input>
          <Grid item xs={12}>
            <Button className={classes.submit} onClick={handleSubmit(onSubmit)} fullWidth variant="contained" color="primary">
              SIGN UP
            </Button>
          </Grid>
        </Grid>
      </Grow>
    </>
  );
};
export default SIGNUP;
