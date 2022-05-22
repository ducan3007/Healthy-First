import { API } from "../api/api";

const initState = {
  loading: true,
  account_list: [],
  account_detail: null,
};

const accounts = (state = initState, action) => {
  switch (action.type) {
    case "GET_ACCOUNTS":
      return {
        ...state,
        loading: false,
        account_list: action.payload.data,
        account_detail: null,
      };
    case "CREATE_ACCOUNT":
      return {
        ...state,
        loading: false,
        account_list: [...state.account_list, action.payload.data],
      };
    case "GET_ACCOUNT":
      return {
        ...state,
        loading: false,
        account_detail: action.payload.data,
      };
    case "UPDATE_ACCOUNT":
      return {
        ...state,
        loading: false,
        account_detail: action.payload.data,
      };
    default:
      return state;
  }
};

export default accounts;
