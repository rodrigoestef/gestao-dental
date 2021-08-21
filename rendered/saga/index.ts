import {
  SET_OPEN_FORM_REGISTER_REQUEST,
  SET_CLOSE_FORM_REGISTER_REQUEST,
} from "@actions/types";
import { OpenBasicForm, CloseBasicForm } from "./RegisterForm";
import { all, takeLatest } from "redux-saga/effects";

function* EventTable() {
  yield all([
    takeLatest(SET_OPEN_FORM_REGISTER_REQUEST, OpenBasicForm),
    takeLatest(SET_CLOSE_FORM_REGISTER_REQUEST, CloseBasicForm),
  ]);
}

export default EventTable;
