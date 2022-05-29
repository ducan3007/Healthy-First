import React, { useState, useEffect, useMemo } from "react";
import useAuthorize from "../../../../hooks/useAuthorize";

import { useDispatch, useSelector } from "react-redux";
import { get_many_business } from "../../../../redux/business/business.action";
import { businessListSelector } from "../../../../redux/selectors";

import { PersonAdd, Search, Close } from "@material-ui/icons";

import { Divider, CircularProgress, Chip, InputBase, IconButton, TextField } from "@material-ui/core";

import { Fade, TablePagination, Button, Grid, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { getDistrictFromCity } from "./../../../../data/districts";
import { getWardFromDistrict } from "./../../../../data/ward";

import { cites } from "../../../../data/city";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import BusinessDialog from "../../../../components/Dialog/Business/BusinessDialog";

import MUIBusinessTable from "./Table.Business";

import { business } from "../../../../data/mock_data";

import useStyles from "./styles";
import useInputStyles from "../../../../components/Input/input.style";

import { districts } from "./../../../../data/districts";

const BusinessPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();
  const classes = useStyles();
  const inputStyles = useInputStyles();

  const dispatch = useDispatch();
  const business_list = useSelector(businessListSelector);

  useEffect(() => {
    dispatch(get_many_business());
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  /*========== Filter State ============*/
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState(null);

  const [district, setDistrict] = useState(null);
  const [districtsOption, setdistrictsOption] = useState([]);

  const [ward, setWard] = useState(null);
  const [wardsOption, setWardsOption] = useState([]);

  const [type, setType] = useState(null);
  const [certStatus, setCertStatus] = useState(null);

  //======== Dialog Form State ===========//

  const _onSearch = () => {
    console.log({
      searchQuery,
      city,
      district,
      ward,
      type,
      certStatus,
    });
  };

  /* ===== Pagination ======*/

  const _onChangeRowPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  const _cityOptionChange = (event, value, reason) => {
    setCity(value);
    if (value) {
      setdistrictsOption(getDistrictFromCity(value?.city_code));
    } else {
      setDistrict(null);
      setWard(null);
      setdistrictsOption([]);
      setWardsOption([]);
    }
  };
  const _districtOptionChange = (event, value, reason) => {
    setDistrict(value);
    if (value) {
      setWardsOption(getWardFromDistrict(value.title));
    } else {
      setWard(null);
      setWardsOption([]);
    }
  };

  if (loading) {
    return <CircularProgress color="inherit" />;
  }

  return (
    <Fade in>
      <div className={classes.root}>
        <Breadcrumb />
        <Divider />
        {/* ============ Search =============== */}
        <div className={classes.search_form}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <Button style={{ width: 150, padding: 0 }} variant="contained" color="primary" onClick={_onSearch}>
              Tìm Kiếm
            </Button>
          </div>
          <div className={classes.create_btn}>
            <Button startIcon={<PersonAdd />} variant="contained" color="primary" onClick={() => setOpen(true)}>
              Thêm cơ sở
            </Button>
          </div>
        </div>

        {/*======================= Dialog Form ======================= */}
        <BusinessDialog open={open} setOpen={setOpen} role={user?.role} work_area={user?.work_area}></BusinessDialog>

        {/* ============ Filter =============== */}

        <div className={classes.filter}>
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
            onChange={_districtOptionChange}
            options={districtsOption}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Quận/Huyện" variant="outlined" />
            )}
          />
          <Autocomplete
            id="ward-form"
            value={ward}
            noOptionsText="Chọn Quận/Huyện"
            onChange={(event, value, reason) => setWard(value)}
            options={wardsOption}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Phường/Xã" variant="outlined" />
            )}
          />
          <Autocomplete
            id="type-form"
            value={type}
            onChange={(event, value, reason) => setType(value)}
            options={[{ title: "Sản xuất" }, { title: "Dịch vụ" }]}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Loại hình" variant="outlined" />
            )}
          />
          <Autocomplete
            id="type-form"
            value={certStatus}
            onChange={(event, value, reason) => setCertStatus(value)}
            options={[
              { title: "Đạt tiêu chuẩn" },
              { title: "Không đạt tiêu chuẩn" },
              { title: "Hết hạn" },
              { title: "Chưa cấp" },
              { title: "Bị thu hồi" },
            ]}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Chứng nhận" variant="outlined" />
            )}
          />
        </div>

        {/* ============ Pagination =============== */}

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

        {/* ============ Table =============== */}
        <div className={classes.table_container}>
          <MUIBusinessTable business={business_list} />
        </div>
      </div>
    </Fade>
  );
};

export default BusinessPage;
