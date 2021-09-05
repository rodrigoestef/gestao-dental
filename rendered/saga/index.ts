import {
  SET_OPEN_FORM_REGISTER_REQUEST,
  SET_CLOSE_FORM_REGISTER_REQUEST,
  SUBMIT_FORM_REGISTER,
  SEARCH_CEP,
} from "@actions/types";
import {
  OpenBasicForm,
  CloseBasicForm,
  SubmitFormRegister,
  SearchCep,
} from "./RegisterForm";
import { all, takeLatest } from "redux-saga/effects";

function* EventTable() {
  yield all([
    takeLatest(SET_OPEN_FORM_REGISTER_REQUEST, OpenBasicForm),
    takeLatest(SET_CLOSE_FORM_REGISTER_REQUEST, CloseBasicForm),
    takeLatest(SUBMIT_FORM_REGISTER, SubmitFormRegister),
    takeLatest(SEARCH_CEP, SearchCep),
  ]);
}

export default EventTable;
