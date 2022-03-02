import express from "express";
import http from "http";
import Client from "../models/Client";

type Type = "client" | "medicalHistory";

const getEntityTable: Record<Type, (id: number) => Promise<any>> = {
  client: (id) => Client.findOneOrFail({ where: { id } }),
  medicalHistory: async (id) => {
    const client = await Client.findOneOrFail({
      where: { medicalHistory: id },
    });
    const medicalHistory = await client.medicalHistory;
    return { nome: client.nome, ...medicalHistory };
  },
};

export default async (type: Type): Promise<void> => {
  const app = express();
  app.set("view engine", "ejs");
  app.set("views", "views");

  const promise = new Promise((resolve) => {
    app.get("/:id", async (req, res) => {
      const { id } = req.params;
      const closure = getEntityTable[type];
      const entity = await closure(parseInt(id));
      res.render(type, { entity });
      resolve(true);
    });
  });

  const server = http.createServer(app);
  server.listen(4600);

  await promise;

  server.close();
};
