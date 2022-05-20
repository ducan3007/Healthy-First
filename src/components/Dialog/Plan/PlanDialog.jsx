import React, { useState, useMemo, memo } from "react";

import { withStyles, Typography, IconButton, Button, TextField, Grid, Chip, Divider } from "@material-ui/core";

import { PersonAdd, Close } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";

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
  //======== Dialog Form State ===========//

  const [brandname, setBrandname] = useState(null);
  const [bus_id, setId] = useState(null);
  const [address, setAddress] = useState(null);

  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const [error, setError] = useState(false);

  //======== Confirm Dialog State ========//
  const [__open, __setOpen] = useState(false);

  const _handleSubmit = () => {
    if (brandname === "" || start === null || end === null) {
      setError(true);
    } else {
      setError(false);
      const formData = {
        business_id: bus_id,
        schedule: {
          start: start,
          end: end,
        },
      };
      console.log(formData);
      resetState();
      // setOpen(false);
    }
  };

  const _handleChange = (event, value, reason) => {
    if (reason === "select-option") {
      setId(value?.business_id);
      setAddress(value?.address);
    } else {
      setId(null);
      setAddress(null);
    }
  };

  const handleClose = () => {
    if (brandname !== "" || end !== null || start !== null) {
      __setOpen(true);
    } else {
      resetState();
      setOpen(false);
    }
  };

  const resetState = () => {
    setBrandname(null);
    setId(null);
    setAddress(null);
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
            <Grid item xs={12}>
              <span style={{ minWidth: "70px" }} className={classes.label}>
                Mã cơ sở: {<span style={{ color: "#196c75" }}>{bus_id}</span>}
              </span>
            </Grid>
            <Grid item xs={12}>
              <span style={{ minWidth: "70px" }} className={classes.label}>
                Địa chỉ: {<span style={{ color: "#196c75" }}>{address}</span>}
              </span>
            </Grid>
            <Grid item sm={12} xs={12} style={{ padding: "8px 8px 5px 8px" }}>
              <Autocomplete
                id="type-form"
                onChange={_handleChange}
                options={business}
                getOptionSelected={(option, value) => option?.brandname === value?.brandname}
                getOptionLabel={(option) => option?.brandname}
                style={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className={`${inputStyles.root} ${inputStyles.autocomplete_input}`}
                    label="Cơ sở"
                    variant="outlined"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <span className={classes.label}>Thời gian</span>
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
                <span style={{ color: "red" }}>Yêu cầu nhập đủ thông tin !</span>
              </Grid>
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
