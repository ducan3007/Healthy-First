import React from "react";
import { Grid, Button, Avatar, TextField, Container, Paper, Typography, Grow, Input } from "@material-ui/core";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../../../redux/auth/auth.action";
import useAuthorize from "../../../hooks/useAuthorize";
import useStyles from "./login.style";
import color from "../../../components/Theme/Theme";

const Login = () => {
  const [isAuthenticated, loading,user] = useAuthorize('/');

  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    account: Yup.string().required("Nhập tài khoản"),
    password: Yup.string().required("Nhập mật khẩu"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    dispatch(login(data, navigate));
  };

  return (
    <div className={classes.container}>
      <Grow in>
        <Paper elevation={4} className={classes.paper}>
          {/* <div className={classes.login_header}>
            <p className={classes.font}>HỆ THỐNG </p>
          </div> */}
          <Grid style={{ width: "580px", padding: "10px", justifyContent: "center" }} container spacing={3}>
            <Grid item xs={10}>
              <TextField
                {...register("account")}
                defaultValue="admin12345"
                InputProps={{ style: { fontSize: 22, height: 68, color: "#134247" } }}
                InputLabelProps={{
                  style: { fontSize: 22, fontWeight: "bold", color: errors.account ? "red" : color.login_input },
                }}
                FormHelperTextProps={{ style: { fontSize: 15, color: "red" } }}
                name={"account"}
                size="medium"
                label=" Tài khoản"
                autoFocus={false}
                error={errors.account ? true : false}
                helperText={errors.account?.message}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={10}>
              <TextField
                {...register("password")}
                defaultValue="123456"
                InputProps={{ style: { fontSize: 22, height: 68 } }}
                InputLabelProps={{
                  style: { fontSize: 22, fontWeight: "bold", color: errors.account ? "red" : color.login_input },
                }}
                FormHelperTextProps={{ style: { fontSize: 15, color: "red", padding: 0 } }}
                name={"password"}
                label="Mật khẩu"
                size="medium"
                fullWidth
                type="password"
                error={errors.password ? true : false}
                helperText={errors.password?.message}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={10}>
              <Button
                onClick={handleSubmit(onSubmit)}
                className={classes.submit}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                ĐĂNG NHẬP
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grow>
    </div>
  );
};

export default Login;
