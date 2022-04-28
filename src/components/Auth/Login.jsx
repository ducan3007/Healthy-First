import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, InputAdornment, Grow } from "@material-ui/core";
import { ErrorSharp, LockOutlined } from "@material-ui/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { signIn } from "../../redux/auth/auth.action";
import Icon from "../Icon/Icon";
import * as Yup from "yup";
import useStyles from "./styles";
import Input from "./Input";

const LOGIN = ({ setisSigup }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const schema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string().required("This field is required"),
  });
    // prettier-ignore
  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });
 
  const onSubmit = (data) => {
     dispatch(signIn(data,navigate))
  };

  return (
    <>
      <Typography variant="h5">LOGIN</Typography>
      <Grow in>
        <Grid container spacing={2}>
          <Input
            register={register("email")}
            error={errors.email ? true : false}
            errorMessage={errors.email?.message}
            fullWidth
            id="email"
            required
            variant="outlined"
            name="email"
            label="Email"
            autoFocus
          ></Input>
          <Input
            register={register("password")}
            error={errors.password ? true : false}
            errorMessage={errors.password?.message}
            type="password"
            fullWidth
            variant="outlined"
            name="password"
            label="Password"
          ></Input>
          <Grid item xs={12}>
            <Button onClick={handleSubmit(onSubmit)} className={classes.submit} type="submit" fullWidth variant="contained" color="primary">
              LOGIN
            </Button>
          </Grid>
        </Grid>
      </Grow>
    </>
  );
};
export default LOGIN;
