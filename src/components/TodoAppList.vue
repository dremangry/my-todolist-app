<template>
<div class="listOfTask">
    <div class="child">
        <v-list
        class=" pt-0"
        flat
        >
        <todo-task 
            v-for="task in $store.state.tasks"
            :key="task.id"
            :task="task"
        />
      </v-list>
    </div>
</div>

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

<style lang="sass">
.listOfTask
    display: flex
    align-items: center
    justify-content: center

.child
    border: 2px solid #1976D2
    padding: 10px
    width: 98%
    border-radius: 10px
    box-shadow: -0.6rem 0.6rem 0 rgba(29, 30, 28, 0.2)
    transition: 0.3s 
    
.child:hover
    padding: 20px
</style>


