import React from "react";

import { Grid, Button, Avatar, TextField, Container, Paper, Typography, Grow } from "@material-ui/core";
import { Lock } from "@material-ui/icons";
import useStyles from "./login.style";
import color from "../../../Components/Theme/Theme";
const Login = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <Grow in>
        <Paper className={classes.paper}>
          <div className={classes.login_header}>
            <p className={classes.font}>ĐĂNG NHẬP</p>
          </div>
          <Grid style={{ width: "73%", minWidth: "270px" }} container spacing={3}>
            <Grid item xs={12}>
              <TextField
                InputProps={{ style: { fontSize: 22, height: 68 } }}
                InputLabelProps={{ style: { fontSize: 22, fontWeight: "bold", color: color.login_input } }}
                name={"account"}
                size="medium"
                label=" Tài khoản "
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputProps={{ style: { fontSize: 22, height: 68 } }}
                InputLabelProps={{ style: { fontSize: 22, fontWeight: "bold", color: color.login_input } }}
                FormHelperTextProps={{ style: { fontSize: 22, color: "red" } }}
                name={"password"}
                label="Mật khẩu"
                size="medium"
                fullWidth
                type="password"
                helperText="Tài khoản hoặc mật khẩu không đúng"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary">
                LOGIN
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
    </Container>
  );
};

export default Login;
