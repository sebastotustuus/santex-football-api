export default interface StoredCompetitions {
    competition: Record<string, number | string>
    teams: Record<string, number | string>[]
}