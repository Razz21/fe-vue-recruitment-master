<template>
  <div>
    <h3 class="text-xl font-semibold mb-4 dark:text-white">Team Stats</h3>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-for="(stat, index) in stats" :key="index" class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
        <h4 class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase mb-2">
          {{ stat.label }}
        </h4>
        <p class="text-2xl font-bold text-gray-900 dark:text-white">
          {{ stat.value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  stats: { label: string; value: number }[]
}>()
</script>
