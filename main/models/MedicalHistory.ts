import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class MedicalHistory extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  teste: string;
}
