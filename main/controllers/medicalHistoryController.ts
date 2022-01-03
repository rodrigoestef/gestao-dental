import Client from "../models/Client";
class MedicalHistory {
  async get(id: number) {
    const client = await Client.findOneOrFail({ id });

    return await client.medicalHistory;
  }
}

export default MedicalHistory;
