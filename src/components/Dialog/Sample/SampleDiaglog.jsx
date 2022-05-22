import React, { useState, useMemo, memo } from "react";

import { withStyles, Typography, IconButton, Button, TextField, Grid, Chip } from "@material-ui/core";

import { PersonAdd, Close } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";

import DatePicker from "../../DatePicker/DatePicker";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import { getDistrictFromCity } from "../../../data/districts";

import convertBase64 from "../../../utils/base64/base64";

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

const SampleDialog = ({ open, setOpen }) => {
  const classes = useStyles();
  const inputStyles = useInputStyles();
  //======== Dialog Form State ===========//

  const [fullname, setfullname] = useState("");

  const [birth, setBirth] = useState(null);

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");

  const [city, setCity] = useState(null);

  const [districts, setDictricts] = useState([]);

  const districtOptions = useMemo(() => getDistrictFromCity(city?.city_code), [city]);

  const [error, setError] = useState(false);

  const [id, setId] = useState("");
  const [image, setImage] = useState();
  const [inspector, setInspector] = useState("");
  const [result, setResult] = useState("");
  const [sendDate, setSendDate] = useState(null);
  const [receiveDate, setReceiveDate] = useState(null);

  //======== Confirm Dialog State ========//
  const [__open, __setOpen] = useState(false);

  const __handleSubmit = () => {
    if (id || image || inspector) {
      setError(true);
    } else {
      setError(false);
      const formdata = {};
      console.log(formdata);
      resetState();
    }
  };

  const handleClose = () => {
    if (id !== "" || image !== null || inspector !== "" || sendDate !== null || receiveDate !== null) {
      __setOpen(true);
    } else {
      resetState();
      setOpen(false);
    }
  };

  const _handleImageChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64);
  };

  const resetState = () => {
    setId("");
    setImage(null);
    setInspector("");
    setResult("");
    setSendDate(null);
    setReceiveDate(null);
  };

  console.log({
    id,
    image,
    inspector,
    result,
    sendDate,
    receiveDate,
  });

  return (
    <>
      <Dialog className={classes.dialog} scroll="paper" open={open}>
        <MuiDialogTitle disableTypography className={classes.dialogTitle}>
          <Typography variant="h6">{"THÊM MẪU"}</Typography>

          <IconButton aria-label="close" className={classes._closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ display: "flex", gap: 10 }}>
              <span style={{ color: "#196c75", opacity: 1, fontWeight: "bold" }} className={classes.label}>
                Ảnh:
              </span>
              <input onChange={_handleImageChange} type="file" />
            </Grid>

            {image && (
              <Grid item xs={12}>
                <img className={classes.image} src={image} alt="img" />{" "}
              </Grid>
            )}

            <Grid item sm={12} xs={12} className={classes.item}>
              <TextField
                value={id}
                onChange={(e) => setId(e.target.value)}
                className={inputStyles.root}
                fullWidth
                label="Mẫu ID*"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={12} xs={12} className={classes.item}>
              <TextField
                value={inspector}
                onChange={(e) => setInspector(e.target.value)}
                className={inputStyles.root}
                fullWidth
                label="Đơn vị GĐ"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <DatePicker
                value={sendDate}
                _class_={inputStyles.root}
                label={"Ngày gửi"}
                onChange={(date) => setSendDate(date)}
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <DatePicker
                value={receiveDate}
                _class_={inputStyles.root}
                label={"Ngày nhận"}
                onChange={(date) => setReceiveDate(date)}
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                value={result}
                onChange={(e) => setResult(e.target.value)}
                className={inputStyles.root}
                fullWidth
                multiline
                label="Kết quả"
                variant="outlined"
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

export default memo(SampleDialog);
