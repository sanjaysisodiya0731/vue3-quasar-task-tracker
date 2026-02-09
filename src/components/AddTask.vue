<template>
  <div class="q-mb-md">
    <q-input v-model="taskTitle" label="Enter new task" filled @keyup.enter="add" />

    <q-btn label="Add Task" color="primary" class="full-width q-mt-sm" @click="add" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from 'src/stores/taskStore';

const store = useTaskStore();
const taskTitle = ref('');

function add() {
  if (taskTitle.value.trim()) {
    store.addTask(taskTitle.value);
    taskTitle.value = '';
  }
}
</script>
