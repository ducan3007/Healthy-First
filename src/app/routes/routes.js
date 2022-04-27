import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from '../pages/Login/Login';


const Router = () => {
 
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/" element={<Home />}>
        
      </Route>
    </Routes>
  );
};

export default Router;
