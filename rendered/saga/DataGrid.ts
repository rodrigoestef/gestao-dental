import { put, select, delay } from "redux-saga/effects";
import { ActionType, States } from "@reducers/index";
import {
  getDataGrid,
  GetDataGridResponse,
  searchClientName,
} from "@services/clientServices";
import { SetNotify } from "@actions/dispachs/Notifys";
import {
  SetDataGridLoading,
  SetDataGrid,
  SetDataGridSize,
  SetDataGridStart,
  LoadDataGridRequest,
  SetSearchClientAutoComplete,
} from "@actions/dispachs/DataGridEvents";
export const LoadDataRequest = function* () {
  const { DataGridStart, DataGridData, searchClientName }: States =
    yield select();
  yield put(SetDataGridLoading(true));

  try {
    const response: GetDataGridResponse = yield getDataGrid({
      limit: 50,
      start: DataGridStart,
      search: searchClientName,
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

export const SearchClient = function* () {
  yield put(SetDataGridStart(0));
  yield put(SetDataGrid([]));
  yield put(LoadDataGridRequest());
};
export const DebounceClientName = function* ({ newValue }: ActionType) {
  if (newValue.length < 3) {
    return;
  }
  yield delay(1000);
  try {
    const values: string[] = yield searchClientName(newValue);
    yield put(SetSearchClientAutoComplete(values));
  } catch (error) {
    yield put(
      SetNotify({
        text: "Ocorreu um erro ao buscar clientes",
        variant: "error",
      })
    );
  }
};
