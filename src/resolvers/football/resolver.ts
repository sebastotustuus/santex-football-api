/* eslint-disable @typescript-eslint/no-empty-function */
import { Resolver, Arg, Mutation, Query } from "type-graphql";
import { Service } from "typedi";
import ErrorMsgCommon from "../../domain/error";

import StoredCompetitions from "../../domain/football/competitions";
import { LeagueService } from "../../services/football/services";
import { StoredLeaguesType, ImportLeaguesType } from "./entities";

@Service()
@Resolver(() => LeagueService)
export class LeagueResolver {
  constructor(private readonly leagueService: LeagueService) {}

  @Mutation(() => ImportLeaguesType)
  public async importLeague(
    @Arg("leagueCode", () => String) leagueCode: string
  ): Promise<string | ErrorMsgCommon> {
    try {
      const result = await this.leagueService.importLeague(leagueCode);
      return result;
    } catch (error: any) {
      return {
        msg: error?.message || "Server Error",
      };
    }
  }

  @Query(() => StoredLeaguesType, { nullable: true })
  public async getLocalLeagues(
    @Arg("leagueCode", () => String) leagueCode: string
  ): Promise<StoredCompetitions | ErrorMsgCommon | any> {
    try {
      const result = await this.leagueService.getStoreLeague(leagueCode);
      return result;
    } catch (error: any) {
      return {
        msg: error.message,
        statusCode: error.statusCode,
      };
    }
  }
}
