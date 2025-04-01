<template>
  <!-- Teams Table View (moved above favorite team section) -->
  <ListTeamsTable />
  <!-- Favorite Team Section (only shown when a favorite team is selected) -->
  <LazyListFavoriteTeam v-if="favoriteTeam" />
</template>

<script setup lang="ts">
import { useFavoriteTeam } from '~/composables/useFavoriteTeam';
const { favoriteTeam } = toRefs(useFavoriteTeam())
</script>
