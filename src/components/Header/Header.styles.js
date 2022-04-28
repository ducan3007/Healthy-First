import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import color from "../Theme/Theme";
const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 5,
    display: "flex",
    marginBottom: "10px",
    justifyContent: "space-between",
    position: "relative",
    backgroundColor: "#dbc791",
    padding: 5,
    alignItems:'center'
  },
  heading: {
    color: "rgba(0,183,255,1)",
    textDecoration: "none",
    fontSize: "3em",
  },
  image: {},
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    padding:5
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  logout: {
    flex: 1,
    justifyContent: "flex-end",
    display: "flex",
    width: "300px",
    marginRight: "5px",
  },
}));

export default useStyles;
