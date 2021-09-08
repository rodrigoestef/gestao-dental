import { createConnection } from "typeorm";
import { resolve } from "path";

export default async () => {
  await createConnection({
    type: "sqlite",
    database: "./database.sqlite",
    synchronize: false,
    logging: false,
    entities: [resolve(__dirname, "./models/*")],
  });
};
