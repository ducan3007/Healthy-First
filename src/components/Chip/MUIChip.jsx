import React from "react";

import { Chip } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

import color from "../Theme/Theme";

const useStyles = makeStyles({
  root: {
    color: ({type}) => (type === "ok" ? color.green : color.error),
    borderColor: ({type}) => (type === "ok" ? color.green : color.error),
    borderWidth: "2px",
    fontSize: "1rem",
    "& .MuiChip-root.Mui-disabled": {},
  },
});

const MUIChip = ({ type, label, Icon, variant }) => {
  const classes = useStyles({type});
  let theme = type === "ok" ? "green" : "red";
  return (
    <Chip
      className={classes.root}
      //   style={{ color: theme, borderColor: theme, borderWidth: "2px", fontSize: "1rem" }}
      label={label}
      deleteIcon={<Icon style={{ color: theme, fontSize: "1rem" }} />}
      variant={variant}
      onDelete={() => {}}
    ></Chip>
  );
};

export default MUIChip;
