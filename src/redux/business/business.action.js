import * as API from "../api/api";
import { setAlert } from "../alert/alert.action";

export const create_business = (formData) => async (dispatch) => {
  try {
    const { data } = await API.create_business(formData);

    dispatch({ type: "CREATE_BUSINESS", payload: data });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    dispatch(setAlert("Thao tác không thành công", "error"));
  }
};

export const get_many_business = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await API.get_many_business(searchQuery);

    dispatch({ type: "GET_MANY_BUSINESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};
