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
    flex: 1.6,
    height: "80vh",
    paddingTop: "10px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  outlet: {
    flex: 10,
    minHeight: "100vh",

    backgroundColor: "white",
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.1)",
    color: "#3c4043",
    borderRadius: "17px",
    // overflowY:'scroll',
  },
}));

const PageLayout = ({ children }) => {
  const [isAuthenticated, loading, user] = useAuthorize();
  const classes = useStyles();

  return (
    !loading && (
      <div style={{ padding: 0 }}>
        <Header></Header>
        <div className={classes.root}>
          <div className={classes.navbar}>
            <Navbar />
          </div>
          <div className={classes.outlet}>{isAuthenticated && children}</div>
        </div>
      </div>
    )
  );
};

export default PageLayout;
