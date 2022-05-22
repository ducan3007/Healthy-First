import React, { useRef, useState, useEffect, memo, useMemo } from "react";
import _ from "lodash";

import {
  Divider,
  CircularProgress,
  Fade,
  Paper,
  Grid,
  Button,
  Chip,
  Typography,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";
import {
  PhotoCamera,
  EditRounded,
  Close,
  CheckCircleOutlined,
  BlockOutlined,
  ErrorOutlineOutlined,
  PlaylistAdd,
  AddPhotoAlternateOutlined,
} from "@material-ui/icons";

import MUIButton from "../../../../components/Button/MUIButton";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import DatePicker from "../../../../components/DatePicker/DatePicker";
import MUIChip from "../../../../components/Chip/MUIChip";

import { plan_detail } from "../../../../data/mock_data";

import convertBase64 from "../../../../utils/base64/base64";

import color from "../../../../components/Theme/Theme";
import useStyles from "./styles";
import useInputStyles from "../../../../components/Input/input.style";
import SampleDiaglog from "../../../../components/Dialog/Sample/SampleDiaglog";

const PlanDetailPage = () => {
  const classes = useStyles();
  const [isUpdateArea, setUpdateArea] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Fade in>
      <div className={classes.root}>
        <Breadcrumb />
        <Divider />
        <SampleDiaglog open={open} setOpen={setOpen} />
        <Paper style={{ margin: "10px 10px 10px 15px", padding: "5px 5px 15px 5px" }}>
          <PlanInfo plan={plan_detail} />
        </Paper>
        <Paper style={{ margin: "20px 10px 10px 15px", padding: "5px 5px 15px 5px" }}>
          <Grid container>
            <Grid
              item
              xs={12}
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "15px" }}
            >
              <Typography style={{ flex: 3 }} variant="h6">
                MẪU
              </Typography>
              <div style={{ flex: 5, display: "flex", justifyContent: "flex-end", marginRight: "10px" }}>
                <Button onClick={() => setOpen(true)}>
                  <PlaylistAdd style={{ fontSize: "2rem", color: "#196c75", fontWeight: "bold" }} />
                </Button>
              </div>
            </Grid>
            {plan_detail?.samples?.map((sample, index) => {
              return (
                <PlanSample isUpdateArea={isUpdateArea} setUpdateArea={setUpdateArea} key={index} sample={sample} />
              );
            })}
          </Grid>
        </Paper>
      </div>
    </Fade>
  );
};

