import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, useMediaQuery, Popper } from "@material-ui/core";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ReorderIcon from "@material-ui/icons/Reorder";
import useStyles from "./Header.styles";
import UserAvatar from "./UserAvatar";
import { authSelector, userSelector } from "../../redux/selectors";

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {isAuthenticated} = useSelector(authSelector);
  console.log("🚀 ~ file: Header.jsx ~ line 17 ~ Header ~ isAuth", isAuthenticated)
  const isloading = useSelector((state) => state.auth.loading);
  const {user} = useSelector(authSelector);
  const WIDTH = useMediaQuery("(max-width:700px)");

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      {WIDTH && (
        <div>
          <Button>
            <ReorderIcon htmlColor="#141f21" fontSize="large" />
          </Button>
        </div>
      )}

      {!WIDTH && (
        <div className={classes.brandContainer}>
          <Button component={Link} to="/">
          
          </Button>
        </div>
      )}

      {!isloading && isAuthenticated && (
        <div className={classes.profile}>
          <UserAvatar userId={user?._id}></UserAvatar>
        </div>
      )}
      {!isAuthenticated && (
        <div className={classes.logout}>
          <Button component={Link} to="/auth" variant="contained" color="primary">
            LOGIN
          </Button>
        </div>
      )}
    </AppBar>
  );
};
export default Header;
