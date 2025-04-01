<template>
  <div>
    <div class="flex space-x-3">
      <UiRecentForm v-for="(result, index) in matchResults" :key="index" :value="result" size="lg" />
    </div>
    <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">Most recent match on the right</p>
  </div>
</template>

<script setup lang="ts">
import type { MatchResult, } from '~/types';

defineProps<{
  matchResults: MatchResult[];
}>()

</script>
