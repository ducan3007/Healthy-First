import { makeStyles } from "@material-ui/core/styles";

import color from "../../../../components/Theme/Theme";

export default makeStyles((theme) => ({
  root: {},
  user_info: {
    margin: "10px 10px 10px 15px",
    padding: "5px 0px 5px 0px",
  },

  image_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: "165px",
    borderRadius: "50%",
    aspectRatio: "1 / 1",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
  },
  edit_btn: {
    position: "absolute",
    right: 0,
    top: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  edit_btn_2: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grid_item: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    gap: "43px",
  },
  work_area: {
    width: "100%",
  },

  /*======= Masonry  ========*/
  masonry: {
    columns: "2",
    gap: "15px",
    padding: "10px 10px 10px 10px",
    [theme.breakpoints.down("sm")]: {
      columns: "1",
    },
    "& > *": {
      breakInside: "avoid",
    },
  },
  masonry_item: {
    position: "relative",
    marginBottom: "10px",
    width: "100%",
  },

  label: {
    minWidth: "95px",
    fontWeight: "500",
    fontSize: "1.1rem",
    color: color.gray,
    opacity: 0.85,
  },

  input: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "&.MuiFormControl-root": {
      // width: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    "& input": {
      padding: "3px 0px 5px 3px",
    },
    "& .MuiInputLabel-outlined": {
      color: color.dark_blue_2,
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "1.25rem",
      color: color.dark_blue_2,
      fontWeight: "500",
      borderRadius: "3px",
      "&.Mui-disabled fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: color.dark_blue_2,
      },
      // "&:hover fieldset": {
      //   borderColor: "transparent",
      // },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      "& :hover": {
        borderColor: "blue",
      },
      borderWidth: "1px",
      borderColor: color.dark_blue_2,
    },
  },
}));
