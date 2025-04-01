<template>
  <th scope="col"
    class="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
    :class="[size === 'lg' ? 'px-6' : 'px-4']">
    <slot />
  </th>
</template>

<script setup lang="ts">
defineProps<{
  size?: 'base' | 'lg';
}>();
</script>