const PlanInfo = memo(({ plan }) => {
  const classes = useStyles();

  const [update, setUpdate] = useState(false);
  const [comment, setComment] = useState(plan?.comment);
  const [result, setResult] = useState({ title: plan?.result });
  const [penalty, setPenalty] = useState(plan?.penalty);
  const [sendDate, setSendDate] = useState(plan?.send_at);
  const [receiveDate, setReceiveDate] = useState(plan?.receive_at);

  const handleUpdate = async () => {
    setUpdate(false);
  };
  const handleCancel = () => {
    setComment(plan.comment);
    setResult({ title: plan.result });
    setPenalty(plan.penalty);
    setUpdate(false);
  };
  console.log(comment);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: "flex" }}>
        <Typography style={{ flex: 3 }} variant="h6">
          THÔNG TIN
        </Typography>
        <div style={{ display: "flex", flex: 5, gap: 10, justifyContent: "flex-end" }}>
          {!update ? (
            <MUIButton style={{ visibility: "visible" }} type="edit_btn" onClick={() => setUpdate(true)}>
              Sửa
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
      <Grid item sm={6} xs={12} className={classes.item}>
        <span style={{ minWidth: "95px" }} className={classes.label}>
          Mã cơ sở:
        </span>
        <TextField
          value={plan?.business?.business_id}
          disabled
          className={classes.input}
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item sm={3} xs={12} className={classes.item}>
        <span style={{ minWidth: "95px" }} className={classes.label}>
          Bắt đầu:
        </span>
        <TextField value={plan?.schedule?.start} disabled className={classes.input} variant="outlined"></TextField>
      </Grid>
      <Grid item sm={3} xs={12} className={classes.item}>
        <span style={{ minWidth: "95px" }} className={classes.label}>
          Kết thúc:
        </span>
        <TextField value={plan?.schedule?.end} disabled className={classes.input} variant="outlined"></TextField>
      </Grid>

      <Grid item sm={6} xs={12} className={classes.item}>
        <span style={{ minWidth: "95px" }} className={classes.label}>
          Tên cơ sở:
        </span>
        <TextField value={plan?.business?.brandname} disabled className={classes.input} variant="outlined"></TextField>
      </Grid>

      <Grid item sm={3} xs={12} className={classes.item}>
        <span style={{ minWidth: "95px" }} className={classes.label}>
          Kết quả:
        </span>
        <Autocomplete
          id="type-form"
          value={result}
          disabled={!update}
          onChange={(event, value, reason) => setResult(value)}
          options={[{ title: "Đạt" }, { title: "Không đạt" }]}
          getOptionSelected={(option, value) => option?.title === value?.title}
          getOptionLabel={(option) => option?.title}
          style={{ minWidth: "160px" }}
          disableClearable
          popupIcon={null}
          renderInput={(params) => (
            <TextField
              {...params}
              className={
                result?.title === "Đạt"
                  ? `${classes.autocomplete_input} ${classes.pass}`
                  : `${classes.autocomplete_input} ${classes.error}`
              }
              variant="outlined"
            />
          )}
        />
      </Grid>
      <Grid item sm={12} xs={12} className={classes.item}>
        <span style={{ minWidth: "95px" }} className={classes.label}>
          Địa chỉ:
        </span>
        <TextField value={plan?.business?.address} disabled className={classes.input} variant="outlined"></TextField>
      </Grid>
      <Grid item sm={12} xs={12} className={classes.item}>
        <span style={{ minWidth: "170px" }} className={classes.label}>
          Đánh giá/Nhận xét:
        </span>
        <TextField
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          disabled={!update}
          className={classes.input}
          multiline
          variant="outlined"
        ></TextField>
      </Grid>

      <Grid item sm={12} xs={12} className={classes.item}>
        <span style={{ minWidth: "75px" }} className={classes.label}>
          Xử phạt:
        </span>
        <TextField
          value={penalty}
          onChange={(event) => setPenalty(event.target.value)}
          disabled={!update}
          className={classes.input}
          variant="outlined"
        ></TextField>
      </Grid>
    </Grid>
  );
});

