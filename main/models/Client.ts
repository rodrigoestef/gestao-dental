import {
  AfterInsert,
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import MedicalHistory from "./MedicalHistory";

@Entity()
export default class Client extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  responsavel: string;
  @Column()
  rg: string;
  @Column()
  rgorgao: string;
  @Column()
  cpf: string;
  @Column()
  nascimento: Date;
  @Column()
  genero: string;
  @Column()
  profissao: string;
  @Column()
  cep: string;
  @Column()
  endereco: string;
  @Column()
  bairro: string;
  @Column()
  cidade: string;
  @Column()
  telefone: string;
  @Column()
  celular: string;
  @Column()
  lastmodify: Date;

  @OneToOne(() => MedicalHistory)
  @JoinColumn()
  medicalHistory: Promise<MedicalHistory>;

  @BeforeInsert()
  @BeforeUpdate()
  CreateLastModdifyValue() {
    this.lastmodify = new Date();
  }
}
