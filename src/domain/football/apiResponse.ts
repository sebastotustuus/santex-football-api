export interface FootballApiResponse {
  competitions: Competition[];
}

export interface Competition {
  id: number;
  area: Record<string, string>;
  name: string;
  code: string;
  type: string;
  emblem: string;
  plan: string;
  numberOfAvailableSeasons: number;
}
