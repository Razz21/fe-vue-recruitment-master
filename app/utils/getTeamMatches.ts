import type { Match, Team, TeamMatch, TeamStats } from '~/types';

// Combine the two match-getting functions into one with an optional limit parameter
export function getTeamMatches(
  teamId: Team['id'],
  teams: TeamStats[],
  matches: Match[],
  limit: number | null = null
): TeamMatch[] {
  if (!teamId || !matches.length) return [];

  // Sort matches by date (most recent first)
  const sortedMatches = [...matches].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Apply limit if provided
  const limitedMatches = limit ? sortedMatches.slice(0, limit) : sortedMatches;

  // Format matches for display
  return limitedMatches.map((match) => {
    const isHome = match.homeTeamId === teamId;
    const homeTeamObj = teams.find((t) => t.id === match.homeTeamId);
    const awayTeamObj = teams.find((t) => t.id === match.awayTeamId);

    // Determine result for the team
    let result;
    if (isHome) {
      result =
        match.homeScore > match.awayScore
          ? 'W'
          : match.homeScore < match.awayScore
          ? 'L'
          : 'D';
    } else {
      result =
        match.awayScore > match.homeScore
          ? 'W'
          : match.awayScore < match.homeScore
          ? 'L'
          : 'D';
    }

    return {
      id: match.id,
      date: match.date,
      homeTeam: homeTeamObj?.name || 'Unknown Team',
      awayTeam: awayTeamObj?.name || 'Unknown Team',
      homeScore: match.homeScore,
      awayScore: match.awayScore,
      result,
      isHome,
    };
  }) as TeamMatch[];
}
