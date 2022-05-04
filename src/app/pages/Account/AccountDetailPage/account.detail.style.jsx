import { makeStyles } from "@material-ui/core/styles";

import color from "../../../../components/Theme/Theme";

export default makeStyles((theme) => ({
  root: {},
  user_info: {
    margin: "10px 10px 10px 15px",
    padding: "5px 0px 5px 0px",
  },
  header_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "160px",
    borderRadius: "50%",
    aspectRatio: "1 / 1",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
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
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  label: {
    minWidth: "70px",
  },
  input: {
    width: "80%",
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "&.MuiFormControl-root": {
      width: "80%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    "& input": {
      padding: "3px 0px 3px 3px",
    },
    "& .MuiInputLabel-outlined": {
      color: color.dark_blue_2,
      fontSize: "1.5rem",
      fontWeight: "bold",
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "1.5rem",
      color: color.dark_blue_2,
      borderRadius: "4px",
      "&.Mui-focused fieldset": {
        borderColor: color.dark_blue_2,
      },
      "&:hover fieldset": {
        borderColor: color.dark_blue_2,
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      "& :hover": {
        borderColor: "blue",
      },
      borderWidth: "2px",
      borderColor: color.dark_blue_2,
    },
  },
}));
