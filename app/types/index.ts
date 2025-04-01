export type Team = {
  id: number;
  name: string;
  founded: number;
  stadium: string;
  coach: string;
  keyPlayers: string[];
};

export type Match = {
  id: number;
  date: string;
  homeTeamId: Team['id'];
  awayTeamId: Team['id'];
  homeScore: number;
  awayScore: number;
};

export type TeamsData = {
  teams: Team[];
  matches: Match[];
};

export type TeamStats = Team & {
  points: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  recentForm: MatchResult[];
  position: number;
};

export type MatchResult = 'W' | 'L' | 'D';

export type TeamMatch = {
  id: Match['id'];
  date: Match['date'];
  homeTeam: Team['name'];
  awayTeam: Team['name'];
  homeScore: Match['homeScore'];
  awayScore: Match['awayScore'];
  result: MatchResult;
  isHome: boolean;
};
