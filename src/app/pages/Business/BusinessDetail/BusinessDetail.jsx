import React, { useRef, useState, useEffect, useMemo, memo } from "react";
import useAuthorize from "../../../../hooks/useAuthorize";

import _ from "lodash";

import { Divider, CircularProgress, Fade, Paper, Grid, Button, Chip, Typography, TextField } from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import {
  PhotoCamera,
  EditRounded,
  Close,
  CheckCircleOutlined,
  BlockOutlined,
  ErrorOutlineOutlined,
} from "@material-ui/icons";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import DatePicker from "../../../../components/DatePicker/DatePicker";
import MUIChip from "../../../../components/Chip/MUIChip";

import convertBase64 from "../../../../utils/base64/base64";

import { business_detail } from "../../../../data/mock_data";
import { cites } from "../../../../data/city";
import { getDistrictFromCity } from "./../../../../data/districts";
import { getWardFromDistrict } from "./../../../../data/ward";

import useStyles from "./styles";
import useInputStyles from "./../../../../components/Input/input.style";

const BusinessDetailPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();
  const classes = useStyles();
  const inputStyles = useInputStyles();

  //============ Business Info ============//

  if (loading) return <CircularProgress color="inherit" />;

  console.log("Parent render");

  return (
    <Fade in>
      <div className={classes.root}>
        <Breadcrumb />
        <Divider />
        <Paper style={{ margin: "10px 10px 10px 15px", padding: "5px 5px 15px 5px" }}>
          <BusinessInfo business_detail={business_detail} />
        </Paper>
        <Paper style={{ margin: "20px 10px 10px 15px", padding: "5px 5px 15px 5px" }}>
          <BusinessCertificate certificate={business_detail?.certificate} />
        </Paper>
      </div>
    </Fade>
  );
};

