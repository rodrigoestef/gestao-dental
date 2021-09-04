import mapTable from "./mapTable";

export type FormRegisterType = {
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
};

export type States = {
  openFormRegister: boolean;
  openFormEffect: boolean;
  formRegisterEditMode: boolean;
  formRegister: FormRegisterType;
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
};

export default (state = initialStates, action: ActionType) => {
  const callback = mapTable[action.type] || mapTable.default;
  return callback(state, action.newValue);
};
