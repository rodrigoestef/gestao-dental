import {
  SetOpenFormMedicalHistoryEffect,
  SetOpenMedicalHistory,
} from "@actions/dispachs/setOpenFormHistoryMedical";
import {
  States,
  formMedicalHistoryType,
  initialStates,
  ActionType,
} from "@reducers/index";
import { put, delay, select } from "redux-saga/effects";
import {
  CreateMedicalHistory,
  getMedicalHistoryByUserId,
  exportClientRequest,
} from "@services/medicalHistoryServices";
import { SetMedicalHistoryData } from "@actions/dispachs/FormMedicalHistoryEvents";
import { SetNotify } from "@actions/dispachs/Notifys";

export const OpenFormHistoryMedical = function* () {
  const { formMedicalHistoryEditId }: States = yield select();
  yield LoadFormByUserId(formMedicalHistoryEditId);
  yield put(SetOpenMedicalHistory(true));
  yield delay(100);
  yield put(SetOpenFormMedicalHistoryEffect(true));
};
export const CloseFormHistoryMedical = function* () {
  yield put(SetOpenFormMedicalHistoryEffect(false));
  yield delay(500);
  yield put(SetOpenMedicalHistory(false));
};

export const LoadFormByUserId = function* (id: number) {
  try {
    const medicalHistory: formMedicalHistoryType =
      yield getMedicalHistoryByUserId(id);

    yield put(SetMedicalHistoryData(medicalHistory));
  } catch (_) {
    yield put(SetMedicalHistoryData(initialStates.formMedicalHistory));

    yield put(
      SetNotify({
        text: "Ainda não há registro de histórico médico",
        variant: "default",
      })
    );
  }
};

export const SubmitMedicalHistoryForm = function* (a: ActionType) {
  const model: formMedicalHistoryType = a.newValue;
  const { formMedicalHistoryEditId }: States = yield select();

  try {
    yield CreateMedicalHistory(model, formMedicalHistoryEditId);
    yield put(
      SetNotify({
        text: "Histórico médico salvo com sucesso",
        variant: "success",
      })
    );
    yield CloseFormHistoryMedical();
  } catch (_) {
    yield put(
      SetNotify({
        text: "Não foi possivel criar histórico médico",
        variant: "error",
      })
    );
  }
};

export const ExportMedicalHistory = function* (a: ActionType) {
  const id: number = a.newValue;
  try {
    yield exportClientRequest(id);
  } catch (_) {
    yield put(
      SetNotify({
        text: "Não foi posivel exportar histórico médico",
        variant: "error",
      })
    );
  }
};
