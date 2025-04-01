<template>
  <UiModal>
    <UiModalHeader>Create Match Result</UiModalHeader>
    <form id="create-match" class="mb-6" @submit.prevent="handleSubmit">
      <div class="flex items-center justify-between mb-4">
        <div class="text-center">
          <select v-model="internalState.homeTeamId" required
            class="w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
            <option v-for="team in teams" :key="team.id" :value="team.id">
              {{ team.name }}
            </option>
          </select>
          <p class="text-sm text-gray-500 dark:text-gray-400">(Home)</p>
        </div>

        <div class="text-center">
          <p class="font-semibold dark:text-white">vs</p>
        </div>

        <div class="text-center">
          <select v-model="internalState.awayTeamId" required
            class="w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white">
            <option v-for="team in teams" :key="team.id" :value="team.id">
              {{ team.name }}
            </option>
          </select>
          <p class="text-sm text-gray-500 dark:text-gray-400">(Away)</p>
        </div>
      </div>

      <div class="flex items-center justify-center space-x-4 mb-4">
        <UiInputGroup v-model.number="internalState.homeScore" required class="w-16" label="Home Score" type="number"
          min="0" max="7" />
        <div class="text-xl font-bold dark:text-white">-</div>
        <UiInputGroup v-model.number="internalState.awayScore" required class="w-16" label="Away Score" type="number"
          min="0" max="7" />
      </div>

      <div class="flex items-center justify-center">
        <UiInputGroup v-model="internalState.date" required class="w-full" label="Date" type="date" min='2020-01-01'
          max='2025-04-01' />
      </div>
    </form>
    <UiModalActions>
      <UiModalCancel @click="handleCancel">Cancel</UiModalCancel>
      <UiModalSubmit type="submit" form="create-match">Save Result</UiModalSubmit>
    </UiModalActions>
  </UiModal>
</template>

<script setup lang="ts">
import type { Match } from '~/types';

type NewMatch = Omit<Match, 'id'>;

const { teams } = storeToRefs(useTeamsStore())

const internalState = reactive<NewMatch>({
  date: '',
  homeScore: 0,
  awayScore: 0,
  homeTeamId: 0,
  awayTeamId: 0,
});

const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'submit', payload: NewMatch): void;
}>();

const handleCancel = () => {
  emit('cancel');
};

const handleSubmit = () => {
  if (!internalState.homeTeamId || !internalState.awayTeamId) {
    alert('Both teams must be selected');
    return;
  }
  if (internalState.homeTeamId === internalState.awayTeamId) {
    alert('Home and away teams must be different');
    return;
  }
  if (internalState.homeScore < 0 || internalState.awayScore < 0) {
    alert('Scores must be non-negative');
    return;
  }
  if (internalState.homeScore > 7 || internalState.awayScore > 7) {
    alert('Scores must be less than or equal to 7');
    return;
  }
  if (internalState.date === '') {
    alert('Date is required');
    return;
  }
  emit('submit', internalState);
};
</script>
