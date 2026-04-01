# Task Tracker App (Quasar + Vue 3)

This is a simple Task Tracker single-page application built using the Quasar Framework and Vue 3 Composition API.

---

## 🚀 Tech Stack Used

- Quasar Framework
- Vue 3 (Composition API)
- TypeScript
- Pinia (State Management)
- Vue Router
- SCSS
- Quasar LocalStorage Plugin

---

## ✨ Features

- Add new tasks (task name required)
- Mark tasks as completed or pending
- Delete tasks
- Edit task
- Update task
- Filter tasks using routes:
  - /all
  - /completed
  - /pending
- Display number of pending tasks
- Persist tasks using localStorage
- Clean UI using Quasar components

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── AddTask.vue
│   ├── TaskItem.vue
│   ├── TaskList.vue
│   └── NavTabs.vue
│
├── pages/
│   ├── AllTasks.vue
│   ├── CompletedTasks.vue
│   └── PendingTasks.vue
│
├── stores/
│   └── taskStore.ts
│
└── router/
    └── routes.ts
```

---

## ⚙️ Setup Instructions

```bash
npm install
quasar dev
```

## Screenshots

### All Tasks & Add Task

![All Task | Add Task](screenshots/all_task_list.png)

### Complited Task

![Complited Task List](screenshots/complited_tasks_list.png)

### Pending Task

![Pending Task List](screenshots/pending_tasks_list.png)

### Complited Marked Task

![Complited Task List](screenshots/task_marked_complited.png)
