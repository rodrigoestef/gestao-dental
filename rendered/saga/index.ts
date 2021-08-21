import { SET_OPEN_FORM_REGISTER } from "@actions/types";
import { OpenBasicForm } from "./RegisterForm";
import { all, takeLatest } from "redux-saga/effects";

function* EventTable() {
  yield all([takeLatest(SET_OPEN_FORM_REGISTER, OpenBasicForm)]);
}

export default EventTable;
