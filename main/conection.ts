import { createConnection } from "typeorm";
import { resolve } from "path";
import { app } from "electron";

export default async () => {
  const pathUser =
    String(process.env.NODE_ENV).trim() === "development"
      ? "."
      : app.getPath("userData");
  console.log(pathUser);
  await createConnection({
    type: "sqlite",
    database: `${pathUser}/database.sqlite`,
    synchronize: true,
    logging: false,
    migrations: [resolve(__dirname, "./migration/*")],
    entities: [resolve(__dirname, "./models/*")],
  });
};
