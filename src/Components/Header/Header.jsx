import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, useMediaQuery, Popper } from "@material-ui/core";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import useStyles from "./Header.styles";
import UserAvatar from "./UserAvatar";
import { authSelector } from "../../redux/selectors";

const Header = () => {
  const classes = useStyles();
  const { user } = useSelector(authSelector);
  const WIDTH = useMediaQuery("(max-width:700px)");

  return (
    <div className={classes.appBar} position="static" color="inherit">
      <div className={classes.logo}>
        <Link to="/">Home</Link>
      </div>

      <UserAvatar userId={user?.id} image={user?.image}></UserAvatar>
    </div>
  );
};
export default Header;
