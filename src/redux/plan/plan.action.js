import * as API from "../api/api.js";
import { setAlert } from "../alert/alert.action";

export const create_plan = (id, formData) => async (dispatch) => {
  try {
    const response = await API.PLAN.create_plan(id, formData);
    dispatch({
      type: "CREATE_PLAN",
      payload: response.data,
    });
    dispatch(setAlert(response.data.message, "success"));
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
