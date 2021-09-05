import { CepType } from "../controllers/cepController";
export default (data: string): CepType => {
  if (!/<bairro>/.exec(data)) {
    throw new Error("cep invalido");
  }
  const bairro = data.replace(/(.*)<bairro>(.*)<\/bairro>(.*)/, "$2");
  const cidade = data.replace(/(.*)<cidade>(.*)<\/cidade>(.*)/, "$2");
  const end = data.replace(/(.*)<end>(.*)<\/end>(.*)/, "$2");

  const newData: CepType = {
    bairro,
    cidade,
    endereco: end,
  };

  return newData;
};
