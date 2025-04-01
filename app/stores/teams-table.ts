import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTeamsTableStore = defineStore('teams-table', () => {
  const { teams } = storeToRefs(useTeamsStore());
  const sortBy = ref<string>('position');
  const sortDirection = ref<'asc' | 'desc'>('asc');

  const filteredAndSortedTeams = computed(() => {
    // First filter the teams
    const filtered = teams.value;

    // Then sort the filtered results
    return [...filtered].sort((a, b) => {
      let comparison = 0;

      if (sortBy.value === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy.value === 'points') {
        comparison = a.points - b.points;
      } else if (sortBy.value === 'wins') {
        comparison = a.wins - b.wins;
      } else if (sortBy.value === 'draws') {
        comparison = a.draws - b.draws;
      } else if (sortBy.value === 'losses') {
        comparison = a.losses - b.losses;
      } else if (sortBy.value === 'goalsFor') {
        comparison = a.goalsFor - b.goalsFor;
      } else if (sortBy.value === 'goalsAgainst') {
        comparison = a.goalsAgainst - b.goalsAgainst;
      } else {
        // Default sort by position
        comparison = a.position - b.position;
      }

      // Reverse for descending order
      return sortDirection.value === 'asc' ? comparison : -comparison;
    });
  });

  function toggleSortDirection(field: string) {
    if (sortBy.value === field) {
      // Toggle direction if clicking the same field
      sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    } else {
      // Set new field and reset direction to ascending
      sortBy.value = field;
      sortDirection.value = 'asc';
    }
  }

  const isAscending = computed(() => sortDirection.value === 'asc');

  const isSortActive = (field: string) => {
    return sortBy.value === field;
  };

  return {
    filteredAndSortedTeams,
    sortDirection,
    sortBy,
    toggleSortDirection,
    isAscending,
    isSortActive,
  };
});
