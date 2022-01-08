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

export type ConfirmModal = {
  text: String;
  callback: () => void;
  yesButtonText?: String;
  noButtonText?: String;
};

export type formMedicalHistoryType = {
  id: number;
  disease: string;
  hasMedicalTreatment: string;
  useMedicine: string;
  hasAllergy: string;
  hasHypertension: boolean;
  hasDiabetes: boolean;
  hasUlcer: boolean;
  hasSyphilis: boolean;
  hasHerpes: boolean;
  hasTuberculosis: boolean;
  hasHeartDisease: boolean;
  hasGonorrhea: boolean;
  hasKidneyProblems: boolean;
  hasHepatopathyBorC: boolean;
  hasHematologicalDiseases: boolean;
  hasAnotherDisease: string;
  hasSurgery: string;
  hasScarringProblem: string;
  hasBleedingProblem: string;
  bloodTransfusion: string;
  isPregnant: string;
  isBreastfeeding: string;
  menstruationProblem: string;
  halitosis: string;
  hygiene: string;
  hygieneFrequency: string;
  obs: string;
  whiteLesion: string;
  gums: string;
  others: string;
  littleBoard: string;
  lotOfPlaque: string;
  littleCalculus: string;
  lotOfCalculus: string;
};

export type States = {
  openFormRegister: boolean;
  openFormEffect: boolean;
  openFormMedicalHistory: boolean;
  openFormMedicalHistoryEffect: boolean;
  formRegisterClientEditId: number;
  formRegister: FormRegisterType;
  notify?: Notify;
  DataGridData: DataGridDataType[];
  DataGridStart: number;
  DataGridSize: number;
  DataGridLoading: boolean;
  searchClientName: string;
  searchClientAutoComplete: string[];
  confirmModal: ConfirmModal | null;
  formMedicalHistoryEditId: number;
  formMedicalHistory: formMedicalHistoryType;
  formMedicalHistorySkeleton: boolean;
};
export type ActionType = {
  type: string;
  newValue: any;
};
export const initialStates: States = {
  openFormRegister: false,
  openFormEffect: false,
  openFormMedicalHistory: false,
  openFormMedicalHistoryEffect: false,
  formRegisterClientEditId: 0,
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
  searchClientName: "",
  searchClientAutoComplete: [],
  confirmModal: null,

  formMedicalHistoryEditId: 0,
  formMedicalHistory: {
    id: 0,
    disease: "",
    hasMedicalTreatment: "",
    useMedicine: "",
    hasAllergy: "",
    hasHypertension: false,
    hasDiabetes: false,
    hasUlcer: false,
    hasSyphilis: false,
    hasHerpes: false,
    hasTuberculosis: false,
    hasHeartDisease: false,
    hasGonorrhea: false,
    hasKidneyProblems: false,
    hasHepatopathyBorC: false,
    hasHematologicalDiseases: false,
    hasAnotherDisease: "",
    hasSurgery: "",
    hasScarringProblem: "",
    hasBleedingProblem: "",
    bloodTransfusion: "",
    isPregnant: "",
    isBreastfeeding: "",
    menstruationProblem: "",
    halitosis: "",
    hygiene: "",
    hygieneFrequency: "",
    obs: "",
    whiteLesion: "",
    gums: "",
    others: "",
    littleBoard: "",
    lotOfPlaque: "",
    littleCalculus: "",
    lotOfCalculus: "",
  },
  formMedicalHistorySkeleton: false,
};

export default (state = initialStates, action: ActionType) => {
  const callback = mapTable[action.type] || mapTable.default;
  return callback(state, action.newValue);
};
