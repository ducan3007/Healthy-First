import React, { useState, useEffect, useMemo } from "react";
import useAuthorize from "../../../../hooks/useAuthorize";
import { Link, useNavigate } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";

import { PersonAdd, Search, Close } from "@material-ui/icons";

import { Divider, CircularProgress, Chip, InputBase, IconButton, TextField } from "@material-ui/core";

import { Fade, TablePagination, Button, Grid, Typography } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

import { Autocomplete } from "@material-ui/lab";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

import MUIAccoutTable from "./Table.account";

import DatePicker from "../../../../components/DatePicker/DatePicker";

import { cites } from "../../../../data/city";

import { getDistrictFromCity } from "../../../../data/districts";
import { districts } from "./../../../../data/districts";

import { get_date } from "../../../../utils/moment/date_format";

import { accounts } from "../../../../data/mock_data";

import useStyles from "./account.style";

import useInputStyles from "../../../../components/Input/input.style";

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
  const inputStyles = useInputStyles();

  const navigate = useNavigate();

  const [city, setCity] = useState("");

  const [district, setDistrict] = useState([]);

  const [account_state, setaccount_state] = useState(null);

  const districtsOption = useMemo(() => getDistrictFromCity(city?.city_code), [city]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  //======== Confirm Dialog State ========//
  const [__open, __setOpen] = useState(false);

  //======== Dialog Form State ===========//

  const [fullname, setfullname] = useState("");

  const [birth, setBirth] = useState(null);

  const [phone, setPhone] = useState("");

  const [cmnd, setCmnd] = useState("");

  const [_city, _setCity] = useState("");

  const [_districtDialog, _setDistrictDialog] = useState([]);

  const _districtsOption = useMemo(() => getDistrictFromCity(_city?.city_code), [_city]);

  const [open, setOpen] = useState(false);

  /* ===== Dialog ===========*/

  const __handleSubmit = () => {
    let work_area = [..._districtDialog];
    work_area?.forEach(function (data) {
      data["district"] = data["title"];
      delete data["title"];
    });
    const formdata = {
      fullname: fullname,
      birth: birth,
      phone: phone,
      cmnd: cmnd,
      work_area: work_area,
    };
    console.log(formdata);
    setfullname("");
    setBirth(null);
    setPhone("");
    setCmnd("");
    _setDistrictDialog([]);
    _setCity("");
  };

  /* ===== Pagination ======*/

  const _onChangeRowPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const __search = () => {
    console.log("city", city);
    console.log("district", district);
    console.log("account_state", account_state);
  };

  /* ===== Options Handle Change ======= */
  const _cityOptionChange = (event, value, reason) => {
    setDistrict([]);
    _setDistrictDialog([]);
    setCity(value);
  };

  if (loading) {
    return <CircularProgress color="inherit" />;
  }
  if (user?.role !== "admin") {
    return <div>Bạn không có quyền truy cập vào trang này!</div>;
  }

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
            <Button style={{ width: 150, padding: 0 }} variant="contained" color="primary" onClick={__search}>
              Tìm Kiếm
            </Button>
          </div>
          <div className={classes.create_btn}>
            <Button startIcon={<PersonAdd />} variant="contained" color="primary" onClick={() => setOpen(true)}>
              Tạo tài khoản
            </Button>
          </div>
        </div>

        {/*======================= Dialog Form ======================= */}

        <Dialog className={classes.dialog} scroll="paper" open={open}>
          <MuiDialogTitle disableTypography className={classes.dialogTitle}>
            <Typography variant="h6">Thêm tài khoản</Typography>

            <IconButton
              aria-label="close"
              className={classes._closeButton}
              onClick={() => {
                if (fullname !== "" || birth !== null || phone !== "" || cmnd !== "" || _city !== "") {
                  __setOpen(true);
                } else {
                  setOpen(false);
                }
              }}
            >
              <Close />
            </IconButton>
          </MuiDialogTitle>
          <MuiDialogContent dividers>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <span>Thông tin</span>
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  value={fullname}
                  onChange={(e) => setfullname(e.target.value)}
                  helperText="bắt bược"
                  className={inputStyles.root}
                  fullWidth
                  label="Họ và tên*"
                  variant="outlined"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <DatePicker value={birth} _class_={inputStyles.root} label={"Ngày sinh"} onChange={(date) => setBirth(date)} />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputStyles.root}
                  fullWidth
                  label="Số điện thoại"
                  variant="outlined"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  value={cmnd}
                  onChange={(e) => setCmnd(e.target.value)}
                  className={inputStyles.root}
                  fullWidth
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <span>Khu vực hoạt động</span>
              </Grid>
              <Grid item sm={6} xs={12}>
                <Autocomplete
                  id="city-form"
                  onChange={(e, value, r) => _setCity(value)}
                  options={cites}
                  getOptionLabel={(option) => option?.title}
                  style={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className={`${inputStyles.root} ${inputStyles.autocomplete_input}`}
                      placeholder="Thành phố*"
                      variant="outlined"
                    />
                  )}
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <Autocomplete
                  id="district-form"
                  value={_districtDialog}
                  noOptionsText="Chọn Tỉnh/Thành Phố"
                  multiple={true}
                  onChange={(event, value, reason) => _setDistrictDialog(value)}
                  options={_districtsOption}
                  getOptionLabel={(option) => option?.title}
                  style={{ width: "100%" }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className={`${inputStyles.root} ${inputStyles.autocomplete_input}`}
                      placeholder="Quận/Huyện*"
                      variant="outlined"
                    />
                  )}
                  renderTags={(value, getTagProps) => {
                    return (
                      <div className={classes._scroll_autocomplete_}>
                        {value?.map((option, index) => (
                          <Chip
                            {...getTagProps({ index })}
                            className={classes.ChipTag}
                            key={index}
                            label={option.title}
                          />
                        ))}
                      </div>
                    );
                  }}
                />
              </Grid>
            </Grid>
          </MuiDialogContent>
          <MuiDialogActions>
            <Button autoFocus onClick={__handleSubmit} startIcon={<PersonAdd />} variant="contained" color="primary">
              tạo mới
            </Button>
          </MuiDialogActions>
        </Dialog>
        <Dialog open={__open}>
          <DialogTitle>Thông tin sẽ mất, đóng form?</DialogTitle>
          <MuiDialogActions>
            <Button
              autoFocus
              onClick={() => {
                setOpen(false);
                __setOpen(false);
              }}
              color="primary"
            >
              Đóng
            </Button>
            <Button autoFocus onClick={() => __setOpen(false)} color="primary">
              Hủy
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
            noOptionsText="Chọn Tỉnh/Thành Phố"
            multiple={true}
            onChange={(event, value, reason) => setDistrict(value)}
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
                    <Chip {...getTagProps({ index })} className={classes.ChipTag} key={index} label={option.title} />
                  ))}
                </div>
              );
            }}
          />
          <Autocomplete
            id="type-form"
            value={account_state}
            onChange={(event, value, reason) => setaccount_state(value)}
            options={[{ title: "Hoạt động" }, { title: "Bị Khóa" }]}
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
            onPageChange={(event, page) => setPage(page)}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={_onChangeRowPerPage}
          />
        </div>

        {/*====================Table ================================ */}
        <div className={classes.table_container}>
          <MUIAccoutTable accounts={accounts} />
        </div>
      </div>
    </Fade>
  );
};

export default AccountPage;
