import React, { memo } from "react";

import { useNavigate } from "react-router-dom";
import moment from "moment";
import { Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";

import { CheckCircleOutlined, BlockOutlined, ErrorOutlineOutlined } from "@material-ui/icons";

import MUIChip from "../../../../components/Chip/MUIChip";

import useStyles from "./styles";

const MUIBusinessTable = ({ business }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const _navigate = (business_id) => {
    navigate(`/business/${business_id}`);
  };

  return (
    <Table stickyHeader className={classes.table} aria-label="account table">
      <TableHead className={classes.table_head}>
        <TableRow>
          <TableCell width="10%">ID</TableCell>
          <TableCell width="20%">Tên</TableCell>
          <TableCell width="10%">Loại hình</TableCell>
          <TableCell width="20%">Địa chỉ</TableCell>
          <TableCell width="10%">Điện thoại</TableCell>
          <TableCell width="15%">Chứng nhận</TableCell>
          <TableCell width="15%">Thanh tra gần nhất</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={classes.table_body}>
        {business?.map((row, index) => {
          return (
            <TableRow key={index} onClick={() => _navigate(row?.business_id)}>
              <TableCell>{row?.business_id}</TableCell>
              <TableCell>
                <span> {row?.brandname}</span>
              </TableCell>
              <TableCell>
                {row?.types?.map((item, index) => {
                  return (
                    <div key={index}>
                      <span style={{ textAlign: "left" }}>{item?.title}</span>
                    </div>
                  );
                })}
              </TableCell>
              <TableCell>{`${row?.ward} - ${row?.district} - ${row?.city}`}</TableCell>
              <TableCell>{row?.phone}</TableCell>
              <TableCell>
                <MUIChip
                  type={
                    row?.certificate?.status === "Còn hạn"
                      ? "valid"
                      : row?.certificate?.status === "Hết hạn"
                      ? "expired"
                      : row?.certificate?.status === "Chưa cấp"
                      ? "pending"
                      : "revoked"
                  }
                  Icon={
                    row?.certificate?.status === "Còn hạn"
                      ? CheckCircleOutlined
                      : row?.certificate?.status === "Hết hạn"
                      ? ErrorOutlineOutlined
                      : row?.certificate?.status === "Chưa cấp"
                      ? ErrorOutlineOutlined
                      : BlockOutlined
                  }
                  label={row?.certificate?.status}
                  variant="outlined"
                />
              </TableCell>

              <TableCell>{row?.last_check !== "N/A" ? moment(row?.last_check).format("DD/MM/YYYY") : "N/A"}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default memo(MUIBusinessTable);
