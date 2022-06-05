import React, { useRef, useState, useEffect, memo, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import _ from "lodash";
import { Divider, withStyles, CircularProgress, Fade, Paper, Grid, Button, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { accountDetailSelector } from "../../../../redux/selectors";
import { get_account } from "../../../../redux/account/account.action";
import MUIButton from "../../../../components/Button/MUIButton";
import { useDispatch, useSelector } from "react-redux";
import { update_account } from "../../../../redux/account/account.action";
import { PhotoCamera, EditRounded } from "@material-ui/icons";
import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import DatePicker from "../../../../components/DatePicker/DatePicker";
import WorkAreaItem from "../../../../components/WorkArea/WorkArea";
import AccountDialog from "../../../../components/Dialog/Account/AccountDialog";
import useAuthorize from "../../../../hooks/useAuthorize";
import { user_detail as account_detail } from "../../../../data/mock_data";
import convertBase64 from "../../../../utils/base64/base64";
import useStyles from "./styles";
import { districts } from "./../../../../data/districts";

const AccountDetailPage = () => {
  const classes = useStyles();
  const [isAuthenticated, loading, user] = useAuthorize();
  const { user_id } = useParams();

  const dispatch = useDispatch();
  const account_detail = useSelector(accountDetailSelector);

  const [open, setOpen] = useState(false);
  const [isUpdateArea, setUpdateArea] = useState(false);

  useEffect(() => {
    dispatch(get_account(user_id));
  }, [dispatch, user_id]);

  if (loading) return <CircularProgress color="inherit" />;

  if (user?.role !== "admin" && user?.id !== user_id) return <div>Bạn không có quyền truy cập vào trang này!</div>;

  return (
    account_detail && (
      <Fade in>
        <div className={classes.root}>
          <Breadcrumb />
          <Divider />

          <Paper className={classes.user_info}>
            <AccountInfo account_detail={account_detail} />
          </Paper>
          <AccountDialog
            work_area={account_detail?.work_area}
            open={open}
            userId={user_id}
            setOpen={setOpen}
            type="add_work_area"
          />
          <Paper className={classes.work_area}>
            <div
              style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "15px" }}
            >
              <span style={{ flex: 1 }}>Khu vực hoạt động</span>
              {user?.role === "admin" && (
                <div style={{ flex: 5, display: "flex", justifyContent: "flex-end", marginRight: "10px" }}>
                  <MUIButton style={{ visibility: "visible" }} type="edit_btn" onClick={() => setOpen(true)}>
                    THÊM KHU VỰC
                  </MUIButton>
                </div>
              )}
            </div>
            {account_detail?.work_area && (
              <WorKArea
                role={user?.role}
                userId={user_id}
                work_area={account_detail?.work_area}
                isUpdateArea={isUpdateArea}
                setUpdateArea={setUpdateArea}
              />
            )}
          </Paper>
        </div>
      </Fade>
    )
  );
};
export const WorKArea = memo(({ role, work_area, userId, isUpdateArea, setUpdateArea }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const WORK_AREAS = useMemo(() => _(work_area).groupBy("city").values().value(), [work_area]);

  const updateWorkArea = (work_area_item, city) => {
    let workFromOtherCity = [];

    workFromOtherCity = work_area.filter((item) => item.city !== city);

    console.log("WORK_AREAS", WORK_AREAS);

    console.log("CITY: ", city);
    console.log("workFromOtherCity :", workFromOtherCity);
    console.log("work_area_item: ", work_area_item);

    let submitData = [...workFromOtherCity, ...work_area_item];

    dispatch(update_account(userId, { work_area: submitData }));
  };

  return (
    <div className={classes.masonry}>
      {WORK_AREAS?.map((area, index) => {
        return (
          <div className={classes.masonry_item} key={index}>
            <WorkAreaItem
              role={role}
              updateWorkArea={updateWorkArea}
              area={area}
              city={area[0].city}
              isUpdateArea={isUpdateArea}
              setUpdateArea={setUpdateArea}
            />
          </div>
        );
      })}
    </div>
  );
});

