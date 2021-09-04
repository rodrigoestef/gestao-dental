import {
  SetOpen,
  SetOpenFormEffect,
} from "@actions/dispachs/setOpenFormRegister";
import { ClearRegisterForm } from "@actions/dispachs/FormRegisterEvents";
import { SetNotify } from "@actions/dispachs/Notifys";
import { put, select } from "redux-saga/effects";
import { States, ActionType, FormRegisterType } from "@reducers/index";
import { createClientRequest } from "@services/registerForm";

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

const createClient = function* (form: FormRegisterType) {
  try {
    yield createClientRequest(form);
    yield put(
      SetNotify({ text: "Cadastro realizado com sucesso", variant: "success" })
    );
  } catch (_) {
    yield put(
      SetNotify({
        text: "Não foi possivel realizer cadastro",
        variant: "error",
      })
    );
  }
};

export const SubmitFormRegister = function* (a: ActionType) {
  const { formRegisterEditMode }: States = yield select();
  if (formRegisterEditMode) {
    alert("edit");
  } else {
    yield createClient(a.newValue);
  }

  yield CloseBasicForm();
};
