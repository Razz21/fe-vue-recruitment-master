<template>
  <UiModal>
    <UiModalHeader>Edit Team Details</UiModalHeader>
    <div class="space-y-4 mb-6">
      <UiInputGroup v-model="internalState.coach" class="w-full" label="Coach" type="text" placeholder="Coach name" />
      <UiInputGroup v-model="internalState.stadium" class="w-full" label="Stadium" type="text"
        placeholder="Stadium name" />
    </div>
    <UiModalActions>
      <UiModalCancel @click="handleCancel">Cancel</UiModalCancel>
      <UiModalSubmit @click="handleSubmit">Save Details</UiModalSubmit>
    </UiModalActions>
  </UiModal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  state: {
    coach: string;
    stadium: string;
  }
}>();

const internalState = ref({ ...props.state });

const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'submit', details: { coach: string; stadium: string }): void;
}>();

const handleCancel = () => {
  emit('cancel');
};
const handleSubmit = () => {
  emit('submit', internalState.value);
};

</script>
