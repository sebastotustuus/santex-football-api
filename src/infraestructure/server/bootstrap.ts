import express from "express";
import apolloServer from "../graphql/index";

import { PingResolver } from "../../resolvers/ping";

export default async () => {
  try {
    const app = express();
    const apolloUp = await apolloServer([PingResolver]);
    await apolloUp.start()
    apolloUp.applyMiddleware({ app, path: "/graphql" });

    return async (port: number) => {
      app.listen(port);
    };
  } catch (error) {
    Promise.reject(error);
  }
};
