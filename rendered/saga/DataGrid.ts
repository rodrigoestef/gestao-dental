import { put, select, delay } from "redux-saga/effects";
import { States } from "@reducers/index";
import { getDataGrid, GetDataGridResponse } from "@services/clientServices";
import { SetNotify } from "@actions/dispachs/Notifys";
import {
  SetDataGridLoading,
  SetDataGrid,
  SetDataGridSize,
  SetDataGridStart,
} from "@actions/dispachs/DataGridEvents";
export const LoadDataRequest = function* () {
  const { DataGridStart, DataGridData }: States = yield select();
  yield put(SetDataGridLoading(true));
  yield delay(3000);
  try {
    const response: GetDataGridResponse = yield getDataGrid({
      limit: 50,
      start: DataGridStart,
    });
    if (response.size === 0) {
      yield put(
        SetNotify({
          text: "Ainda não há nenhum cliente registrado",
          variant: "info",
        })
      );
      return;
    }
    yield put(SetDataGrid([...DataGridData, ...response.data]));
    yield put(SetDataGridSize(response.size));
    yield put(SetDataGridStart(response.start + response.limit));
  } catch (error) {
    yield put(
      SetNotify({
        text: "Ocorreu um erro ao carregar clientes",
        variant: "error",
      })
    );
  } finally {
    yield put(SetDataGridLoading(false));
  }
};
