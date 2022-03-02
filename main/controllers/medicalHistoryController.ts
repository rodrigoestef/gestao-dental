import { dialog } from "electron";
import buildPdf from "../factorys/buildPdf";
import createServeFactory from "../factorys/createServeFactory";
import Client from "../models/Client";
import { MedicalHistoryRepository } from "../repositorys/MedicalHistoryRepository";

export interface Model {
  userid: number;
  id: number;
  disease: string;
  hasMedicalTreatment: string;
  useMedicine: string;
  hasAllergy: string;
  hasHypertension: boolean;
  hasDiabetes: boolean;
  hasUlcer: boolean;
  hasSyphilis: boolean;
  hasHerpes: boolean;
  hasTuberculosis: boolean;
  hasHeartDisease: boolean;
  hasGonorrhea: boolean;
  hasKidneyProblems: boolean;
  hasHepatopathyBorC: boolean;
  hasHematologicalDiseases: boolean;
  hasAnotherDisease: string;
  hasSurgery: string;
  hasScarringProblem: string;
  hasBleedingProblem: string;
  bloodTransfusion: string;
  isPregnant: string;
  isBreastfeeding: string;
  menstruationProblem: string;
  halitosis: string;
  hygiene: string;
  hygieneFrequency: string;
  obs: string;
  whiteLesion: string;
  gums: string;
  others: string;
  littleBoard: string;
  lotOfPlaque: string;
  littleCalculus: string;
  lotOfCalculus: string;
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
    const medicalHistory = await MedicalHistoryRepository.create(model);

    client.medicalHistory = Promise.resolve(medicalHistory);
    await client.save();
    return true;
  }
  async export(medicalHistoryId: number) {
    const res = await dialog.showSaveDialog({
      title: "Exportar em pdf",
      filters: [{ name: "PDF", extensions: ["pdf"] }],
    });
    if (!res.canceled && res.filePath) {
      createServeFactory("medicalHistory").then();
      await buildPdf(res.filePath, medicalHistoryId);
      dialog.showMessageBox({
        title: "Gestao Dental",
        message: "Arquivo criado com sucesso!",
        type: "info",
      });
    }
  }
}

export default MedicalHistoryController;
