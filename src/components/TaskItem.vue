<template>
  <q-item>
    <!-- Checkbox -->
    <q-item-section avatar>
      <q-checkbox :model-value="task.completed" @update:model-value="$emit('toggle', task.id)" />
    </q-item-section>

    <!-- Title / Edit Input -->
    <q-item-section :class="{ 'text-strike text-grey': task.completed }">
      <div v-if="!isEditing">
        {{ task.title }}
      </div>

      <q-input v-else v-model="editedTitle" dense autofocus />
    </q-item-section>

    <!-- Actions -->
    <q-item-section side>
      <!-- Edit button -->
      <q-btn v-if="!isEditing" icon="edit" flat round color="primary" @click="startEdit" />

      <!-- Save button -->
      <q-btn v-if="isEditing" icon="check" flat round color="positive" @click="saveEdit" />

      <!-- Delete button -->
      <q-btn icon="delete" flat round color="negative" @click="$emit('delete', task.id)" />
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Task } from 'src/stores/taskStore';

const props = defineProps<{
  task: Task;
}>();

const emit = defineEmits(['toggle', 'delete', 'edit']);

const isEditing = ref(false);
const editedTitle = ref('');

const startEdit = () => {
  editedTitle.value = props.task.title;
  isEditing.value = true;
};

const saveEdit = () => {
  emit('edit', props.task.id, editedTitle.value);
  isEditing.value = false;
};
</script>
