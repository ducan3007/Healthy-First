import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";

import Header from "../Components/Header/Header";
import setAuthToken from "../redux/auth/auth.setToken";
import Router from "./routes/routes";

import Alertbar from "../Components/Alert/Alert";

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
