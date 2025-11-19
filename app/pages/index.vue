<!-- Dashboard View -->
<template>
  <div class="p-10">
    <HeaderView class="sticky"/>
    <todoList />
  </div>
</template>
<script setup lang="ts">
import HeaderView from './components/header-view.vue';
import todoList from './components/todo-list.vue';
</script>