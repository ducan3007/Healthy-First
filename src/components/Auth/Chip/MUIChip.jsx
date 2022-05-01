import React from "react";

import { Chip } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

import color from "../../Theme/Theme";

const useStyles = makeStyles({
  root: {
    color: (error) => (error ? color.green : color.error),
    borderColor: (error) => (error ? color.green : color.error),
    borderWidth: "2px",
    fontSize: "1rem",
    "& .MuiChip-root.Mui-disabled": {},
  },
});

const MUIChip = ({ error, label, Icon, variant }) => {
  const classes = useStyles(error);
  let theme = error ? "green" : "red";
  return (
    <Chip
      className={classes.root}
    //   style={{ color: theme, borderColor: theme, borderWidth: "2px", fontSize: "1rem" }}
      label={label}
      deleteIcon={<Icon style={{ color: theme,fontSize:'1rem' }} />}
      variant={variant}
      onDelete={() => {}}
    ></Chip>
  );
};

export default MUIChip;
