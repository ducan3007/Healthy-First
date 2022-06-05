import React, { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PersonAdd, Search, Close } from "@material-ui/icons";
import useAuthorize from "../../../../hooks/useAuthorize";
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
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import PlanDialog from "../../../../components/Dialog/Plan/PlanDialog";
import { useDispatch, useSelector } from "react-redux";
import { get_plans } from "../../../../redux/plan/plan.action";

import { getDistrictFromCity } from "../../../../data/districts";
import { getWardFromDistrict } from "../../../../data/ward";
import { cites } from "../../../../data/city";

import MUIPlanTable from "./Table.Plan";

import { plans } from "../../../../data/mock_data";
import year_month from "../../../../data/year_month";

import useStyles from "./styles.jsx";
import useInputStyles from "../../../../components/Input/input.style";
import MUIButton from "./../../../../components/Button/MUIButton";

const PlanPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();
  const classes = useStyles();
  const dispatch = useDispatch();
  const plan_list = useSelector((state) => state.plans.planList);
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

  useEffect(() => {
    dispatch(get_plans());
  }, [dispatch]);

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

  if (!isAuthenticated) {
    return <div></div>;
  }

  console.log("plan_list", plan_list);
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

          <div style={{ display: "flex", gap: "5px" }}>
            <MUIButton style={{ visibility: "visible" }} type="edit_btn" onClick={() => setOpen(true)}>
              Lập kế hoạch
            </MUIButton>
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
        {open && <PlanDialog open={open} setOpen={setOpen} />}

        {/* ============ Table =============== */}
        <div className={classes.table_container}>
          <MUIPlanTable plan={plan_list} />
        </div>
      </div>
    </Fade>
  );
};

export default PlanPage;
