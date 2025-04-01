<template>
  <div v-if="filteredAndSortedTeams.length" class="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
    <UiTable>
      <template #header>
        <tr>
          <template v-for="header in tableHeaders" :key="header.id">
            <UiTableHeaderCellSortable v-if="header.sortable" size="lg" :active="isSortActive(header.id)"
              :ascending="isAscending" @click="toggleSortDirection(header.id)">
              {{ header.label }}
            </UiTableHeaderCellSortable>
            <UiTableHeaderCell v-else size="lg">{{ header.label }}</UiTableHeaderCell>
          </template>
        </tr>
      </template>
      <template #body>
        <tr v-for="team in filteredAndSortedTeams" :key="team.id"
          class="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors"
          :class="{ 'bg-blue-50 dark:bg-blue-900/20': isFavorite(team.id) }" @click="selectTeam(team.id)">
          <UiTableBodyCell :label="team.position" size="lg" />
          <UiTableBodyCell size="lg">
            <div class="flex items-center">
              <div class="text-sm font-medium text-gray-900 dark:text-white">{{ team.name }}</div>
              <!-- Favorite Star -->
              <UiFavoriteStar :active="isFavorite(team.id)" @click.stop="toggleFavoriteTeam(team.id)" />
            </div>
          </UiTableBodyCell>
          <UiTableBodyCell :label="team.points" size="lg" />
          <UiTableBodyCell :label="gamesPlayed(team)" size="lg" />
          <UiTableBodyCell :label="team.wins" size="lg" />
          <UiTableBodyCell :label="team.draws" size="lg" />
          <UiTableBodyCell :label="team.losses" size="lg" />
          <UiTableBodyCell :label="team.goalsFor" size="lg" />
          <UiTableBodyCell :label="team.goalsAgainst" size="lg" />
          <UiTableBodyCell size="lg">
            <div class="flex space-x-1">
              <UiRecentForm v-for="(result, index) in team.recentForm" :key="index" :value="result" />
            </div>
          </UiTableBodyCell>
        </tr>
      </template>
    </UiTable>
  </div>
</template>

<script setup lang="ts">
import { useFavoriteTeam } from '~/composables/useFavoriteTeam';

const { filteredAndSortedTeams, isAscending } = storeToRefs(useTeamsTableStore())
const { toggleSortDirection, isSortActive } = useTeamsTableStore()
const { toggleFavoriteTeam, isFavorite } = useFavoriteTeam()

const { selectTeam } = useSelectedTeamStore()

const tableHeaders = [
  { id: 'position', label: 'Pos', sortable: true },
  { id: 'name', label: 'Team', sortable: true },
  { id: 'points', label: 'Points', sortable: true },
  { id: 'played', label: 'Played', sortable: false },
  { id: 'wins', label: 'W', sortable: true },
  { id: 'draws', label: 'D', sortable: true },
  { id: 'losses', label: 'L', sortable: true },
  { id: 'goalsFor', label: 'GF', sortable: true },
  { id: 'goalsAgainst', label: 'GA', sortable: true },
  { id: 'form', label: 'Form', sortable: false }
];
</script>
