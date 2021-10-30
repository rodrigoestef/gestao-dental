import { ActionType } from "@reducers/index";
import {
  SET_OPEN_FORM_MEDICAL_HISTORY,
  SET_OPEN_FORM_MEDICAL_HISTORY_REQUEST,
  SET_CLOSE_FORM_MEDICAL_HISTORY_REQUEST,
  SET_OPEN_FORM_MEDICAL_HISTORY_EFFECT,
} from "@actions/types";
export const SetOpenMedicalHistory = (value: boolean): ActionType => ({
  type: SET_OPEN_FORM_MEDICAL_HISTORY,
  newValue: value,
});
export const SendOpenFormMedicalHistoryRequest = (): ActionType => ({
  type: SET_OPEN_FORM_MEDICAL_HISTORY_REQUEST,
  newValue: true,
});
export const SendCloseFormMedicalHistoryRequest = (): ActionType => ({
  type: SET_CLOSE_FORM_MEDICAL_HISTORY_REQUEST,
  newValue: true,
});
export const SetOpenFormMedicalHistoryEffect = (
  value: boolean
): ActionType => ({
  type: SET_OPEN_FORM_MEDICAL_HISTORY_EFFECT,
  newValue: value,
});
