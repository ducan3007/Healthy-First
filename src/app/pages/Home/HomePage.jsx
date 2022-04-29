import React from "react";
import useAuthorize from "../../../hooks/useAuthorize";
import { Divider } from "@material-ui/core";

const HomePage = () => {
  useAuthorize();

  return (
    <div>
      Thống kê
      <Divider />
    </div>
  );
};

export default HomePage;
