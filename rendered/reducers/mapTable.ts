import {
  SET_OPEN_FORM_REGISTER,
  SET_OPEN_FORM_REGISTER_EFFECT,
  CLEAR_REGISTER_FORM,
  SET_NOTIFY,
  SET_REGISTER_FORM_DATA,
  SET_DATA_GRID,
  SET_DATA_GRID_LOADING,
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
    formRegisterClientEditId: initialStates.formRegisterClientEditId,
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
  SET_DATA_GRID: (state: States, newValue: any) => ({
    ...state,
    DataGridData: [...newValue],
  }),
  SET_DATA_GRID_LOADING: (state: States, newValue: any) => ({
    ...state,
    DataGridLoading: newValue,
  }),
  SET_DATA_GRID_START: (state: States, newValue: any) => ({
    ...state,
    DataGridStart: newValue,
  }),
  SET_DATA_GRID_SIZE: (state: States, newValue: any) => ({
    ...state,
    DataGridSize: newValue,
  }),

  SET_FORM_REGISTER_CLIENT_ID: (state: States, newValue: any) => ({
    ...state,
    formRegisterClientEditId: newValue,
  }),

  default: (state: States) => state,
};

export default map;
