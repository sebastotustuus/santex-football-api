/* eslint-disable @typescript-eslint/no-explicit-any */
import config from "../config";
import BaseConfigApi from "../domain/apiConfigTypes";

/**
 * Base configs inside a object freeze to export all the group
 * Apis endpont could be separeted consts to export in any place with their own type
 */
export const apiFootballConfig: BaseConfigApi = Object.freeze({
  baseUrl: config.services.footballApi.baseUrl,
  headers: [config.services.footballApi.headerXAuthToken],
});

export const API_FOOTBALL_COMPETITION: string = config.services.footballApi.competitions
export const API_FOOTBALL_TEAMS: string = config.services.footballApi.teams
export const MONGO_URI: string | undefined = config.env.MONGO_URI
