import React, { useState, useMemo, memo } from "react";

import _ from "lodash";

import { withStyles, Typography, IconButton, Button, TextField, Grid, Chip, Divider } from "@material-ui/core";

import { PersonAdd, Close } from "@material-ui/icons";
import { Autocomplete } from "@material-ui/lab";

import { create_business } from "../../../redux/business/business.action";
import { useDispatch } from "react-redux";

import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

import { getDistrictFromCity } from "../../../data/districts";
import { getWardFromDistrict } from "../../../data/ward";

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

const BusinessDialog = ({ open, setOpen, role, work_area }) => {
  console.log(role);
  const classes = useStyles();
  const inputStyles = useInputStyles();
  const dispatch = useDispatch();
  //======== Dialog Form State ===========//

  const user_cities = useMemo(() => {
    let a = _.groupBy(work_area, "city");
    let b = _.toArray(a);

    return b.map((item) => {
      return {
        title: item[0].city,
        districts: item,
      };
    });
  }, [work_area]);

  const [brandname, setBrandname] = useState("");
  const [types, setTypes] = useState([]);
  const [phone, setPhone] = useState("");
  const [certificate, setCertificate] = useState({ title: "C??" });
  const [city, setCity] = useState(null);
  const [address, setAddress] = useState("");

  const [district, setDistrict] = useState(null);

  const [districtsOption, setDistrictsOption] = useState([]);

  const [ward, setWard] = useState(null);
  const [wardsOption, setWardsOption] = useState([]);

  const [error, setError] = useState(false);

  const _cityOptionChange = (event, value, reason) => {
    setCity(value);
    if (value) {
      role === "admin"
        ? setDistrictsOption(getDistrictFromCity(value?.city_code || value.title))
        : setDistrictsOption(() => user_cities.filter((item) => item.title === value.title)[0].districts);
      setDistrict(null);
      setWard(null);
    } else {
      setDistrict(null);
      setDistrictsOption([]);
      setWard(null);
      setWardsOption([]);
    }
  };

  const _districtOptionChange = (event, value, reason) => {
    setDistrict(value);
    if (value) {
      setWardsOption(getWardFromDistrict(value.title));
      setWard(null);
    } else {
      setWard(null);
      setWardsOption([]);
    }
  };

  //======== Confirm Dialog State ========//
  const [__open, __setOpen] = useState(false);

  const _handleSubmit = () => {
    if (
      brandname === "" ||
      types.length === 0 ||
      city === null ||
      address === "" ||
      district === null ||
      ward === null ||
      certificate === null
    ) {
      setError(true);
    } else {
      setError(false);
      const formData = {
        brandname: brandname,
        types: types,
        phone: phone,
        isNewCert: certificate.title === "C??" ? true : false,
        city: city?.title,
        district: district?.title,
        ward: ward?.title,
        address: address,
      };
      console.log("CREATE BUSINESS: ", formData);
      dispatch(create_business(formData));
      //resetState();
      // setOpen(false);
    }
  };

  const handleClose = () => {
    if (
      brandname !== "" ||
      types.length !== 0 ||
      phone !== "" ||
      city !== null ||
      address !== "" ||
      certificate.title !== "C??"
    ) {
      __setOpen(true);
    } else {
      resetState();
      setOpen(false);
    }
  };

  const resetState = () => {
    setBrandname("");
    setTypes([]);
    setPhone("");
    setCertificate({ title: "C??" });
    setCity(null);
    setDistrict(null);
    setWardsOption([]);
    setDistrictsOption([]);
    setAddress("");
    setWard(null);
  };

  return (
    <>
      <Dialog className={classes.dialog} scroll="paper" open={open}>
        <MuiDialogTitle disableTypography className={classes.dialogTitle}>
          <Typography variant="h6">Th??m t??i kho???n</Typography>

          <IconButton aria-label="close" className={classes._closeButton} onClick={handleClose}>
            <Close />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <span>Th??ng tin</span>
            </Grid>

            <Grid item sm={6} xs={12}>
              <TextField
                value={brandname}
                onChange={(e) => setBrandname(e.target.value)}
                className={inputStyles.root}
                fullWidth
                label="T??n*"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Autocomplete
                id="type-form"
                value={types}
                multiple={true}
                onChange={(event, value, reason) => setTypes(value)}
                options={[{ title: "S???n xu???t" }, { title: "D???ch v???" }]}
                getOptionSelected={(option, value) => option?.title === value?.title}
                getOptionLabel={(option) => option?.title}
                style={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className={`${inputStyles.root} ${inputStyles.autocomplete_input}`}
                    label="Lo???i h??nh*"
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
            <Grid item sm={6} xs={12}>
              <Autocomplete
                id="type-form"
                value={certificate}
                defaultValue={{ title: "C??" }}
                onChange={(event, value, reason) => setCertificate(value)}
                options={[{ title: "C??" }, { title: "C???p sau" }]}
                getOptionSelected={(option, value) => option?.title === value?.title}
                getOptionLabel={(option) => option?.title}
                style={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className={`${inputStyles.root} ${inputStyles.autocomplete_input}`}
                    label="C???p ch???ng nh???n?"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputStyles.root}
                fullWidth
                label="S??? ??i???n tho???i*"
                variant="outlined"
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              {/* <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputStyles.root}
                fullWidth
                label="Email"
                variant="outlined"
              /> */}
            </Grid>
            <Grid item xs={12}>
              <span>Khu v???c</span>
            </Grid>
            <Grid item sm={6} xs={12}>
              <Autocomplete
                id="city-form"
                value={city}
                onChange={_cityOptionChange}
                options={role === "admin" ? cites : user_cities}
                getOptionSelected={(option, value) => option?.title === value?.title}
                getOptionLabel={(option) => option?.title}
                style={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className={`${inputStyles.root} ${inputStyles.autocomplete_input}`}
                    placeholder="Th??nh ph???*"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Autocomplete
                id="district-form"
                value={district}
                noOptionsText="Ch???n T???nh/Th??nh Ph???"
                onChange={_districtOptionChange}
                options={districtsOption}
                getOptionSelected={(option, value) => option?.title === value?.title}
                getOptionLabel={(option) => option?.title}
                style={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className={`${inputStyles.root} ${inputStyles.autocomplete_input}`}
                    placeholder="Qu???n/Huy???n*"
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

            <Grid item sm={6} xs={12}>
              <Autocomplete
                id="ward-form"
                value={ward}
                noOptionsText="Ch???n Qu???n/Huy???n"
                onChange={(event, value, reason) => setWard(value)}
                options={wardsOption}
                getOptionSelected={(option, value) => option?.title === value?.title}
                getOptionLabel={(option) => option?.title}
                style={{ width: "100%" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className={`${inputStyles.root} ${inputStyles.autocomplete_input}`}
                    placeholder="Ph?????ng/X??*"
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
            <Grid item sm={6} xs={12}>
              <TextField
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={inputStyles.root}
                fullWidth
                label="?????a ch???*"
                variant="outlined"
              />
            </Grid>
            {error && (
              <Grid item sm={6} xs={12}>
                <span style={{ color: "red" }}>Y??u c???u nh???p ????? th??ng tin !</span>
              </Grid>
            )}
          </Grid>
        </MuiDialogContent>
        <MuiDialogActions>
          <Button autoFocus onClick={_handleSubmit} startIcon={<PersonAdd />} variant="contained" color="primary">
            t???o m???i
          </Button>
        </MuiDialogActions>
      </Dialog>
      <Dialog open={__open}>
        <DialogTitle>Th??ng tin s??? m???t, ????ng form?</DialogTitle>
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
            ????ng
          </Button>
          <Button autoFocus onClick={() => __setOpen(false)} color="primary">
            H???y
          </Button>
        </MuiDialogActions>
      </Dialog>
    </>
  );
};

export default memo(BusinessDialog);
