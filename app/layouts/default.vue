<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
    <LayoutAppHeader />
    <main class="container mx-auto grow px-4 py-8">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
