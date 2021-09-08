import ClientRepository from "../repositorys/ClientRepository";
export type clientType = {
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
};

class clientController {
  async create(e: clientType) {
    const result = await ClientRepository.insert(e);
    console.log(result);
    return "sucess";
  }
}

export default clientController;
