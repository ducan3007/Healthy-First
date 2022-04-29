import React from "react";

import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { HomeRounded, AccountBox, ListAlt, BusinessCenter } from "@material-ui/icons";

import { NavLink } from "react-router-dom";

import useStyles from "./navbar.styles";
import useAuthorize from "../../hooks/useAuthorize";
import { CircularProgress } from "@material-ui/core";

const icon_style = {
  fontSize: "28px",
};

const Navbar = () => {
  const [isAuthenticated, loading, user] = useAuthorize();
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <List component="nav">
        <NavLink to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeRounded style={icon_style} />
            </ListItemIcon>
            <ListItemText>Trang Chủ</ListItemText>
          </ListItem>
        </NavLink>
        {user?.role === "admin" ? (
          <NavLink to="/account" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <AccountBox style={icon_style} />
              </ListItemIcon>
              <ListItemText>Tài khoản</ListItemText>
            </ListItem>
          </NavLink>
        ) : null}
        <NavLink to="/business" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <BusinessCenter style={icon_style} />
            </ListItemIcon>
            <ListItemText>Cơ sở</ListItemText>
          </ListItem>
        </NavLink>
        <NavLink to="/plan" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <ListAlt style={icon_style} />
            </ListItemIcon>
            <ListItemText>Thanh tra</ListItemText>
          </ListItem>
        </NavLink>
      </List>
    </div>
  );
};

export default Navbar;
