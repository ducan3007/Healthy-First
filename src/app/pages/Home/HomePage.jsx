import React from "react";
import useAuthorize from "../../../hooks/useAuthorize";
import { Divider } from "@material-ui/core";

const HomePage = () => {
  const [isAuthenticated, loading, user] = useAuthorize();

  return !loading ? (
    <div>
      Thống kê
      <Divider />
    </div>
  ) : null;
};

export default HomePage;
