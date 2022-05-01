import React from "react";

import { CircularProgress,Fade,Grow,Collapse } from "@material-ui/core";

import Breadcrumb from "../../../../components/Breadcrumb/Breadcrumb";

import useAuthorize from "../../../../hooks/useAuthorize";

const AccountDetailPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();

  if (loading) {
    return <CircularProgress color="inherit" />;
  }

  if (user?.role !== "admin") {
    return <div>Bạn không có quyền truy cập vào trang này!</div>;
  }

  return (
    <Fade in>
      <div>
        <Breadcrumb />
        Account Detail Page
      </div>
    </Fade>
  );
};

export default AccountDetailPage;
