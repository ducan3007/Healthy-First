import { makeStyles } from "@material-ui/core/styles";

import color from "../../../../components/Theme/Theme";

export default makeStyles((theme) => ({
  root: {},
  user_info: {
    margin: "10px 10px 10px 15px",
  },

  image: {
    width: "200px",
    borderRadius: "50%",
    aspectRatio: "1 / 1",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    }
  },

  header_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));
