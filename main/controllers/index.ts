import cepController from "./cepController";
import clientController from "./clientController";

const table: { [key: string]: any } = {
  cep: cepController,
  client: clientController,
};

export default (_: any, args: any[]): any => {
  try {
    const [controller, body] = args;
    const [Class, fun] = controller.split("@");
    const obj = new table[Class]();
    return obj[fun](body);
  } catch (err) {
    console.log(err);
  }
};
