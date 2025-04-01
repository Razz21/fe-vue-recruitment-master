<template>
  <UiTableHeaderCell :size="size" class="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
    <div class="flex items-center space-x-1">
      <span>
        <slot />
      </span>
      <svg v-if="active" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" :class="{ 'rotate-180': !ascending }">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
      </svg>
    </div>
  </UiTableHeaderCell>
</template>

<script setup lang="ts">

defineProps<{
  active: boolean;
  ascending: boolean;
  size?: 'base' | 'lg';
}>()
</script>
