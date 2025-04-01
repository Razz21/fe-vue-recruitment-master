<template>
  <div class="p-6">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
      <DetailsTeamBasicInfo :selected-team="selectedTeam" @edit-basic-info="reveal" />
      <DetailsTeamStats :stats="[
        { label: 'Points', value: selectedTeam.points },
        { label: 'Goals Scored', value: selectedTeam.goalsFor },
        { label: 'Goals Conceded', value: selectedTeam.goalsAgainst }
      ]" />
    </div>
    <LazyDetailsEditDetailsModal v-if="isRevealed" :state="selectedTeam" @submit="confirm" @cancel="cancel" />
  </div>
</template>

<script setup lang="ts">
import type { TeamStats } from '~/types';
import { useConfirmDialog } from '@vueuse/core'

const props = defineProps<{
  selectedTeam: TeamStats
}>()

const { isRevealed, reveal, cancel, confirm, onConfirm } = useConfirmDialog()
const editTeamDetails = useEditTeamDetails()

onConfirm((details: Partial<TeamStats>) => {
  editTeamDetails.mutate(props.selectedTeam.id, details)
})
</script>
