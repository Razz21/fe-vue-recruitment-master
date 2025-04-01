<template>
  <div class="flex justify-center items-center" :class="[size === 'lg' ? 'py-20' : 'py-8']">
    <div class="animate-spin rounded-full border-t-2 border-b-2 border-blue-500"
      :class="[size === 'lg' ? 'h-12 w-12' : 'h-8 w-8']" />
  </div>
</template>

<script setup lang="ts">

defineProps<{
  size?: 'base' | 'lg'
}>();

</script>
