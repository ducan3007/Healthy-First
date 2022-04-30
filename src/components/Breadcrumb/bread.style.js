import { makeStyles } from "@material-ui/core/styles";

import color from "../Theme/Theme";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: 40,
    fontSize: "25px",
    padding: "7px 0px 0px 7px",
    textDecoration: "none",
    "& .MuiTypography-body1": {
      fontSize: "inherit",
    },
    "& .MuiTypography-root": {
      "& a": {
        "&:active": {
          color: "inherit",
        },
        textDecoration: "none",
        color: color.font_color_black,
        fontSize: "1.8rem",
      },
    },
    "& .MuiBreadcrumbs-li": {
      padding: "0px 6px 0px 6px",
      "&:hover": {
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
      },
    },
    "& .MuiBreadcrumbs-separator": {
      
      //   margin: "0px 5px 0px 5px"
    },
  },
}));
