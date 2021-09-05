import { ActionType } from "@reducers/index";
import {
  SUBMIT_FORM_REGISTER,
  CLEAR_REGISTER_FORM,
  SEARCH_CEP,
  SET_REGISTER_FORM_DATA,
} from "@actions/types";
import { FormRegisterType } from "@reducers/index";
export const SubmitFormRegister = (form: FormRegisterType): ActionType => ({
  type: SUBMIT_FORM_REGISTER,
  newValue: form,
});
export const ClearRegisterForm = (): ActionType => ({
  type: CLEAR_REGISTER_FORM,
  newValue: true,
});
export const SearchCep = (cep: string, form: FormRegisterType): ActionType => ({
  type: SEARCH_CEP,
  newValue: { cep, form },
});
export const SetRegisterFormData = (form: FormRegisterType): ActionType => ({
  type: SET_REGISTER_FORM_DATA,
  newValue: form,
});
