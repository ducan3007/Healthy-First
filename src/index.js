import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware } from "redux";

import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import rootReducer from "./redux/rootReducer";
import App from "./app/App";
import "./index.css";

import setAuthToken from "./redux/auth/auth.setToken";
import { loadUser } from "./redux/auth/auth.action";


const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

const theme = createTheme({
  overrides: {
    MuiListItem: {
      root: {
        "& .Mui-selected": {
          backgroundColor: "red",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1300,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ["Roboto"],
  },

});

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

store.dispatch(loadUser());


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>,

  document.getElementById("root")
);
