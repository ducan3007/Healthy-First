import * as api from "../api/api";
import setAuthToken from "./auth.setToken";
import { setAlert } from "../alert/alert.action";
export const loadUser = () => async (dispatch) => {
  try {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const { data } = await api.Auth("/api/auth");

    dispatch({ type: "LOAD_USER", payload: data });
  } catch (err) {
    dispatch({
      type: "AUTH_ERROR",
    });
  }
};
export const signIn = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: "LOGIN_SUCCESS", payload: data });

    dispatch(loadUser());

    navigate("/");
  } catch (error) {
    dispatch(setAlert(error?.response.data.message, "error"));
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUP(formData);

    dispatch({ type: "SIGNUP_SUCCESS", payload: data });

    dispatch(loadUser());

    dispatch(setAlert(data.message, "success"));

    navigate("/");
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response.data.message, "error"));
    dispatch({
      type: "SIGNUP_FAIL",
    });
  }
};
export const logout = (navigate) => (dispatch) => {
  navigate('/auth')
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};
