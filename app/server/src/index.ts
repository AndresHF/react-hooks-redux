import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import "reflect-metadata";
import { HelloResolver } from "./modules/wine/Wine.resolver";
import { RegisterResolver } from "./modules/user/Register.resolver";

const PORT = 4000;

const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [HelloResolver, RegisterResolver]
  });
  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  apolloServer.applyMiddleware({ app });
  app.listen(PORT, () => {
    console.log(`SERVER READY AT http://localhost:${PORT}`);
  });
};

main();
