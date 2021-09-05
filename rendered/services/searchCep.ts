import defaultMiddleWare from "./defaultMiddleWare";
import { ipcRenderer } from "electron";

export type CepType = {
  bairro: string;
  cidade: string;
  endereco: string;
};

export const searchCep = (cep: string): Promise<CepType> =>
  ipcRenderer
    .invoke("integration", ["cepController@searchCep", cep])
    .then(defaultMiddleWare);
