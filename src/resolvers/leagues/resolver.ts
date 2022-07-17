/* eslint-disable @typescript-eslint/no-empty-function */
import { Resolver, InputType, Arg, Mutation } from "type-graphql";

@Resolver()
export class LeagueResolver {
  @Mutation(() => String)
  public async importLeague(@Arg("leagueCode", () => String) leagueCode: string) {
    return leagueCode
  }
}
