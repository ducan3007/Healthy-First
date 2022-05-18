import React, { memo } from "react";

import { useNavigate } from "react-router-dom";

import { Typography, Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";

import {
  PersonAdd,
  CheckCircleOutlined,
  BlockOutlined,
  LockOutlined,
  ErrorOutlineOutlined,
  Search,
  Close,
} from "@material-ui/icons";

import color from "../../../../components/Theme/Theme";

import MUIChip from "../../../../components/Chip/MUIChip";

import useStyles from "./styles";

const MUIPlanTable = ({ plan }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const _navigate = (business_id) => {
    navigate(`/plan/${business_id}`);
  };

  return (
    <Table stickyHeader className={classes.table} aria-label="plan tabl">
      <TableHead className={classes.table_head}>
        <TableRow>
          <TableCell width="10%">Mã cơ sở</TableCell>
          <TableCell width="15%">Thành phố</TableCell>
          <TableCell width="15%">Quận</TableCell>
          <TableCell width="18%">Lịch trình</TableCell>
          <TableCell>Kết Luận</TableCell>
          <TableCell width="12%">Kết quả thanh tra</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {plan?.map((row, index) => {
          return (
            <TableRow key={index} onClick={() => _navigate(row?.business?.business_id)}>
              <TableCell style={{ overflowX: "auto" }}>{row?.business?.business_id}</TableCell>
              <TableCell>{row?.business?.city}</TableCell>
              <TableCell>{row?.business?.district}</TableCell>
              <TableCell>
                {row?.schedule?.start} - {row?.schedule?.end}
              </TableCell>
              <TableCell>
                <p style={{textAlign:'left'}}>{row?.result_comment} </p>
              </TableCell>
              <TableCell>
                {row?.result === "Đạt" ? (
                  <span
                    style={{
                      color: "green",
                      padding: "3px 20px 3px 20px",
                      borderRadius: "4px",
                      backgroundColor: color.green_rgba,
                    }}
                  >
                    {row?.result}
                  </span>
                ) : row?.result === "Chưa đạt" ? (
                  <span
                    style={{
                      color: color.error,
                      padding: "3px 7px 3px 7px",
                      borderRadius: "4px",
                      backgroundColor: color.error_rgba,
                    }}
                  >
                    {row?.result}
                  </span>
                ) : (
                  <span
                    style={{
                      color: color.dark_blue_2,
                      padding: "3px 7px 3px 7px",
                      borderRadius: "4px",
                      backgroundColor: color.blue_rgba,
                    }}
                  >
                    {row?.result}
                  </span>
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default memo(MUIPlanTable);
