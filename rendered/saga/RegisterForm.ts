import {
  SetOpen,
  SetOpenFormEffect,
} from "@actions/dispachs/setOpenFormRegister";
import {
  ClearRegisterForm,
  SetRegisterFormData,
} from "@actions/dispachs/FormRegisterEvents";
import { SetNotify } from "@actions/dispachs/Notifys";
import { put, select, delay } from "redux-saga/effects";
import { States, ActionType, FormRegisterType } from "@reducers/index";
import { createClientRequest } from "@services/clientServices";
import { searchCep, CepType } from "@services/searchCep";

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

export const SearchCep = function* (a: ActionType) {
  try {
    const { cep, form } = a.newValue;
    yield delay(500);
    const response: CepType = yield searchCep(cep);
    yield put(
      SetRegisterFormData({
        ...form,
        endereco: response.endereco,
        bairro: response.bairro,
        cidade: response.cidade,
      })
    );
  } catch (_) {
    yield put(
      SetNotify({ text: "Não foi possivel buscar cep", variant: "error" })
    );
  }
};
