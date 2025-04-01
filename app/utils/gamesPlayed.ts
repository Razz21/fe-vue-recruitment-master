import type { TeamStats } from '~/types';

export function gamesPlayed<
  T extends Pick<TeamStats, 'wins' | 'draws' | 'losses'>
>(team: T): number {
  return team.wins + team.draws + team.losses;
}
