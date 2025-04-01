<template>
  <div class="p-4 bg-blue-50 dark:bg-blue-900 border-b border-blue-100 dark:border-blue-800">
    <div class="flex justify-between items-center">
      <h2 class="text-lg font-semibold text-blue-800 dark:text-blue-200">
        <span class="mr-2">⭐</span> {{ teamName }} - Recent Form
      </h2>
      <UiActionButton @click="$emit('select-team')">View Full Details</UiActionButton>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  teamName: string;
}>()

defineEmits<{
  (e: 'select-team'): void;
}>();

</script>
