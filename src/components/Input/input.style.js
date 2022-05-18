import { makeStyles } from "@material-ui/styles";
import color from "../Theme/Theme";

const useInputStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "& .MuiInputLabel-outlined": {
      color: color.dark_blue_2,
      fontSize: "1.3rem",
      fontWeight: "bold",
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "1.3rem",
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
  autocomplete_input: {
    "&::-webkit-scrollbar": {
      width: "0px",
      padding: 0,
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(0, 0, 0, 0.12)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#268185",

      borderRadius: "15px",
    },
    "& .MuiInputBase-root": {
      fontSize: "1.3rem",
      color: color.dark_blue_2,
      fontWeight: "bold",
    },
    "& ::placeholder": {
      color: color.dark_blue_2,
      fontWeight: "bold",
      opacity: 1,
    },
  },
  input: {
    "& .MuiOutlinedInput-root": {
      padding: 4,
      borderRadius: "5px",
      "&.Mui-focused fieldset": {
        borderColor: color.login_input,
      },
      "&:hover fieldset": {
        borderColor: color.login_input,
        backgroundColor: "rgba(199, 255, 242,0.1)",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: color.login_input,
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

    "&::-webkit-scrollbar": {
      width: "0px",
      padding: 0,
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(0, 0, 0, 0.12)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#268185",

      borderRadius: "15px",
    },
  },
}));

export default useInputStyles;
