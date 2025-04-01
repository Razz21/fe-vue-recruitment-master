<template>
  <td class="whitespace-nowrap" :class="[size === 'lg' ? 'px-6 py-4' : 'px-4 py-3']">
    <slot>
      <div class="text-sm font-medium text-gray-900 dark:text-white">
        {{ label }}
      </div>
    </slot>
  </td>
</template>

<script setup lang="ts">
defineProps<{
  label?: string | number;
  size?: 'base' | 'lg';
}>();
</script>
