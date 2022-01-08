import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class MedicalHistory1640881565620 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "medical_history",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "disease", type: "varchar" },
          { name: "hasMedicalTreatment", type: "varchar" },
          { name: "useMedicine", type: "varchar" },
          { name: "hasAllergy", type: "varchar" },
          { name: "hasHypertension", type: "boolean" },
          { name: "hasDiabetes", type: "boolean" },
          { name: "hasUlcer", type: "boolean" },
          { name: "hasSyphilis", type: "boolean" },
          { name: "hasHerpes", type: "boolean" },
          { name: "hasTuberculosis", type: "boolean" },
          { name: "hasHeartDisease", type: "boolean" },
          { name: "hasGonorrhea", type: "boolean" },
          { name: "hasKidneyProblems", type: "boolean" },
          { name: "hasHepatopathyBorC", type: "boolean" },
          { name: "hasHematologicalDiseases", type: "boolean" },
          { name: "hasAnotherDisease", type: "varchar" },
          { name: "hasSurgery", type: "varchar" },
          { name: "hasScarringProblem", type: "varchar" },
          { name: "hasBleedingProblem", type: "varchar" },
          { name: "bloodTransfusion", type: "varchar" },
          { name: "isPregnant", type: "varchar" },
          { name: "isBreastfeeding", type: "varchar" },
          { name: "menstruationProblem", type: "varchar" },
          { name: "halitosis", type: "varchar" },
          { name: "hygiene", type: "varchar" },
          { name: "hygieneFrequency", type: "varchar" },
          { name: "obs", type: "varchar" },
          { name: "whiteLesion", type: "varchar" },
          { name: "gums", type: "varchar" },
          { name: "others", type: "varchar" },
          { name: "littleBoard", type: "varchar" },
          { name: "lotOfPlaque", type: "varchar" },
          { name: "littleCalculus", type: "varchar" },
          { name: "lotOfCalculus", type: "varchar" },
          { name: "lastmodify", type: "timestamp" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("medical_history");
  }
}
