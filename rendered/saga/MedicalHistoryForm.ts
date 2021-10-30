import {
  SetOpenFormMedicalHistoryEffect,
  SetOpenMedicalHistory,
} from "@actions/dispachs/setOpenFormHistoryMedical";
import { put, delay } from "redux-saga/effects";

export const OpenFormHistoryMedical = function* () {
  yield put(SetOpenMedicalHistory(true));
  yield delay(100);
  yield put(SetOpenFormMedicalHistoryEffect(true));
};
export const CloseFormHistoryMedical = function* () {
  yield put(SetOpenFormMedicalHistoryEffect(false));
  yield delay(500);
  yield put(SetOpenMedicalHistory(false));
};
