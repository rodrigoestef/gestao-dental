import { Model } from "../controllers/medicalHistoryController";
import MedicalHistoryModel from "../models/MedicalHistory";

export class MedicalHistoryRepository {
  static async create(model: Model): Promise<MedicalHistoryModel> {
    const medicalHistory = new MedicalHistoryModel();
    if (model.id > 0) {
      medicalHistory.id = model.id;
    }
    medicalHistory.disease = model.disease;
    medicalHistory.hasMedicalTreatment = model.hasMedicalTreatment;
    medicalHistory.useMedicine = model.useMedicine;
    medicalHistory.hasAllergy = model.hasAllergy;
    medicalHistory.hasHypertension = model.hasHypertension;
    medicalHistory.hasDiabetes = model.hasDiabetes;
    medicalHistory.hasUlcer = model.hasUlcer;
    medicalHistory.hasSyphilis = model.hasSyphilis;
    medicalHistory.hasHerpes = model.hasHerpes;
    medicalHistory.hasTuberculosis = model.hasTuberculosis;
    medicalHistory.hasHeartDisease = model.hasHeartDisease;
    medicalHistory.hasGonorrhea = model.hasGonorrhea;
    medicalHistory.hasKidneyProblems = model.hasKidneyProblems;
    medicalHistory.hasHepatopathyBorC = model.hasHepatopathyBorC;
    medicalHistory.hasHematologicalDiseases = model.hasHematologicalDiseases;
    medicalHistory.hasAnotherDisease = model.hasAnotherDisease;
    medicalHistory.hasSurgery = model.hasSurgery;
    medicalHistory.hasScarringProblem = model.hasScarringProblem;
    medicalHistory.hasBleedingProblem = model.hasBleedingProblem;
    medicalHistory.bloodTransfusion = model.bloodTransfusion;
    medicalHistory.isPregnant = model.isPregnant;
    medicalHistory.isBreastfeeding = model.isBreastfeeding;
    medicalHistory.menstruationProblem = model.menstruationProblem;
    medicalHistory.halitosis = model.halitosis;
    medicalHistory.hygiene = model.hygiene;
    medicalHistory.hygieneFrequency = model.hygieneFrequency;
    medicalHistory.obs = model.obs;
    medicalHistory.whiteLesion = model.whiteLesion;
    medicalHistory.gums = model.gums;
    medicalHistory.others = model.others;
    medicalHistory.littleBoard = model.littleBoard;
    medicalHistory.lotOfPlaque = model.lotOfPlaque;
    medicalHistory.littleCalculus = model.littleCalculus;
    medicalHistory.lotOfCalculus = model.lotOfCalculus;
    await medicalHistory.save();

    return medicalHistory;
  }
}
