import React, { useRef, useState, useEffect, useMemo, memo, useCallback } from "react";
import useAuthorize from "../../../../hooks/useAuthorize";
import { useParams } from "react-router-dom";
// import { pdf, PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import _ from "lodash";
import { get_date } from "../../../../utils/moment/date_format";
import MUIButton from "../../../../components/Button/MUIButton";
import { useSelector, useDispatch } from "react-redux";
import { get_business_detail, update_business, update_certificate } from "../../../../redux/business/business.action";
import { businessDetailSelector } from "../../../../redux/selectors";

import { Divider, CircularProgress, Fade, Paper, Grid, Button, Chip, Typography, TextField } from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import {
  PhotoCamera,
  EditRounded,
  PictureAsPdf,
  Close,
  CheckCircleOutlined,
  BlockOutlined,
  ErrorOutlineOutlined,
} from "@material-ui/icons";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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
import PDFDocument from "./../../../../components/PDF/PDFDocument";

const BusinessDetailPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();
  const classes = useStyles();

  const { business_id } = useParams();
  const dispatch = useDispatch();
  const business_detail = useSelector(businessDetailSelector);
  useEffect(() => {
    dispatch(get_business_detail(business_id));
  }, [dispatch, business_id]);

  if (loading) return <CircularProgress color="inherit" />;

  console.log("Parent render");

  return (
    business_detail && (
      <Fade in>
        <div className={classes.root}>
          <Breadcrumb />
          <Divider />
          <Paper style={{ margin: "10px 10px 10px 15px", padding: "5px 5px 15px 5px" }}>
            <BusinessInfo business_detail={business_detail} />
          </Paper>
          <Paper style={{ margin: "20px 10px 10px 15px", padding: "5px 5px 15px 5px" }}>
            <BusinessCertificate
              id={business_id}
              certificate={business_detail?.certificate}
              business={business_detail}
            />
          </Paper>
          <Paper style={{ margin: "20px 10px 10px 15px", padding: "5px 5px 15px 5px" }}></Paper>
        </div>
      </Fade>
    )
  );
};

