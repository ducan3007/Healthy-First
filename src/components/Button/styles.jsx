import { makeStyles } from "@material-ui/core/styles";

import color from "../Theme/Theme";

export default makeStyles((theme) => ({
  edit_btn: {
    backgroundColor: "rgba(25, 108, 117,0.8)",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "rgba(25, 108, 117,0.8)",
    },
    [theme.breakpoints.down("sm")]: {
      height: "35px",
    },
  },
  cancel_btn: {
    backgroundColor: color.error,
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: color.error,
    },
    [theme.breakpoints.down("sm")]: {
      height: "35px",
    },
  },
}));
