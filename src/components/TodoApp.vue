<template>
  <div class="home">
    <todo-app-field />

    <todo-app-list v-if="$store.state.tasks.length" />
     <div v-else class="noTask">
        <v-icon size="100" color="primary">mdi-check</v-icon>
        <div class="text-h5 primary--text">No Task</div>
    </div>
  </div>
</template>

<script>
import TodoAppField from "@/components/TodoAppField";
import TodoAppList from "@/components/TodoAppList";
export default {
  name: "TodoApp",

  components: {
    "todo-app-field": TodoAppField,
    "todo-app-list": TodoAppList,
  },
};
</script>

<style lang="sass">
.noTask
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    opacity: 0.5
</style>


