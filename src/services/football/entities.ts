import StoredCompetitions from "../../domain/football/competitions"

export interface LeagueServicer {
    importLeague(leagueCode: string): Promise<any>
    getStoreLeague(leagueCode: string): Promise<StoredCompetitions | null>
}