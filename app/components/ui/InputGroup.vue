<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{{ label }}</label>
    <input v-bind="$attrs" :value="modelValue"
      class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
      @input="handleChange">
  </div>
</template>

<script setup lang="ts">

defineProps<{
  label: string;
  modelValue: unknown;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: unknown): void;
}>();

function handleChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

defineOptions({
  inheritAttrs: false
})

</script>
