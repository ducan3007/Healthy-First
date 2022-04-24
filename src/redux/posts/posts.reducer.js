const initState = {
  loading: true,
  postList: [],
};

const posts = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return {
        loading: false,
        postList: action.payload.data,
      };
    case "CREATE":
      return {
        loading: false,
        postList: [...state.postList, action.payload.data],
      };
    case "UPDATE":
      return {
        loading: false,
        postList: [...state.postList, action.payload.data],
      };
    case "DELETE":
      return {
        loading: false,
        postList: [...state.postList],
      };
    case "LIKE":
      return {
        loading: false,
        postList: [...state.postList, action.payload.data],
      };
    default:
      return state;
  }
};
export default posts;
