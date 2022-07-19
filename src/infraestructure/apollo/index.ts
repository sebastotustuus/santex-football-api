/* eslint-disable @typescript-eslint/ban-types */
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, NonEmptyArray } from "type-graphql";
import IoC from "../IoC";

export default async (
  resolvers: NonEmptyArray<Function> | NonEmptyArray<string>
): Promise<ApolloServer> => {
  try {
    const schema = await buildSchema({
      resolvers: [...resolvers],
      container: IoC,
    });
    return new ApolloServer({
      schema,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: Error | any) {
    throw new Error(error);
  }
};
