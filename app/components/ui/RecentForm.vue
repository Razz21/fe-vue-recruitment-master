<template>
  <span class="flex items-center justify-center text-white font-bold rounded-full" :class="[{
    'bg-green-500': value === 'W',
    'bg-red-500': value === 'L',
    'bg-yellow-500': value === 'D'
  }, size === 'lg' ? 'w-10 h-10 text-sm' : 'w-6 h-6 text-xs']">
    {{ value }}
  </span>
</template>

<script setup lang="ts">
import type { MatchResult } from '~/types';

defineProps<{
  value: MatchResult;
  size?: 'base' | 'lg'
}>();
</script>
