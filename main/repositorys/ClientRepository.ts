import Client from "../models/Client";
import {
  clientType,
  getRequest,
  clientData,
} from "../controllers/clientController";
export default class ClientRepository {
  static async insert(data: clientType) {
    const client = new Client();
    client.nome = data.nome;
    client.responsavel = data.responsavel || "";
    client.rg = data.rg;
    client.rgorgao = data.rgorgao;
    client.cpf = data.cpf;
    client.nascimento = new Date(data.nascimento);
    client.genero = data.genero;
    client.profissao = data.profissao;
    client.cep = data.cep;
    client.endereco = data.endereco;
    client.bairro = data.bairro;
    client.cidade = data.cidade;
    client.telefone = data.telefone;
    client.celular = data.celular || "";
    return await client.save();
  }
  static async select(e: getRequest): Promise<clientData[]> {
    const clients = await Client.find({
      order: { id: "DESC" },
      take: e.limit,
      skip: e.start,
    });
    return clients.map((e: Client) => ({
      ...e,
      nascimento: e.nascimento.toJSON().split("T")[0],
    }));
  }
  static async count(): Promise<number> {
    return await Client.count();
  }
}
