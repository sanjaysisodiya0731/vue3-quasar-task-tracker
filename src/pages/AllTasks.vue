<template>
  <div class="q-pa-md" style="max-width: 500px; margin: auto">
    <h5 class="text-center q-mb-md">Task Tracker</h5>

    <NavTabs />

    <AddTask />

    <div class="text-grey q-mb-sm">Tasks remaining: {{ store.pendingCount }}</div>

    <TaskList :tasks="store.tasks" />
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from 'src/stores/taskStore';
import TaskList from 'src/components/TaskList.vue';
import NavTabs from 'src/components/NavTabs.vue';
import AddTask from 'src/components/AddTask.vue';

const store = useTaskStore();
</script>
