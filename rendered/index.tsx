import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/roboto/index.css";
import GlobalStyles from "./GlobalStyles";
import { CssBaseline } from "@material-ui/core";
import Page from "./Page";
import { Provider } from "react-redux";
import store from "./store";
import { SnackbarProvider } from "notistack";
// import Slide from "@material-ui/core/Slide";

ReactDOM.render(
  <>
    <CssBaseline />
    <GlobalStyles />
    <Provider store={store}>
      <SnackbarProvider
        dense
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
      >
        <Page />
      </SnackbarProvider>
    </Provider>
  </>,
  document.querySelector("#app")
);
