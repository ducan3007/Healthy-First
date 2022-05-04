import { combineReducers } from "redux";
import posts from "./posts/posts.reducer";
import alerts from "./alert/alert.reducer";

import auth from "./auth/auth.reducer";
import accounts from "./account/account.reducer";

export default combineReducers({
  alerts,
  auth,
  accounts,
});
