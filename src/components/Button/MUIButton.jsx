import React from "react";
import { Button } from "@material-ui/core";

import uesStyles from "./styles";

const MUIButton = ({ children, type, startIcon, style, variant, onClick }) => {
  const classes = uesStyles();
  return (
    <Button className={classes[type]} style={style} startIcon={startIcon} variant={variant} onClick={onClick}>
      {children}
    </Button>
  );
};

export default MUIButton;
