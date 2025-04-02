import { useLocalStorage } from '@vueuse/core';
import type { Team } from '~/types';

export function useFavoriteTeam() {
  const teamStore = useTeamsStore();
  const favoriteTeamId = useLocalStorage<Team['id'] | null>(
    'favoriteTeamId',
    null
  );

  const toggleFavoriteTeam = (teamId: Team['id']) => {
    favoriteTeamId.value = favoriteTeamId.value === teamId ? null : teamId;
  };

  const isFavorite = (teamId: Team['id']) => {
    return favoriteTeamId.value
      ? Number(favoriteTeamId.value) === teamId
      : false;
  };

  const favoriteTeam = computed(() => {
    if (!favoriteTeamId.value || !teamStore.teams.length) return null;
    return teamStore.teamsNormalized[favoriteTeamId.value];
  });

  const favoriteTeamRecentMatches = computed(() => {
    if (!favoriteTeam.value) return [];
    const matches = teamStore.allMatchesNormalized[favoriteTeam.value.id] || [];
    return getTeamMatches(favoriteTeam.value.id, teamStore.teams, matches, 5);
  });

  return {
    toggleFavoriteTeam,
    isFavorite,
    favoriteTeamId,
    favoriteTeam,
    favoriteTeamRecentMatches,
  };
}
