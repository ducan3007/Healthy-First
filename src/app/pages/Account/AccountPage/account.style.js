import { makeStyles } from "@material-ui/core/styles";

import color from "../../../../components/Theme/Theme";
import { Breadcrumbs } from "@material-ui/core";

export default makeStyles((theme) => ({
  root: {
    "& .MuiDivider-root": {
      backgroundColor: "rgba(0, 0, 0, 0.12)",
      height: "1.5px",
    },
  },

  head: {
    marginLeft: "15px",
    marginTop: "5px",
  },
  // Text filed

  input: {
    "&::-webkit-scrollbar": {
      width: "0px",
      padding:0
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(0, 0, 0, 0.12)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#268185",

      borderRadius: "15px",
    },

    "& .MuiInputBase-root": {
      fontSize: "1.1rem",
      color: color.dark_blue_2,
      fontWeight: "bold",
    },
    "& ::placeholder": {
      fontStyle: "italic",
      color: color.dark_blue_2,
      fontWeight: "bold",
      opacity: 0.9,
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      "&.Mui-focused fieldset": {
        borderColor: color.login_input,
      },
      "&:hover fieldset": {
        borderColor: color.login_input,
        backgroundColor: "rgba(199, 255, 242,0.1)",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderWidth: "2px",
      borderColor: color.login_input,
    },
  },

  // Search Form

  search_form: {
    marginLeft: "15px",
    position: "relative",
    borderRadius: "5px",
    backgroundColor: "#ccc",
    marginRight: theme.spacing(2),
    width: "200px",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  // Filter

  filter_form: {
    display: "flex",
    gap: "10px",
    marginLeft: "15px",
  },

  // Table
  avatar: {
    aspectRatio: 1 / 1,
    width: "60%",
    minWidth: "75px",
    borderRadius: "50%",
  },

  table_container: {
    margin: "15px",
    minHeight: "400px",
    height: "75vh",
    borderStyle: "solid",
    borderColor: "#ccc",
    borderWidth: "1px 1px 1px 1px",
    borderRadius: "15px",
    overflowY: "scroll",

    "&::-webkit-scrollbar": {
      width: "7px",
    },
    "&::-webkit-scrollbar-track": {
      background: "rgba(0, 0, 0, 0.12)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#268185",

      borderRadius: "15px",
    },
  },

  table: {
    minWidth: 650,
    "& .MuiTableCell-head": {
      color: color.dark_blue_2,
      fontSize: "1.3rem",
      fontWeight: "bold",
      textAlign: "center",
    },
    "& tbody .MuiTableCell-root": {
      boxSizing: "border-box",
      height: "10vh",
      maxWidth: "100px",
      padding: "8px",
      textAlign: "center",
      fontSize: "1.3rem",
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
    overflow: "auto",
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
