<template>
  <div class="mb-8">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <ListFavoriteTeamHeader v-if="favoriteTeam" :team-name="favoriteTeam.name" @select-team="selectTeam(favoriteTeam.id)" />
      <div class="p-6">
        <div v-if="favoriteTeamRecentMatches.length === 0" class="text-center py-4 text-gray-500 dark:text-gray-400">
          No recent matches available
        </div>
        <div v-else>
          <!-- Recent Form Display -->
          <ListRecentFormDisplay class="mt-2" :match-results="matchResults" />
          <!-- Recent Matches Table -->
          <SharedMatchesTable class="mt-6" :matches="favoriteTeamRecentMatches" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFavoriteTeam } from '~/composables/useFavoriteTeam';

const matchResults = computed(() => {
  return favoriteTeamRecentMatches.value.map(match => match.result);
});

const { selectTeam } = useSelectedTeamStore()

const { favoriteTeamRecentMatches, favoriteTeam } = useFavoriteTeam()

</script>
