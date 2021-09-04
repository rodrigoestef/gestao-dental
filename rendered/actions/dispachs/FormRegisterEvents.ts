import { ActionType } from "@reducers/index";
import { SUBMIT_FORM_REGISTER } from "@actions/types";
import { FormRegisterType } from "@reducers/index";
export const SubmitFormRegister = (form: FormRegisterType): ActionType => ({
  type: SUBMIT_FORM_REGISTER,
  newValue: form,
});
