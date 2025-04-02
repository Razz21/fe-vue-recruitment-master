import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { TeamStats } from '~/types';

export const useSelectedTeamStore = defineStore('selected-team', () => {
  const { teamsNormalized, teams, allMatchesNormalized } = storeToRefs(
    useTeamsStore()
  );
  const router = useRouter();
  const selectedTeamId = ref<number | null>(null);

  const selectedTeam = computed(() => {
    if (!selectedTeamId.value) return null;
    return teamsNormalized.value[selectedTeamId.value] || null;
  });

  const selectedTeamMatches = computed(() => {
    if (!selectedTeam.value) return [];
    const matches = allMatchesNormalized.value[selectedTeam.value.id] || [];
    return getTeamMatches(selectedTeam.value.id, teams.value, matches);
  });

  function selectTeam(teamId: TeamStats['id'] | null) {
    selectedTeamId.value = teamId;
  }

  watch(selectedTeam, (team) => {
    if (team) {
      router.push('/details');
    } else {
      router.push('/list');
    }
  });

  return {
    selectedTeam,
    selectedTeamMatches,
    selectedTeamId,
    selectTeam,
  };
});
