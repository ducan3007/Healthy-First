import { makeStyles } from "@material-ui/core/styles";
import color from "../../../Components/Theme/Theme";
export default makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#FFC877",
    backgroundImage:
      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='0' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ddffa0'/%3E%3Cstop offset='1' stop-color='%23ddffa0' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='1200' cy='800' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2387ff6d'/%3E%3Cstop offset='1' stop-color='%2387ff6d' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='c' cx='600' cy='0' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2396ffd2'/%3E%3Cstop offset='1' stop-color='%2396ffd2' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='d' cx='600' cy='800' r='600' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23FFC877'/%3E%3Cstop offset='1' stop-color='%23FFC877' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='e' cx='0' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23C8FFCE'/%3E%3Cstop offset='1' stop-color='%23C8FFCE' stop-opacity='0'/%3E%3C/radialGradient%3E%3CradialGradient id='f' cx='1200' cy='0' r='800' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2363F8FF'/%3E%3Cstop offset='1' stop-color='%2363F8FF' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='1200' height='800'/%3E%3Crect fill='url(%23b)' width='1200' height='800'/%3E%3Crect fill='url(%23c)' width='1200' height='800'/%3E%3Crect fill='url(%23d)' width='1200' height='800'/%3E%3Crect fill='url(%23e)' width='1200' height='800'/%3E%3Crect fill='url(%23f)' width='1200' height='800'/%3E%3C/svg%3E\")",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  },
  paper: {
    backgroundColor: "rgba(255,255,255,0.1)",
    marginTop: theme.spacing(10),
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "480px",
    borderRadius: "25px",
    boxSizing: "border-box",

    "& .MuiOutlinedInput-root": {
      borderRadius: "4px",
      "&.Mui-focused fieldset": {
        borderColor: color.login_input,
      },
      "&:hover fieldset": {
        borderColor: color.login_input,
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: color.login_input,
    },

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
    fontSize: "20px",
    margin: 0,
    height: "45px",
    width: "100%",
    backgroundColor: color.login_button,
    "&:hover": {
      backgroundColor: color.login_button,
    },
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  font: {
    fontSize: "2.5em",
    color: "#134247",
    fontWeight: "bold",
  },
}));
