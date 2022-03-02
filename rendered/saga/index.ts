import {
  SET_OPEN_FORM_REGISTER_REQUEST,
  SET_CLOSE_FORM_REGISTER_REQUEST,
  SUBMIT_FORM_REGISTER,
  SEARCH_CEP,
  LOAD_DATA_GRID_REQUEST,
  EDIT_CLIENT,
  SUBMIT_SEARCH_CLIENT_FORM,
  SET_SEARCH_CLIENT_NAME_DATA_GRID,
  SET_OPEN_FORM_MEDICAL_HISTORY_REQUEST,
  SET_CLOSE_FORM_MEDICAL_HISTORY_REQUEST,
  DELETE_CLIENT,
  SUBMIT_MEDICAL_HISTORY_FORM,
  EXPORT_CLIENT,
  EXPORT_MEDICAL_HISTORY,
} from "@actions/types";
import {
  OpenBasicForm,
  CloseBasicForm,
  SubmitFormRegister,
  SearchCep,
  EditClient,
  ExportClient,
} from "./RegisterForm";
import {
  LoadDataRequest,
  SearchClient,
  DebounceClientName,
  DeleteClient,
} from "./DataGrid";
import {
  CloseFormHistoryMedical,
  OpenFormHistoryMedical,
  SubmitMedicalHistoryForm,
  ExportMedicalHistory,
} from "./MedicalHistoryForm";

import { all, takeLatest } from "redux-saga/effects";

function* EventTable() {
  yield all([
    takeLatest(SET_OPEN_FORM_REGISTER_REQUEST, OpenBasicForm),
    takeLatest(SET_CLOSE_FORM_REGISTER_REQUEST, CloseBasicForm),
    takeLatest(SUBMIT_FORM_REGISTER, SubmitFormRegister),
    takeLatest(SEARCH_CEP, SearchCep),
    takeLatest(LOAD_DATA_GRID_REQUEST, LoadDataRequest),
    takeLatest(EDIT_CLIENT, EditClient),
    takeLatest(SUBMIT_SEARCH_CLIENT_FORM, SearchClient),
    takeLatest(SET_SEARCH_CLIENT_NAME_DATA_GRID, DebounceClientName),
    takeLatest(SET_OPEN_FORM_MEDICAL_HISTORY_REQUEST, OpenFormHistoryMedical),
    takeLatest(SET_CLOSE_FORM_MEDICAL_HISTORY_REQUEST, CloseFormHistoryMedical),
    takeLatest(DELETE_CLIENT, DeleteClient),
    takeLatest(SUBMIT_MEDICAL_HISTORY_FORM, SubmitMedicalHistoryForm),
    takeLatest(EXPORT_CLIENT, ExportClient),
    takeLatest(EXPORT_MEDICAL_HISTORY, ExportMedicalHistory),
  ]);
}

export default EventTable;
