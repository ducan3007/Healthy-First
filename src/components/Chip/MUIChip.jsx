import React from "react";

import { Chip } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

import color from "../Theme/Theme";

const types = {
  ok: color.green,
  error: color.error,
  valid: color.green,
  expired: color.warning,
  revoked: color.error,
  pending: color.warning,
};

const useStyles = makeStyles({
  root: {
    color: ({ type }) => types[type],
    borderColor: ({ type }) => types[type],
    borderWidth: "2px",
    fontSize: "1.1rem",
    "& .MuiChip-root.Mui-disabled": {},
  },
});

const MUIChip = ({ type, label, Icon, variant }) => {
  const classes = useStyles({ type });
  let theme = types[type];
  return (
    <Chip
      className={classes.root}
      //   style={{ color: theme, borderColor: theme, borderWidth: "2px", fontSize: "1rem" }}
      label={label}
      deleteIcon={Icon ? <Icon style={{ color: theme, fontSize: "1rem" }} /> : null}
      variant={variant}
      onDelete={() => {}}
    ></Chip>
  );
};

export default MUIChip;
