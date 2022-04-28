import React from "react";
import { Link, Outlet, Navigate } from "react-router-dom";
import { Container, Button, Typography, Tabs, Tab } from "@material-ui/core";
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/selectors";
import useStyles from "./styles";

const User = () => {
  const isAuthenticated = useSelector(authSelector);
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container className={classes.root}>
      <Tabs
        className={classes.tabs.root}
        onChange={handleChange}
        variant="fullWidth"
        value={value}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Active"></Tab>
        <Tab label="Disabled" />
      </Tabs>
    </Container>
  );
};

export default User;
