import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Client1631055213194 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        foreignKeys: [
          {
            referencedColumnNames: ["id"],
            referencedTableName: "medical_history",
            columnNames: ["medicalHistoryId"],
            // onDelete:"delete from medical_history left join client on client.medicalHistoryId = medical_history.id where client.id is null"
          },
        ],
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "medicalHistoryId", type: "integer", isNullable: true },
          { name: "nome", type: "varchar" },
          { name: "responsavel", type: "varchar" },
          { name: "rg", type: "varchar" },
          { name: "rgorgao", type: "varchar" },
          { name: "cpf", type: "varchar" },
          { name: "nascimento", type: "date" },
          { name: "genero", type: "varchar" },
          { name: "profissao", type: "varchar" },
          { name: "cep", type: "varchar" },
          { name: "endereco", type: "varchar" },
          { name: "bairro", type: "varchar" },
          { name: "cidade", type: "varchar" },
          { name: "telefone", type: "varchar" },
          { name: "celular", type: "varchar" },
          { name: "lastmodify", type: "timestamp" },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("client");
  }
}
