type clientType = {
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
  create(e: clientType) {
    console.log(e);
    return "sucess";
  }
}

export default clientController;
