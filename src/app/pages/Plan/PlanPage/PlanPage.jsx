import React, { useState, useEffect, useMemo } from "react";

import { Link, useNavigate } from "react-router-dom";
import { PersonAdd, Search, Close } from "@material-ui/icons";
import {
  Fade,
  TablePagination,
  Button,
  Grid,
  Typography,
  Divider,
  CircularProgress,
  Chip,
  InputBase,
  IconButton,
  TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import { getDistrictFromCity } from "../../../../data/districts";
import { getWardFromDistrict } from "../../../../data/ward";
import { cites } from "../../../../data/city";

import MUIPlanTable from "./Table.Plan";
import { plans } from "../../../../data/mock_data";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

import useStyles from "./styles.jsx";
import useInputStyles from "../../../../components/Input/input.style";

const PlanPage = () => {
  const classes = useStyles();
  const inputStyles = useInputStyles();

  const [open, setOpen] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  /*========== Filter State ============*/
  const [searchQuery, setSearchQuery] = useState("");
  const [city, setCity] = useState(null);

  const [district, setDistrict] = useState(null);
  const [districtsOption, setdistrictsOption] = useState([]);

  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  const [ward, setWard] = useState(null);
  const [wardsOption, setWardsOption] = useState([]);

  const _onSearch = () => {
    console.log({
      searchQuery,
      city,
      district,
      ward,
    });
  };
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

  return (
    <Fade in>
      <div className={classes.root}>
        <Breadcrumb />
        <Divider />

        {/* ====================== Search ===================== */}
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
              Lập kế hoạch
            </Button>
          </div>
        </div>
        {/*======================= Dialog Form ======================= */}

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
        </div>

        {/* ============ Table =============== */}
        <div className={classes.table_container}>
          <MUIPlanTable plan={plans} />
        </div>
      </div>
    </Fade>
  );
};

export default PlanPage;
