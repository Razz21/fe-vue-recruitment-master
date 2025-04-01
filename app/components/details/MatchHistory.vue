<template>
  <div class="p-6 border-t border-gray-200 dark:border-gray-700">
    <h3 class="text-xl font-semibold mb-4 dark:text-white">All Matches</h3>

    <!-- Success Message -->
    <UiSuccessMessage v-if="showEditSuccess">
      Match result updated successfully! Standings have been recalculated.
    </UiSuccessMessage>

    <!-- Match Editing Modal -->
    <LazyDetailsEditMatchModal v-if="seletedMatch" :state="seletedMatch" @submit="confirm" @cancel="cancel" />

    <!-- No Matches -->
    <div v-else-if="selectedTeamMatches.length === 0" class="text-center py-8 text-gray-500 dark:text-gray-400">
      No match history available
    </div>

    <!-- Matches List -->
    <div v-else>
      <!-- Recent Form Display -->
      <DetailsRecentFormDisplay :recent-form="selectedTeam.recentForm" />
      <!-- Match Statistics Summary -->
      <DetailsMatchStatisticsSummary :draws="selectedTeam.draws" :losses="selectedTeam.losses"
        :wins="selectedTeam.wins" />
      <!-- All Matches Table -->
      <SharedMatchesTable :matches="selectedTeamMatches" with-actions @edit-match="reveal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConfirmDialog } from '@vueuse/core';
import type { TeamMatch, TeamStats } from '~/types';

defineProps<{
  selectedTeam: TeamStats;
  selectedTeamMatches: TeamMatch[];
}>()

const seletedMatch = ref<TeamMatch | null>(null)

const { hasNotification: showEditSuccess } = storeToRefs(useNotificationStore())
const { reveal, cancel, confirm, onCancel, onConfirm, onReveal } = useConfirmDialog()
const editMatch = useEditTeamMatch()

onReveal((match: TeamMatch) => {
  seletedMatch.value = match
})
onCancel(() => {
  seletedMatch.value = null
})
onConfirm((match: Partial<TeamMatch>) => {
  if (!seletedMatch.value) return
  editMatch.mutate(seletedMatch.value.id, match)
  seletedMatch.value = null
})

</script>
