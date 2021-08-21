import {
  SET_OPEN_FORM_REGISTER,
  SET_OPEN_FORM_REGISTER_EFFECT,
} from "@actions/types";
import { States } from "@reducers/index";

const map: { [key: string]: (state: States, newValue: any) => States } = {
  SET_OPEN_FORM_REGISTER: (state: States, newValue: any) => ({
    ...state,
    openFormRegister: newValue,
  }),
  SET_OPEN_FORM_REGISTER_EFFECT: (state: States, newValue: any) => ({
    ...state,
    openFormEffect: newValue,
  }),
  default: (state: States) => state,
};

export default map;
