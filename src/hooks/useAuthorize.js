import React, { useLayoutEffect, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authSelector } from "../redux/selectors";

const useAuthorize = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, user } = useSelector(authSelector);
  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) navigate("/login");
      if (isAuthenticated) {
        if (user.role === "admin") {
          navigate("/manager");
          if (user.role === "user") navigate("/staff");
        }
      }
    }
  }, [isAuthenticated, navigate, loading, user?.role]);
};
export default useAuthorize;
