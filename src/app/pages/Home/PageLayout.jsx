import React from "react";
import Header from "../../../Components/Header/Header";
import useAuthorize from "../../../hooks/useAuthorize";
import { Outlet } from "react-router-dom";
import Navbar from "../../../Components/Navbar/Navbar";

const PageLayout = () => {
  useAuthorize();

  return (
    <div>
      <Header></Header>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PageLayout;
