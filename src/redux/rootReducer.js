import { combineReducers } from "redux";

import alerts from "./alert/alert.reducer";
import auth from "./auth/auth.reducer";
import accounts from "./account/account.reducer";
import business from "./business/business.reducer";
import plans from "./plan/plan.reducer";

export default combineReducers({
  alerts,
  auth,
  accounts,
  business,
  plans,
});
