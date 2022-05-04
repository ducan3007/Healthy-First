import { makeStyles } from "@material-ui/styles";
import color from "../Theme/Theme";

const useInputStyles = makeStyles((theme) => ({
  root: {

    "& .MuiFormControl-root": {
      width: "100%",
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
      fontSize: "1.5rem",
      color: color.dark_blue_2,
      fontWeight: "bold",
    },
    "& ::placeholder": {
      color: color.dark_blue_2,
      fontWeight: "bold",
      opacity: 1,
    },
  },
}));

export default useInputStyles;
