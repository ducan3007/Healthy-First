import { createSelector } from "reselect";

const auth = (state) => state.auth;
const accounts = (state) => state.accounts;
const account_detail = (state) => state.accounts.account_detail;
const business = (state) => state.business;
const business_detail = (state) => state.business.business_detail;

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

export const businessListSelector = createSelector(business, (business) => {
  return business.business_list;
});

export const businessDetailSelector = createSelector(business_detail, (business_detail) => {
  return business_detail;
});
