import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export default class MedicalHistory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  disease: string;
  @Column()
  hasMedicalTreatment: string;
  @Column()
  useMedicine: string;
  @Column()
  hasAllergy: string;
  @Column()
  hasHypertension: boolean;
  @Column()
  hasDiabetes: boolean;
  @Column()
  hasUlcer: boolean;
  @Column()
  hasSyphilis: boolean;
  @Column()
  hasHerpes: boolean;
  @Column()
  hasTuberculosis: boolean;
  @Column()
  hasHeartDisease: boolean;
  @Column()
  hasGonorrhea: boolean;
  @Column()
  hasKidneyProblems: boolean;
  @Column()
  hasHepatopathyBorC: boolean;
  @Column()
  hasHematologicalDiseases: boolean;
  @Column()
  hasAnotherDisease: string;
  @Column()
  hasSurgery: string;
  @Column()
  hasScarringProblem: string;
  @Column()
  hasBleedingProblem: string;
  @Column()
  bloodTransfusion: string;
  @Column()
  isPregnant: string;
  @Column()
  isBreastfeeding: string;
  @Column()
  menstruationProblem: string;
  @Column()
  halitosis: string;
  @Column()
  hygiene: string;
  @Column()
  hygieneFrequency: string;
  @Column()
  obs: string;
  @Column()
  whiteLesion: string;
  @Column()
  gums: string;
  @Column()
  others: string;
  @Column()
  littleBoard: string;
  @Column()
  lotOfPlaque: string;
  @Column()
  littleCalculus: string;
  @Column()
  lotOfCalculus: string;

  @Column()
  lastmodify: Date;
  @BeforeInsert()
  @BeforeUpdate()
  CreateLastModdifyValue() {
    this.lastmodify = new Date();
  }
}
