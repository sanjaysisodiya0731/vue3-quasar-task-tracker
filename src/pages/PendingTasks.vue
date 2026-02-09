<template>
  <div class="q-pa-md" style="max-width: 500px; margin: auto">
    <NavTabs />

    <AddTask />

    <TaskList :tasks="store.tasks.filter((task) => !task.completed)" />
  </div>
</template>

<script setup lang="ts">
import { useTaskStore } from 'src/stores/taskStore';
import TaskList from 'src/components/TaskList.vue';
import NavTabs from 'src/components/NavTabs.vue';
import AddTask from 'src/components/AddTask.vue';

const store = useTaskStore();
</script>
