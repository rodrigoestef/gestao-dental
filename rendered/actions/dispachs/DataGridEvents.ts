import { ActionType, DataGridDataType } from "@reducers/index";
import {
  LOAD_DATA_GRID_REQUEST,
  SET_DATA_GRID,
  SET_DATA_GRID_LOADING,
  SET_DATA_GRID_START,
  SET_DATA_GRID_SIZE,
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
