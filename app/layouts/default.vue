<template>
  <div class="flex w-full h-screen text-red-700 font-mono">
    <div class="bg-red-200 w-80 h-full">
      <sidebarView />
    </div>
    <div class="bg-red-100 w-full h-full overflow-y-auto">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
import sidebarView from '~/pages/components/sidebar-view.vue';
</script>