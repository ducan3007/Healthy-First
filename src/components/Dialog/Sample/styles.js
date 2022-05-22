import { makeStyles } from "@material-ui/core/styles";

import color from "../../Theme/Theme";

export default makeStyles((theme) => ({
  /*======= Dialog =========*/
  item: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      gap: "5px",
    },
    padding: 5,
  },
  image: {
    margin: "0 auto",
    display: "block",
    width: "250px",
    aspectRatio: "1 / 1",
    [theme.breakpoints.down("sm")]: {
      width: "250px",
    },
  },

  dialogTitle: {
    //width:"100%",
    margin: 0,
    padding: theme.spacing(2),
  },
  label: {
    fontWeight: "500",
    fontSize: "1.2rem",
    color: color.gray,
    opacity: 0.85,
  },

  dialog: {
    //width: "50vw",
    "& .MuiDialog-paper": {
      minWidth: "400px",
      width: "35%",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },

    "& .MuiDialog-paperWidthSm": {
      maxWidth: "none",
    },
  },

  _closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },

  /*======= Autucomplete Text filed ========*/
  ChipTag: {
    color: color.dark_blue_2,
    borderRadius: "5px",
    fontSize: "0.9rem",
    backgroundColor: "#E8EAED",
    "& .MuiChip-label": {
      paddingLeft: 6,
      paddingRight: 6,
    },
  },

  /*======= Auto Complete Input ========*/
  input: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    "& .MuiFormControl-root": {
      width: "100%",
    },
    "&.MuiFormControl-root": {
      // width: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    "& input": {
      padding: "3px 0px 5px 3px",
    },
    "& .MuiInputLabel-outlined": {
      color: color.dark_blue_2,
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "1.25rem",
      color: color.dark_blue_2,
      fontWeight: "500",
      borderRadius: "3px",
      "&.Mui-disabled fieldset": {
        borderColor: "transparent",
      },
      "&.Mui-focused fieldset": {
        borderColor: color.dark_blue_2,
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      "& :hover": {
        borderColor: "blue",
      },
      borderWidth: "1px",
      borderColor: color.dark_blue_2,
    },
    "& .MuiOutlinedInput-multiline": {
      padding: "0px 0px 2px 15px",
    },
  },

  /*========== Search Form=============*/

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

  /*=========== filter ======*/

  filter_form: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginLeft: "15px",
  },

  /*=========== Pagination ===========*/
  pagination: {},

  /* ==== Table ============*/

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
    overflow: "auto",

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
