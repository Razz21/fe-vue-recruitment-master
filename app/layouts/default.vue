<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
    <LayoutAppHeader />
    <main class="container mx-auto grow px-4 py-8">
      <UiLoader v-if="isLoading" size="lg" />
      <slot v-else />
    </main>
    <LayoutAppFooter />
  </div>
</template>

<script setup lang="ts">
const store = useTeamsStore()
const { isLoading } = storeToRefs(useTeamsStore())

onMounted(store.fetchTeams)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

:root {
  font-family: 'Inter', sans-serif;
  color-scheme: normal;
}
</style>
