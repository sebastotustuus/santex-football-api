/* eslint-disable @typescript-eslint/ban-types */
import { ApolloServer } from "apollo-server-express";
import { buildSchema, NonEmptyArray } from "type-graphql";

export default async (
  resolvers: NonEmptyArray<Function> | NonEmptyArray<string>
): Promise<ApolloServer> => {
  try {
    const schema = await buildSchema({
      resolvers: [...resolvers],
      validate: false,
    });
    return new ApolloServer({
      schema,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
