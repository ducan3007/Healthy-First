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
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};

export const get_business_detail = (businessId) => async (dispatch) => {
  try {
    const { data } = await API.get_business_detail(businessId);

    dispatch({ type: "GET_BUSINESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};

export const update_business = (businessId, formData) => async (dispatch) => {
  try {
    const { data } = await API.update_business(businessId, formData);

    dispatch({ type: "UPDATE_BUSINESS", payload: data });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};
export const update_certificate = (action, businessId, formData) => async (dispatch) => {
  try {
    let data;
    switch (action) {
      case "revoke":
        data = await API.revoke_cert(businessId, formData);
        break;
      case "issue":
        data = await API.issue_cert(businessId, formData);
        break;
      case "extend":
        data = await API.extend_cert(businessId, formData);
        break;
      default:
        break;
    }

    dispatch({ type: "UPDATE_BUSINESS", payload: data });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};
