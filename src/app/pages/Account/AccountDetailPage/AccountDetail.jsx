import React, { useRef, useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import { CircularProgress, Fade, Paper, Grid, Button } from "@material-ui/core";

import { PhotoCamera, EditRounded } from "@material-ui/icons";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

import useAuthorize from "../../../../hooks/useAuthorize";

import { user_detail } from "../../../../data/mock_data";
import convertBase64 from "../../../../utils/base64/base64";

import useStyles from "./account.detail.style.jsx";

const AccountDetailPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();
  const classes = useStyles();

  const { user_id } = useParams();
  const location = useLocation();

  //========= User Info =========//

  const [image, setImage] = useState(user_detail?.image);
  const [isUpdate, setIsUpdate] = useState(false);

  const fileInputRef = useRef(null);

  const __handleEnableUpdate = () => {
    setIsUpdate(true);
  };
  const __handleBan = () => {};
  const __handleImageChange = async (e) => {
    const file = e.target.files[0];
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
                <div style={{ display: "flex", gap: "15px" }}>
                  {user_detail?.active ? (
                    <Button onClick={__handleBan}>KHÓA TÀI KHOẢN</Button>
                  ) : (
                    <Button onClick={__handleBan}>MỞ KHÓA TÀI KHOẢN</Button>
                  )}
                </div>
              )}
            </Grid>

            <Grid item sm={3} xs={12} className={classes.image_container}>
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

            <Grid item sm={8} xs={9}>
              <span>Thông tin tài khoản</span>
              <span>Thông tin tài khoản</span>
              <span>Thông tin tài khoản</span>
              <span>Thông tin tài khoản</span>
              <span>Thông tin tài khoản</span>
            </Grid>
            <Grid style={{ position: "relative" }} item sm={1} xs={3}>
              <Button
                style={{ position: "absolute", right: 0, top: 0 }}
                startIcon={<EditRounded style={{ fontSize: "1.8rem" }} />}
                onClick={__handleEnableUpdate}
              ></Button>
            </Grid>

            <Grid></Grid>
          </Grid>
        </Paper>

        <Paper className={classes.user_info}>
          <Grid container>
            <Grid item xs={12} className={classes.header_container}>
              <span>Khu vực hoạt động</span>
              <div style={{ display: "flex", gap: "15px" }}>
                <Button onClick={__handleBan}>KHÓA TÀI KHOẢN</Button>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Fade>
  );
};

export default AccountDetailPage;
