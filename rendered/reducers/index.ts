import mapTable from "./mapTable";
import { VariantType } from "notistack";
export interface FormRegisterType {
  nome: string;
  responsavel: string;
  rg: string;
  rgorgao: string;
  cpf: string;
  nascimento: string;
  genero: string;
  profissao: string;
  cep: string;
  endereco: string;
  bairro: string;
  cidade: string;
  telefone: string;
  celular: string;
}

export interface DataGridDataType extends FormRegisterType {
  id: number;
}

export type Notify = {
  text: string;
  variant: VariantType;
};

export type States = {
  openFormRegister: boolean;
  openFormEffect: boolean;
  formRegisterEditMode: boolean;
  formRegister: FormRegisterType;
  notify?: Notify;
  DataGridData: DataGridDataType[];
  DataGridStart: number;
  DataGridSize: number;
  DataGridLoading: boolean;
};
export type ActionType = {
  type: string;
  newValue: any;
};
export const initialStates: States = {
  openFormRegister: false,
  openFormEffect: false,
  formRegisterEditMode: false,
  formRegister: {
    nome: "",
    responsavel: "",
    rg: "",
    rgorgao: "",
    cpf: "",
    nascimento: "",
    genero: "",
    profissao: "",
    cep: "",
    endereco: "",
    bairro: "",
    cidade: "",
    telefone: "",
    celular: "",
  },
  DataGridData: [],
  DataGridStart: 0,
  DataGridSize: 0,
  DataGridLoading: false,
};

export default (state = initialStates, action: ActionType) => {
  const callback = mapTable[action.type] || mapTable.default;
  return callback(state, action.newValue);
};
