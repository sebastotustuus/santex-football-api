import { Service } from "typedi";
import {
  Competition,
  FootballApiResponse,
  Teams,
} from "../../domain/football/apiResponse";
import StoredCompetitions from "../../domain/football/competitions";
import FootballRepo from "../../repositories/football/repository";
import { LeagueServicer } from "./entities";

@Service()
export class LeagueService implements LeagueServicer {
  constructor(private readonly footballRepo: FootballRepo) {}

  public async importLeague(leagueCode: string): Promise<string> {
    const league = await this.footballRepo.getLeague<FootballApiResponse<Competition, Teams>>(leagueCode);
    return this.footballRepo.importLeagues(leagueCode, league)
  }

  public async getStoreLeague(leagueCode: string): Promise<StoredCompetitions | null> {
    return await this.footballRepo.getOne<StoredCompetitions>(leagueCode)
  }
}
