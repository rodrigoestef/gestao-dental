import { ipcRenderer } from "electron";
import { formMedicalHistoryType } from "@reducers/index";
import defaultMiddleWare from "./defaultMiddleWare";

export const getMedicalHistoryByUserId = (
  id: number
): Promise<formMedicalHistoryType> =>
  ipcRenderer
    .invoke("integration", ["medicalHistory@get", id])
    .then(defaultMiddleWare);

export const CreateMedicalHistory = (
  model: formMedicalHistoryType,
  userid: number
): Promise<boolean> =>
  ipcRenderer
    .invoke("integration", ["medicalHistory@createOrUpdate", { model, userid }])
    .then(defaultMiddleWare);

export const exportClientRequest = (e: number) =>
  ipcRenderer.sendSync("integration", ["medicalHistory@export", e]);
