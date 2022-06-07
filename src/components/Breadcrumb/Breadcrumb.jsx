import React from "react";

import { Breadcrumbs } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";

import { Link, useLocation, useParams } from "react-router-dom";

import useStyles from "./bread.style";

const path = {
  account: "Quản lý tài khoản",
  profile: "Thông tin cá nhân",
  business: "Quản lý Cơ sở",
  plan: "Kế hoạch thanh tra",
};

const getPath = (name) => {
  return path[name] || name;
};

/*
'/acount'
'/acount/user1236'

'/business/'
'business/abcdef'
'/business/abcdef/plan'

'/plan'
'/plan/csdfed'

*/

const Breadcrumb = () => {
  const classes = useStyles();

  const { pathname } = useLocation();
  const path_arr = pathname.split("/").filter((x) => x);

  const params = useParams();

  return (
    <div className={classes.root}>
      <Breadcrumbs
        separator={<NavigateNext style={{ color: "inherit", fontSize: "32px", fontWeight: "bold" }} />}
        aria-label="breadcrumb"
      >
        {path_arr.map((item, index) => {
          if (item === "") {
            return null;
          }
          const link = `/${path_arr.slice(0, index + 1).join("/")}`;

          return (
            <Link to={link} key={index} className={classes.link}>
              {getPath(item)}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
