import React from "react";
import ReactDOM from "react-dom";
import "@fontsource/roboto/index.css";
import GlobalStyles from "./GlobalStyles";
import { CssBaseline } from "@material-ui/core";
import Page from "./Page";

ReactDOM.render(
  <>
    <CssBaseline />
    <GlobalStyles />
    <Page />
  </>,
  document.querySelector("#app")
);