const BusinessInfo = memo(({ business_detail }) => {
  const classes = useStyles();
  const fileInputRef = useRef(null);

  const [bus_id, setId] = useState(business_detail?.business_id);
  const [bus_types, setTypes] = useState(business_detail?.types);
  const [bus_phone, setPhone] = useState(business_detail?.phone);
  const [bus_img, setBus_img] = useState(business_detail?.image);
  const [bus_brandname, setName] = useState(business_detail?.brandname);

  const [bus_city, setCity] = useState({ title: business_detail?.city });
  const [bus_ward, setWard] = useState({ title: business_detail?.ward });
  const [bus_district, setDistrict] = useState({ title: business_detail?.district });

  const [bus_address, setAddress] = useState(business_detail?.address);
  const wardOptions = useMemo(() => getWardFromDistrict(bus_district?.title), [bus_district]);
  const districtOptions = useMemo(() => getDistrictFromCity(bus_city?.title), [bus_city]);

  // const [wardsOption, setWardsOption] = useState([]);

  const [bus_certificate, setCertificate] = useState(business_detail?.certificate);
  const [bus_owner, setOwner] = useState(business_detail?.owner);

  const [update, setUpdate] = useState(false);

  const _cityOptionChange = (event, value, reason) => {
    setCity(value);
    if (!value) {
      setDistrict(null);
      setWard(null);
    }
  };
  const _districtOptionChange = (event, value, reason) => {
    setDistrict(value);
    if (!value) {
      setWard(null);
    }
  };
  const onImageChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setBus_img(base64);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: "flex" }}>
        <Typography style={{ flex: 3 }} variant="h6">
          THÔNG TIN CƠ SỞ
        </Typography>
        <div style={{ display: "flex", flex: 5, justifyContent: "flex-end" }}>
          {!update ? (
            <Button onClick={() => setUpdate(!update)}>Sửa</Button>
          ) : (
            <Button onClick={() => setUpdate(!update)}>Cập nhật</Button>
          )}
        </div>
      </Grid>
      <Grid item sm={2} xs={12} style={{ margin: "0 auto", position: "relative" }}>
        <img className={classes.image} src={bus_img} alt="img" />
        {update && (
          <div style={{ position: "absolute", left: 0, top: 0 }}>
            <Button startIcon={<PhotoCamera />} onClick={() => fileInputRef.current.click()}></Button>
            <input ref={fileInputRef} onChange={(e) => onImageChange(e)} type="file" style={{ display: "none" }} />
          </div>
        )}
      </Grid>
      <Grid item sm={10} xs={12} className={classes.item}>
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12} className={classes.item}>
            <span style={{ minWidth: "160px" }} className={classes.label}>
              Tên/Thương hiệu:
            </span>
            <TextField
              value={bus_brandname}
              disabled={!update}
              onChange={(e) => setName(e.target.value)}
              className={classes.input}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.item}>
            <span style={{ minWidth: "90px" }} className={classes.label}>
              Mã cơ sở:
            </span>
            <TextField
              value={business_detail?.business_id}
              disabled={true}
              className={classes.input}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.item}>
            <span style={{ minWidth: "95px" }} className={classes.label}>
              Loại hình:
            </span>
            <Autocomplete
              id="type-form"
              multiple
              value={bus_types}
              disabled={!update}
              onChange={(event, value, reason) => setTypes(value)}
              options={[{ title: "Sản xuất" }, { title: "Dịch vụ" }]}
              getOptionSelected={(option, value) => option?.title === value?.title}
              getOptionLabel={(option) => option?.title}
              style={{ width: "100%" }}
              disableClearable
              popupIcon={null}
              renderInput={(params) => (
                <TextField {...params} className={classes.autocomplete_input} variant="outlined" />
              )}
              renderTags={(value, getTagProps) => {
                return (
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap", maxHeight: "15rem" }}>
                    {value?.map((option, index) => (
                      <Chip
                        {...getTagProps({ index })}
                        deleteIcon={<Close style={{ fontSize: "25px" }} />}
                        onDelete={
                          update
                            ? () => {
                                setTypes(value.filter((item, i) => i !== index));
                              }
                            : null
                        }
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
          <Grid item sm={6} xs={12} className={classes.item}>
            <span style={{ minWidth: "125px" }} className={classes.label}>
              Số điện thoại:
            </span>
            <TextField
              value={bus_phone}
              disabled={!update}
              onChange={(e) => setPhone(e.target.value)}
              className={classes.input}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.item}>
            <span style={{ minWidth: "190px" }} className={classes.label}>
              Thanh tra ngần nhất:
            </span>
            <TextField
              value={business_detail?.last_check}
              disabled={true}
              className={classes.input}
              variant="outlined"
            ></TextField>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} style={{ padding: "10px 0px 0px 15px" }} spacing={1}>
        <Grid item sm={12} xs={12} className={classes.item}>
          <span style={{ minWidth: "135px" }} className={classes.label}>
            Người đại diện:
          </span>
          <TextField
            value={business_detail?.owner?.name}
            disabled={true}
            className={classes.input}
            variant="outlined"
          ></TextField>
        </Grid>
        <Grid item sm={4} xs={12} className={classes.item}>
          <span style={{ minWidth: "150px" }} className={classes.label}>
            Tỉnh/Thành phố:
          </span>
          <Autocomplete
            id="city-form"
            disabled={!update}
            value={bus_city}
            onChange={_cityOptionChange}
            options={cites}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} className={classes.autocomplete_input} variant="outlined" />
            )}
          />
        </Grid>
        <Grid item sm={4} xs={12} className={classes.item}>
          <span className={classes.label}>Quận/Huyện:</span>
          <Autocomplete
            id="district-form"
            disabled={!update}
            value={bus_district}
            onChange={_districtOptionChange}
            options={districtOptions}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} className={classes.autocomplete_input} variant="outlined" />
            )}
          />
        </Grid>

        <Grid item sm={4} xs={12} className={classes.item}>
          <span className={classes.label}>Phường/Xã:</span>
          <Autocomplete
            id="ward-form"
            disabled={!update}
            value={bus_ward}
            onChange={(event, value, reason) => setWard(value)}
            options={wardOptions}
            getOptionSelected={(option, value) => option?.title === value?.title}
            getOptionLabel={(option) => option?.title}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} className={classes.autocomplete_input} variant="outlined" />
            )}
          />
        </Grid>

        <Grid item sm={12} xs={12} className={classes.item}>
          <span style={{ minWidth: "70px" }} className={classes.label}>
            Địa chỉ:
          </span>
          <TextField
            value={bus_address}
            disabled={!update}
            onChange={(e) => setAddress(e.target.value)}
            className={classes.input}
            variant="outlined"
          ></TextField>
        </Grid>
      </Grid>
    </Grid>
  );
});
const BusinessCertificate = memo(({ certificate }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: "flex" }}>
        <Typography style={{ display: "flex" }} variant="h6">
          GIẤY CHỨNG NHẬN
        </Typography>
        <div style={{ display: "flex", flex: 5, justifyContent: "flex-end" }}></div>
      </Grid>
      <Grid item sm={4} xs={12} className={classes.item}>
        <span style={{ minWidth: "70px" }} className={classes.label}>
          Số cấp:
        </span>
        <TextField
          value={certificate?.certificate_id}
          disabled={true}
          className={classes.input}
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item sm={4} xs={12} className={classes.item}>
        <span style={{ minWidth: "88px" }} className={classes.label}>
          Ngày cấp:
        </span>
        <TextField
          value={certificate?.time.start}
          disabled={true}
          className={classes.input}
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item sm={4} xs={12} className={classes.item}>
        <span style={{ minWidth: "130px" }} className={classes.label}>
          Ngày hết hạn:
        </span>
        <TextField
          value={certificate?.time.end}
          disabled={true}
          className={classes.input}
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item sm={12} xs={12} className={classes.item}>
        <span style={{ minWidth: "130px" }} className={classes.label}>
          Trạng thái:
        </span>
        <MUIChip
          type={
            certificate?.status === "Còn hạn"
              ? "valid"
              : certificate?.status === "Hết hạn"
              ? "expired"
              : certificate?.status === "Chưa cấp"
              ? "pending"
              : "revoked"
          }
          Icon={
            certificate?.status === "Còn hạn"
              ? CheckCircleOutlined
              : certificate?.status === "Hết hạn"
              ? ErrorOutlineOutlined
              : certificate?.status === "Chưa cấp"
              ? ErrorOutlineOutlined
              : BlockOutlined
          }
          label={certificate?.status}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
});
export default BusinessDetailPage;
