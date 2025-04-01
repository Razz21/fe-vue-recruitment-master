import type { TeamStats } from '~/types';

export function useEditTeamDetails() {
  const teamsState = useTeamsStore();
  const notification = useNotificationStore();

  function mutate(id: number, state: Partial<TeamStats>) {
    if (!id) return;

    teamsState.editTeam(id, state);

    // Show success message
    notification.success();
  }

  return {
    mutate,
  };
}
