import React, { useState, useEffect, useMemo } from "react";
import useAuthorize from "../../../../hooks/useAuthorize";
import { Link, NavLink, useParams, useNavigate } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import { PersonAdd, CheckCircleOutlined, LockOutlined, Search, Close } from "@material-ui/icons";

import { Divider, CircularProgress, Paper, Chip, InputBase, IconButton, TextField } from "@material-ui/core";

import { Fade, TablePagination, Button, Grid } from "@material-ui/core";

import { Typography, Table, TableBody, TableHead, TableRow, TableCell } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

import { Autocomplete } from "@material-ui/lab";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

import MUIChip from "../../../../components/Auth/Chip/MUIChip";

import DatePicker from "../../../../components/DatePIcker/DatePicker";

import useStyles from "./account.style";

import { cites } from "../../../../data/city";

import { getDistrictFromCity } from "../../../../data/districts";
import { districts } from "./../../../../data/districts";

import { accounts } from "../../../../data/fake_data";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <Close />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const AccountPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();
  const classes = useStyles();
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState([]);
  const [account_state, setaccount_state] = useState(null);
  const districtsOption = useMemo(() => getDistrictFromCity(city?.city_code), [city]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [open, setOpen] = useState(false);

  /* ===== Dialog ===========*/

  const __handleSubmit = () => {};

  const __handleDialogOpen = () => {
    setOpen(true);
  };
  const __handleDialogClose = () => {
    setOpen(false);
  };

  /* ===== Pagination ======*/
  const _onChangePage = (event, page) => {
    setPage(page);
  };
  const _onChangeRowPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  /* ===== Options Handle Change ======= */
  const _cityOptionChange = (event, value, reason) => {
    setDistrict([]);
    setCity(value);
  };
  const _districtOptionChange = (event, value, reason) => {
    setDistrict(value);
  };
  const _accountTypeChange = (event, value, reason) => {
    setaccount_state(value);
  };

  const _tableRowClick = () => {
    console.log("table row clicked");
    navigate("/account/edit");
  };

  if (loading) {
    return <CircularProgress color="inherit" />;
  }
  if (user?.role !== "admin") {
    return <div>Bạn không có quyền truy cập vào trang này!</div>;
  }
  console.log({ page: page, limit: rowsPerPage });
  return (
    <Fade in>
      <div className={classes.root}>
        <Breadcrumb />
        <Divider />

        {/*======================= Search Form ======================= */}
        <div className={classes.search_form}>
          <div className={classes.search}>
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
          <div className={classes.create_btn}>
            <Button startIcon={<PersonAdd />} variant="contained" color="primary" onClick={__handleDialogOpen}>
              Tạo tài khoản
            </Button>
          </div>
        </div>

        {/*======================= Dialog Form ======================= */}

        <Dialog className={classes.dialog} scroll="paper" open={open}>
          <MuiDialogTitle disableTypography className={classes.dialogTitle}>
            <Typography variant="h6">Thêm tài khoản</Typography>

            <IconButton aria-label="close" className={classes._closeButton} onClick={__handleDialogClose}>
              <Close />
            </IconButton>
          </MuiDialogTitle>
          <MuiDialogContent dividers>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <p>Thông tin</p>
              </Grid>
              <Grid item xs={6}>
                <TextField fullWidth label="Họ và tên" variant="outlined" />
              </Grid>
              <Grid item xs={6}>
                <DatePicker value={selectedDate} onChange={handleDateChange} />
              </Grid>
            </Grid>
          </MuiDialogContent>

          <MuiDialogActions>
            <Button autoFocus onClick={__handleSubmit} startIcon={<PersonAdd />} variant="contained" color="primary">
              tạo mới
            </Button>
          </MuiDialogActions>
        </Dialog>

        {/*===================== Select filter =================== */}
        <div className={classes.filter_form}>
          <Autocomplete
            id="city-form"
            onChange={_cityOptionChange}
            options={cites}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={classes.input} placeholder="Thành phố" variant="outlined" />
            )}
          />
          <Autocomplete
            id="district-form"
            value={district}
            multiple={true}
            onChange={_districtOptionChange}
            options={districtsOption}
            getOptionLabel={(option) => option?.title}
            style={{ width: "fit-content", maxWidth: "600px", minWidth: "300px" }}
            renderInput={(params) => (
              <TextField {...params} className={classes.input} placeholder="Quận/Huyện" variant="outlined" />
            )}
            renderTags={(value, getTagProps) => {
              return (
                <div className={classes._scroll_autocomplete_}>
                  {value?.map((option, index) => (
                    <Chip {...getTagProps({ index })} key={index} label={option.title} />
                  ))}
                </div>
              );
            }}
          />
          <Autocomplete
            id="type-form"
            value={account_state}
            onChange={_accountTypeChange}
            options={[{ title: "Hoạt động" }, { title: "Khóa" }]}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={classes.input} placeholder="Trạng thái" variant="outlined" />
            )}
          />
        </div>

        {/*====================    Pagination  ================================ */}
        <div className={classes.pagination}>
          <TablePagination
            component="div"
            count={100}
            page={page}
            labelDisplayedRows={({ from, to, count }) => `${from} - ${to} trên ${count}`}
            labelRowsPerPage="Số hàng mỗi trang"
            rowsPerPageOptions={[10, 25, 50, 100, 200]}
            onPageChange={_onChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={_onChangeRowPerPage}
          />
        </div>

        {/*====================Table ================================ */}
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
                  <TableRow key={index} onClick={_tableRowClick}>
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
