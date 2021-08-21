import { ActionType } from "@reducers/index";
import {
  SET_OPEN_FORM_REGISTER,
  SET_OPEN_FORM_REGISTER_REQUEST,
  SET_CLOSE_FORM_REGISTER_REQUEST,
  SET_OPEN_FORM_REGISTER_EFFECT,
} from "@actions/types";
export const SetOpen = (value: boolean): ActionType => ({
  type: SET_OPEN_FORM_REGISTER,
  newValue: value,
});
export const SendOpenRequest = (): ActionType => ({
  type: SET_OPEN_FORM_REGISTER_REQUEST,
  newValue: true,
});
export const SendCloseRequest = (): ActionType => ({
  type: SET_CLOSE_FORM_REGISTER_REQUEST,
  newValue: true,
});
export const SetOpenFormEffect = (value: boolean): ActionType => ({
  type: SET_OPEN_FORM_REGISTER_EFFECT,
  newValue: value,
});
