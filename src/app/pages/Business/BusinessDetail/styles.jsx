import { makeStyles } from "@material-ui/core/styles";

import color from "../../../../components/Theme/Theme";

export default makeStyles((theme) => ({
  root: {},
  info: {
    
  },
  item: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      gap: "5px",
    },
  },
  image: {
    margin: "0 auto",
    display: "block",
    width: "150px",
    borderRadius: "50%",
    aspectRatio: "1 / 1",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
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
      //   "&:hover fieldset": {
      //     borderColor: color.dark_blue_2,
      //     backgroundColor: "rgba(199, 255, 242,0.1)",
      //   },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "1px",
      borderColor: color.dark_blue_2,
    },

    "& .MuiInputBase-root": {
      fontSize: "1.1rem",
      color: color.dark_blue_2,
      fontWeight: "bold",
    },
    "& ::placeholder": {
      fontStyle: "italic",
      color: color.dark_blue_2,
      fontWeight: "bold",
      opacity: 0.9,
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

  /*====== Text Field ======*/
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
