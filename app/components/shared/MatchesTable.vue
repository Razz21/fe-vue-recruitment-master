<template>
  <div class="overflow-x-auto">
    <UiTable>
      <template #header>
        <tr>
          <UiTableHeaderCell>Date</UiTableHeaderCell>
          <UiTableHeaderCell>Match</UiTableHeaderCell>
          <UiTableHeaderCell>Result</UiTableHeaderCell>
          <UiTableHeaderCell v-if="withActions">Actions</UiTableHeaderCell>
        </tr>
      </template>
      <template #body>
        <tr v-for="match in matches" :key="match.id" class="hover:bg-gray-50 dark:hover:bg-gray-700">
          <UiTableBodyCell class="text-sm text-gray-500 dark:text-gray-400">
            {{ match.date }}
          </UiTableBodyCell>
          <UiTableBodyCell>
            <div class="flex items-center">
              <span :class="{ 'font-bold': match.isHome }" class="text-gray-900 dark:text-white">
                {{ match.homeTeam }}
              </span>
              <span class="mx-2 text-gray-500 dark:text-gray-400">vs</span>
              <span :class="{ 'font-bold': !match.isHome }" class="text-gray-900 dark:text-white">
                {{ match.awayTeam }}
              </span>
            </div>
          </UiTableBodyCell>
          <UiTableBodyCell>
            <div class="flex items-center space-x-2">
              <span class="text-gray-900 dark:text-white font-medium">
                {{ match.homeScore }} - {{ match.awayScore }}
              </span>
              <UiRecentForm :value="match.result" />
            </div>
          </UiTableBodyCell>
          <UiTableBodyCell v-if="withActions">
            <UiActionButton @click="$emit('edit-match', match)">Edit Result</UiActionButton>
          </UiTableBodyCell>
        </tr>
      </template>
    </UiTable>
  </div>
</template>

<script setup lang="ts">
import type { TeamMatch } from '~/types';

defineProps<{
  matches: TeamMatch[];
  withActions?: boolean;
}>()

defineEmits<{
  (e: 'edit-match', match: TeamMatch): void;
}>();

</script>
