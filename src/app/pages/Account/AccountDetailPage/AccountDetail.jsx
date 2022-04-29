import React from "react";
import useAuthorize from "../../../../hooks/useAuthorize";
const AccountDetailPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();

  if (user?.role !== "admin") {
    return <div>Bạn không có quyền truy cập vào trang này!</div>;
  }

  return <div>Account Detail Page</div>;
};

export default AccountDetailPage;
