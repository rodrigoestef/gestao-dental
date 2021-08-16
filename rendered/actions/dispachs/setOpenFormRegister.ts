import { ActionType } from "@reducers/index";
import { SET_OPEN_FORM_REGISTER } from "@actions/types";
export default (value: boolean): ActionType => ({
  type: SET_OPEN_FORM_REGISTER,
  newValue: value,
});
