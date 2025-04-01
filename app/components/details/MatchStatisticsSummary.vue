<template>
  <div class="mb-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
    <h4 class="text-lg font-medium mb-3 dark:text-white">Season Summary</h4>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="stat in stats" :key="stat.label" class="text-center">
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
        <p :class="stat.class" class="text-2xl font-bold">{{ stat.value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TeamStats } from '~/types';

const props = defineProps<Pick<TeamStats, 'draws' | 'wins' | 'losses'>>();

const stats = computed(() => {
  const totalPlayed = props.wins + props.draws + props.losses;

  return [
    {
      label: 'Played',
      value: totalPlayed,
      class: 'dark:text-white',
    },
    {
      label: 'Won',
      value: props.wins,
      class: 'text-green-600 dark:text-green-400',
    },
    {
      label: 'Drawn',
      value: props.draws,
      class: 'text-yellow-600 dark:text-yellow-400',
    },
    {
      label: 'Lost',
      value: props.losses,
      class: 'text-red-600 dark:text-red-400',
    },
  ];
});
</script>
