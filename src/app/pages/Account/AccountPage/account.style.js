import { makeStyles } from "@material-ui/core/styles";

import color from "../../../../components/Theme/Theme";
import { Breadcrumbs } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiDivider-root": {
      backgroundColor: "rgba(0, 0, 0, 0.12)",
      height: "1.5px",
    },
    "& .MuiTypography-body1": {
      fontSize: "inherit",
    },
    "& .MuiTypography-root": {
      "& a": {
        textDecoration: "none",
      },
    },
    "& .MuiBreadcrumbs-separator": {
      padding: 0,
    //   margin: "0px 5px 0px 5px"
    },
  },
  bread_crumb_title: {
    minHeight: 40,
    fontSize: "25px",
    padding: "7px 0px 4px 7px",
    textDecoration: "none",
  },
}));
