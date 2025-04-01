<template>
  <div class="p-4 bg-blue-50 dark:bg-blue-900 border-b border-blue-100 dark:border-blue-800">
    <div class="flex justify-between items-center">
      <h2 class="text-lg font-semibold text-blue-800 dark:text-blue-200">
        <span class="mr-2">⭐</span> {{ teamName }} - Recent Form
      </h2>
      <button class="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
        @click="$emit('select-team')">
        View Full Details
      </button>
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
