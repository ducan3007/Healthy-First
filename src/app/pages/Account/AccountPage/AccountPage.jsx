import React, { useState, useEffect, useMemo } from "react";
import useAuthorize from "../../../../hooks/useAuthorize";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { accountListSelector } from "../../../../redux/selectors";
import { get_accounts } from "../../../../redux/account/account.action";

import { PersonAdd, Search, Close } from "@material-ui/icons";

import { Divider, CircularProgress, Chip, InputBase, IconButton, TextField } from "@material-ui/core";

import { Fade, TablePagination, Button, Grid, Typography } from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

import AccountDialog from "../../../../components/Dialog/Account/AccountDialog";
import MUIAccoutTable from "./Table.account";

import { cites } from "../../../../data/city";

import { getDistrictFromCity } from "../../../../data/districts";

import { accounts } from "../../../../data/mock_data";

import useStyles from "./account.style";

import useInputStyles from "../../../../components/Input/input.style";

const AccountPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();
  const classes = useStyles();
  const inputStyles = useInputStyles();
  const dispatch = useDispatch();
  const account_list = useSelector(accountListSelector);

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(get_accounts());
  }, [dispatch]);

  const [city, setCity] = useState("");
  const [district, setDistrict] = useState([]);
  const [account_state, setaccount_state] = useState(null);
  const districtsOption = useMemo(() => getDistrictFromCity(city?.city_code), [city]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const _onChangeRowPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const __search = () => {
    let district_titles = district.map((item) => item.title);
    const query = {
      textSearch: search === "" ? undefined : search,
      city: city?.title,
      districts: district_titles.length === 0 ? undefined : district_titles,
      active: account_state?.title,
    };
    dispatch(get_accounts(query));
  };

  /* ===== Options Handle Change ======= */
  const _cityOptionChange = (event, value, reason) => {
    setCity(value);
    setDistrict([]);
    //_setDistrictDialog([]);
  };

  if (loading) {
    return <CircularProgress color="inherit" />;
  }
  if (user?.role !== "admin") {
    return <div>Bạn không có quyền truy cập vào trang này!</div>;
  }

  return (
    !loading && (
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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

          <AccountDialog open={open} setOpen={setOpen}></AccountDialog>

          {/*===================== Select filter =================== */}
          <div className={classes.filter_form}>
            <Autocomplete
              id="city-form"
              onChange={_cityOptionChange}
              options={cites}
              getOptionLabel={(option) => option?.title}
              style={{ width: 260 }}
              renderInput={(params) => (
                <TextField {...params} className={inputStyles.input} placeholder="Thành phố" variant="outlined" />
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
                <TextField {...params} className={inputStyles.input} placeholder="Quận/Huyện" variant="outlined" />
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
                <TextField {...params} className={inputStyles.input} placeholder="Trạng thái" variant="outlined" />
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
            <MUIAccoutTable accounts={account_list} />
          </div>
        </div>
      </Fade>
    )
  );
};

export default AccountPage;
