export interface FootballApiResponse<T, U  = any> {
  competitions: T;
  competition: T;
  teams: U;
}

export interface Competition {
  id: number;
  area: Record<string, string>;
  name: string;
  code: string;
  type: string;
  emblem?: string;
  numberOfAvailableSeasons?: number;
  currentSeason?: Record<string, string>
  seasons?: Record<string, unknown>[]
}

export interface Teams {
  id: number;
  area: Record<string, string>;
  name: string;
  tla: string;
  shortname: string;
}
