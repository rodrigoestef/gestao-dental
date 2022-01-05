import Client from "../models/Client";
import MedicalHistory from "../models/MedicalHistory";

interface Model {
  userid: number;
  id: number;
  teste: string;
}

interface Res {
  model: Model;
  userid: number;
}

class MedicalHistoryController {
  async get(id: number) {
    const client = await Client.findOneOrFail({ id });

    return await client.medicalHistory;
  }

  async createOrUpdate(res: Res) {
    const { model, userid } = res;
    const client = await Client.findOneOrFail({ id: userid });
    const medicalHistory = new MedicalHistory();

    if (model.id > 0) {
      medicalHistory.id = model.id;
    }
    medicalHistory.teste = model.teste;
    await medicalHistory.save();
    client.medicalHistory = Promise.resolve(medicalHistory);
    await client.save();
    return true;
  }
}

export default MedicalHistoryController;
