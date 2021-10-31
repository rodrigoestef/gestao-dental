import { ActionType, ConfirmModal } from "@reducers/index";
import { SET_CONFIRM_MODAL } from "@actions/types";

export const SetConfirmModal = (value: ConfirmModal | null): ActionType => ({
  type: SET_CONFIRM_MODAL,
  newValue: value,
});
