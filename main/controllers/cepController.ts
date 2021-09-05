import { SearchCep } from "../services/cepService";
import cepTransform from "../factorys/cepTranform";

export type CepType = {
  bairro: string;
  cidade: string;
  endereco: string;
};

class cepController {
  async searchCep(cep: string) {
    const { data } = await SearchCep(cep);
    return cepTransform(data);
  }
}

export default cepController;
