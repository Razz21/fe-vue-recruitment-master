<template>
  <div v-if="selectedTeam" class="team-details py-6">
    <DetailsNavigation :selected-team-id="selectedTeam.id" @go-back="() => selectTeam(null)" />

    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div class="bg-gradient-to-r from-blue-500 to-blue-700 p-6 text-white">
        <h2 class="text-3xl font-bold">{{ selectedTeam.name }}</h2>
        <p class="text-blue-100">Position: #{{ selectedTeam.position }} • Points: {{ selectedTeam.points }}</p>
      </div>

      <DetailsTeamDetails :selected-team="selectedTeam" />
      <!-- Match History Section -->
      <DetailsMatchHistory :selected-team="selectedTeam" :selected-team-matches="selectedTeamMatches" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'selected-team'
})

const { selectedTeam, selectedTeamMatches } = storeToRefs(useSelectedTeamStore())

const { selectTeam } = useSelectedTeamStore()
</script>
