/* eslint-disable no-console */
import app from "./infraestructure/server/bootstrap";
import { connectionToMongo } from "./infraestructure/db";
import { MONGO_URI } from "./utils/constants";

const up = async () => {
  try {
    const configServer = await app();
    await connectionToMongo(MONGO_URI)
    await configServer?.(3000);
    console.log(`Listen on port: ${3000}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("The server couldn't start");
    throw new Error(error);
  }
};

up();
