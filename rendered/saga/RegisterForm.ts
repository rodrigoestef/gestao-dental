import {
  SetOpen,
  SetOpenFormEffect,
} from "@actions/dispachs/setOpenFormRegister";
import { ClearRegisterForm } from "@actions/dispachs/FormRegisterEvents";
import { put, select } from "redux-saga/effects";
import { States, ActionType } from "@reducers/index";

const delay = (n: number) =>
  new Promise((resolve) => setTimeout(() => resolve(true), n));

export const OpenBasicForm = function* () {
  yield put(SetOpen(true));
  yield delay(100);
  yield put(SetOpenFormEffect(true));
};
export const CloseBasicForm = function* () {
  yield put(SetOpenFormEffect(false));
  yield delay(500);
  yield put(SetOpen(false));
  yield put(ClearRegisterForm());
};

export const SubmitFormRegister = function* (a: ActionType) {
  const { formRegisterEditMode }: States = yield select();
  if (formRegisterEditMode) {
    alert("edit");
  } else {
    alert("create");
  }

  yield CloseBasicForm();
};
