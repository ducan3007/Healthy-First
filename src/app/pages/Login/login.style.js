import { makeStyles } from "@material-ui/core/styles";
import color from "../../../Components/Theme/Theme";
export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "500px",
    borderRadius: "15px",

    "& .MuiOutlinedInput-root": {
      
      "&.Mui-focused fieldset": {
        borderColor: color.login_input,
      },
      "&:hover fieldset": {
        borderColor: null,
      },
    },
    "& .MuiOutlinedInput-notchedOutline":{
        borderWidth:'2px',
        borderColor: color.login_input,
    }

    // "& .MuiTextField-root": {
    //   margin: theme.spacing(2),
    // },
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  font: {
    fontSize: "1.5em",
    color: "#134247",
  },
}));
