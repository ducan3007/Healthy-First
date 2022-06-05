import * as API from "../api/api";
import { setAlert } from "../alert/alert.action";

export const create_business = (formData) => async (dispatch) => {
  try {
    const { data } = await API.BUSINESS.create_business(formData);

    dispatch({ type: "CREATE_BUSINESS", payload: data });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    dispatch(setAlert("Thao tác không thành công", "error"));
  }
};

export const get_many_business = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await API.BUSINESS.get_many_business(searchQuery);

    dispatch({ type: "GET_MANY_BUSINESS", payload: data });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};

export const get_business_detail = (businessId) => async (dispatch) => {
  try {
    const { data } = await API.BUSINESS.get_business_detail(businessId);

    dispatch({ type: "GET_BUSINESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};

export const update_business = (businessId, formData) => async (dispatch) => {
  try {
    const { data } = await API.BUSINESS.update_business(businessId, formData);

    dispatch({ type: "UPDATE_BUSINESS", payload: data });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};
export const update_certificate = (action, businessId, formData) => async (dispatch) => {
  try {
    let response;
    switch (action) {
      case "revoked":
        response = await API.CERTIFICATE.revoke_cert(businessId, formData);
        break;
      case "issue":
        response = await API.CERTIFICATE.issue_cert(businessId, formData);
        break;
      case "extend":
        response = await API.CERTIFICATE.extend_cert(businessId, formData);
        break;
      default:
        break;
    }

    dispatch({ type: "UPDATE_BUSINESS", payload: response.data });
    dispatch(setAlert(response.data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert(error?.response?.data?.message, "error"));
  }
};
