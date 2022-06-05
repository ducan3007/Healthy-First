const initState = {
  loading: true,
  planList: [],
  planDetail: null,
};
const plans = (state = initState, action) => {
  switch (action.type) {
    case "GET_PLANS":
      return {
        ...state,
        loading: false,
        planList: action.payload.data,
        planDetail: null,
      };
    case "GET_PLAN_DETAIL":
      return {
        ...state,
        loading: false,
        planDetail: action.payload.data,
      };
    case "CREATE_PLAN":
      return {
        ...state,
        loading: false,
        planList: [...state.planList, action.payload.data],
      };
    case "UPDATE_PLAN":
      return {
        ...state,
        loading: false,
        planDetail: action.payload.data,
      };
    default:
      return state;
  }
};
export default plans;
