<template>
  <div class="flex justify-between items-center mb-6">
    <button class="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      @click="$emit('goBack')">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      Back to Teams
    </button>

    <!-- Favorite Button in Team Details -->
    <DetailsFavoriteButton :active="isFavorite(selectedTeamId)" @click="toggleFavoriteTeam(selectedTeamId)" />
  </div>
</template>

<script setup lang="ts">
import { useFavoriteTeam } from '~/composables/useFavoriteTeam';

defineProps<{
  selectedTeamId: number
}>()

defineEmits<{
  (e: 'goBack'): void;
}>()

const { toggleFavoriteTeam, isFavorite } = useFavoriteTeam()
</script>
