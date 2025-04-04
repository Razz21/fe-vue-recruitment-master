import type { Match, Team, TeamsData, TeamStats } from '~/types';

// Calculate team statistics based on matches
export function calculateTeamStats(
  teamsData: Team[],
  matches: Match[]
): TeamStats[] {
  // Create a map to store team stats
  const teamStats = new Map<number, TeamStats>();

  // Initialize stats for each team - ensure points start at exactly 0
  teamsData.forEach((team) => {
    teamStats.set(team.id, {
      position: 0, // Placeholder for position, will be set later
      ...team,
      points: 0, // Explicitly set to 0 to override any existing value
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      recentForm: [],
    });
  });

  // Process each match to update team stats
  matches.forEach((match) => {
    const homeTeam = teamStats.get(match.homeTeamId);
    const awayTeam = teamStats.get(match.awayTeamId);

    if (!homeTeam || !awayTeam) return; // Skip if team not found

    // Update goals
    homeTeam.goalsFor += match.homeScore;
    homeTeam.goalsAgainst += match.awayScore;
    awayTeam.goalsFor += match.awayScore;
    awayTeam.goalsAgainst += match.homeScore;

    // Determine result and update points
    if (match.homeScore > match.awayScore) {
      // Home team wins
      homeTeam.wins += 1;
      homeTeam.points += 3; // 3 points for a win
      homeTeam.recentForm.unshift('W');
      awayTeam.losses += 1;
      // No points for a loss (0)
      awayTeam.recentForm.unshift('L');
    } else if (match.homeScore < match.awayScore) {
      // Away team wins
      awayTeam.wins += 1;
      awayTeam.points += 3; // 3 points for a win
      awayTeam.recentForm.unshift('W');
      homeTeam.losses += 1;
      // No points for a loss (0)
      homeTeam.recentForm.unshift('L');
    } else {
      // Draw
      homeTeam.draws += 1;
      homeTeam.points += 1; // 1 point for a draw
      homeTeam.recentForm.unshift('D');
      awayTeam.draws += 1;
      awayTeam.points += 1; // 1 point for a draw
      awayTeam.recentForm.unshift('D');
    }
  });

  // Limit recent form to last 5 matches and reverse for display (most recent on right)
  teamStats.forEach((team) => {
    team.recentForm = team.recentForm.slice(0, 5).reverse();

    // Final points calculation to ensure accuracy
    team.points = team.wins * 3 + team.draws;
  });

  return [...teamStats.values()]
}

export const transformTeamsStats = (data: TeamsData) => {
  const teamsData = data.teams || [];
  const allMatches = data.matches || [];

  const teamsWithStats = calculateTeamStats(teamsData, allMatches);
  teamsWithStats.sort((a, b) => b.points - a.points);
  teamsWithStats.forEach((team, index) => (team.position = index + 1));

  return teamsWithStats;
};
