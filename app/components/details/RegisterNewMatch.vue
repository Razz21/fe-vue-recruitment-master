<template>
  <div class="flex justify-end items-center mb-4">
    <UiActionButton @click="reveal">Add New Match</UiActionButton>

    <LazyDetailsCreateMatchModal v-if="isRevealed" @cancel="cancel" @submit="confirm" />
  </div>
</template>

<script setup lang="ts">
import { useConfirmDialog } from '@vueuse/core';

const { isRevealed, reveal, cancel, confirm, onConfirm } = useConfirmDialog()
const createMatch = useCreateMatch()

onConfirm((data) => {
  createMatch.mutate(data)
})
</script>
