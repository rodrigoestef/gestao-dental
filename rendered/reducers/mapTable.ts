import { SET_OPEN_FORM_REGISTER } from "@actions/types";
import { States } from "@reducers/index";

const map: { [key: string]: (state: States, newValue: any) => States } = {
  SET_OPEN_FORM_REGISTER: (state: States, newValue: any) => ({
    ...state,
    openFormRegister: newValue,
  }),
  default: (state: States) => state,
};

export default map;
