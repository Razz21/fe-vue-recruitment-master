<template>
  <UiModal>
    <UiModalHeader>Edit Match Result</UiModalHeader>
    <div class="mb-6">
      <div class="flex items-center justify-between mb-4">
        <div class="text-center">
          <p class="font-semibold dark:text-white">{{ state?.homeTeam }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">(Home)</p>
        </div>

        <div class="text-center">
          <p class="font-semibold dark:text-white">vs</p>
        </div>

        <div class="text-center">
          <p class="font-semibold dark:text-white">{{ state?.awayTeam }}</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">(Away)</p>
        </div>
      </div>

      <div class="flex items-center justify-center space-x-4">
        <UiInputGroup v-model.number="internalState.homeScore" class="w-16" label="Home Score" type="number" min="0" max="7" />
        <div class="text-xl font-bold dark:text-white">-</div>
        <UiInputGroup v-model.number="internalState.awayScore" class="w-16" label="Away Score" type="number" min="0" max="7"/>
      </div>
    </div>
    <UiModalActions>
      <UiModalCancel @click="handleCancel">Cancel</UiModalCancel>
      <UiModalSubmit @click="handleSubmit">Save Result</UiModalSubmit>
    </UiModalActions>
  </UiModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  state: {
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
  }
}>();

const internalState = ref({ ...props.state });

const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'submit', details: {
    homeScore: number;
    awayScore: number;
  }): void;
}>();

const handleCancel = () => {
  emit('cancel');
};
const handleSubmit = () => {
  emit('submit', internalState.value);
};

</script>
