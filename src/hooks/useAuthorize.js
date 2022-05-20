import React, { useLayoutEffect, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelector } from "../redux/selectors";

const useAuthorize = (path) => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, user } = useSelector(authSelector);
  useEffect(() => {
    if (loading) return;
    if (!isAuthenticated) navigate("/login");
    if (isAuthenticated && path) navigate(path);
  }, [isAuthenticated, navigate, loading, user?.role, path]);
  return [isAuthenticated, loading, user];
};
export default useAuthorize;
