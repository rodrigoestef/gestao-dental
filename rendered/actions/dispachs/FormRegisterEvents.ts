import { ActionType } from "@reducers/index";
import {
  SUBMIT_FORM_REGISTER,
  CLEAR_REGISTER_FORM,
  SEARCH_CEP,
  SET_REGISTER_FORM_DATA,
  EDIT_CLIENT,
  SET_FORM_REGISTER_CLIENT_ID,
  DELETE_CLIENT,
} from "@actions/types";
import { FormRegisterType, DataGridDataType } from "@reducers/index";
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
export const EditClient = (client: DataGridDataType): ActionType => ({
  type: EDIT_CLIENT,
  newValue: client,
});
export const DeleteClient = (id: number): ActionType => ({
  type: DELETE_CLIENT,
  newValue: id,
});
export const setFormRegisterCLientId = (clientId: number): ActionType => ({
  type: SET_FORM_REGISTER_CLIENT_ID,
  newValue: clientId,
});
