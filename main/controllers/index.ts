import cepController from "./cepController";
import clientController from "./clientController";
import medicalHistoryController from "./medicalHistoryController";
import { IpcMainEvent } from "electron";

const table: { [key: string]: any } = {
  cep: cepController,
  client: clientController,
  medicalHistory: medicalHistoryController,
};

export default async (event: any, args: any[]): Promise<any> => {
  try {
    const [controller, body] = args;
    const [Class, fun] = controller.split("@");
    const obj = new table[Class]();
    event.returnValue = await obj[fun](body);
    return event.returnValue;
  } catch (err) {
    console.log(err);
  }
};
