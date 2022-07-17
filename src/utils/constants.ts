/* eslint-disable @typescript-eslint/no-explicit-any */
import config from "../config";

export default Object.freeze({
  API_FOOTBALL_AVAILABLE_COMPETITIONS: config.services.footballApi.competitions,
  API_FOOTBALL_HEADER_TOKEN: config.services.footballApi.headerXAuthToken,
});
