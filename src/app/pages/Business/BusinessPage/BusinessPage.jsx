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
import MUIButton from "./../../../../components/Button/MUIButton";

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
      search: searchQuery === "" ? undefined : searchQuery,
      city: city?.title,
      district: district?.title,
      ward: ward?.title,
      type: type?.title,
      certStatus: certStatus?.title,
    });
    const query = {
      textSearch: searchQuery === "" ? undefined : searchQuery,
      city: city?.title,
      district: district?.title,
      ward: ward?.title,
      type: type?.title,
      certStatus: certStatus?.title === "B??? thu h???i" ? "Thu h???i" : certStatus?.title,
    };
    dispatch(get_many_business(query));
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
              placeholder="ID, T??n, Ch???ng nh???n, ..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <MUIButton style={{ visibility: "visible", width: "150px" }} type="edit_btn" onClick={_onSearch}>
              T??m Ki???m
            </MUIButton>
          </div>
          <div className={classes.create_btn}>
            <MUIButton style={{ visibility: "visible", width: "110px" }} type="edit_btn" onClick={() => setOpen(true)}>
              Th??m c?? s???
            </MUIButton>
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
              <TextField {...params} className={inputStyles.input} placeholder="Th??nh ph???" variant="outlined" />
            )}
          />
          <Autocomplete
            id="district-form"
            value={district}
            noOptionsText="Ch???n T???nh/Th??nh Ph???"
            onChange={_districtOptionChange}
            options={districtsOption}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Qu???n/Huy???n" variant="outlined" />
            )}
          />
          <Autocomplete
            id="ward-form"
            value={ward}
            noOptionsText="Ch???n Qu???n/Huy???n"
            onChange={(event, value, reason) => setWard(value)}
            options={wardsOption}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Ph?????ng/X??" variant="outlined" />
            )}
          />
          <Autocomplete
            id="type-form"
            value={type}
            onChange={(event, value, reason) => setType(value)}
            options={[{ title: "S???n xu???t" }, { title: "D???ch v???" }]}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Lo???i h??nh" variant="outlined" />
            )}
          />
          <Autocomplete
            id="type-form"
            value={certStatus}
            onChange={(event, value, reason) => setCertStatus(value)}
            options={[{ title: "C??n h???n" }, { title: "H???t h???n" }, { title: "Ch??a c???p" }, { title: "B??? thu h???i" }]}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Ch???ng nh???n" variant="outlined" />
            )}
          />
        </div>

        {/* ============ Pagination =============== */}

        <div className={classes.pagination}>
          <TablePagination
            component="div"
            count={100}
            page={page}
            labelDisplayedRows={({ from, to, count }) => `${from} - ${to} tr??n ${count}`}
            labelRowsPerPage="S??? h??ng m???i trang"
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
