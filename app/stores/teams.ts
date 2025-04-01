import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Match, TeamsData, TeamStats } from '~/types';

export const useTeamsStore = defineStore('teams', () => {
  const teams = shallowRef<TeamStats[]>([]);
  const allMatches = shallowRef<Match[]>([]);
  const isLoading = ref(false);

  const fetchTeams = async () => {
    if (isLoading.value) return;

    isLoading.value = true;

    try {
      // Add artificial delay to show loading state
      await new Promise((resolve) => setTimeout(resolve, 800));

      const data = await $fetch<TeamsData>('/data/teams.json');
      allMatches.value = data.matches || [];
      teams.value = transformTeamsStats(data);
    } catch (error) {
      console.error('Error fetching teams:', error);
      teams.value = [];
      allMatches.value = [];
    } finally {
      isLoading.value = false;
    }
  };

  function editTeam(id: number, data: Partial<TeamStats>) {
    const updatedTeams = teams.value.map((team) =>
      team.id === id ? { ...team, ...data } : team
    );
    teams.value = updatedTeams;
  }

  function editMatch(id: number, data: Partial<Match>) {
    const updatedMatches = allMatches.value.map((match) =>
      match.id === id ? { ...match, ...data } : match
    );
    teams.value = transformTeamsStats({
      teams: teams.value,
      matches: updatedMatches,
    });
    allMatches.value = updatedMatches;
  }

  const teamsGrouped = computed(() => {
    return teams.value.reduce<Record<number, TeamStats>>((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});
  });

  const allMatchesGrouped = computed(() => {
    return allMatches.value.reduce<Record<number, Match[]>>((acc, match) => {
      if (!acc[match.homeTeamId]) {
        acc[match.homeTeamId] = [];
      }
      acc[match.homeTeamId]?.push(match);

      if (!acc[match.awayTeamId]) {
        acc[match.awayTeamId] = [];
      }
      acc[match.awayTeamId]?.push(match);

      return acc;
    }, {});
  });

  return {
    teams,
    teamsGrouped,
    allMatches,
    allMatchesGrouped,
    isLoading,
    editTeam,
    editMatch,
    fetchTeams,
  };
});
