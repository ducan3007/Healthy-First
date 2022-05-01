import React from "react";
import Header from "../../../components/Header/Header";
import useAuthorize from "../../../hooks/useAuthorize";
import { Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    gap: "10px",
  },
  navbar: {
    paddingLeft: "7px",
    flex: 1.9,
    height: "80vh",
    paddingTop: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  outlet: {
    flex: 10,
    minHeight: "80vh",
    backgroundColor: "white",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
    color: "#3c4043",
    borderRadius: "17px",
    // overflowY:'scroll',
  },
}));

const PageLayout = () => {
  const classes = useStyles();

  return (
    <>
      <Header></Header>
      <div className={classes.root}>
        <div className={classes.navbar}>
          <Navbar />
        </div>
        <div className={classes.outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PageLayout;
