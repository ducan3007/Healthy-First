import * as api from "../api/api";
import { setAlert } from "../alert/alert.action";
import { loadUser } from "../auth/auth.action";

export const create_account = (formData) => async (dispatch) => {
  try {
    const { data } = await api.create_account(formData);

    console.log(data);
    dispatch({ type: "CREATE_ACCOUNT", payload: data });

    dispatch(loadUser());

    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};

export const get_account = (id) => async (dispatch) => {
  try {
    const { data } = await api.get_account(id);

    console.log(data);
    dispatch({ type: "GET_ACCOUNT", payload: data });

    dispatch(loadUser());
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};

export const get_accounts = (searchQuey) => async (dispatch) => {
  try {
    const { data } = await api.get_accounts(searchQuey);

    console.log(data);
    dispatch({ type: "GET_ACCOUNTS", payload: data });

    dispatch(loadUser());
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};

export const update_account = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.update_account(id, formData);

    console.log(data);
    dispatch({ type: "UPDATE_ACCOUNT", payload: data });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};

export const add_work_area = (id, formData) => async (dispatch) => {
  try {
    const { data } = await api.add_work_area(id, formData);

    console.log(data);
    dispatch({ type: "UPDATE_ACCOUNT", payload: data });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert("Thao tác không thành công", "error"));
  }
};
