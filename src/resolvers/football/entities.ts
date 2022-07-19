import { InputType, Field, ObjectType, Int } from "type-graphql";

@InputType()
export class LeagueInput {
  @Field()
  leagueInput!: string;
}

@ObjectType()
export class AvailableLeaguesType {
  @Field(() => Int)
  id!: number;

  @Field(() => [AreaLeaguesType])
  area!: Record<string, string>;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  code!: string;

  @Field(() => String)
  type!: string;

  @Field(() => String)
  emblem!: string;

  @Field(() => String)
  plan!: string;

  @Field(() => Int)
  numberOfAvailableSeasons!: number;
}

@ObjectType()
export class CompetitonsType {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  code!: string;
}

@ObjectType()
export class AreaLeaguesType extends CompetitonsType {
  @Field(() => String)
  flag!: string;
}

@ObjectType()
export class TeamsType {
  @Field(() => Int)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => String)
  tla!: string;

  @Field(() => String)
  shortName!: string;
}

@ObjectType()
export class StoredLeaguesType {
  @Field(() => CompetitonsType)
  competition!: Record<string, string | number>;

  @Field(() => [TeamsType])
  teams!: Record<string, string | number>;
}

@ObjectType()
export class ImportLeaguesType {
  @Field(() => String)
  msg!: string;

  @Field(() => ErrorMessge, { nullable: true })
  error?: Record<string, string | number> | undefined;
}

@ObjectType()
export class ErrorMessge {
  @Field(() => String)
  msg!: string;

  @Field(() => Int, { nullable: true })
  statusCode?: number | undefined;
}
