import { ipcRenderer } from "electron";
import { FormRegisterType, DataGridDataType } from "@reducers/index";
import defaultMiddleWare from "./defaultMiddleWare";

export const createClientRequest = (e: FormRegisterType) =>
  ipcRenderer
    .invoke("integration", ["client@create", e])
    .then(defaultMiddleWare);

type GetDataGridType = {
  start: number;
  limit: number;
  search?: string;
};
export type GetDataGridResponse = {
  start: number;
  limit: number;
  size: number;
  data: DataGridDataType[];
};
export const getDataGrid = (e: GetDataGridType): Promise<GetDataGridResponse> =>
  ipcRenderer.invoke("integration", ["client@get", e]).then(defaultMiddleWare);

export const editClientRequest = (e: DataGridDataType): Promise<any> =>
  ipcRenderer.invoke("integration", ["client@edit", e]).then(defaultMiddleWare);

export const deleteClientRequest = (id: number): Promise<any> =>
  ipcRenderer
    .invoke("integration", ["client@delete", id])
    .then(defaultMiddleWare);

export const searchClientName = (e: string): Promise<string[]> =>
  ipcRenderer
    .invoke("integration", ["client@searchName", e])
    .then(defaultMiddleWare);

export const exportClientRequest = (e: number) =>
  ipcRenderer.sendSync("integration", ["client@export", e]);
