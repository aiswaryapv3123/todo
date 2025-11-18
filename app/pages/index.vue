<!-- Dashboard View -->
<template>
  <div>
    <HeaderView />
    <todoList />
  </div>
</template>
<script setup lang="ts">
import HeaderView from './components/header-view.vue';
import todoList from './components/todo-list.vue';
</script>