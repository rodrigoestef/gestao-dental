import mapTable from "./mapTable";
export type States = {
  openFormRegister: boolean;
};
export type ActionType = {
  type: string;
  newValue: any;
};
export const initialStates: States = {
  openFormRegister: false,
};

export default (state = initialStates, action: ActionType) => {
  const callback = mapTable[action.type] || mapTable.default;
  return callback(state, action.newValue);
};
