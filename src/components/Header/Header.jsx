import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, useMediaQuery, Popper } from "@material-ui/core";

import { useSelector,useDispatch } from "react-redux";


import UserAvatar from "./UserAvatar";
import { authSelector } from "../../redux/selectors";

import useStyles from "./Header.styles";

const Header = () => {
  const classes = useStyles();
  const { user } = useSelector(authSelector);
  const WIDTH = useMediaQuery("(max-width:700px)");

  return (
    <div className={classes.appBar} position="static" color="inherit">
      <div className={classes.logo}>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>Home</p>
        <Link to="/"></Link>
      </div>
      <div className={classes.user_avatar}>
        <UserAvatar userId={user?.id} image={user?.image}></UserAvatar>
      </div>
    </div>
  );
};
export default Header;
