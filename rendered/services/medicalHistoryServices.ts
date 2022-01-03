import { ipcRenderer } from "electron";
import { formMedicalHistoryType } from "@reducers/index";
import defaultMiddleWare from "./defaultMiddleWare";

export const getMedicalHistoryByUserId = (
  id: number
): Promise<formMedicalHistoryType> =>
  ipcRenderer
    .invoke("integration", ["medicalHistory@get", id])
    .then(defaultMiddleWare);
