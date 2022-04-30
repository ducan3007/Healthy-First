import React from "react";
import Header from "../../../components/Header/Header";
import useAuthorize from "../../../hooks/useAuthorize";
import { Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    gap: "10px",
  },
  navbar: {
    paddingLeft: "7px",
    flex: 1.9,
    height: "100vh",
    paddingTop: "10px",
  },
  outlet: {
    flex: 10,
    height: "100vh",
    backgroundColor: "white",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
    color: "#3c4043",
    fontSize: 45,
    borderRadius: "17px",
  },
});

const PageLayout = () => {
  const classes = useStyles();

  return (
    <div>
      <Header></Header>
      <div className={classes.root}>
        <div className={classes.navbar}>
          <Navbar />
        </div>
        <div className={classes.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
