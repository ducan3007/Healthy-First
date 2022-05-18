import React, { useRef, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import _ from "lodash";
import { Divider, withStyles, CircularProgress, Fade, Paper, Grid, Button, TextField } from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import { PhotoCamera, EditRounded } from "@material-ui/icons";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import DatePicker from "../../../../components/DatePicker/DatePicker";
import WorkAreaItem from "../../../../components/WorkArea/WorkArea";

import AccountDialog from "../../../../components/Dialog/Account/AccountDialog";

import useAuthorize from "../../../../hooks/useAuthorize";

import { user_detail } from "../../../../data/mock_data";
import convertBase64 from "../../../../utils/base64/base64";

import useStyles from "./account.detail.style.jsx";

// {
//   id: "user1234",
//   role: "admin",
//   active: false,
//   password: "a1c3s5e3ds",
//   image: "https://secure.gravatar.com/avatar/?s=120&d=mp",
//   fullname: "Nguyen Van A",
//   birth: "19/02/2000",
//   email: "nguyenvana@gmail.com",
//   phone: "0987654321",
//   work_area: [
//    { title: "Quận Ba Đình", code: "01D001", city: "Thành phố Hà Nội" }
//     { title: "Quận Hoàn Kiếm", code: "01D002", city: "Thành phố Hà Nội" }
//     { title: "Thành phố Hà Giang", code: "02D024", city: "Tỉnh Hà Giang" }
//     { title: "Thành phố Hà Giang", code: "02D024", city: "Tỉnh Hà Giang" }
//   ],
// };

const AccountDetailPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();
  const classes = useStyles();

  const { user_id } = useParams();
  const location = useLocation();

  const fileInputRef = useRef(null);

  //========= User Info =========//
  const [active, setActive] = useState(user_detail?.active);
  const [image, setImage] = useState(user_detail?.image);
  const [ID, setID] = useState(user_detail?.id);
  const [birth, setBirth] = useState(user_detail?.birth);
  const [fullname, setFullname] = useState(user_detail?.fullname);
  const [phone, setPhone] = useState(user_detail?.phone);
  const [password, setPassword] = useState(user_detail?.password);
  const [email, setEmail] = useState(user_detail?.email);

  //========= Work Area =========//

  const [work_area, setWork_area] = useState(() => _(user_detail?.work_area).groupBy("city").values().value());
  const [open, setOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isUpdateArea, setUpdateArea] = useState(false);

  const _handleBan = () => {};
  const _handleImageChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64);
  };
  const _handleCancelUpdate = () => {
    setActive(user_detail?.active);
    setImage(user_detail?.image);
    setID(user_detail?.id);
    setBirth(user_detail?.birth);
    setFullname(user_detail?.fullname);
    setPhone(user_detail?.phone);
    setPassword(user_detail?.password);
    setEmail(user_detail?.email);
    setIsUpdate(false);
  };

  const _handleSubmit = () => {
    const formData = {
      active: active,
      image: image,
      id: ID,
      birth: birth,
      fullname: fullname,
      phone: phone,
      password: password,
      email: email,
      work_area: work_area,
    };
    console.log(formData);
  };

  if (loading) return <CircularProgress color="inherit" />;

  if (user?.role !== "admin") return <div>Bạn không có quyền truy cập vào trang này!</div>;

  console.log("Acountdetail RE-RENDER");

  return (
    <Fade in>
      <div className={classes.root}>
        <Breadcrumb />
        <Divider />

        <Paper className={classes.user_info}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span>Thông tin chuyên viên </span>

              {user_detail?.role === "admin" && (
                <div style={{ display: "flex", gap: "0px" }}>
                  <Button
                    className={classes.edit_btn_2}
                    startIcon={<EditRounded style={{ fontSize: "1.8rem" }} />}
                    onClick={() => setIsUpdate(!isUpdate)}
                  ></Button>
                  {user_detail?.active ? (
                    <Button onClick={_handleBan}>KHÓA TÀI KHOẢN</Button>
                  ) : (
                    <Button onClick={_handleBan}>MỞ KHÓA TÀI KHOẢN</Button>
                  )}
                </div>
              )}
            </Grid>

            <Grid item sm={2} xs={12} className={classes.image_container}>
              <img className={classes.image} src={image} alt="img" />
              {isUpdate && (
                <div style={{ position: "absolute", bottom: -20 }}>
                  <Button startIcon={<PhotoCamera />} onClick={() => fileInputRef.current.click()}>
                    Chọn ảnh
                  </Button>
                  <input
                    ref={fileInputRef}
                    onChange={(e) => _handleImageChange(e)}
                    type="file"
                    style={{ display: "none" }}
                  />
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
                  <span className={classes.label}>Mật khẩu:</span>
                  <TextField
                    value={password}
                    disabled={!isUpdate}
                    onChange={(e) => setPassword(e.target.value)}
                    className={classes.input}
                    variant="outlined"
                  ></TextField>
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
            <Grid item xs={false} md={false} sm={1} style={{ position: "relative" }}>
              <Button
                className={classes.edit_btn}
                startIcon={<EditRounded style={{ fontSize: "1.8rem" }} />}
                onClick={() => setIsUpdate(!isUpdate)}
              ></Button>
            </Grid>

            <Grid item sm={12} xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
              {isUpdate && (
                <>
                  <Button onClick={_handleCancelUpdate}>Hủy</Button>
                  <Button onClick={_handleSubmit}>Cập nhật</Button>
                </>
              )}
            </Grid>
          </Grid>
        </Paper>

        <AccountDialog open={open} setOpen={setOpen} type="add_work_area" />

        <Paper className={classes.work_area}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "15px" }}>
            <span style={{ flex: 1 }}>Khu vực hoạt động</span>
            <div style={{ flex: 5, display: "flex", justifyContent: "flex-end", marginRight: "10px" }}>
              <Button onClick={() => setOpen(true)}>THÊM KHU VỰC</Button>
            </div>
          </div>

          <div className={classes.masonry}>
            {work_area?.map((area, index) => {
              return (
                <div className={classes.masonry_item} key={index}>
                  <WorkAreaItem isUpdateArea={isUpdateArea} setUpdateArea={setUpdateArea} area={area} />
                </div>
              );
            })}
          </div>
        </Paper>
      </div>
    </Fade>
  );
};

export default AccountDetailPage;
