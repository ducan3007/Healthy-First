import React from "react";
import Header from "../../../components/Header/Header";
import useAuthorize from "../../../hooks/useAuthorize";
import { Outlet } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";

const PageLayout = () => {
 

  return (
    <div>
      <Header></Header>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default PageLayout;
