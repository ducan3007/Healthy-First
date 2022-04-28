import React from "react";
import useAuthorize from "../../../../hooks/useAuthorize";

const AccountPage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();

  console.log(isAuthenticated, loading, user);

  if (user?.role !== "admin") {
    return <div>Bạn không có quyền truy cập vào trang này!</div>;
  }

  return <div>AccountPage</div>;
};

export default AccountPage;
