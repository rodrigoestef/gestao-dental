import {
  SetOpen,
  SetOpenFormEffect,
} from "@actions/dispachs/setOpenFormRegister";
import { put } from "redux-saga/effects";

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
};
