import React, { useState } from "react";
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, InputAdornment, Grow } from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useStyles from "./styles";
import LOGIN from "./Login";
import SIGNUP from "./Signup";
import { authSelector } from "../../redux/selectors";

const Auth = () => {
  const classes = useStyles();
  const { loading, isAuthenticated } = useSelector(authSelector);

  const [isLogin, setisLogin] = useState(true);

  const switchMode = () => {
    setisLogin(!isLogin);
  };

  if (isAuthenticated && !loading) {
    return <Navigate to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined></LockOutlined>
        </Avatar>
        {isLogin ? <LOGIN setisSigup={setisLogin} /> : <SIGNUP setisSigup={setisLogin} />}

        <Grid container justifyContent="flex-end">
          <Button style={{ color: "blue" }} onClick={switchMode}>
            {isLogin ? "Dont have an account? Sign up" : "Already have an account? Sign in"}
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Auth;
