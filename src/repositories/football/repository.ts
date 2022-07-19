import { AxiosInstance, AxiosResponse } from "axios";
import { Service, Inject } from "typedi";
import { Model } from "mongoose";
import BaseConfigApi from "../../domain/apiConfigTypes";
import {
  Competition,
  FootballApiResponse,
  Teams,
} from "../../domain/football/apiResponse";
import FootballRepository from "./entities";
import AxiosClient from "../../infraestructure/http/axios";
import { ModelFootballLeague } from "../../domain/mongodb/league";
import StoredCompetitions from "../../domain/football/competitions";

@Service()
export default class FootballRepo implements FootballRepository {
  private readonly restClient: AxiosInstance;

  @Inject("api_competitions")
  private readonly endpointCompetitions!: string;

  @Inject("football_league")
  private readonly leagueModel!: Model<
    InstanceType<typeof ModelFootballLeague>
  >;

  constructor(
    @Inject("config_api_football") private readonly configApi: BaseConfigApi,
    @Inject() private readonly axiosClient: AxiosClient
  ) {
    this.restClient = this.axiosClient.config(this.configApi);
  }

  public async getLeague<T>(leagueCode: string): Promise<T> {
    const result: AxiosResponse<T> = await this.restClient.get(
      `${this.endpointCompetitions}/${leagueCode}/teams`
    );
    return result.data;
  }

  public async importLeagues(
    leagueCode: string,
    { competition, teams }: FootballApiResponse<Competition, Teams>
  ): Promise<string> {
    const validateExistence = await this.getOne<StoredCompetitions>(leagueCode);

    if (validateExistence === null) {
      await this.leagueModel.create({ competition, teams });
      return "Success Created";
    }
    return "The resource is already in the store";
  }

  public async getOne<T>(leagueCode: string): Promise<T | null> {
    const result: T | null = await this.leagueModel.findOne({
      "competition.code": leagueCode,
    });
    return result;
  }
}