const PlanSample = memo(({ sample, isUpdateArea, setUpdateArea }) => {
  const classes = useStyles();

  const inputRef = useRef(null);

  const [id, setId] = useState(sample?.id);
  const [image, setImage] = useState(sample?.image);
  const [inspector, setInspector] = useState(sample?.inspector);
  const [result, setResult] = useState(sample?.result);
  const [sendDate, setSendDate] = useState(sample.send_at || null);
  const [receiveDate, setReceiveDate] = useState(sample.receive_at || null);

  const [update, setUpdate] = useState(false);

  useEffect(() => {
    if (!isUpdateArea) {
      setUpdate(false);
    }
  }, [isUpdateArea]);

  const _onUpdate = async () => {
    setUpdate(false);
    setUpdateArea(false);
  };

  const _handleImageChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64);
  };
  return (
    <Grid
      item
      container
      sm={6}
      md={4}
      xs={12}
      style={{ gap: 2 }}
      className={!isUpdateArea ? classes.sample_root : !update ? classes.sample_root : classes.sample_root_selected}
    >
      <Grid item xs={12} className={classes.item}>
        {!update ? (
          <MUIButton
            type="edit_btn"
            style={{ visibility: "hidden" }}
            onClick={() => {
              if (isUpdateArea) {
                setUpdateArea(false);
                setUpdate(false);
              } else {
                setUpdateArea(true);
                setUpdate(true);
              }
            }}
          >
            Sửa
          </MUIButton>
        ) : (
          <MUIButton
            type="cancel_btn"
            style={{ visibility: "hidden" }}
            onClick={() => {
              if (isUpdateArea) {
                setUpdateArea(false);
                setUpdate(false);
              } else {
                setUpdateArea(true);
                setUpdate(true);
              }
            }}
          >
            Hủy
          </MUIButton>
        )}

        {!isUpdateArea ? null : update ? (
          <MUIButton type="edit_btn" style={{ visibility: "hidden" }} onClick={_onUpdate}>
            cập nhật
          </MUIButton>
        ) : null}
      </Grid>
      <Grid item xs={12} style={{ position: "relative" }}>
        <img className={classes.image} src={image} alt="img" />
        {update && (
          <div style={{ position: "absolute", left: 0, top: 0 }}>
            <Button
              startIcon={<AddPhotoAlternateOutlined style={{ fontSize: "1.5rem", color: "#196c75" }} />}
              onClick={() => inputRef.current.click()}
            ></Button>
            <input ref={inputRef} onChange={_handleImageChange} type="file" style={{ display: "none" }} />
          </div>
        )}
      </Grid>

      <Grid item xs={12} className={classes.item}>
        <span className={classes.label}>Mã:</span>
        <TextField
          value={id}
          onChange={(e) => setId(e.target.value)}
          disabled={!update}
          className={classes.input}
          variant="outlined"
        ></TextField>
      </Grid>

      <Grid item xs={12} className={classes.item}>
        <span style={{ minWidth: "95px" }} className={classes.label}>
          Đơn vị GĐ:
        </span>
        <TextField
          multiline
          value={inspector}
          onChange={(e) => setInspector(e.target.value)}
          disabled={!update}
          className={classes.input}
          variant="outlined"
        ></TextField>
      </Grid>

      <Grid item xs={12} style={{ gap: "5px" }} className={classes.item}>
        <span style={{ minWidth: "95px" }} className={classes.label}>
          Ngày gửi:
        </span>
        {!update &&
          (!sendDate ? (
            <span style={{ minWidth: "95px", color: "#196c75", fontSize: "1.2rem", fontWeight: "500" }}>
              Chưa gửi giám định
            </span>
          ) : (
            <DatePicker
              disabled={true}
              _class_={classes.input}
              value={sendDate}
              onChange={(date) => setSendDate(date)}
            />
          ))}
        {update && <DatePicker _class_={classes.input} value={sendDate} onChange={(date) => setSendDate(date)} />}
      </Grid>

      <Grid item xs={12} style={{ gap: "5px" }} className={classes.item}>
        <span style={{ minWidth: "105px" }} className={classes.label}>
          Ngày nhận:
        </span>
        {!update &&
          (!receiveDate ? (
            <span style={{ minWidth: "95px", color: "#196c75", fontSize: "1.2rem", fontWeight: "500" }}>-/-</span>
          ) : (
            <DatePicker
              disabled={true}
              _class_={classes.input}
              value={receiveDate}
              onChange={(date) => setReceiveDate(date)}
            />
          ))}
        {update && <DatePicker _class_={classes.input} value={receiveDate} onChange={(date) => setReceiveDate(date)} />}
      </Grid>
      <Grid item xs={12} className={classes.item}>
        <span style={{ minWidth: "95px" }} className={classes.label}>
          Kết quả:
        </span>

        <TextField
          multiline
          value={result}
          onChange={(e) => setResult(e.target.value)}
          disabled={!update}
          className={classes.input}
          variant="outlined"
        ></TextField>
      </Grid>
    </Grid>
  );
});

export default PlanDetailPage;
