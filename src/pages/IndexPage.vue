<template>
  <div class="q-pa-md" style="max-width: 500px; margin: auto">
    <h5 class="text-center q-mb-md">Task Tracker</h5>

    <!-- Add Task -->
    <q-input v-model="newTask" label="Enter task" filled @keyup.enter="addTask" />

    <q-btn label="Add Task" color="primary" class="full-width q-mt-sm" @click="addTask" />

    <!-- Remaining Tasks -->
    <div class="text-grey q-mt-md">Tasks remaining: {{ store.pendingCount }}</div>

    <!-- Task List -->
    <q-list bordered separator class="q-mt-md">
      <TaskItem
        v-for="task in store.tasks"
        :key="task.id"
        :task="task"
        @toggle="store.toggleTask"
        @delete="store.deleteTask"
      />
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTaskStore } from 'src/stores/taskStore';
import TaskItem from 'src/components/TaskItem.vue';

const store = useTaskStore();
const newTask = ref('');

function addTask() {
  if (newTask.value.trim()) {
    store.addTask(newTask.value);
    newTask.value = '';
  }
}
</script>
