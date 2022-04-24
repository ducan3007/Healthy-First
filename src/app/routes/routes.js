import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../page/Home";
import Auth from "../../Components/Auth/Auth";
import Login from "../Lo/Login";
import Signup from '../page/Signup';

const Router = () => {
 
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/manager" element={<Home />}>
        
      </Route>
    </Routes>
  );
};

export default Router;
