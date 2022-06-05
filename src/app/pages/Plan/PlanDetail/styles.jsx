import { makeStyles } from "@material-ui/core/styles";

import color from "../../../../components/Theme/Theme";

export default makeStyles((theme) => ({
  root: {},
  info: {},
  item: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      gap: "5px",
    },
    padding: 5,
  },
  image: {
    margin: "0 auto",
    display: "block",
    width: "250px",
    aspectRatio: "1 / 1",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
  },
  label: {
    fontWeight: "500",
    fontSize: "1.1rem",
    color: color.gray,
    opacity: 0.85,
  },
  /* ========== Autocomplete ========*/
  autocomplete_input: {
    "& .MuiOutlinedInput-root": {
      width: "100%",
      padding: 0,
      borderRadius: "3px",
      "& .MuiIconButton-root": {
        color: color.dark_blue_2,
      },
      "&.Mui-disabled": {
        "& .MuiIconButton-root": {
          color: "transparent",
        },
        "& fieldset": {
          borderColor: "transparent",
        },
      },
      "&.Mui-focused fieldset": {
        borderColor: color.dark_blue_2,
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
      borderColor: color.dark_blue_2,
    },

    "& .MuiInputBase-root": {
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
    "& ::placeholder": {
      fontStyle: "italic",
      color: color.dark_blue_2,
      fontWeight: "bold",
      opacity: 0.9,
    },
  },

  error: {
    "& .MuiInputBase-root": {
      color: color.error,
    },
  },
  pass: {
    "& .MuiInputBase-root": {
      color: color.green,
    },
  },
  not_pass: {
    "& .MuiInputBase-root": {
      color: color.dark_blue_2,
    },
  },

  ChipTag: {
    color: color.dark_blue_2,
    borderRadius: "5px",
    fontSize: "0.9rem",
    backgroundColor: "#E8EAED",
    "& .MuiChip-label": {
      paddingLeft: 6,
      paddingRight: 6,
    },
    "&.MuiChip-root.Mui-disabled": {
      opacity: 0.8,
    },
  },

  input: {
    width: "100%",
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
    },
    "& .MuiOutlinedInput-notchedOutline": {
      "& :hover": {
        borderColor: "blue",
      },
      borderWidth: "1px",
      borderColor: color.dark_blue_2,
    },
    "& .MuiOutlinedInput-multiline": {
      padding: "0px 0px 2px 15px",
    },
  },
  sample_root: {
    "&:hover": {
      backgroundColor: "#f0f2fa",
      "& .MuiButton-root": {
        visibility: "visible !important",
      },
      "& .MuiChip-root.Mui-disabled": {
        opacity: 1,
      },
    },
  },
  sample_root_selected: {
    backgroundColor: "#f0f2fa",
    "& .MuiButton-root": {
      visibility: "visible !important",
    },
  },
  edit_btn: {
    visibility: "hidden",
    backgroundColor: "rgba(25, 108, 117,0.8)",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgba(25, 108, 117,0.8)",
    },
  },
  cancel_btn: {
    visibility: "hidden",
    backgroundColor: color.error,
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: color.error,
    },
  },
}));
