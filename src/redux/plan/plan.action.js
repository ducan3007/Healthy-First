import * as API from "../api/api.js";
import { setAlert } from "../alert/alert.action";

export const create_plan = (id, formData) => async (dispatch) => {
  try {
    const { data } = await API.PLAN.create_plan(id, formData);
    console.log("DATA", data.data);
    dispatch({
      type: "CREATE_PLAN",
      payload: data,
    });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert("Lỗi tạo plan, thử lại sau", "error"));
  }
};

export const get_plans = (searchQuery) => async (dispatch) => {
  try {
    const { data } = await API.PLAN.get_many_plan(searchQuery);

    dispatch({
      type: "GET_PLANS",
      payload: data,
    });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert("Lỗi,vui lòng thử lại sau", "error"));
  }
};
export const get_plan_detail = (id) => async (dispatch) => {
  try {
    const { data } = await API.PLAN.get_plan_detail(id);

    dispatch({
      type: "GET_PLAN_DETAIL",
      payload: data,
    });

    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert("Lỗi,vui lòng thử lại sau", "error"));
  }
};

export const update_plan = (formData, id) => async (dispatch) => {
  try {
    const { data } = await API.PLAN.update_plan(formData, id);

    dispatch({
      type: "UPDATE_PLAN",
      payload: data,
    });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert("Lỗi,vui lòng thử lại sau", "error"));
  }
};

export const add_samples = (formData, id) => async (dispatch) => {
  try {
    const { data } = await API.PLAN.add_samples(id, formData);

    dispatch({
      type: "UPDATE_PLAN",
      payload: data,
    });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert("Lỗi,vui lòng thử lại sau", "error"));
  }
};
export const updateSample = (formData, id) => async (dispatch) => {
  try {
    const { data } = await API.PLAN.updateSample(formData, id);
    dispatch({
      type: "UPDATE_PLAN",
      payload: data,
    });
    dispatch(setAlert(data.message, "success"));
  } catch (error) {
    console.log(error);
    dispatch(setAlert("Lỗi,vui lòng thử lại sau", "error"));
  }
};
