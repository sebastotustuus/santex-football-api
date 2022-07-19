import Container from "typedi";
import {
  apiFootballConfig,
  API_FOOTBALL_COMPETITION,
  API_FOOTBALL_TEAMS,
} from "../../utils/constants";
import { ModelFootballLeague } from "../../domain/mongodb";

Container.set([
  { id: "config_api_football", value: apiFootballConfig },
  { id: "api_competitions", value: API_FOOTBALL_COMPETITION },
  { id: "api_teams", value: API_FOOTBALL_TEAMS },
  { id: "football_league", value: ModelFootballLeague },
]);

export default Container;
