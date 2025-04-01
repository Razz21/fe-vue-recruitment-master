import type { Match } from '~/types';

export function useCreateMatch() {
  const teamsState = useTeamsStore();
  const notification = useNotificationStore();

  function mutate(state: Omit<Match, 'id'>) {
    teamsState.createMatch(state);

    // Show success message
    notification.success();
  }

  return {
    mutate,
  };
}
