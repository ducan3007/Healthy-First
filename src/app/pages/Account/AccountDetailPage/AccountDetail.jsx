import React, { useRef, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { CircularProgress, Fade, Paper, Grid, Button, TextField } from "@material-ui/core";

import { Autocomplete } from "@material-ui/lab";

import { PhotoCamera, EditRounded } from "@material-ui/icons";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";
import DatePicker from "../../../../components/DatePicker/DatePicker";

import useAuthorize from "../../../../hooks/useAuthorize";

import { user_detail } from "../../../../data/mock_data";
import convertBase64 from "../../../../utils/base64/base64";

import useStyles from "./account.detail.style.jsx";
import MUIAutocomplete from "./../../../../components/Autocomplete/MUIAutocomplete";

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
//   ],
// };

const AccountDetailPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();
  const classes = useStyles();

  const { user_id } = useParams();
  const location = useLocation();

  //========= User Info =========//
  const [active, setActive] = useState(user_detail?.active);
  const [image, setImage] = useState(user_detail?.image);

  const [ID, setID] = useState(user_detail?.id);
  const [birth, setBirth] = useState(user_detail?.birth);
  const [fullname, setFullname] = useState(user_detail?.fullname);
  const [phone, setPhone] = useState(user_detail?.phone);
  const [password, setPassword] = useState(user_detail?.password);
  const [email, setEmail] = useState(user_detail?.email);
  const [work_area, setWork_area] = useState(user_detail?.work_area);

  const [isUpdate, setIsUpdate] = useState(false);

  const fileInputRef = useRef(null);

  const __handleEnableUpdate = () => {
    setIsUpdate(true);
  };
  const __handleBan = () => {};
  const __handleImageChange = async (event) => {
    const file = event.target.files[0];
    const base64 = await convertBase64(file);
    setImage(base64);
  };

  if (loading) return <CircularProgress color="inherit" />;

  if (user?.role !== "admin") return <div>Bạn không có quyền truy cập vào trang này!</div>;

  console.log("user_id", user_id);
  console.log("location", location);

  return (
    <Fade in>
      <div className={classes.root}>
        <Breadcrumb />
        <Paper className={classes.user_info}>
          <Grid container>
            <Grid item xs={12} className={classes.header_container}>
              <span>Thông tin chuyên viên </span>

              {user_detail?.role === "admin" && (
                <div style={{ display: "flex", gap: "0px" }}>
                  <Button
                    className={classes.edit_btn_2}
                    startIcon={<EditRounded style={{ fontSize: "1.8rem" }} />}
                    onClick={__handleEnableUpdate}
                  ></Button>
                  {user_detail?.active ? (
                    <Button onClick={__handleBan}>KHÓA TÀI KHOẢN</Button>
                  ) : (
                    <Button onClick={__handleBan}>MỞ KHÓA TÀI KHOẢN</Button>
                  )}
                </div>
              )}
            </Grid>

            <Grid item sm={2} xs={12} className={classes.image_container}>
              <img className={classes.image} src={image} alt="img" />
              {isUpdate && (
                <>
                  <Button startIcon={<PhotoCamera />} onClick={() => fileInputRef.current.click()}>
                    Chọn ảnh
                  </Button>
                  <input
                    ref={fileInputRef}
                    onChange={(e) => __handleImageChange(e)}
                    type="file"
                    style={{ display: "none" }}
                  />
                </>
              )}
            </Grid>

            <Grid item sm={9} xs={12}>
              <Grid container spacing={2}>
                <Grid item sm={6} xs={12} className={classes.grid_item}>
                  <span className={classes.label}>Tài khoản</span>
                  <TextField
                    value={ID}
                    onChange={(e) => setID(e.target.value)}
                    className={classes.input}
                    variant="outlined"
                  ></TextField>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.grid_item}>
                  <span className={classes.label}>Ngày sinh</span>
                  <DatePicker _class_={classes.input} value={birth} onChange={(date) => setBirth(date)} />
                </Grid>
                <Grid item sm={6} xs={12} className={classes.grid_item}>
                  <span className={classes.label}>Họ và tên</span>
                  <TextField
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className={classes.input}
                    variant="outlined"
                  ></TextField>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.grid_item}>
                  <span className={classes.label}>SĐT</span>
                  <TextField
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={classes.input}
                    variant="outlined"
                  ></TextField>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.grid_item}>
                  <span className={classes.label}>Mật khẩu</span>
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={classes.input}
                    variant="outlined"
                  ></TextField>
                </Grid>
                <Grid item sm={6} xs={12} className={classes.grid_item}>
                  <span className={classes.label}>Email</span>
                  <TextField
                    value={email}
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
                onClick={__handleEnableUpdate}
              ></Button>
            </Grid>

            <Grid></Grid>
          </Grid>
        </Paper>

        <Paper className={classes.user_info}>
          <Grid container spacing={2}>
            <Grid item xs={12} className={classes.header_container}>
              <span>Khu vực hoạt động</span>
            </Grid>
            <Grid container>
              <Grid item sm={6} xs={12} className={classes.grid_item}>
                <MUIAutocomplete />
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Fade>
  );
};

export default AccountDetailPage;
