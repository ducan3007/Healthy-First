import React, { useState, useEffect } from "react";
import { Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../redux/posts/posts.action";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import useStyles from "./Home.styles";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grow in>
      <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
        <Grid item className={classes.rightbar} sm={2}>
          <Sidebar />
        </Grid>

        <Grid item xs={12} sm={7}>
          <Outlet />
        </Grid>

        <Grid item className={classes.rightbar} sm={3}>
         
        </Grid>
      </Grid>
    </Grow>
  );
};
export default Home;
