import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { TeamStats } from '~/types';

export const useSelectedTeamStore = defineStore('teamId', () => {
  const { teamsGrouped } = storeToRefs(useTeamsStore());
  const router = useRouter();
  const selectedTeamId = ref<number | null>(null);

  const selectedTeam = computed(() => {
    if (!selectedTeamId.value) return null;
    return teamsGrouped.value[selectedTeamId.value] || null;
  });

  function selectTeam(teamId: TeamStats['id'] | null) {
    selectedTeamId.value = teamId;
  }

  watch(selectedTeam, (team) => {
    if (team) {
      router.push('/details');
    }
  });

  return {
    selectedTeam,
    selectedTeamId,
    selectTeam,
  };
});
