import { InputType, Field} from "type-graphql";

@InputType()
export class LeagueInput{
    @Field()
    leagueInput!: string
}
