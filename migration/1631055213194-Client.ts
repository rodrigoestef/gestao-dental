import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Client1631055213194 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "client",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
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
