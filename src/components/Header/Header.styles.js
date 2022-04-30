import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

import color from "../Theme/Theme";
import { user_auth } from "./../../redux/api/api";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: "9px",
    display: "flex",
    marginBottom: "10px",
    position: "relative",
    justifyContent: "space-between",
    backgroundColor: color.header,
    height: "45px",
    padding: 5,
    margin: "0px 3px 0px 3px",
    alignItems: "center",
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
    padding: 5,
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  // logo: {
  //   flex: 13,
  // },
  // user_avatar: {
  //   flex: 2,
  // },
  logout: {
    flex: 1,
    justifyContent: "flex-end",
    display: "flex",
    width: "300px",
    marginRight: "5px",
  },
}));

export default useStyles;
