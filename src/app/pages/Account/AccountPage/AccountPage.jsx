import React from "react";
import useAuthorize from "../../../../hooks/useAuthorize";

import { Link, NavLink, useParams } from "react-router-dom";
import { NavigateNext } from "@material-ui/icons";

import {
  Divider,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
} from "@material-ui/core";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

import useStyles from "./account.style";
import { create } from "yup/lib/array";

const createData = (id, image, fullname, birth, password, active, work_area) => {
  return { id, image, fullname, birth, password, active, work_area };
};

const data = [
  createData(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createData(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createData(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createData(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createData(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createData(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createData(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),
  createData(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    true,
    [
      {
        city: "Ha Noi",
        district: "Quan Nam Tu Liem",
        code: "adfcsdf",
      },
      {
        city: "Ha Noi",
        district: "Quan Bac Tu Liem",
      },
    ]
  ),

];

const AccountPage = () => {
  const classes = useStyles();
  const [isAuthenticated, loading, user] = useAuthorize();
  if (loading) {
    return <CircularProgress color="inherit" />;
  }
  if (user?.role !== "admin") {
    return <div>Bạn không có quyền truy cập vào trang này!</div>;
  }

  return (
    <div className={classes.root}>
      <Breadcrumb />
      <Divider />
      danh sach tai khoan
      <div className={classes.table_container}>
        <Table stickyHeader className={classes.table} aria-label="account table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Ảnh</TableCell>
              <TableCell>Họ và tên</TableCell>
              <TableCell>Ngày sinh</TableCell>
              <TableCell>Mật khẩu</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Địa bàn hoạt động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              return (
                <TableRow key={index}>
                  <TableCell >{row?.id}</TableCell>
                  <TableCell>
                    <img src={row?.image} alt="avatar" width="60px" height="60px" />
                  </TableCell>
                  <TableCell>{row?.fullname}</TableCell>
                  <TableCell>{row?.birth}</TableCell>
                  <TableCell>{row?.password}</TableCell>
                  <TableCell>{row?.active ? "Hoạt động" : "Khóa"}</TableCell>
                  <TableCell>
                    <div className={classes.table_cell_scroll}>
                      {row?.work_area.map((area, index) => {
                        return (
                          <div key={index}>
                            {area.city} - {area.district}
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
      </div>
    </div>
  );
};

export default AccountPage;
