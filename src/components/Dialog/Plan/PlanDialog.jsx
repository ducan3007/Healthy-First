import React, { useState, useMemo, memo, useEffect } from "react";

import { withStyles, Typography, IconButton, Button, TextField, Grid, Chip, Divider } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { create_plan } from "../../../redux/plan/plan.action";
import { businessListSelector } from "../../../redux/selectors";
import { get_many_business } from "../../../redux/business/business.action";
import { PersonAdd, Close } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import MUIButton from "../../Button/MUIButton";
import DatePicker from "../../DatePicker/DatePicker";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

import { getDistrictFromCity } from "../../../data/districts";
import { getWardFromDistrict } from "../../../data/ward";

import { cites } from "../../../data/city";
import { business } from "../../../data/mock_data";

import useStyles from "./styles";
import useInputStyles from "../../Input/input.style";

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

const PlanDialog = ({ open, setOpen }) => {
  const classes = useStyles();
  const inputStyles = useInputStyles();
  const dispatch = useDispatch();
  const business_option = useSelector(businessListSelector);

  //======== Dialog Form State ===========//

  const [business, setBusiness] = useState(null);

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const [error, setError] = useState(false);

  //======== Confirm Dialog State ========//
  const [__open, __setOpen] = useState(false);

  useEffect(() => {
    dispatch(get_many_business());
  }, [dispatch]);

  const _handleSubmit = () => {
    console.log(start.getTime() > end.getTime());
    if (business === null || start === null || end === null || start.getTime() > end.getTime()) {
      setError(true);
    } else {
      setError(false);
      const formData = {
        business_id: business.business_id,
        schedule: {
          start: start,
          end: end,
        },
      };
      dispatch(create_plan(formData));
      console.log(formData);

      // resetState();
      // setOpen(false);
    }
  };

  const _handleChange = (event, value, reason) => {
    if (reason === "select-option") {
      setBusiness(value);
    } else {
      setBusiness(null);
    }
  };

  const handleClose = () => {
    if (business !== null || end !== null || start !== null) {
      __setOpen(true);
    } else {
      resetState();
      setOpen(false);
    }
  };

  const resetState = () => {
    setBusiness(null);
    setStart(null);
    setEnd(null);
    setError(false);
  };

  return (
    <>
      <Dialog className={classes.dialog} scroll="paper" open={open}>
        <MuiDialogTitle disableTypography className={classes.dialogTitle}>
          <Typography variant="h6">Kế hoạch thanh tra</Typography>

          <IconButton aria-label="close" className={classes._closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Grid container spacing={2}>
            <Grid item sm={12} xs={12} style={{ padding: "8px 8px 5px 8px" }}>
              <Autocomplete
                id="type-form"
                onChange={_handleChange}
                options={business_option || []}
                getOptionSelected={(option, value) => option?.brandname === value?.brandname}
                getOptionLabel={(option) => option?.brandname}
                style={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className={`${inputStyles.root} ${inputStyles.autocomplete_input}`}
                    label="Tên Cơ sở"
                    variant="outlined"
                  />
                )}
              />
            </Grid>

            <Grid item sm={12} xs={12}>
              <DatePicker
                value={start}
                _class_={inputStyles.root}
                label="Bắt đầu*"
                onChange={(date) => setStart(date)}
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <DatePicker value={end} _class_={inputStyles.root} label="Kết thúc*" onChange={(date) => setEnd(date)} />
            </Grid>
            {error && (
              <Grid item sm={6} xs={12}>
                <span style={{ color: "red" }}>Thông tin không hợp lệ!</span>
              </Grid>
            )}
            {business && (
              <>
                <Grid item xs={12}>
                  <span style={{ minWidth: "70px" }} className={classes.label}>
                    Mã cơ sở: {<span style={{ color: "#196c75" }}>{business?.business_id}</span>}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <span style={{ minWidth: "70px" }} className={classes.label}>
                    Thanh tra gấn nhất: {<span style={{ color: "#196c75" }}>{business?.last_update}</span>}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <span style={{ minWidth: "70px" }} className={classes.label}>
                    Chứng nhận: {<span style={{ color: "#196c75" }}>{business?.certificate?.status}</span>}
                  </span>
                </Grid>
                <Grid item xs={12}>
                  <span style={{ minWidth: "70px" }} className={classes.label}>
                    Địa chỉ: {<span style={{ color: "#196c75" }}>{business?.address}</span>}
                  </span>
                </Grid>
              </>
            )}
          </Grid>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={_handleSubmit} startIcon={<PersonAdd />} variant="contained" color="primary">
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
              resetState();
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
    </>
  );
};

export default memo(PlanDialog);
