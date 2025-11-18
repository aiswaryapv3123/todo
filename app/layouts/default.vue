<template>
  <div class="flex w-full h-screen text-gray-700 font-mono">
    <div class="bg-gray-200 w-80 h-full">
      <sidebarView />
    </div>
    <div class="bg-gray-50 w-full h-full p-10 overflow-y-auto">
      <NuxtPage />
    </div>
  </div>
</template>
<script setup lang="ts">
import sidebarView from '~/pages/components/sidebar-view.vue';
</script>