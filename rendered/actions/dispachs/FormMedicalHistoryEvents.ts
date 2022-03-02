import { ActionType } from "@reducers/index";
import {
  SET_FORM_MEDICAL_HISTORY_DATA,
  SUBMIT_MEDICAL_HISTORY_FORM,
  EXPORT_MEDICAL_HISTORY,
} from "@actions/types";
import { formMedicalHistoryType } from "@reducers/index";

export const SetMedicalHistoryData = (
  e: formMedicalHistoryType
): ActionType => ({
  type: SET_FORM_MEDICAL_HISTORY_DATA,
  newValue: e,
});
export const SubmitMedicalHistoryForm = (
  e: formMedicalHistoryType
): ActionType => ({
  type: SUBMIT_MEDICAL_HISTORY_FORM,
  newValue: e,
});
export const ExportMedicalHistory = (e: number): ActionType => ({
  type: EXPORT_MEDICAL_HISTORY,
  newValue: e,
});
