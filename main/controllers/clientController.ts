import ClientRepository from "../repositorys/ClientRepository";
export interface clientType {
  nome: string;
  responsavel?: string;
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
  celular?: string;
}

export interface clientData extends clientType {
  id: number;
}

export interface getRequest {
  start: number;
  limit: number;
  search?: string;
}
interface getResponse {
  start: number;
  limit: number;
  size: number;
  data: clientData[];
}

class clientController {
  async create(e: clientType) {
    const result = await ClientRepository.insert(e);
    console.log(result);
    return "sucess";
  }
  async edit(e: clientData) {
    ClientRepository.edit(e);
    return "sucess";
  }
  async get(e: getRequest): Promise<getResponse> {
    const data = await ClientRepository.select(e);
    const size = await ClientRepository.count();
    return {
      limit: e.limit,
      start: e.start,
      data: data,
      size,
    };
  }
}

export default clientController;
