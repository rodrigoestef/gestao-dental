import {
  SET_OPEN_FORM_REGISTER,
  SET_OPEN_FORM_REGISTER_EFFECT,
  CLEAR_REGISTER_FORM,
  SET_NOTIFY,
  SET_REGISTER_FORM_DATA,
} from "@actions/types";
import { States, initialStates } from "@reducers/index";

const map: { [key: string]: (state: States, newValue: any) => States } = {
  SET_OPEN_FORM_REGISTER: (state: States, newValue: any) => ({
    ...state,
    openFormRegister: newValue,
  }),
  SET_OPEN_FORM_REGISTER_EFFECT: (state: States, newValue: any) => ({
    ...state,
    openFormEffect: newValue,
  }),
  CLEAR_REGISTER_FORM: (state: States, _: any) => ({
    ...state,
    formRegisterEditMode: initialStates.formRegisterEditMode,
    formRegister: { ...initialStates.formRegister },
  }),
  SET_NOTIFY: (state: States, newValue: any) => ({
    ...state,
    notify: { ...newValue },
  }),
  SET_REGISTER_FORM_DATA: (state: States, newValue: any) => ({
    ...state,
    formRegister: { ...newValue },
  }),
  default: (state: States) => state,
};

export default map;
