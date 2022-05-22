import * as api from "../api/api";
import setAuthToken from "./auth.setToken";
import { setAlert } from "../alert/alert.action";

export const loadUser = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const { data } = await api.user_auth();

    dispatch({ type: "LOAD_USER", payload: data });
  } catch (err) {
    dispatch({
      type: "AUTH_ERROR",
    });
  }
};
export const login = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);

    dispatch({ type: "LOGIN_SUCCESS", payload: data });

    dispatch(loadUser());

    navigate("/");
  } catch (error) {
    dispatch(setAlert(error?.response.data.message, "error"));
  }
};

export const logout = (navigate) => (dispatch) => {
  navigate("/login");
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};