export const AccountInfo = memo(({ account_detail }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const fileInputRef = useRef(null);
  //======= Change passowrd  ======/

  const [password, setPassword] = useState({ current: "", new: "", confirm: "" });
  const [_open, _setOpen] = useState(false);
  const [error, seterror] = useState(false);
  //========= User Info =========//
  const [active, setActive] = useState({ title: account_detail?.active });
  const [image, setImage] = useState(account_detail?.image);
  const [ID, setID] = useState(account_detail?.id);
  const [birth, setBirth] = useState(account_detail?.birth);
  const [fullname, setFullname] = useState(account_detail?.fullname);
  const [phone, setPhone] = useState(account_detail?.phone);
  const [email, setEmail] = useState(account_detail?.email);
  const [isUpdate, setIsUpdate] = useState(false);
  //========= Work Area =========//

  const _handleImageChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64);
  };
  const handleCancel = () => {
    setActive({ title: account_detail?.active });
    setImage(account_detail?.image);
    setID(account_detail?.id);
    setBirth(account_detail?.birth);
    setFullname(account_detail?.fullname);
    setPhone(account_detail?.phone);
    setEmail(account_detail?.email);
    setIsUpdate(false);
  };

  const handleUpdate = () => {
    const formData = {
      active: active.title,
      isNewImage: image !== account_detail?.image,
      image: image,
      id: ID,
      birth: birth,
      fullname: fullname,
      phone: phone,
      email: email,
    };
    dispatch(update_account(ID, formData));
    setIsUpdate(false);
  };
  const handleChangePassword = () => {
    console.log(password);
    if (password.new !== password.confirm || !password.new || !password.confirm) {
      seterror(true);
      return;
    }
    const formData = {
      isNewPassword: true,
      password: password.new,
      confirmPassword: password.confirm,
    };
    dispatch(update_account(ID, formData));
    setPassword({});
    seterror(false);
    _setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span>Thông tin chuyên viên </span>

        <div style={{ display: "flex", flex: 5, gap: 10, justifyContent: "flex-end" }}>
          {!isUpdate ? (
            <MUIButton style={{ visibility: "visible" }} type="edit_btn" onClick={() => setIsUpdate(true)}>
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
          <MUIButton style={{ visibility: "visible" }} type="edit_btn" onClick={() => _setOpen(!_open)}>
            Đổi mật khẩu
          </MUIButton>
        </div>
      </Grid>

      <Grid item sm={2} xs={12} className={classes.image_container}>
        <img className={classes.image} src={image} alt="img" />
        {isUpdate && (
          <div style={{ position: "absolute", left: 0, top: 0 }}>
            <Button onClick={() => fileInputRef.current.click()}>
              <PhotoCamera style={{ color: "#196c75", fontSize: "25px" }} />
            </Button>
            <input ref={fileInputRef} onChange={(e) => _handleImageChange(e)} type="file" style={{ display: "none" }} />
          </div>
        )}
      </Grid>

      <Grid item sm={9} xs={12}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12} className={classes.grid_item}>
            <span className={classes.label}>Tài khoản:</span>
            <TextField
              value={ID}
              disabled={true}
              onChange={(e) => setID(e.target.value)}
              className={classes.input}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.grid_item}>
            <span className={classes.label}>Ngày sinh:</span>
            <DatePicker
              minDate={new Date(1900, 1, 1)}
              disabled={!isUpdate}
              _class_={classes.input}
              value={birth}
              onChange={(date) => setBirth(date)}
            />
          </Grid>
          <Grid item sm={6} xs={12} className={classes.grid_item}>
            <span className={classes.label}>Họ và tên:</span>
            <TextField
              value={fullname}
              disabled={!isUpdate}
              onChange={(e) => setFullname(e.target.value)}
              className={classes.input}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.grid_item}>
            <span className={classes.label}>SĐT:</span>
            <TextField
              value={phone}
              disabled={!isUpdate}
              onChange={(e) => setPhone(e.target.value)}
              className={classes.input}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item sm={6} xs={12} className={classes.grid_item}>
            <span className={classes.label}>Trạng thái:</span>
            <Autocomplete
              id="type-form"
              value={active}
              disabled={!isUpdate}
              onChange={(event, value, reason) => setActive(value)}
              options={[{ title: "Khóa" }, { title: "Hoạt động" }]}
              getOptionSelected={(option, value) => option?.title === value?.title}
              getOptionLabel={(option) => option?.title}
              style={{ minWidth: "160px" }}
              disableClearable
              popupIcon={null}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className={
                    active?.title === "Hoạt động"
                      ? `${classes.autocomplete_input} ${classes.pass}`
                      : `${classes.autocomplete_input} ${classes.error}`
                  }
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item sm={6} xs={12} className={classes.grid_item}>
            <span className={classes.label}>Email:</span>
            <TextField
              value={email}
              disabled={!isUpdate}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.input}
              variant="outlined"
            ></TextField>
          </Grid>
        </Grid>
      </Grid>
      {_open && (
        <>
          <Grid item sm={12} xs={12} style={{ gap: 5, paddingLeft: 10 }} className={classes.grid_item}>
            <span style={{ minWidth: "125px" }} className={classes.label}>
              Mật khẩu mới:
            </span>
            <TextField
              type="password"
              style={{ width: "350px" }}
              value={password.new}
              onChange={(e) => setPassword({ ...password, new: e.target.value })}
              className={classes.input}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item sm={12} xs={12} style={{ gap: 5, paddingLeft: 10 }} className={classes.grid_item}>
            <span style={{ minWidth: "125px" }} className={classes.label}>
              Xác nhận:
            </span>
            <TextField
              type="password"
              style={{ width: "350px" }}
              value={password.confirm}
              onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
              className={classes.input}
              variant="outlined"
            ></TextField>
          </Grid>
          <Grid item xs={12} style={{ gap: 5, paddingLeft: 10 }} className={classes.grid_item}>
            {error && <span style={{ color: "#e33900", fontWeight: "500" }}>Mật khẩu không hợp lệ!</span>}
          </Grid>
          <Grid item sm={12} xs={12} style={{ gap: 5, paddingLeft: 10 }} className={classes.grid_item}>
            <MUIButton
              style={{ visibility: "visible" }}
              type="cancel_btn"
              onClick={() => {
                seterror(false);
                setPassword({});
                _setOpen(false);
              }}
            >
              HỦY
            </MUIButton>
            <MUIButton style={{ visibility: "visible" }} type="edit_btn" onClick={handleChangePassword}>
              Cập nhật
            </MUIButton>
          </Grid>
        </>
      )}
    </Grid>
  );
});

export default AccountDetailPage;
