import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  console.log("🚀 ~ file: PrivateRoute.js ~ line 8 ~ PrivateRoute ~ isAuthenticated", isAuthenticated);

  if (!isAuthenticated && !loading) {
    return <Navigate to="/auth" />;
  }
  if (loading) {
  }
  return children;
};

export default PrivateRoute;
