import { ActionType } from "@reducers/index";
import { SUBMIT_FORM_REGISTER, CLEAR_REGISTER_FORM } from "@actions/types";
import { FormRegisterType } from "@reducers/index";
export const SubmitFormRegister = (form: FormRegisterType): ActionType => ({
  type: SUBMIT_FORM_REGISTER,
  newValue: form,
});
export const ClearRegisterForm = (): ActionType => ({
  type: CLEAR_REGISTER_FORM,
  newValue: true,
});
