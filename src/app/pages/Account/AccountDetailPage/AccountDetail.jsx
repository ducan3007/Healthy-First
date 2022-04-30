import React from "react";

import { CircularProgress } from "@material-ui/core";

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
    <div>
      <Breadcrumb />
      Account Detail Page
    </div>
  );
};

export default AccountDetailPage;
