import { combineReducers } from "redux";
import posts from "./posts/posts.reducer";
import auth from "./auth/auth.reducer";
import alerts from "./alert/alert.reducer";

export default combineReducers({
    alerts,
    auth,
});