export default defineNuxtRouteMiddleware(() => {
  if (import.meta.env.SSR) {
    return navigateTo('/list');
  }
  const store = useSelectedTeamStore();

  if (!store.selectedTeam) {
    return navigateTo('/list');
  }
});
