import React from "react";
import { Alert } from "@material-ui/lab";
import { Grow } from "@material-ui/core";
import useStyles from "./styles";
import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";

const Alertbar = () => {
  const alerts = useSelector((state) => state.alerts);
  const classes = useStyles();

  return alerts !== null && alerts.length > 0
    ? alerts.map((alert) => {
        return (
          <div key={alert.id} className={classes.alertBar}>
            <Grow in timeout={500}>
              <Alert className={classes.root} variant="filled" severity={alert.type}>
                <p className={classes.alert_text}>{alert.message}</p>
              </Alert>
            </Grow>
          </div>
        );
      })
    : "";
};

// 'h1'
// | 'h2'
// | 'h3'
// | 'h4'
// | 'h5'
// | 'h6'
// | 'subtitle1'
// | 'subtitle2'
// | 'body1'
// | 'body2'
// | 'caption'
// | 'button'
// | 'overline'
// | 'srOnly'
// | 'inherit'
export default Alertbar;
