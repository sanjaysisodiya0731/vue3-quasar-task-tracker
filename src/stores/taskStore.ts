import { defineStore } from 'pinia';
import { LocalStorage } from 'quasar';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: LocalStorage.getItem<Task[]>('tasks') || [],
  }),

  getters: {
    pendingCount: (state) => state.tasks.filter((task) => !task.completed).length,
  },

  actions: {
    addTask(title: string) {
      this.tasks.push({
        id: Date.now(),
        title,
        completed: false,
      });
      LocalStorage.set('tasks', this.tasks);
    },

    toggleTask(id: number) {
      const task = this.tasks.find((t) => t.id === id);
      if (task) {
        task.completed = !task.completed;
        LocalStorage.set('tasks', this.tasks);
      }
    },

    deleteTask(id: number) {
      this.tasks = this.tasks.filter((t) => t.id !== id);
      LocalStorage.set('tasks', this.tasks);
    },
  },
});
