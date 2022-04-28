import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";

import Header from "../components/Header/Header";
import setAuthToken from "../redux/auth/auth.setToken";
import Router from "./routes/routes";

import Alertbar from "../components/Alert/Alert";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <>
      <Alertbar />
      <Router />
    </>
  );
};

export default App;
