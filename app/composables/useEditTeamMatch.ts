import type { Match } from '~/types';

export function useEditTeamMatch() {
  const teamsState = useTeamsStore();
  const notification = useNotificationStore();

  function mutate(id: number, state: Partial<Match>) {
    if (!id) return;

    teamsState.editMatch(id, state);

    // Show success message
    notification.success();
  }

  return {
    mutate,
  };
}