const BusinessInfo = memo(({ business_detail }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const fileInputRef = useRef(null);

  const [bus_id, setId] = useState(business_detail?.business_id);
  const [bus_types, setTypes] = useState(business_detail?.types);
  const [bus_phone, setPhone] = useState(business_detail?.phone);
  const [bus_img, setBus_img] = useState(business_detail?.image);
  const [bus_brandname, setName] = useState(business_detail?.brandname);
  const [bus_owner, setOwner] = useState(business_detail?.owner?.name);

  const [bus_city, setCity] = useState({ title: business_detail?.city });
  const [bus_ward, setWard] = useState({ title: business_detail?.ward });
  const [bus_district, setDistrict] = useState({ title: business_detail?.district });

  const [bus_address, setAddress] = useState(business_detail?.address);
  const wardOptions = useMemo(() => getWardFromDistrict(bus_district?.title), [bus_district]);
  const districtOptions = useMemo(() => getDistrictFromCity(bus_city?.title), [bus_city]);

  // const [wardsOption, setWardsOption] = useState([]);

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

  const handleCancel = () => {
    setUpdate(false);
    setId(business_detail?.business_id);
    setTypes(business_detail?.types);
    setPhone(business_detail?.phone);
    setBus_img(business_detail?.image);
    setName(business_detail?.brandname);
    setCity({ title: business_detail?.city });
    setWard({ title: business_detail?.ward });
    setDistrict({ title: business_detail?.district });
    setAddress(business_detail?.address);
    setOwner(business_detail?.owner?.name);
  };

  const handleUpdate = () => {
    const formData = {
      business_id: bus_id,
      types: bus_types,
      phone: bus_phone,
      isNewImage: bus_img !== business_detail?.image,
      image: bus_img,
      brandname: bus_brandname,
      city: bus_city?.title,
      district: bus_district?.title,
      ward: bus_ward?.title,
      address: bus_address,
      owner: { name: bus_owner },
    };

    dispatch(update_business(bus_id, formData));
    setUpdate(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: "flex" }}>
        <Typography style={{ flex: 3 }} variant="h6">
          THÔNG TIN CƠ SỞ
        </Typography>
        <div style={{ display: "flex", flex: 5, gap: 8, justifyContent: "flex-end" }}>
          {!update ? (
            <MUIButton style={{ visibility: "visible" }} type="edit_btn" onClick={() => setUpdate(true)}>
              Sửa thông tin
            </MUIButton>
          ) : (
            <>
              <MUIButton style={{ visibility: "visible" }} type="cancel_btn" onClick={handleCancel}>
                HỦY
              </MUIButton>
              <MUIButton style={{ visibility: "visible" }} type="edit_btn" onClick={handleUpdate}>
                Cập nhật
              </MUIButton>
            </>
          )}
        </div>
      </Grid>
      <Grid item sm={2} xs={12} style={{ margin: "0 auto", position: "relative" }}>
        <img className={classes.image} src={bus_img} alt="img" />
        {update && (
          <div style={{ position: "absolute", left: 0, top: 0 }}>
            <Button
              startIcon={<PhotoCamera style={{ color: "#196c75", fontSize: "25px" }} />}
              onClick={() => fileInputRef.current.click()}
            ></Button>
            <input ref={fileInputRef} onChange={onImageChange} type="file" style={{ display: "none" }} />
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
            value={bus_owner}
            onChange={(e) => setOwner(e.target.value)}
            disabled={!update}
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

const ConfirmDialog = memo(({ action, open, setOpen }) => {
  const classes = useStyles();
  const { business_id } = useParams();
  const dispatch = useDispatch();
  const setConfirmMessage = () => {
    switch (action) {
      case "revoked":
        return "Xác nhận thu hồi chứng chỉ an toàn vệ sinh thực phẩm của cơ sở này?";
      case "extend":
        return "Xác nhận gia hạn 6 tháng cho cơ sở này?";
      case "issue":
        return "Xác nhận cấp mơi chứng chỉ an toàn vệ sinh thực phẩm cho cơ sở này?";
      default:
        return "Bạn có chắc chắn?";
    }
  };

  const setConfirmBtn = () => {
    switch (action) {
      case "revoked":
        return "Thu hồi";
      case "extend":
        return "Gia hạn";
      case "issue":
        return "cấp mới";
      default:
        return "Bạn có chắc chắn?";
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    dispatch(update_certificate(action, business_id, {}));
    setOpen(false);
  };
  return (
    <Dialog
      className={classes.dialog}
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        <span style={{ color: "#196c75", fontSize: "1.2rem", fontWeight: "bold" }}>{setConfirmMessage()}</span>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"></DialogContentText>
      </DialogContent>
      <DialogActions>
        <MUIButton onClick={handleClose} style={{ visibility: "visible" }} type="edit_btn">
          HỦY
        </MUIButton>
        <MUIButton
          style={{ visibility: "visible" }}
          onClick={handleClick}
          type={action === "revoked" ? "cancel_btn" : "edit_btn"}
        >
          {setConfirmBtn()}
        </MUIButton>
      </DialogActions>
    </Dialog>
  );
});

const BusinessCertificate = memo(({ certificate, business }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [action, setAction] = useState("");

  const [update, setUpdate] = useState(false);

  const [start, setStart] = useState(certificate?.time?.start);
  const [end, setEnd] = useState(certificate?.time?.end);

  const handleCancel = () => {
    setUpdate(false);
  };
  const handleOpen = (action) => {};

  const handleUpdate = (action) => {};

  console.log({
    certificate,
    update,
    action,
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: "flex" }}>
        <Typography style={{ display: "flex" }} variant="h6">
          GIẤY CHỨNG NHẬN
        </Typography>
        <div style={{ display: "flex", flex: 5, gap: 8, justifyContent: "flex-end" }}>
          {certificate?.status === "Còn hạn" && (
            <>
              <MUIButton
                style={{ visibility: "visible" }}
                onClick={() => {
                  setAction("revoked");
                  setOpen(true);
                }}
                type="cancel_btn"
              >
                thu hồi
              </MUIButton>
            </>
          )}
          {certificate?.status === "Hết hạn" && (
            <>
              <MUIButton
                style={{ visibility: "visible" }}
                type="edit_btn"
                onClick={() => {
                  setAction("extend");
                  setOpen(true);
                }}
              >
                Gia hạn
              </MUIButton>

              <MUIButton
                style={{ visibility: "visible" }}
                onClick={() => {
                  setAction("revoked");
                  setOpen(true);
                }}
                type="cancel_btn"
              >
                thu hồi
              </MUIButton>
            </>
          )}
          {(certificate?.status === "Chưa cấp" || certificate?.status === "Thu hồi") && (
            <>
              <MUIButton
                style={{ visibility: "visible" }}
                type="edit_btn"
                onClick={() => {
                  setAction("issue");
                  setOpen(true);
                }}
              >
                cấp mới
              </MUIButton>
            </>
          )}
        </div>
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
          value={get_date(certificate.time.start)}
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
          value={get_date(certificate.time.end)}
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
      <Grid item sm={12} xs={12} className={classes.item}>
        <div className={classes.file_group}>
          <a
            style={{ flex: 1.3, textDecoration: "none" }}
            href="http://localhost:5000/files/revoke_certificate.pdf"
            download
          >
            <Button
              style={{
                textTransform: "unset",
                backgroundColor: "#dde4f0",
                color: "#196c75",
                fontWeight: "bold ",
                fontSize: "15px",
              }}
              startIcon={<PictureAsPdf style={{ color: "#AD0B00", fontSize: "30px" }} />}
            >
              <span>Quyết định thu hồi chứng chỉ.pdf</span>
            </Button>
          </a>

          <a
            style={{ flex: 1.3, textDecoration: "none" }}
            href="http://localhost:5000/files/revoke_certificate.pdf"
            download
          >
            <Button
              style={{
                textTransform: "unset",
                backgroundColor: "#dde4f0",
                color: "#196c75",
                fontWeight: "bold ",
                fontSize: "15px",
              }}
              startIcon={<PictureAsPdf style={{ color: "#AD0B00", fontSize: "30px" }} />}
            >
              <span>Quyết định cấp mới chứng chỉ.pdf</span>
            </Button>
          </a>
          <a
            style={{ flex: 1.3, textDecoration: "none" }}
            href="http://localhost:5000/files/revoke_certificate.pdf"
            download
          >
            <Button
              style={{
                textTransform: "unset",
                backgroundColor: "#dde4f0",
                color: "#196c75",
                fontWeight: "bold ",
                fontSize: "15px",
              }}
              startIcon={<PictureAsPdf style={{ color: "#AD0B00", fontSize: "30px" }} />}
            >
              <span>Quyết định gia hạn chứng chỉ.pdf</span>
            </Button>
          </a>
        </div>
      </Grid>
      <Grid item>
        <ConfirmDialog action={action} open={open} setOpen={setOpen} />
      </Grid>
    </Grid>
  );
});
// const generatePdfDocument = async (fileName, pdfDocumentComponent) => {
//   const blob = await pdf(pdfDocumentComponent).toBlob();
//   saveAs(blob, fileName);
// };
export default BusinessDetailPage;
