import { API } from "../api/api";

const initState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.data.token);
      return {
        ...state,
        token: localStorage.getItem("token", action.payload.data.token),
        isAuthenticated: true,
        loading: false,
      };
    case "LOAD_USER":
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: true,
        loading: false,
      };
    case "SIGNUP_FAIL":
    case "AUTH_ERROR":
    case "LOGOUT":
      localStorage.removeItem("token");
      delete API.defaults.headers.common["x-auth-token"];
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
};
export default auth;
