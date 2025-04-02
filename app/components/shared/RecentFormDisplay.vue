<template>
  <div>
    <h4 v-if="label" class="text-lg font-medium mb-2 dark:text-white">{{ label }}</h4>
    <div class="flex space-x-3">
      <UiRecentForm v-for="(result, index) in recentForm" :key="index" size="lg" :value="result" />
    </div>
    <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">Most recent match on the right</p>
  </div>
</template>

<script setup lang="ts">
import type { MatchResult } from '~/types';

defineProps<{
  label?: string;
  recentForm: MatchResult[];
}>();
</script>
