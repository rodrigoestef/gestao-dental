import { ipcRenderer } from "electron";
import { FormRegisterType } from "@reducers/index";
import defaultMiddleWare from "./defaultMiddleWare";

export const createClientRequest = (e: FormRegisterType) =>
  ipcRenderer
    .invoke("integration", ["CreateClient", e])
    .then(defaultMiddleWare);
