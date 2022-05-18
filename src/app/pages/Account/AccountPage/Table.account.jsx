import React, { memo } from "react";

import { useNavigate } from "react-router-dom";

import { Typography, Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";

import { PersonAdd, CheckCircleOutlined, LockOutlined, Search, Close } from "@material-ui/icons";

import MUIChip from "../../../../components/Chip/MUIChip";

import useStyles from "./account.style";

const MUIAccountTable = ({ accounts }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const _navigate = (user_id) => {
    navigate(`/account/${user_id}`);
  };

  return (
    <Table stickyHeader className={classes.table} aria-label="account table">
      <TableHead>
        <TableRow>
          <TableCell width="10%">ID</TableCell>
          <TableCell width="12%">Ảnh</TableCell>
          <TableCell width="18%">Họ và tên</TableCell>
          <TableCell width="12%">Ngày sinh</TableCell>
          <TableCell width="10%">Mật khẩu</TableCell>
          <TableCell width="10%">Trạng thái</TableCell>
          <TableCell>Địa bàn hoạt động</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={classes.table_body}>
        {accounts?.map((row, index) => {
          return (
            <TableRow key={index} onClick={() => _navigate(row?.id)}>
              <TableCell>{row?.id}</TableCell>
              <TableCell>
                <img src={row?.image} className={classes.avatar} alt="avatar" />
              </TableCell>
              <TableCell>{row?.fullname}</TableCell>
              <TableCell>{row?.birth}</TableCell>
              <TableCell>{row?.password}</TableCell>
              <TableCell>
                {
                  <MUIChip
                    type={row?.active ? "ok" : "error"}
                    label={row?.active ? "Hoạt động" : "Bị Khóa"}
                    Icon={row?.active ? CheckCircleOutlined : LockOutlined}
                    variant="outlined"
                  />
                }
              </TableCell>
              <TableCell>
                <div className={classes.table_cell_scroll}>
                  {row?.work_area.map((area, index) => {
                    return (
                      <div key={index}>
                        {area.district} - {area.city}
                      </div>
                    );
                  })}
                </div>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default memo(MUIAccountTable);
