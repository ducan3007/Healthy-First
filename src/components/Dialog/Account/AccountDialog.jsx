import React, { useState, useMemo, memo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { withStyles, Typography, IconButton, Button, TextField, Grid, Chip } from "@material-ui/core";

import _ from "lodash";

import { PersonAdd, Close } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";
import MUIButton from "../../Button/MUIButton";
import DatePicker from "../../DatePicker/DatePicker";

import { create_account, add_work_area } from "../../../redux/account/account.action";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { getDistrictFromCity } from "../../../data/districts";

import { cites } from "../../../data/city";
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


const AccountDialog = ({ work_area, userId, open, setOpen, type }) => {
  const classes = useStyles();
  const inputStyles = useInputStyles();
  const dispatch = useDispatch();

  //======== Dialog Form State ===========//

  console.log("work_area", work_area);

  console.log(
    cites.filter((item) => {
      console.log(item.title);
      console.log(work_area?.city);
      let a = _.keyBy()
      return item.title !== work_area?.city;
    })
  );



  const cityOptions = useMemo(() => cites.filter((item) => item.title !== work_area?.city), [work_area]);

  const [fullname, setfullname] = useState("");

  const [birth, setBirth] = useState(null);

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [city, setCity] = useState(null);

  const [districts, setDictricts] = useState([]);

  const districtOptions = useMemo(() => getDistrictFromCity(city?.city_code), [city]);

  const [error, setError] = useState(false);

  //======== Confirm Dialog State ========//
  const [__open, __setOpen] = useState(false);

  const handleCreateAccount = async () => {
    if (fullname === "" || birth === null || phone === "" || email === "" || city === null) {
      setError(true);
    } else {
      setError(false);
      const formdata = {
        fullname: fullname,
        birth: birth,
        phone: phone,
        email: email,
        work_area: districts,
      };
      dispatch(create_account(formdata));
      console.log(formdata);
      resetState();
    }
  };

  const handleCreateWorkArea = () => {
    if (city === null || districts?.length === 0) {
      setError(true);
    } else {
      setError(false);
      const formdata = {
        work_area: districts,
      };
      dispatch(add_work_area(userId, formdata));
      console.log(formdata);
      resetState();
    }
  };

  const handleClose = () => {
    if (fullname !== "" || birth !== null || phone !== "" || email !== "" || city !== null) {
      __setOpen(true);
    } else {
      resetState();
      setOpen(false);
    }
  };
  const _cityOptionChange = (value) => {
    console.log(value);
    setDictricts([]);
    setCity(value);
  };
  const resetState = () => {
    setfullname("");
    setBirth(null);
    setPhone("");
    setEmail("");
    setCity(null);
    setDictricts([]);
  };

  return (
    <>
      <Dialog className={classes.dialog} scroll="paper" open={open}>
        <MuiDialogTitle disableTypography className={classes.dialogTitle}>
          <span style={{ fontWeight: "bold", fontSize: "1.25rem", color: "#196c75", opacity: 1 }}>
            {type === "add_work_area" ? "THÊM KHU VỰC" : "THÊM TÀI KHOẢN"}
          </span>

          <IconButton aria-label="close" className={classes._closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Grid container spacing={2}>
            {type === "add_work_area" ? null : (
              <>
                <Grid item xs={12}>
                  <span>Thông tin</span>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    value={fullname}
                    onChange={(e) => setfullname(e.target.value)}
                    className={inputStyles.root}
                    fullWidth
                    label="Họ và tên*"
                    variant="outlined"
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <DatePicker
                    value={birth}
                    _class_={inputStyles.root}
                    label={"Ngày sinh"}
                    onChange={(date) => setBirth(date)}
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={inputStyles.root}
                    fullWidth
                    label="Số điện thoại*"
                    variant="outlined"
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputStyles.root}
                    fullWidth
                    label="Email*"
                    variant="outlined"
                  />
                </Grid>
              </>
            )}

            <Grid item sm={type === "add_work_area" ? 12 : 6} xs={12}>
              <Autocomplete
                id="city-form"
                value={city}
                onChange={(event, value, reason) => _cityOptionChange(value)}
                options={type === "add_work_area" ? cityOptions : cites}
                getOptionSelected={(option, value) => option?.title === value?.title}
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
            <Grid item sm={type === "add_work_area" ? 12 : 6} xs={12}>
              <Autocomplete
                id="district-form"
                value={districts}
                noOptionsText="Chọn Tỉnh/Thành Phố"
                multiple={true}
                onChange={(event, value, reason) => setDictricts(value)}
                options={districtOptions}
                getOptionSelected={(option, value) => option?.title === value?.title}
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
            {error && (
              <Grid item sm={6} xs={12}>
                <span style={{ color: "red" }}>Yêu cầu nhập đủ thông tin !</span>
              </Grid>
            )}
          </Grid>
        </MuiDialogContent>
        <MuiDialogActions>
          <MUIButton
            style={{ visibility: "visible" }}
            type="edit_btn"
            onClick={type === "add_work_area" ? handleCreateWorkArea : handleCreateAccount}
          >
            tạo mới
          </MUIButton>
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

export default memo(AccountDialog);
