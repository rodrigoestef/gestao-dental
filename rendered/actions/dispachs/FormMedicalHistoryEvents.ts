import { ActionType } from "@reducers/index";
import { SET_FORM_MEDICAL_HISTORY_DATA } from "@actions/types";
import { formMedicalHistoryType } from "@reducers/index";

export const SetMedicalHistoryData = (
  e: formMedicalHistoryType
): ActionType => ({
  type: SET_FORM_MEDICAL_HISTORY_DATA,
  newValue: e,
});
