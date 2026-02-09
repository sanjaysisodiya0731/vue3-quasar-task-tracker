<template>
  <q-list bordered separator>
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      @toggle="store.toggleTask"
      @delete="store.deleteTask"
    />

    <div v-if="tasks.length === 0" class="text-center text-grey q-pa-md">No tasks found</div>
  </q-list>
</template>

<script setup lang="ts">
import type { Task } from 'src/stores/taskStore';
import TaskItem from 'src/components/TaskItem.vue';
import { useTaskStore } from 'src/stores/taskStore';

defineProps<{
  tasks: Task[];
}>();

const store = useTaskStore();
</script>
