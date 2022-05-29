import { makeStyles } from "@material-ui/core/styles";

import color from "../../../../components/Theme/Theme";

export default makeStyles((theme) => ({
  root: {},

  image: {
    aspectRatio: 1 / 1,
    width: "60%",
    minWidth: "75px",
    borderRadius: "50%",
  },

  /*+============== Filter ==============*/
  filter: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginLeft: "15px",
  },

  /*=============== search ==============*/
  search_form: {
    margin: "10px 5px 15px 15px",
    display: "flex",
    justifyContent: "space-between",
  },
  search: {
    display: "flex",
    gap: "10px",
    position: "relative",
    borderRadius: "0px",

    width: "580px",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    minWidth: "200px",
  },

  searchIcon: {
    left: "10px",
    height: "100%",
    position: "absolute",
    zIndex: "1",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    backgroundColor: "#E8EAED",
    paddingRight: 5,
    width: "calc(100% - 20px)",
    fontSize: "1.3rem",
  },
  inputInput: {
    paddingLeft: "40px",
    transition: theme.transitions.create("width"),
  },

  /* ============ table==============*/
  table_container: {
    margin: "15px",
    minWidth: "900px",
    minHeight: "100vh",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderWidth: "1px 1px 1px 1px",
    borderRadius: "4px",
  },
  table_head: {
    "& .MuiTableCell-root": {
      padding: 8,
    },
  },

  table: {
    minWidth: 650,
    "& .MuiTableCell-head": {
      color: color.dark_blue_2,
      fontSize: "1.1rem",
      fontWeight: "bold",
      textAlign: "center",
    },

    "& tbody .MuiTableCell-root": {
      boxSizing: "border-box",
      height: "10vh",
      maxWidth: "100px",
      padding: "8px",
      textAlign: "center",
      fontSize: "1.1rem",
    },
    "& tbody .MuiTableCell-body": {
      height: "10vh",
      borderWidth: "0px",
    },
    "& tbody tr.MuiTableRow-root:hover": {
      "& .MuiTableCell-body": {
        color: color.dark_blue,
        fontWeight: "bold",
      },

      backgroundColor: color.light_blue,
      cursor: "pointer",
    },
  },

  table_cell_scroll: {
    padding: 0,
    overflowY: "auto",
    maxHeight: "7rem",
    "&::-webkit-scrollbar": {
      width: "2px",
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(0, 0, 0, 0.12)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#268185",
      borderRadius: "15px",
    },
  },
}));
