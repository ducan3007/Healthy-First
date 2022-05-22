import { createSelector } from "reselect";

const auth = (state) => state.auth;
const accounts = (state) => state.accounts;
const account_detail = (state) => state.accounts.account_detail;

export const authSelector = createSelector(auth, (auth) => {
  return auth;
});

export const userSelector = createSelector(auth, (auth) => {
  return auth.user;
});

export const accountDetailSelector = createSelector(account_detail, (account_detail) => {
  return account_detail;
});

export const accountListSelector = createSelector(accounts, (accounts) => {
  return accounts.account_list;
});
