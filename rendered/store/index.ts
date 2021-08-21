import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import reducers, { initialStates } from "../reducers";
import createSagaMiddleware from "redux-saga";
import saga from "@saga/index";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducers,
  initialStates,
  compose(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);
