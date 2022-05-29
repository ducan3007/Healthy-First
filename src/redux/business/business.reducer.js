const initState = {
  loading: true,
  business_list: [],
  business_detail: null,
};

const business = (state = initState, action) => {
  switch (action.type) {
    case "GET_MANY_BUSINESS":
      return {
        ...state,
        loading: false,
        business_list: action.payload.data,
        business_detail: null,
      };
    case "CREATE_BUSINESS":
      return {
        ...state,
        loading: false,
        business_list: [...state.business_list, action.payload.data],
      };
    case "GET_BUSINESS":
      return {
        ...state,
        loading: false,
        business_detail: action.payload.data,
      };
    case "UPDATE_BUSINESS":
      return {
        ...state,
        loading: false,
        business_detail: action.payload.data,
      };
    default:
      return state;
  }
};
export default business;
