<template>
  <q-item>
    <q-item-section avatar>
      <q-checkbox :model-value="task.completed" @update:model-value="$emit('toggle', task.id)" />
    </q-item-section>

    <q-item-section :class="{ 'text-strike text-grey': task.completed }">
      {{ task.title }}
    </q-item-section>

    <q-item-section side>
      <q-btn icon="delete" flat round color="negative" @click="$emit('delete', task.id)" />
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import type { Task } from 'src/stores/taskStore';

defineProps<{
  task: Task;
}>();

defineEmits(['toggle', 'delete']);
</script>
