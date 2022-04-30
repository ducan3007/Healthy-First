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

  table_container: {
    margin: "25px",
    minHeight: "400px",
    height: "75vh",
    border: "1px solid #ccc",
    borderRadius: "5px",

    overflowY: "scroll",

    "&::-webkit-scrollbar": {
      width: "5px",
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
    fontSize: "60px",
    "& .MuiTableCell-head": {
      color: color.font_color_black_2,
      fontSize: "1.3rem",
      fontWeight: "bold",
      textAlign: "left",
    },
    "& tbody .MuiTableCell-root": {
      height: "10vh",
      maxWidth: "100px",
      padding: "8px",
      textAlign: "left",
      fontSize: "1.3rem",
    },
    "& tbody .MuiTableCell-body": {
      height: "10vh",
    },
    "& tbody tr.MuiTableRow-root:hover": {
      "& .MuiTableCell-body": {
        borderWidth: "2px",
        borderColor: "blue",
      },
      backgroundColor: "#f5f5f5",
      cursor: "pointer",
    },
  },
  table_cell_scroll: {
    overflow: "auto",
    maxHeight: "100px",
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
