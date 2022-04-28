import { createSelector } from "reselect";

const auth = (state) => state.auth;

export const authSelector = createSelector(auth, (auth) => {
  return auth;
});
export const userSelector = createSelector(auth, (auth) => {
  return auth.user;
});
