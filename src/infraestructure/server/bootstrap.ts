import express from "express";
import apolloServer from "../apollo/index";

import resolvers from "../../resolvers";
import { PingResolver } from "../../resolvers/ping";

const registerResolvers = (resolvers: any): any[] => {
  return Object.keys(resolvers).map((key) => resolvers[key]);
};

export default async () => {
  try {
    const app = express();
    const apolloUp = await apolloServer([
      PingResolver,
      ...registerResolvers(resolvers),
    ]);
    await apolloUp.start();
    apolloUp.applyMiddleware({ app, path: "/graphql" });

    return async (port: number) => {
      app.listen(port);
    };
  } catch (error) {
    Promise.reject(error);
  }
};
