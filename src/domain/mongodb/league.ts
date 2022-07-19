import { getModelForClass, prop } from "@typegoose/typegoose";

class FootballLeague {
  @prop({ required: true })
  id!: number;

  @prop({ required: true })
  name!: string;

  @prop({ required: true })
  code!: string;

  @prop()
  areaName!: string;
}

class FootballTeam {
  @prop({ required: true })
  id!: number;

  @prop({ required: true })
  name!: string;

  @prop()
  tla!: string;

  @prop()
  shortName!: string;

  @prop()
  areaName!: string;
}

class CompetitionWithTeams {
  @prop({ type: () => FootballLeague })
  competition!: FootballLeague;

  @prop({type: () => FootballTeam})
  teams!: FootballTeam[]
}

export const ModelFootballLeague = getModelForClass(CompetitionWithTeams);
