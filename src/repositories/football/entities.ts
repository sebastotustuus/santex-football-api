import { Competition, FootballApiResponse, Teams } from "../../domain/football/apiResponse";

export default interface FootballRepository {
  getLeague<T>(leagueCode: string): Promise<T>;
  importLeagues(leagueCode:string, data: FootballApiResponse<Competition, Teams>): Promise<string>;
  getOne<T>(leagueCode: string): Promise<T | null>;
}
