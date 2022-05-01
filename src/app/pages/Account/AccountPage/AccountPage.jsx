import React, { useState, useEffect, useMemo } from "react";
import useAuthorize from "../../../../hooks/useAuthorize";

import { Link, NavLink, useParams, useNavigate } from "react-router-dom";
import { NavigateNext, CheckCircleOutlined, LockOutlined, Search } from "@material-ui/icons";

import { Divider, CircularProgress, Paper, Chip, InputBase, TextField } from "@material-ui/core";
import { Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

import { Fade,Grow,Collapse} from "@material-ui/core";

import MUIChip from "../../../../components/Auth/Chip/MUIChip";

import useStyles from "./account.style";

import { cites } from "../../../../data/city";

import { getDistrictFromCity } from "../../../../data/districts";
import { districts } from "./../../../../data/districts";

const createData = (id, image, fullname, birth, password, active, work_area) => {
  return { id, image, fullname, birth, password, active, work_area };
};

const accounts = [
  createData(
    "user1234",
    "https://secure.gravatar.com/avatar/?s=120&d=mp",
    "Nguyen Van A",
    "19/02/2000",
    "a1c3s5e3ds",
    false,
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
  const navigate = useNavigate();
  const [isAuthenticated, loading, user] = useAuthorize();

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState([]);
  const [account_state, setaccount_state] = useState(null);

  const district_list = useMemo(() => {
    return getDistrictFromCity(city?.city_code);
  }, [city]);

  const cityHandleChange = (event, value, reason) => {
    console.log(value);

    setDistrict([]);
    setCity(value);
  };

  const districtsHandleChange = (event, value, reason) => {
    console.log(value);
    setDistrict(value);
  };

  const accountStateHandleChange = (event, value, reason) => {
    setaccount_state(value);
  };

  const onTableRowClick = () => {
    console.log("table row clicked");
    navigate("/account/edit");
  };
  if (loading) {
    return <CircularProgress color="inherit" />;
  }
  if (user?.role !== "admin") {
    return <div>Bạn không có quyền truy cập vào trang này!</div>;
  }
  console.log("render");
  return (
    <Fade in>
      <div className={classes.root}>
        <Breadcrumb />
        <Divider />

        <div className={classes.search_form}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Tìm kiếm..."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>

        <div className={classes.filter_form}>
          <Autocomplete
            id="city-form"
            onChange={cityHandleChange}
            options={cites}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField
                {...params}
                className={classes.input}
                // InputProps={{
                //   classes: { input: classes.inputLabel },
                // }}

                placeholder="Thành phố"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            value={district}
            multiple={true}
            id="district-form"
            onChange={districtsHandleChange}
            options={district_list}
            getOptionLabel={(option) => option?.title}
            style={{ width: 580 }}
            renderInput={(params) => (
              <TextField
                {...params}
                className={classes.input}
                // InputProps={{
                //   classes: { input: classes.inputLabel },
                // }}

                placeholder="Quận/Huyện"
                variant="outlined"
              />
            )}
          />
          <Autocomplete
            id="type-form"
            value={account_state}
            onChange={accountStateHandleChange}
            options={[{ title: "Hoạt động" }, { title: "Khóa" }]}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField
                {...params}
                className={classes.input}
                // InputProps={{
                //   classes: { input: classes.inputLabel },
                // }}

                placeholder="Trạng thái"
                variant="outlined"
              />
            )}
          />
        </div>

        <div>sdfdsfds</div>
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
              {accounts?.map((row, index) => {
                return (
                  <TableRow key={index} onClick={onTableRowClick}>
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
                          error={row?.active}
                          label={row?.active ? "Hoạt động" : "Khóa"}
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
    </Fade>
  );
};

export default AccountPage;
