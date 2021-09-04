import {
  SET_OPEN_FORM_REGISTER_REQUEST,
  SET_CLOSE_FORM_REGISTER_REQUEST,
  SUBMIT_FORM_REGISTER,
} from "@actions/types";
import {
  OpenBasicForm,
  CloseBasicForm,
  SubmitFormRegister,
} from "./RegisterForm";
import { all, takeLatest } from "redux-saga/effects";

function* EventTable() {
  yield all([
    takeLatest(SET_OPEN_FORM_REGISTER_REQUEST, OpenBasicForm),
    takeLatest(SET_CLOSE_FORM_REGISTER_REQUEST, CloseBasicForm),
    takeLatest(SUBMIT_FORM_REGISTER, SubmitFormRegister),
  ]);
}

export default EventTable;
