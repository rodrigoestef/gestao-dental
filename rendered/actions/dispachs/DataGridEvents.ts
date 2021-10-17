import { ActionType, DataGridDataType } from "@reducers/index";
import {
  LOAD_DATA_GRID_REQUEST,
  SET_DATA_GRID,
  SET_DATA_GRID_LOADING,
  SET_DATA_GRID_START,
  SET_DATA_GRID_SIZE,
  SET_SEARCH_CLIENT_NAME_DATA_GRID,
  SUBMIT_SEARCH_CLIENT_FORM,
  SET_SEARCH_CLIENT_AUTOCOMPLETE,
} from "@actions/types";

export const LoadDataGridRequest = (): ActionType => ({
  type: LOAD_DATA_GRID_REQUEST,
  newValue: true,
});
export const SetDataGrid = (grid: DataGridDataType[]): ActionType => ({
  type: SET_DATA_GRID,
  newValue: grid,
});
export const SetDataGridLoading = (loading: boolean): ActionType => ({
  type: SET_DATA_GRID_LOADING,
  newValue: loading,
});
export const SetDataGridStart = (value: number): ActionType => ({
  type: SET_DATA_GRID_START,
  newValue: value,
});
export const SetDataGridSize = (value: number): ActionType => ({
  type: SET_DATA_GRID_SIZE,
  newValue: value,
});
export const SetSearchName = (value: string): ActionType => ({
  type: SET_SEARCH_CLIENT_NAME_DATA_GRID,
  newValue: value,
});
export const SubmitSearchClientForm = (): ActionType => ({
  type: SUBMIT_SEARCH_CLIENT_FORM,
  newValue: true,
});
export const SetSearchClientAutoComplete = (options: string[]): ActionType => ({
  type: SET_SEARCH_CLIENT_AUTOCOMPLETE,
  newValue: options,
});
