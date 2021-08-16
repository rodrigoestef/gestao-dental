import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/roboto/index.css";
import GlobalStyles from "./GlobalStyles";
import { CssBaseline } from "@material-ui/core";
import Page from "./Page";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <>
    <CssBaseline />
    <GlobalStyles />
    <Provider store={store}>
      <Page />
    </Provider>
  </>,
  document.querySelector("#app")
);
