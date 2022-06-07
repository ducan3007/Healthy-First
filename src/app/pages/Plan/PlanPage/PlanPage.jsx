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
import DatePicker from "../../../../components/DatePicker/DatePicker";
import { Autocomplete } from "@material-ui/lab";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import PlanDialog from "../../../../components/Dialog/Plan/PlanDialog";
import { useDispatch, useSelector } from "react-redux";
import { get_plans } from "../../../../redux/plan/plan.action";

import { getDistrictFromCity } from "../../../../data/districts";
import { getWardFromDistrict } from "../../../../data/ward";
import { cites } from "../../../../data/city";
import { months, years } from "../../../../data/year_month";
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

  const [status, setStatus] = useState(null);
  const [result, setResult] = useState(null);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  const [ward, setWard] = useState(null);
  const [wardsOption, setWardsOption] = useState([]);

  useEffect(() => {
    dispatch(get_plans());
  }, [dispatch]);

  const _onSearch = () => {};
  const _onChangeRowPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
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
            id="type-form"
            value={status}
            onChange={(event, value, reason) => setStatus(value)}
            options={[
              { title: "Chưa thực hiện" },
              { title: "Đang thực hiện" },
              { title: "Chờ mẫu" },
              { title: "Hoàn thành" },
              { title: "Bị hủy" },
            ]}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Trạng thái" variant="outlined" />
            )}
          />
          <Autocomplete
            id="type-form"
            value={result}
            onChange={(event, value, reason) => setResult(value)}
            options={[{ title: "Đạt" }, { title: "Không đạt" }, { title: "Chưa có" }]}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Kết quả" variant="outlined" />
            )}
          />
          <Autocomplete
            id="type-form"
            value={month}
            onChange={(event, value, reason) => setMonth(value)}
            options={months}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Tháng" variant="outlined" />
            )}
          />
          <Autocomplete
            id="type-form"
            value={year}
            onChange={(event, value, reason) => setYear(value)}
            options={years}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: 260 }}
            renderInput={(params) => (
              <TextField {...params} className={inputStyles.input} placeholder="Năm" variant="outlined" />
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
