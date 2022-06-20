<template>
    <v-list
    class="pt-0"
    flat
  >
    <todo-task 
        v-for="task in $store.state.tasks"
        :key="task.id"
        :task="task"
    />
  </v-list>

</template>

<script>
// import TodoTaskMenuVue from './TodoTaskMenu.vue';
import TodoTasks from './TodoTasks.vue';

export default {
    name: "TodoAppList",

    data() {
        return {
            dialogs: {
                delete: false
            },
        }
    },
  
components: {
    "todo-task": TodoTasks
    // "todo-dialog-delete": TodoDialogDelete,
    // "todo-task-menu": TodoTaskMenuVue
  },
};

</script>


