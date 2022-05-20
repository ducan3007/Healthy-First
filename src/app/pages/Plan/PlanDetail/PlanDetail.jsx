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
} from "@material-ui/icons";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import DatePicker from "../../../../components/DatePicker/DatePicker";
import MUIChip from "../../../../components/Chip/MUIChip";

import { plan_detail } from "../../../../data/mock_data";

import convertBase64 from "../../../../utils/base64/base64";

import color from "../../../../components/Theme/Theme";
import useStyles from "./styles";
import useInputStyles from "../../../../components/Input/input.style";

const PlanDetailPage = () => {
  const classes = useStyles();

  return (
    <Fade in>
      <div className={classes.root}>
        <Breadcrumb />
        <Divider />
        <Paper style={{ margin: "10px 10px 10px 15px", padding: "5px 5px 15px 5px" }}>
          <PlanInfo plan={plan_detail} />
        </Paper>
        <Paper style={{ margin: "20px 10px 10px 15px", padding: "5px 5px 15px 5px" }}></Paper>
      </div>
    </Fade>
  );
};

const PlanInfo = ({ plan }) => {
  const classes = useStyles();

  const [update, setUpdate] = useState(false);
  const [comment, setComment] = useState(plan?.comment);
  const [result, setResult] = useState({ title: plan?.result });
  const [penalty, setPenalty] = useState(plan?.penalty);
  const [sendDate, setSendDate] = useState(plan?.send_at);
  const [receiveDate, setReceiveDate] = useState(plan?.receive_at);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: "flex" }}>
        <Typography style={{ flex: 3 }} variant="h6">
          THÔNG TIN THANH TRA
        </Typography>
        <div style={{ display: "flex", flex: 5, justifyContent: "flex-end" }}>
          {!update ? (
            <Button onClick={() => setUpdate(!update)}>Sửa</Button>
          ) : (
            <Button onClick={() => setUpdate(!update)}>Cập nhật</Button>
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
          style={{ minWidth: "145px" }}
          disableClearable
          popupIcon={null}
          renderInput={(params) => <TextField {...params} className={classes.autocomplete_input} variant="outlined" />}
        />
      </Grid>
      <Grid item sm={12} xs={12} className={classes.item}>
        <span style={{ minWidth: "95px" }} className={classes.label}>
          Địa chỉ:
        </span>
        <TextField value={plan?.business?.address} disabled className={classes.input} variant="outlined"></TextField>
      </Grid>
      <Grid item container sm={12} xs={12} className={classes.item}>
        <span style={{ minWidth: "145px" }} className={classes.label}>
          Đánh giá/Nhận xét:
        </span>
      </Grid>
      <Grid item sm={12} xs={12} className={classes.item}>
        <TextField
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          disabled={!update}
          className={classes.input}
          multiline
          variant="outlined"
        ></TextField>
      </Grid>
      <Grid item container sm={12} xs={12} className={classes.item}>
        <span style={{ minWidth: "145px" }} className={classes.label}>
          Xử phạt:
        </span>
      </Grid>
      <Grid item sm={12} xs={12} className={classes.item}>
        <TextField
          value={penalty}
          onChange={(event) => setPenalty(event.target.value)}
          disabled={!update}
          className={classes.input}
          multiline
          variant="outlined"
        ></TextField>
      </Grid>
    </Grid>
  );
};

const Sample = ({ sample }) => {
  const [image, setImage] = useState(sample?.image);
  const [inspector, setInspector] = useState(sample?.inspector);
  const [result, setResult] = useState(sample?.result);
  const [penalty, setPenalty] = useState(sample?.penalty);
  const [sendDate, setSendDate] = useState(sample?.send_at);
  const [receiveDate, setReceiveDate] = useState(sample?.receive_at);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: "flex" }}>
        <Typography style={{ flex: 3 }} variant="h6">
          THÔNG TIN THANH TRA
        </Typography>
        <div style={{ display: "flex", flex: 5, justifyContent: "flex-end" }}></div>
      </Grid>
    </Grid>
  );
};

export default PlanDetailPage;
