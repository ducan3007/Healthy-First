import React from "react";
import useAuthorize from "../../../../hooks/useAuthorize";

import { Link, NavLink,useParams } from "react-router-dom";
import { NavigateNext } from "@material-ui/icons";

import { Divider, Breadcrumbs, CircularProgress } from "@material-ui/core";

import useStyles from "./account.style";

const AccountPage = () => {
  const classes = useStyles();
  const [isAuthenticated, loading, user] = useAuthorize();

  console.log(isAuthenticated, loading, user);

  if (loading) {
    return <CircularProgress color="inherit" />;
  }

  if (user?.role !== "admin") {
    return <div>Bạn không có quyền truy cập vào trang này!</div>;
  }

  return (
    <div className={classes.root}>
      <div className={classes.bread_crumb_title}>
        <Breadcrumbs separator={<NavigateNext style={{ color: "inherit", fontSize: "30px",fontWeight:'bold' }} />} aria-label="breadcrumb">
          <Link to="/account">Tài Khoản</Link>
          <Link to="/account/user123456">user1234567</Link>
          <Link to="/">Breadcrumb</Link>
        </Breadcrumbs>
      </div>
      <Divider />
    </div>
  );
};

export default AccountPage;
