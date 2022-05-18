import { makeStyles } from "@material-ui/styles";
import color from "../Theme/Theme";
export default makeStyles((theme) => ({
  root: {
    "& .MuiTypography-body1": {
      fontSize: "18px",
    },
    "& .MuiList-root": {
      padding: 0,
    },
    "& .MuiListItem-root": {
      paddingTop: 6,
      paddingBottom: 6,
      marginBottom: 0,
      borderRadius: "28px",
      gap: "17px",
      "&:hover": {
        backgroundColor: "#e6e6e6",
      },
    },
    " & .MuiListItemIcon-root": {
      minWidth: 0,
    },
  },
  list_item: {
    display: "flex",
    alignItems: "center",
  },
  list_content: {
    color: "#1A73E8",
  },
  link: {
    color: "inherit",
    textDecoration: "none",
    "&.active > div": {
      backgroundColor: "rgba(210,227,252,1)",
      "& .MuiTypography-body1": {
        fontWeight: "bold",
        color: color.selected,
      },
      "& .MuiListItemIcon-root": {
        color: color.selected,
      },
    },
  },
}));
