import { ActionType } from "@reducers/index";
import { SET_NOTIFY } from "@actions/types";
import { Notify } from "@reducers/index";

export const SetNotify = (e: Notify): ActionType => ({
  type: SET_NOTIFY,
  newValue: e,
});
